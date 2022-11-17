import { Button, Checkbox, DatePicker, Form, Input, Row, Select } from "antd";
import React, { useState } from "react";

const FormValidation = () => {
  const [formValue, setFormValue] = useState(null);
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px",
          margin: "20px",
          border: "1px dashed blue",
          display: "inline-flex",
          justifyContent: "start",
          alignItems: "start",
        }}
      >
        <div>
          <Form
            onFinish={(values) => {
              setFormValue(values);
              console.log(values);
            }}
          >
            <Row style={{ gap: "10px", flexWrap: "nowrap" }}>
              <Form.Item
                name="name"
                label="Name"
                labelCol={{ span: 24 }}
                style={{ width: "100%" }}
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                  },
                  { whitespace: true, message: "Name cannot be empty!" },
                  { min: 3, message: "Name must be at least 3 characters" },
                ]}
                hasFeedback
              >
                <Input placeholder="Name" />
              </Form.Item>
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
            </Row>
            <Row style={{ gap: "10px", flexWrap: "nowrap" }}>
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
                  {
                    validator: (_, value) =>
                      value && value.includes("a")
                        ? Promise.resolve()
                        : Promise.reject(
                            "Password does not match character 'a'"
                          ),
                  },
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
                      return Promise.reject(
                        "The confirm password is incorrect"
                      );
                    },
                  }),
                ]}
                hasFeedback
              >
                <Input.Password placeholder="Confirm Password" />
              </Form.Item>
            </Row>
            <Row style={{ gap: "10px", flexWrap: "nowrap" }}>
              <Form.Item
                name="gender"
                label="Gender"
                labelCol={{ span: 24 }}
                style={{ width: "100%" }}
              >
                <Select placeholder="Gender" allowClear>
                  <Select.Option value="male">Male</Select.Option>
                  <Select.Option value="female">Famale</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="birthday"
                label="Birthday"
                labelCol={{ span: 24 }}
                style={{ width: "100%" }}
              >
                <DatePicker
                  showTime
                  placeholder="Birthday"
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Row>
            <Form.Item
              name="website"
              label="Your Website"
              labelCol={{ span: 24 }}
              rules={[{ type: "url", message: "Please enter a valid url" }]}
            >
              <Input placeholder="Website" />
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
                Agree to our <a href="#">Terms & Conditions</a>
              </Checkbox>
            </Form.Item>
            <Form.Item name="register">
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
        {formValue && (
          <div>
            <div className="name">Your name "{formValue?.name}"</div>
            <div className="name">Your email "{formValue?.email}"</div>
            <div className="name">Your password "{formValue?.password}"</div>
            {formValue?.gender && (
              <div className="name">Your gender "{formValue?.gender}"</div>
            )}
            {/* {formValue?.birthday && (
              <div className="name">
                Your birthday "{formValue?.birthday?._d}"
              </div>
            )} */}
            {formValue?.website && (
              <div className="name">Your website "{formValue?.website}"</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormValidation;
