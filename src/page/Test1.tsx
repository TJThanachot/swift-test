import "../scss/Test1.scss";
import { Card, Row, Col, Divider } from "antd";
import { useState } from "react";
import ChangeLangBar from "../compernent/changeLangBar";
import { useTranslation } from "react-i18next";

function Test1() {
  const { t, i18n } = useTranslation();
  const [reverse, setReverse] = useState(false);
  const [shape1, setShape1] = useState([
    ["square", "circle", "oval"],
    ["trapezoid", "rectangle", "parallelogram"],
  ]);

  //   console.log(shape1);
  function randomShape1(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
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
                const newFinalShape1 = [...shape1];
                //-----------------------------------------------------
                const newShape1 = shape1[0].map((item, index, arr) => {
                  return arr[index + 1];
                });
                newShape1.splice(shape1[0].length - 1, 1, shape1[1][0]);
                //-----------------------------------------------------
                const newShape2 = shape1[1].map((item, index, arr) => {
                  return arr[index + 1];
                });
                newShape2.splice(shape1[1].length - 1, 1, shape1[0][0]);

                newFinalShape1.splice(0, 2, newShape1, newShape2);
                setShape1(newFinalShape1);
              }}
            >
              <div className="triangle-left"></div>
              <div className="moveShape">{t("Move shape")}</div>
            </Card>
          </Col>
          <Col span={10} className="col">
            <Card
              hoverable
              className="test1Card"
              onClick={() => {
                if (!reverse) {
                  setReverse(true);
                } else {
                  setReverse(false);
                }
              }}
            >
              <div className="middleButton">
                <div className="triangle-up"></div>
                <div className="triangle-down"></div>
              </div>
              <div className="moveShape middle">{t("Move position")}</div>
            </Card>
          </Col>
          <Col span={5} className="col">
            <Card
              hoverable
              className="test1Card"
              onClick={() => {
                const newFinalShape1 = [...shape1];
                //-----------------------------------------------------
                const newShape1 = shape1[0].map((item, index, arr) => {
                  return arr[index - 1];
                });
                newShape1.splice(0, 1, shape1[1][shape1[1].length - 1]);
                //-----------------------------------------------------
                const newShape2 = shape1[1].map((item, index, arr) => {
                  return arr[index - 1];
                });
                newShape2.splice(0, 1, shape1[0][shape1[0].length - 1]);

                newFinalShape1.splice(0, 2, newShape1, newShape2);
                setShape1(newFinalShape1);
              }}
            >
              <div className="triangle-right"></div>
              <div className="moveShape">{t("Move shape")}</div>
            </Card>
          </Col>
        </Row>

        {/* feature change button ---------------------------------------------------- */}

        <Row
          gutter={[16, 16]}
          className="testContainer2"
          style={{
            flexDirection: reverse ? "column-reverse" : "column",
          }}
        >
          <div className="box1">
            {shape1[0].map((item, index) => {
              return (
                <Col
                  key={index}
                  span={5}
                  className="col"
                  offset={index === 0 ? 7 : 0}
                >
                  <Card
                    hoverable
                    className="test1Card shape"
                    onClick={() => {
                      // console.log(shape1);
                      const newShape1 = [...shape1];
                      const splitNewShape1 = newShape1.flat();
                      randomShape1(splitNewShape1);
                      const result = [];
                      for (let i of splitNewShape1) {
                        result.push(splitNewShape1.splice(0, shape1[0].length));
                      }
                      // console.log(result);
                      setShape1(result);
                    }}
                  >
                    <div className={`${item} shape`}></div>
                  </Card>
                </Col>
              );
            })}
          </div>
          <div className="box2">
            {shape1[1].map((item, index) => {
              return (
                <Col
                  key={index}
                  span={5}
                  className="col"
                  offset={index === 0 ? 4 : 0}
                >
                  <Card
                    hoverable
                    className="test1Card shape"
                    onClick={() => {
                      const newShape1 = [...shape1];
                      randomShape1(newShape1);
                      setShape1(newShape1);
                    }}
                  >
                    <div className={`${item} shape`}></div>
                  </Card>
                </Col>
              );
            })}
          </div>
        </Row>
      </div>
    </div>
  );
}

export default Test1;
