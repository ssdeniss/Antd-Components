import { FacebookFilled, GoogleCircleFilled } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import Link from "antd/lib/typography/Link";
import React from "react";

const PresentationForm = () => {
  const REACT_APP_SERVER_API =
    "AD5f532V3424bD34Hfdsah75SFDhjdasjhf3fdsghfjsk3gv";
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    console.log(values);
    const result = await fetch(
      `${REACT_APP_SERVER_API}/userAuth/token=true`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer" + values?.token,
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      }
    );
    form.resetFields();
    console.log(result);
  };
  const facebookRegistration = () => {};
  return (
    <Form onFinish={onFinish} form={form}>
      <h2 className="form__title">Inregistrare</h2>
      <Button icon={<FacebookFilled />} onClick={facebookRegistration}></Button>
      <Button
        icon={<GoogleCircleFilled />}
        onClick={facebookRegistration}
      ></Button>
      <Form.Item
        name="email"
        label="Email"
        labelCol={{ span: 24 }}
        style={{ width: "100%" }}
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
          { type: "email", message: "Is not valid Email" },
          { whitespace: true, message: "Email cannot be empty!" },
        ]}
        hasFeedback
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        label="Paswword"
        labelCol={{ span: 24 }}
        style={{ width: "100%" }}
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
          { whitespace: true, message: "Password cannot be empty!" },
          { min: 5, message: "Password must be at least 5 characters" },
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Paswword" />
      </Form.Item>
      <Form.Item
        style={{ width: "100%" }}
        name="confirm"
        label="Confirm Password"
        labelCol={{ span: 24 }}
        dependencies={["password"]}
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject("The confirm password is incorrect");
            },
          }),
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Confirm Password" />
      </Form.Item>
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject("Please agree to the terms of service"),
          },
        ]}
      >
        <Checkbox>
          Sunt de acord cu <Link to="/">Termenii si conditiile</Link>
        </Checkbox>
      </Form.Item>
      <Form.Item name="register">
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PresentationForm;
