import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Test 1": "Test 1",
      "Test 2": "Test 2",
      "Test 3": "Test 3",
      "Connect API": "Connect API",
      "Form & Table": "Form & Table",
      "Layout & Style": "Layout & Style",
      "Back to home page": "Back to home page",
    },
  },
  th: {
    translation: {
      "Test 1": "แบบทดสอบที่ 1",
      "Test 2": "แบบทดสอบที่ 2",
      "Test 3": "แบบทดสอบที่ 3",
      "Connect API": "การเชื่อมต่อ API",
      "Form & Table": "การจัดการหน้าฟอร์ม",
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
