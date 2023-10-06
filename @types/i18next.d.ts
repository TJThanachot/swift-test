// import the original type declarations
import "i18next";
// import all namespaces (for the default language, only)
import en from "../public/locales/en/en.json";
import th from "../public/locales/th/th.json";

declare module "i18next" {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: "en";
    // custom resources type
    resources: {
      en: typeof en;
      th: typeof th;
    };
    // other
  }
}
