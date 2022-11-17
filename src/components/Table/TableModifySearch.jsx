import { Button, Row, Table, Modal, Input, Col, Form, Tooltip } from "antd";
import React from "react";
import { useState } from "react";
import {
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import Icon from "@ant-design/icons/lib/components/Icon";
const TableModify = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [editingPerson, setEditingPerson] = useState(null);
  const [personModal, setPersonModal] = useState(false);
  const [form] = Form.useForm();
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
  const resetEditing = () => {
    setIsEdit(false);
    setEditingPerson(null);
  };

  const [dataSource, setDataSource] = useState([
    { id: 1, name: "John", email: "john.com", address: "beritnton 32/2" },
    { id: 2, name: "David", email: "David.com", address: "beritnton 32/2" },
    { id: 3, name: "Martin", email: "Martin.com", address: "beritnton 32/2" },
    { id: 4, name: "George", email: "George.com", address: "beritnton 32/2" },
  ]);
  const columns = [
    { key: "1", title: "ID", dataIndex: "id" },
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <div style={{ padding: "20px 30px", display: "flex", gap: "10px" }}>
            <Input
              autoFocus
              placeholder="Search.."
              onPressEnter={() => {
                confirm();
              }}
              // onBlur={() => {
              //   confirm();
              // }}
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                // confirm({ closeDropdown: false });
              }}
            />
            <Button type="primary" onClick={() => confirm}>
              <SearchOutlined />
              Search
            </Button>
            <Button type="danger" onClick={() => clearFilters}>
              Reset
            </Button>
          </div>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record?.name?.toLowerCase()?.includes(value?.toLowerCase());
      },
    },
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
  const openPersonModal = () => {
    setPersonModal(!personModal);
  };
  const addPerson = () => {
    console.log(form.getFieldValue("name"));
    const newPerson = {
      id: parseInt(Math.random() * 1000),
      name: form.getFieldValue("name"),
      email: form.getFieldValue("email"),
      address: form.getFieldValue("address"),
    };
    setDataSource((pre) => {
      return [newPerson, ...pre];
    });
    setPersonModal(!personModal);
    form.setFieldsValue({
      name: null,
      editEndowmentType: null,
      email: null,
      address: null,
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
        <Form form={form}>
          <Modal
            title="Basic Modal"
            open={personModal}
            onOk={addPerson}
            onCancel={openPersonModal}
          >
            <Col>
              <Form.Item name="name" label="name" labelCol={{ span: 24 }}>
                <Input placeholder="name" />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item name="email" label="email" labelCol={{ span: 24 }}>
                <Input placeholder="email" />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item name="address" label="address" labelCol={{ span: 24 }}>
                <Input placeholder="address" />
              </Form.Item>
            </Col>
          </Modal>
        </Form>
        <Table columns={columns} dataSource={dataSource}></Table>
        <Button block onClick={openPersonModal} type="primary">
          Add a new person
        </Button>
        <Modal
          title="Edit Person"
          open={isEdit}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((person) => {
                if (person.id === editingPerson.id) {
                  return editingPerson;
                } else {
                  return person;
                }
              });
            });
            resetEditing();
          }}
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
