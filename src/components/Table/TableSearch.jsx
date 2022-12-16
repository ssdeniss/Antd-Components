import { Input, Table } from "antd";
import React from "react";
import { useState } from "react";

const TableSearch = () => {
  const [search, setSearch] = useState("");
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
        flexDirection: "column",
      }}
    >
      <Input.Search
        placeholder="search.."
        onSearch={(value) => {
          setSearch(value);
        }}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <Table
        columns={[
          {
            title: "Name",
            dataIndex: "name",
            filteredValue: [search],
            onFilter: (value, record) => {
              return (
                String(record.name)
                  .toLowerCase()
                  .includes(value.toLowerCase()) ||
                String(record.age)
                  .toLowerCase()
                  .includes(value.toLowerCase()) ||
                String(record.address)
                  .toLowerCase()
                  .includes(value.toLowerCase())
              );
            },
          },
          { title: "Age", dataIndex: "age" },
          { title: "Address", dataIndex: "address" },
        ]}
        dataSource={[
          { name: "A name", age: 12, address: "a address", key: 1 },
          { name: "B name", age: 13, address: "b address", key: 2 },
          { name: "C name", age: 14, address: "c address", key: 3 },
        ]}
      ></Table>
    </div>
  );
};

export default TableSearch;
