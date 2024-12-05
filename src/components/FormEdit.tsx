"use client";
import React from "react";
import { Button, Form, Input, notification } from "antd";
import style from "./Form.module.css";
import Link from "next/link";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const FormEdit = ({ post }: any) => {
  const [form] = Form.useForm();
  const router = useRouter();
  const { id } = useParams();

  const onSubmit = async (values: { title: string; body: string }) => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        values
      );
      notification.success({
        message: "Successfully:",
        description: "Post Edited Successfully",
      });

      router.push("/");
    } catch (error: any) {
      notification.error({
        message: "Error Editing post:",
        description: error,
      });
    }
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      variant={"outlined"}
      className={style.formAdd}
      initialValues={{ variant: "filled" }}
      onFinish={onSubmit}
    >
      <Form.Item
        label="title"
        name="title"
        initialValue={post?.title}
        rules={[{ required: true, message: "Please Enter Title!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="body"
        name="body"
        initialValue={post?.body}
        rules={[{ required: true, message: "Please Enter Body!" }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Link href="/" style={{ marginLeft: "8px" }}>
          <Button type="default" danger>
            Cancel
          </Button>
        </Link>
      </Form.Item>
    </Form>
  );
};

export default FormEdit;
