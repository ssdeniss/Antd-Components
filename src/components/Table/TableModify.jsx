import { Button, Row, Table, Modal, Input, Col } from "antd";
import React from "react";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
const TableModify = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [editingPerson, setEditingPerson] = useState(null);
  const deletePerson = (record) => {
    Modal.confirm({
      centered: true,
      title: "Are u sure ?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((person) => person.id !== record.id);
        });
      },
    });
  };
  const editPerson = (record) => {
    setIsEdit(true);
    setEditingPerson({ ...record });
  };
  const setEditing = () =>{
    
  }
  const [dataSource, setDataSource] = useState([
    { id: 1, name: "John", email: "john.com", address: "beritnton 32/2" },
    { id: 2, name: "David", email: "David.com", address: "beritnton 32/2" },
    { id: 3, name: "Martin", email: "Martin.com", address: "beritnton 32/2" },
    { id: 4, name: "George", email: "George.com", address: "beritnton 32/2" },
  ]);
  const columns = [
    { key: "1", title: "ID", dataIndex: "id" },
    { key: "2", title: "Name", dataIndex: "name" },
    { key: "3", title: "Email", dataIndex: "email" },
    { key: "4", title: "Address", dataIndex: "address" },
    {
      key: "5",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <Row style={{ gap: "15px" }}>
              <EditOutlined
                onClick={() => editPerson(record)}
                style={{ color: "blue" }}
              />
              <DeleteOutlined
                onClick={() => deletePerson(record)}
                style={{ color: "red" }}
              />
            </Row>
          </>
        );
      },
    },
  ];

  const addPerson = () => {
    const newPerson = {
      id: parseInt(Math.random() * 1000),
      name: "name",
      email: "email",
      address: "address",
    };

    setDataSource((pre) => {
      return [newPerson, ...pre];
    });
  };
  return (
    <div>
      <div
        style={{
          gap: "20px",
          padding: "20px",
          margin: "20px",
          border: "1px dashed blue",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Button onClick={addPerson} block type="primary">
          Add a new person
        </Button>
        <Table columns={columns} dataSource={dataSource}></Table>
        <Modal
          title="Edit Person"
          open={isEdit}
          okText="Save"
          onCancel={() => setIsEdit(false)}
          onOk={() => setIsEdit(false)}
          centered
        >
          <Row style={{ flexDirection: "column", gap: "10px" }}>
            <Col>
              <label style={{ marginBottom: "5px" }}>Name</label>
              <Input
                placeholder="Name"
                value={editingPerson?.name}
                onChange={(e) => {
                  setEditingPerson((prev) => {
                    return { ...prev, name: e.target.value };
                  });
                }}
              />
            </Col>
            <Col>
              <label style={{ marginBottom: "5px" }}>Email</label>
              <Input
                placeholder="Email"
                value={editingPerson?.email}
                onChange={(e) => {
                  setEditingPerson((prev) => {
                    return { ...prev, email: e.target.value };
                  });
                }}
              />
            </Col>
            <Col>
              <label style={{ marginBottom: "5px" }}>Address</label>
              <Input
                placeholder="Address"
                value={editingPerson?.address}
                onChange={(e) => {
                  setEditingPerson((prev) => {
                    return { ...prev, address: e.target.value };
                  });
                }}
              />
            </Col>
          </Row>
        </Modal>
      </div>
    </div>
  );
};

export default TableModify;
