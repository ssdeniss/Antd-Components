import { Spin } from "antd";
import React from "react";

const Loader = () => {
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
      <Spin spinning={true}></Spin>
    </div>
  );
};

export default Loader;
