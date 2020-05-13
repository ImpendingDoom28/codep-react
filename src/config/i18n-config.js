import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
// not like to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
  // detect user language
  .use(LanguageDetector)
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    parse: function (data) {
      console.log("DATA", data);
    },
    ns: ["loginPage", "common", "registerPage", "adminPage", "sandboxPage"],
    defaultNs: "common",
    fallbackLng: "en",
    backend: {
      // allow cross domain requests
      crossDomain: true,
      loadPath: "http://localhost:8080/static/locales/{{lng}}/{{ns}}.json",
      addPath: "http://localhost:8080/static/locales/{{lng}}/{{ns}}",
    },
    detection: {
      order: ["querystring", "cookie"],
      lookupQueryString: "lng",
      lookupCookie: "i18nextLng",
      exludeCacheFor: ["cookie"],
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
