import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

function isGithubDomain() {
  const { host } = window.location;

  return host.includes('github.io');
}

function getLoadPath() {
  const { pathname } = window.location;

  let urlPath = '/';

  if (isGithubDomain()) {
    urlPath = pathname;
  }

  return `${urlPath}locales/{{lng}}/{{ns}}.json`;
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    whiteList: ['en', 'de'],
    debug: true,
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie'],
    },
    backend: {
      loadPath: getLoadPath(),
    },
  });

export default i18n;
