const languageSwitch = document.getElementById('language-switch');

languageSwitch.addEventListener('click', () => {
    if (document.documentElement.lang === 'ar') {
        document.documentElement.lang = 'en';
        languageSwitch.textContent = '«·⁄—»Ì…';
    } else {
        document.documentElement.lang = 'ar';
        languageSwitch.textContent = 'English';
    }
});
