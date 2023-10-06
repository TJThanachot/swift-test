import { Dropdown, Button, Space, message } from "antd";
import { useTranslation } from "react-i18next";
function ChangeLangBar() {
  const { t, i18n } = useTranslation();
  //   console.log(i18n.language);
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
  const handleMenuClick = (e: any) => {
    message.success("You have changed language.");
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <div style={{ paddingLeft: "90%", paddingTop: "2rem" }}>
      <Dropdown menu={menuProps}>
        <Button>
          <Space>{i18n.language === "en" ? "EN" : "ไทย"}</Space>
        </Button>
      </Dropdown>
    </div>
  );
}

export default ChangeLangBar;
