import { Table } from "antd";
import React from "react";

const TableConfig = () => {
  const data = [
    { name: 1, age: 11, student: "true" },
    { name: 2, age: 22, student: "true" },
    { name: 3, age: 33, student: "false" },
    { name: 4, age: 44, student: "false" },
    { name: 5, age: 55, student: "false" },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (name) => {
        return <a>{name}</a>;
      },
    },
    { title: "Age", dataIndex: "age", sorter: (a, b) => a.age - b.age },
    {
      title: "Student",
      dataIndex: "student",
      render: (e) => {
        return <p>{e.age < 20 ? "true" : "false"}</p>;
      },
    },
  ];
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
        }}
      >
        <Table dataSource={data} columns={columns}></Table>
      </div>
    </div>
  );
};

export default TableConfig;
