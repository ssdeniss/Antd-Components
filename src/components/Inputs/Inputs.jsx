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
const Inputs = () => {
  const arr = ["item_1", "item_2", "item_3"];
  return (
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
        <Form.Item name="slider" style={{ maxWidth: "500px", width: "500px" }}>
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
      </div>
    </div>
  );
};

export default Inputs;
