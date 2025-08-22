const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

const currentTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', currentTheme);

function updateButtonState() {
    if (isHtmlElement(themeToggle)) {
        const theme = html.getAttribute('data-theme');
        if (theme === 'light') {
            themeToggle.classList.add('light-theme');
        } else {
            themeToggle.classList.remove('light-theme');
        }
    }
}

function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateButtonState();
}

function isHtmlElement(el: unknown): el is HTMLElement {
    return el instanceof HTMLElement;
}

if (isHtmlElement(themeToggle)) {
    themeToggle.addEventListener('click', toggleTheme);
}


updateButtonState();