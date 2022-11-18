import { Table, Tag } from "antd";
import React, { useState } from "react";

const TableSelect = () => {
  const [selectedRow, setSelectedRow] = useState(["1", "3"]);
  const columns = [
    {
      title: "Student ID",
      dataIndex: "id",
    },
    {
      title: "Student Name",
      dataIndex: "name",
    },
    {
      title: "Student Grade",
      dataIndex: "grade",
      rander: (tag) => {
        const color = tag.includes("A")
          ? "green"
          : tag.includes("B")
          ? "blue"
          : "red";
        return (
          <Tag color={color} style={{ background: color }} key={tag}>
            {tag}
          </Tag>
        );
      },
    },
  ];
  const dataSource = [
    {
      key: "1",
      id: 1,
      name: "Sudent Name 1",
      grade: "A+",
    },
    {
      key: "2",
      id: 2,
      name: "Sudent Name 2",
      grade: "A",
    },
    {
      key: "3",
      id: 3,
      name: "Sudent Name 3",
      grade: "B",
    },
    {
      key: "4",
      id: 4,
      name: "Sudent Name 4",
      grade: "C",
    },
    {
      key: "5",
      id: 5,
      name: "Sudent Name 5",
      grade: "D",
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
      <Table
        columns={columns}
        dataSource={dataSource}
        rowSelection={{
          type: "checkbox",
          selectedRowKeys: selectedRow,
          onChange: (keys) => {
            setSelectedRow(keys);
          },
          onSelect: (record) => {
            console.log({ record });
          },
          // getCheckboxProps: (record) => ({
          //   disabled: record.grade === "C",
          // }),
          // hideSelectAll: true
          selections: [
            Table.SELECTION_NONE,
            Table.SELECTION_ALL,
            Table.SELECTION_COLUMN,
            Table.SELECTION_INVERT,
            {
              key: "even",
              text: "Select Even Rows",
              onSelect: (allKeys) => {
                const selectedKeys = allKeys.filter((key) => {
                  return key % 2 === 0;
                });
                setSelectedRow(selectedKeys);
              },
            },
            {
              key: "best",
              text: "best score",
              onSelect: (key) => {
                const selectedKey = key.filter((e) => {
                  const isExcelent = dataSource.find((student) => {
                    return student.key === e && student.grade.includes("A");
                  });
                  return isExcelent;
                });
                setSelectedRow(selectedKey);
              },
            },
          ],
        }}
      ></Table>
    </div>
  );
};

export default TableSelect;
