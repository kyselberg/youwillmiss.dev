import { minify, Options } from 'html-minifier-terser'
import { Plugin } from 'vite'

export function htmlMinifierPlugin(options?: Options): Plugin {
  return {
    name: 'vite-plugin-minify',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        return minify(html, {
          removeComments: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: false,
          removeEmptyAttributes: true,
          minifyCSS: true,
          minifyJS: true,
          minifyURLs: true,
          ...options,
        })
      },
    },
  }
}
