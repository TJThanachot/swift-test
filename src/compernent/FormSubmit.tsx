import {
  Button,
  Form,
  Input,
  Select,
  Col,
  Row,
  Radio,
  DatePicker,
  Divider,
} from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useForm from "../hooks/useForm";
import moment from "moment";
import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);
import { useTranslation } from "react-i18next";

function FormSubmit() {
  const { onReset, onFinish } = useForm();

  const { t, i18n } = useTranslation();

  // redux state ---------------------------------------------------------
  const userData = useSelector((state: any) => {
    return state.userDataList;
  });
  const status = useSelector((state: any) => {
    return state.status;
  });
  const userIdNumber = useSelector((state: any) => {
    return state.userIdNumber;
  });
  const userPhoneNumber = useSelector((state: any) => {
    return state.userPhoneNumber;
  });

  // console.log(status);
  // console.log(userData);
  // console.log(userPhoneNumber);

  const { Option } = Select;

  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
  }, [status]);

  return (
    <div className="test3Container">
      <Divider />
      <Form
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        className="test3Form"
        initialValues={
          // initialValues condition ------------------------------------------------------
          status.boolean === false
            ? {
                prefix: null,
                firstname: "",
                lastname: "",
                dateOfBirth: "",
                nationality: null,
                gender: "",
                idNumberInput1: "",
                idNumberInput2: "",
                idNumberInput3: "",
                idNumberInput4: "",
                idNumberInput5: "",
                phoneInput1: "",
                phoneInput2: "",
                passportId: "",
                expectedSalary: "",
              }
            : {
                prefix: userData[status.index].prefix,
                firstname: userData[status.index].firstname,
                lastname: userData[status.index].lastname,

                // need to use dayjs and moment to change format data----------------------
                dateOfBirth: dayjs(
                  moment(userData[status.index].dateOfBirth).format(
                    "DD-MM-YYYY"
                  ),
                  "DD-MM-YYYY"
                ),

                nationality: userData[status.index].nationality,
                gender: userData[status.index].gender,
                idNumberInput1: userIdNumber[0],
                idNumberInput2: userIdNumber[1],
                idNumberInput3: userIdNumber[2],
                idNumberInput4: userIdNumber[3],
                idNumberInput5: userIdNumber[4],
                phone: userPhoneNumber.join("-"),
                phoneInput1: userPhoneNumber[0],
                phoneInput2: userPhoneNumber[1],
                passportId: userData[status.index].passportId,
                expectedSalary: userData[status.index].expectedSalary,
              }
        }
      >
        {/* first row ---------------------------------------------------------- */}

        <Row gutter={16}>
          <Col span={4}>
            <Form.Item
              name="prefix"
              label={t("prefix")}
              rules={[
                { required: true, message: "Please select your prefix!" },
              ]}
            >
              <Select placeholder={t("Select a prefix")}>
                <Option value="Mr.">{t("Mr.")}</Option>
                <Option value="Ms.">{t("Ms.")}</Option>
                <Option value="Mrs.">{t("Mrs.")}</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              name="firstname"
              label={t("first name")}
              rules={[
                {
                  required: true,
                  message: "Please input your first name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              name="lastname"
              label={t("last name")}
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        {/* second row ---------------------------------------------------------- */}

        <Row gutter={16}>
          <Col span={3.5}>
            <Form.Item
              name="dateOfBirth"
              label={t("date of birth")}
              rules={[{ required: true }]}
            >
              {/* date of birth picker here --------------------------------------- */}
              <DatePicker
                format={"DD-MM-YYYY"}
                placeholder={t("date-month-year")}
              />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              name="nationality"
              label={t("nationality")}
              rules={[
                {
                  required: true,
                  message: "Please select your nationality!",
                },
              ]}
            >
              <Select placeholder={t("Select a nationality")}>
                <Option value="Thai">{t("Thai")}</Option>
                <Option value="Britain">{t("Britain")}</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        {/* third row ---------------------------------------------------------- */}

        <Row>
          <Form.Item name="idNumber" label={t("id number")}>
            <Row gutter={16}>
              <Col span={2}>
                <Form.Item name="idNumberInput1" noStyle>
                  <Input />
                </Form.Item>
              </Col>
              -
              <Col>
                <Form.Item name="idNumberInput2" noStyle>
                  <Input />
                </Form.Item>
              </Col>
              -
              <Col>
                <Form.Item name="idNumberInput3" noStyle>
                  <Input />
                </Form.Item>
              </Col>
              -
              <Col span={3}>
                <Form.Item name="idNumberInput4" noStyle>
                  <Input />
                </Form.Item>
              </Col>
              -
              <Col span={2}>
                <Form.Item name="idNumberInput5" noStyle>
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>
        </Row>

        {/* fourth row ---------------------------------------------------------- */}

        <Form.Item
          name="gender"
          label={t("gender")}
          rules={[{ required: true, message: "Please select your gender!" }]}
        >
          <Radio.Group>
            <Radio value="male">{t("male")}</Radio>
            <Radio value="female">{t("female")}</Radio>
            <Radio value="none">{t("none")}</Radio>
          </Radio.Group>
        </Form.Item>

        {/* fifth row ---------------------------------------------------------- */}
        <Row>
          <Form.Item
            name="phone"
            label={t("phone number")}
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Row gutter={16}>
              <Col span={5}>
                <Form.Item name="phoneInput1" noStyle>
                  <Input />
                </Form.Item>
              </Col>
              -
              <Col span={18}>
                <Form.Item name="phoneInput2" noStyle>
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>
        </Row>

        {/* sixth row ---------------------------------------------------------- */}
        <Row gutter={16}>
          <Col span={10}>
            <Form.Item name="passportId" label={t("passport id")}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        {/* seventh row ---------------------------------------------------------- */}

        <Row gutter={16}>
          <Col span={9}>
            <Form.Item
              name="expectedSalary"
              label={t("expected salary")}
              rules={[
                {
                  required: true,
                  message: "Please input your expected salary!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          {/* submit button --------------------------------------------------- */}
          <Col span={7}>
            <Form.Item>
              <Row gutter={16} style={{ width: "40rem" }}>
                <Col offset={10}>
                  <Button htmlType="button" onClick={onReset}>
                    {t("Reset")}
                  </Button>
                </Col>
                <Col>
                  <Button htmlType="submit">
                    {status.boolean ? t("Update") : t("Submit")}
                  </Button>
                </Col>
              </Row>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Divider />
    </div>
  );
}

export default FormSubmit;
