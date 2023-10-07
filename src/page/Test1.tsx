import "../scss/Test1.scss";
import { Card, Row, Col } from "antd";
import { useState } from "react";
import ChangeLangBar from "../compernent/changeLangBar";
import { useTranslation } from "react-i18next";

function Test1() {
  const { t, i18n } = useTranslation();
  const [shape, setShape] = useState([
    "square",
    "circle",
    "oval",
    "trapezoid",
    "rectangle",
    "parallelogram",
  ]);

  //   console.log(shape);
  function randomShape(arr: string[]): string[] {
    for (let i = arr.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }

    return arr;
  }

  return (
    <div>
      <ChangeLangBar />
      <div className="testContainer">
        <h1>{t("Layout & Style")}</h1>

        {/* button ----------------------------------------------------------- */}
        <Row gutter={16} className="testContainer1">
          <Col span={5} className="col">
            <Card
              hoverable
              className="test1Card"
              onClick={() => {
                const newShape = shape.map((item, index, arr) => {
                  return arr[index + 1];
                });
                newShape.splice(shape.length - 1, 1, shape[0]);
                setShape(newShape);
              }}
            >
              <div className="triangle-left"></div>
            </Card>
          </Col>
          <Col span={10} className="col">
            <Card
              hoverable
              className="test1Card"
              onClick={() => {
                const newShape = shape.map((item, index, arr) => {
                  if (index >= 3) {
                    return arr[index - 3];
                  }
                  return arr[index + 3];
                });
                setShape(newShape);
              }}
            >
              <div className="middleButton">
                <div className="triangle-up"></div>
                <div className="triangle-down"></div>
              </div>
            </Card>
          </Col>
          <Col span={5} className="col">
            <Card
              hoverable
              className="test1Card"
              onClick={() => {
                const newShape = shape.map((item, index, arr) => {
                  return arr[index - 1];
                });
                newShape.splice(0, 1, shape[shape.length - 1]);
                setShape(newShape);
              }}
            >
              <div className="triangle-right"></div>
            </Card>
          </Col>
        </Row>

        {/* feature change button ---------------------------------------------------- */}

        <Row gutter={[16, 16]} className="testContainer1">
          {shape.map((item, index) => {
            return (
              <Col
                key={index}
                span={5}
                className="col"
                offset={index === 0 ? 5 : 0}
              >
                <Card
                  hoverable
                  className="test1Card shape"
                  onClick={() => {
                    const newShape = [...shape];
                    randomShape(newShape);
                    setShape(newShape);
                  }}
                >
                  <div className={`${item} shape`}></div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default Test1;
