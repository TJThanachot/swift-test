import ChangeLangBar from "../compernent/changeLangBar";
import FormSubmit from "../compernent/FormSubmit";
import FormTable from "../compernent/FormTable";
import { useTranslation } from "react-i18next";
import "../scss/Test3.scss";
function Test3() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <ChangeLangBar />
      <h1 style={{ paddingLeft: "4rem" }}>{t("Form & Table")}</h1>
      <FormSubmit />
      <FormTable />
    </div>
  );
}

export default Test3;
