function detectLanguage() {

  const savedLanguage = localStorage.getItem('language');

  if (savedLanguage) {
    return savedLanguage;
  }

  const browserLanguages = navigator.languages || [navigator.language];

  for (const lang of browserLanguages) {

    const short = lang.toLowerCase().split('-')[0];

    if ([
      'ru',
      'uk',
      'be',
      'kk'
    ].includes(short)) {
      return 'ru';
    }

    if (PRODUCT.supportedLanguages.includes(short)) {
      return short;
    }

  }

  return PRODUCT.defaultLanguage;

}

const CURRENT_LANGUAGE = detectLanguage();

localStorage.setItem('language', CURRENT_LANGUAGE);