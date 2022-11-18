import React from "react";
import {
  PieChartOutlined,
  AppleOutlined,
  SlackSquareOutlined,
  CodepenCircleOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
const Icons = () => {
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
      <PieChartOutlined style={{ color: "purple", fontSize: "40px" }} />
      <AppleOutlined twoToneColor="red" />
      <SlackSquareOutlined spin />
      <CodepenCircleOutlined twoToneColor="red" style={{ fontSize: "40px" }} />
      <LoadingOutlined />
    </div>
  );
};

export default Icons;
