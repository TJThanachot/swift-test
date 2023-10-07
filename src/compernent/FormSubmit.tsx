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

// import { useTranslation } from "react-i18next";
function FormSubmit() {
  // const { t, i18n } = useTranslation();

  const { Option } = Select;

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    values.idNumber = `${values.idNumberInput1}-${values.idNumberInput2}-${values.idNumberInput3}-${values.idNumberInput4}-${values.idNumberInput5}`;
    values.phone = `${values.phoneInput1}-${values.phoneInput2}`;
    values.dateOfBirth = new Date(values.dateOfBirth.$d);

    // delete key values that is not necessary ------------------------------------
    for (let i = 1; i <= 5; i++) {
      const key = `idNumberInput${i}`;
      const key2 = `phoneInput${i}`;
      if (values.hasOwnProperty(key)) {
        delete values[key];
      }
      if (values.hasOwnProperty(key2)) {
        delete values[key2];
      }
    }

    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };
  return (
    <div className="test3Container">
      <Divider />
      <Form
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        className="test3Form"
      >
        {/* first row ---------------------------------------------------------- */}

        <Row gutter={16}>
          <Col span={4}>
            <Form.Item
              name="prefix"
              label="prefix"
              rules={[
                { required: true, message: "Please select your prefix!" },
              ]}
            >
              <Select placeholder="Select a prefix" allowClear>
                <Option value="Mr.">Mr.</Option>
                <Option value="Ms.">Ms.</Option>
                <Option value="Mrs.">Mrs.</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              name="firstname"
              label="first name"
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
              label="last name"
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
              label="date of birth"
              rules={[{ required: true }]}
            >
              <DatePicker />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              name="nationality"
              label="nationality"
              rules={[
                {
                  required: true,
                  message: "Please select your nationality!",
                },
              ]}
            >
              <Select placeholder="Select a nationality" allowClear>
                <Option value="Thai">Thai</Option>
                <Option value="Britain">Britain</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        {/* third row ---------------------------------------------------------- */}

        <Row>
          <Form.Item name="idNumber" label="id numbers">
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
          label="gender"
          rules={[{ required: true, message: "Please select your gender!" }]}
        >
          <Radio.Group>
            <Radio value="male">male</Radio>
            <Radio value="female">female</Radio>
            <Radio value="none">none</Radio>
          </Radio.Group>
        </Form.Item>

        {/* fifth row ---------------------------------------------------------- */}
        <Row>
          <Form.Item
            name="phone"
            label="Phone number"
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
            <Form.Item name="passportId" label="passportId">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        {/* seventh row ---------------------------------------------------------- */}

        <Row gutter={16}>
          <Col span={9}>
            <Form.Item
              name="expectedSalary"
              label="expected salary"
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
          <Col span={7}>
            <Form.Item>
              <Row gutter={16} style={{ width: "40rem" }}>
                <Col offset={10}>
                  <Button htmlType="submit">Submit</Button>
                </Col>
                <Col>
                  <Button htmlType="button" onClick={onReset}>
                    Reset
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
