import React from "react";
import { Button } from "antd";
import { HeatMapOutlined } from "@ant-design/icons";
const Buttons = () => {
  return (
    <div
      style={{
        padding: "20px",
        margin: "20px",
        border: "1px dashed blue",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Button type="default">default</Button>
        <Button type="primary">primary</Button>
        <Button type="text">text</Button>
        <Button type="dashed">dashed</Button>
        <Button type="link">link</Button>
        <Button type="ghost">ghost</Button>
        <Button type="danger">danger</Button>
        <Button type="primary" loading>
          loading
        </Button>
        <Button type="primary" icon={<HeatMapOutlined />}>
          icon
        </Button>
      </div>
    </div>
  );
};

export default Buttons;
