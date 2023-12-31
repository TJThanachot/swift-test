import { Card, List } from "antd";
import "../App.scss";
import { useNavigate } from "react-router-dom";
import ChangeLangBar from "../compernent/changeLangBar";
import { useTranslation } from "react-i18next";

function Home() {
  const { t, i18n } = useTranslation();
  const nav = useNavigate();
  const data: any[] = [
    { content: "Layout & Style", title: "Test 1" },
    { content: "Connect API", title: "Test 2" },
    { content: "Form & Table", title: "Test 3" },
  ];

  return (
    <div>
      <ChangeLangBar />
      <List
        className="container"
        grid={{
          gutter: 16,
          xs: 1,
          sm: 3,
          md: 3,
          lg: 3,
          xl: 3,
          xxl: 3,
        }}
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item className="items">
            <Card
              key={index}
              hoverable
              title={t(item.title)}
              onClick={() => {
                nav(`test${index + 1}`);
              }}
            >
              {t(item.content)}
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}

export default Home;
