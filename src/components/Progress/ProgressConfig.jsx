import { Progress } from "antd";
import React from "react";

const ProgressConfig = () => {
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
      {/* <Progress percent={33} type="line"/> */}
      <Progress percent={33} type="circle" width={50} status="active" />
      <Progress percent={66} type="dashboard" width={50} strokeColor="red" />
      <Progress percent={100} type="circle" width={50} status="success" />
      <Progress percent={100} type="circle" width={50} status="exception" />
      <Progress
        percent={25}
        type="circle"
        width={50}
        strokeColor="orange"
        steps={3}
      />
    </div>
  );
};

export default ProgressConfig;
