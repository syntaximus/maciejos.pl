import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '../assets/locales/en.json'
import pl from '../assets/locales/pl.json'

export const resources = {
    en: en,
    pl: pl
};

const languageDetectionOptions = {
    order: [ 'cookie', 'localStorage', 'querystring','sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],

    lookupQuerystring: 'lng',
    lookupCookie: 'language',
    lookupLocalStorage: 'language',
    lookupSessionStorage: 'language',

    // cache user language
    caches: ['localStorage'],
    excludeCacheFor: ['cimode'],
}

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'pl',
        interpolation: {
            escapeValue: false
        },
        resources,
        detection: languageDetectionOptions
    }); 

        
export default i18next;