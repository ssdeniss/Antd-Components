import React, { useState } from "react";
import { Form, Input, Button, message, Alert } from "antd";
const FormConfig = () => {
  const [alert, setAlert] = useState(false);
  const onFinish = (e) => {
    console.log(e);
    setTimeout(() => {
      setAlert(true);
      message.success("Login successfully");
      message.error("Login failed");
      message.warning("Login error");
    }, 1000);
  };
  return (
    <div style={{ position: "relative" }}>
      {alert && (
        <Alert
          type="error"
          message="Error"
          description="This is an error"
          closable
          style={{
            position: "absolute",
            top: "-80px",
            left: "30%",
          }}
        />
      )}
      <div
        style={{
          gap: "20px",
          padding: "20px",
          margin: "20px",
          border: "1px dashed blue",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form onFinish={onFinish}>
          <Form.Item
            label="User name"
            name="name"
            labelCol={{ span: 24 }}
            rules={[
              { required: true, message: "Please input your username!" },
              { min: 10, message: "Min 10 symbols" },
            ]}
          >
            <Input placeholder="User name" required />
          </Form.Item>
          <Form.Item
            label="Password"
            name="pass"
            labelCol={{ span: 24 }}
            rules={[
              { required: true, message: "Please input your password!" },
              {
                pattern: new RegExp("^[0-9]*$"),
                message: "Only numbers",
              },
            ]}
          >
            <Input.Password placeholder="Password" required />
          </Form.Item>
          <Form.Item style={{ float: "right" }}>
            <Button type="primary" htmlType="submit">
              Log In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default FormConfig;
