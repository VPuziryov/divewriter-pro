function applyTranslations(language) {

  if (
    !window.translations ||
    !window.translations[language]
  ) {
    return;
  }

  const dictionary = window.translations[language];

  document
    .querySelectorAll('[data-i18n]')
    .forEach((element) => {

      const key = element.getAttribute('data-i18n');

      if (dictionary[key]) {
        element.innerHTML = dictionary[key];
      }

    });

}

function switchLanguage(language) {

  if (!window.translations[language]) {
    language = PRODUCT.defaultLanguage;
  }

  localStorage.setItem('language', language);

  applyTranslations(language);

  document.documentElement.lang = language;

}

window.addEventListener('DOMContentLoaded', () => {

  switchLanguage(CURRENT_LANGUAGE);

});
document
  .querySelectorAll('[data-lang]')
  .forEach((button) => {

    button.addEventListener('click', () => {

      const selectedLanguage =
        button.getAttribute('data-lang');

      switchLanguage(selectedLanguage);

    });

});