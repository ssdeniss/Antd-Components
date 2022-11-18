import React from "react";
import { Menu, Space } from "antd";
import {
  HomeOutlined,
  LogoutOutlined,
  MenuOutlined,
  UserDeleteOutlined,
} from "@ant-design/icons";

const MenuComponent = () => {
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
      <Space>
        <Menu
          mode="inline"
          defaultOpenKeys={["dashboard"]}
          style={{ width: "200px" }}
          items={[
            { label: "Home", key: "home", icon: <HomeOutlined /> },
            {
              label: "Dashboard",
              key: "dashboard",
              icon: <MenuOutlined />,
              children: [
                { label: "Revenue", key: "revenue" },
                { label: "Expenses", key: "expenses" },
              ],
            },
            { label: "User", key: "user", icon: <UserDeleteOutlined /> },
            { label: "Signout", key: "signout", icon: <LogoutOutlined /> },
          ]}
        ></Menu>
      </Space>
    </div>
  );
};

export default MenuComponent;
