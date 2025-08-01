import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import vi from "./locales/vi.json";

const savedLanguage = typeof window !== "undefined" && localStorage.getItem("language")
    ? localStorage.getItem("language")
    : "en";


const resources = {
  en: { translation: en },
  vi: { translation: vi },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage ?? "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;