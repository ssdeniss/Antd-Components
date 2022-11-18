import React from "react";
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
const CollapseComponent = () => {
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
      <Collapse
        accordion={true}
        expandIcon={({ isActive }) => {
          return <CaretRightOutlined rotate={isActive ? 90 : 0} />;
        }}
      >
        <Collapse.Panel header="This is a pannel 1">
          <p>This is a pannel 1</p>
        </Collapse.Panel>
        <Collapse.Panel header="This is a pannel 2">
          <p>This is a pannel 2</p>
          <p>This is a pannel 2</p>
        </Collapse.Panel>
        <Collapse.Panel header="This is a pannel 3">
          <p>This is a pannel 3</p>
        </Collapse.Panel>
        <Collapse.Panel header="This is a pannel 4">
          <p>This is a pannel 4</p>
          <p>This is a pannel 4</p>
          <p>This is a pannel 4</p>
        </Collapse.Panel>
      </Collapse>
    </div>
  );
};

export default CollapseComponent;
