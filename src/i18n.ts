import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Layout & Style": "Layout & Style",
      "Back to home page": "Back to home page",
    },
  },
  th: {
    translation: {
      "Layout & Style": "การจัดการหน้าเว็บ",
      "Back to home page": "กลับสุ่หน้าหลัก",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
