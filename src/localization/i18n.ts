import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "./en.json";
import uaTranslation from "./ua.json";
import store from "../store/store";
import { loadTranslations } from "../store/localization-slice";

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation
    },
    ua: {
      translation: uaTranslation
    }
  },
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false,
  }
  
});

const language = store.getState().language.language;
const resources = i18n.getResourceBundle(language, 'translation');
store.dispatch(loadTranslations({ language, namespace: 'translation', translations: JSON.stringify(resources) }));

export default i18n;