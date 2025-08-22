import { Plugin, type HtmlTagDescriptor } from 'vite';

function escapeRegex(string) {
    return string.replace(/[/\-\\^$*+?.()|[\]{}]/g, '\\$&');
}

export function cssInline(): Plugin {
    return {
        name: 'vite-plugin-css-inline',
        apply: 'build',
        transformIndexHtml: {
            order: 'post',
            handler: (html, ctx) => {
                const tags: HtmlTagDescriptor[] = [];
                const bundle = ctx.bundle;
                if (bundle == null) {
                    return [];
                }

                Object.values(bundle)
                    .filter((output) => output.fileName.endsWith('.css'))
                    .forEach((output) => {
                        if (output.type === 'asset' && typeof output.source === 'string') {
                            tags.push({
                                tag: 'style',
                                children: output.source,
                                injectTo: 'head',
                            });
                            const fileNameRegExp = RegExp(
                                `<link.*href=".*${escapeRegex(output.fileName)}".*\\/?>`,
                                'gmi',
                            );
                            html = html.replaceAll(fileNameRegExp, '');
                        }
                    });

                return { html, tags };
            },
        },
    };
}
