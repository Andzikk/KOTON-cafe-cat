const texts = {
    'pl': 'Witaj swiecie',
    'cat': 'Hola World'
};

function changeLanguage(language) {
    const textElement = document.getElementById('text');

    textElement.textContent = text[language];
}