import React from "react";
import { Statistic } from "antd";
const { Countdown } = Statistic;
const Timer = () => {
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
      <Countdown value={new Date().setMinutes(new Date().getMinutes() + 5)} />
    </div>
  );
};

export default Timer;
