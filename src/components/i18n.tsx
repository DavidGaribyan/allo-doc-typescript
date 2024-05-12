import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector';
import ru from '../LanguageRu.json';
import en from '../LanguageEn.json';

i18n.use(languageDetector).use(initReactI18next).init({
  fallbackLng: 'ru',
  resources: {
    ru,
    en,
  },
});

export default i18n;
