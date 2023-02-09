import {
  MinusCircleOutlined,
  TeamOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Popconfirm } from "antd";
import React from "react";

const FormDynamic = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
    form.resetFields();
  };
  return (
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
      <Popconfirm text="hello" description="description">
        <Button>TEST</Button>
      </Popconfirm>
      <Form onFinish={onFinish} form={form}>
        <Form.Item
          name={"teacher"}
          label={
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <UserOutlined />
              <div>Teacher</div>
            </div>
          }
          labelCol={{ span: 24 }}
        >
          <Input placeholder="Teachear Name" />
        </Form.Item>
        <Form.Item
          name={"class"}
          label={
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <TeamOutlined />
              <div>Class Name</div>
            </div>
          }
          labelCol={{ span: 24 }}
        >
          <Input placeholder="Class Name" />
        </Form.Item>
        <Form.List name={"students"}>
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, index) => {
                return (
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Form.Item
                      key={index}
                      name={[field.name, "Name"]}
                      label={`Student nr.${index + 1} name`}
                      labelCol={{ span: 24 }}
                      rules={[{ required: true, message: "Name is required" }]}
                    >
                      <Input placeholder="Name" />
                    </Form.Item>
                    <Form.Item
                      key={index}
                      name={[field.name, "Surname"]}
                      label={`Student nr.${index + 1} surname`}
                      labelCol={{ span: 24 }}
                      rules={[
                        { required: true, message: "Surname is required" },
                      ]}
                    >
                      <Input placeholder="Surname" />
                    </Form.Item>
                    <MinusCircleOutlined
                      style={{ color: "red", transform: "translateY(48px)" }}
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                  </div>
                );
              })}
              <Form.Item>
                <Button htmlType="submit" type="primary">
                  Submit
                </Button>
                <Button
                  style={{
                    background: "green",
                    border: "none",
                    marginLeft: "10px",
                  }}
                  icon={<UserAddOutlined />}
                  type="primary"
                  onClick={() => {
                    add();
                  }}
                >
                  Add a student
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </div>
  );
};

export default FormDynamic;
