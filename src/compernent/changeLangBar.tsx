import { Dropdown, Button, Space, message } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function ChangeLangBar() {
  const nav = useNavigate();
  const { t, i18n } = useTranslation();
  //   console.log(i18n.language);

  // list items -------------------------------------------------------------------
  const items: { label: string; key: string }[] = [
    {
      label: i18n.language === "en" ? "EN" : "อังกฤษ",
      key: "1",
    },
    {
      label: i18n.language === "th" ? "ไทย" : "TH",
      key: "2",
    },
  ];

  // handler to change language -----------------------------------------------
  const handleMenuClick = (e: any) => {
    // console.log(e.key);
    if (e.key === "1") {
      i18n.changeLanguage("en");
      message.success("You have changed language to English.");
    } else {
      i18n.changeLanguage("th");
      message.success("คุณเปลี่ยนเป็นภาษาไทยแล้ว");
    }
  };

  // list menu -----------------------------------------------------------------
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    // inline style because there is a little bit styling----------------------
    <div
      style={{
        width: "90%",
        display: "flex",
        justifyContent: "space-between",
        marginLeft: "4rem",
        marginTop: "2rem",
      }}
    >
      <Button
        onClick={() => {
          nav("/");
        }}
      >
        {t("Back to home page")}
      </Button>
      <label style={{ width: "5rem", gap: "1rem", display: "flex" }}>
        <Dropdown menu={menuProps}>
          <Button>
            <Space>{i18n.language === "en" ? "EN" : "ไทย"}</Space>
          </Button>
        </Dropdown>
        <GlobalOutlined style={{ fontSize: "1.6rem" }} />
      </label>
    </div>
  );
}

export default ChangeLangBar;
