import React from "react";
import {
  Input,
  Select,
  Checkbox,
  Radio,
  Switch,
  DatePicker,
  Upload,
  Slider,
  Form,
  Rate,
  Button,
  Divider,
  Avatar,
  Steps,
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import {
  UserOutlined,
  ClearOutlined,
  CloseCircleFilled,
  CheckCircleFilled,
  PlusOutlined,
  UploadOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import { Typography } from "antd";
import { useState } from "react";
const { Paragraph } = Typography;
const { Step } = Steps;
const Inputs = () => {
  const arr = ["item_1", "item_2", "item_3"];
  const [current, setCurrent] = useState(1);
  return (
    <div>
      <div
        style={{
          gap: "20px",
          padding: "20px",
          margin: "20px",
          border: "1px dashed blue",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "inline-flex", gap: "20px" }}>
          <Input placeholder="placeholder" />
          <Input placeholder="User" prefix={<UserOutlined />} />
          <Input placeholder="Clear" allowClear prefix={<ClearOutlined />} />
          <Input placeholder="disabled" disabled />
          <Input.Search placeholder="search" />
        </div>

        <div style={{ display: "inline-flex", gap: "20px" }}>
          <TextArea placeholder="Text Area" rows={1} />
          <Select placeholder="Select..." style={{ width: "100%" }}>
            {arr.map((item, index) => {
              return <Select.Option key={index}>{item}</Select.Option>;
            })}
          </Select>
          <Select
            mode="multiple"
            placeholder="Select..."
            style={{ width: "100%" }}
          >
            {arr.map((item, index) => {
              return <Select.Option key={index}>{item}</Select.Option>;
            })}
          </Select>
        </div>
        <div style={{ display: "inline-flex", gap: "20px" }}>
          <DatePicker picker="date" />
          <DatePicker picker="time" />
          <DatePicker.RangePicker picker="time" />
          <Checkbox>Checkbox</Checkbox>
          <Radio>Radio</Radio>

          <Switch
            checkedChildren={<CheckCircleFilled />}
            unCheckedChildren={<CloseCircleFilled />}
          />
          <Avatar icon={<UserOutlined />} />
        </div>
        <div style={{ display: "inline-flex", gap: "20px" }}>
          <Form.Item>
            <Form.Item
              name="dragger"
              valuePropName="fileList"
              // getValueFromEvent={normFile}
              noStyle
            >
              <Upload.Dragger
                name="files"
                action="/upload.do"
                style={{ padding: "5px" }}
                multiple
                accept=".jpg, .png"
                beforeUpload={(file) => {
                  console.log({ file });
                  return false;
                }}
              >
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item>
          <Upload
            action="/upload.do"
            listType="picture-card"
            style={{ maxWidth: "200px", width: "200px" }}
          >
            <div>
              <PlusOutlined />
              <div>Upload</div>
            </div>
          </Upload>
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
          <Form.Item name="rate" flex>
            <Rate />
          </Form.Item>
          <Form.Item
            name="slider"
            style={{ maxWidth: "500px", width: "500px" }}
          >
            <Slider
              marks={{
                0: "A",
                20: "B",
                40: "C",
                60: "D",
                80: "E",
                100: "F",
              }}
            />
          </Form.Item>
          <Paragraph
            style={{ width: "500px" }}
            ellipsis={{ rows: 2, expandable: true, symbol: "Show more" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            ipsum, dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit, amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
            consectetur, adipiscing elit.
          </Paragraph>
        </div>

        <Steps
          labelPlacement="vertical"
          current={current}
          onChange={(c) => {
            setCurrent(c);
          }}
        >
          <Step title="Start"></Step>
          <Step title="In progress"></Step>
          <Step title="Finished"></Step>
        </Steps>
        <Divider style={{ borderColor: "green" }}>Divider</Divider>
        <Divider style={{ borderColor: "red" }} dashed orientation="left">
          Divider
        </Divider>
      </div>
    </div>
  );
};

export default Inputs;
