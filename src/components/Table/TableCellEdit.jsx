import { EditFilled } from "@ant-design/icons";
import { Table, Button, Form, Input } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";

const TableCellEdit = () => {
  const [dataSource, setDataSource] = useState([]);
  const [editRow, setEditRow] = useState(null);
  const [form] = Form.useForm();
  useEffect(() => {
    const data = [];
    for (let index = 1; index < 5; index++) {
      data.push({
        key: index,
        name: `Name ${index}`,
        address: `Address ${index}`,
      });
    }
    setDataSource(data);
  }, []);
  const onFinish = (values) => {
    const updatedDataSource = [...dataSource];
    updatedDataSource.splice(editRow, 1, { ...values, key: editRow });
    setDataSource(updatedDataSource);
    setEditRow(null);
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => {
        if (editRow === record.key) {
          return (
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter a valid name",
                },
              ]}
            >
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Address",
      dataIndex: "address",
      render: (text, record) => {
        if (editRow === record.key) {
          return (
            <Form.Item
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please enter a valid address",
                },
              ]}
            >
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Actions",
      dataIndex: "action",
      render: (_, record) => {
        return (
          <>
            <Button htmlType="submit" type="primary">
              Save
            </Button>
            <Button
              style={{ marginLeft: "10px" }}
              onClick={() => {
                setEditRow(record.key);
                form.setFieldsValue({
                  name: record.name,
                  address: record.address,
                });
              }}
            >
              <EditFilled style={{ color: "green" }} /> Edit
            </Button>
          </>
        );
      },
    },
  ];

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
      <Form form={form} onFinish={onFinish}>
        <Table columns={columns} dataSource={dataSource}></Table>
      </Form>
    </div>
  );
};

export default TableCellEdit;
