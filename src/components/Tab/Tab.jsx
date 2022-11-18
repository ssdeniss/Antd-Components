import { AppleOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import React from "react";

const Tab = () => {
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
      <Tabs defaultActiveKey="2">
        <Tabs.TabPane tab="First" key="1">
          <div>Tab nr.1</div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Second" key="2">
          <div>Tab nr.2</div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Third" key="3">
          <div>Tab nr.3</div>
        </Tabs.TabPane>
      </Tabs>
      <Tabs defaultActiveKey="2" tabPosition="left">
        <Tabs.TabPane
          key="1"
          tab={
            <span>
              <AppleOutlined />
              First
            </span>
          }
        >
          <div>Tab nr.1</div>
        </Tabs.TabPane>
        <Tabs.TabPane
          key="2"
          tab={
            <span>
              <AppleOutlined />
              Second
            </span>
          }
        >
          <div>Tab nr.2</div>
        </Tabs.TabPane>
        <Tabs.TabPane
          key="3"
          tab={
            <span>
              <AppleOutlined />
              Third
            </span>
          }
        >
          <div>Tab nr.3</div>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default Tab;
