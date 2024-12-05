"use client";
import React from "react";
import { Button, Form, Input, notification } from "antd";
import style from "./Form.module.css";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
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

const FormAdd = () => {
  const [form] = Form.useForm();
  const router = useRouter();

  const onSubmit = async (values: { title: string; body: string }) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        values
      );

      // const existingPosts: Post[] = JSON.parse(
      //   localStorage.getItem("posts") || "[]"
      // );

      // const newId =
      //   existingPosts.length > 0
      //     ? existingPosts[existingPosts.length - 1].id + 1
      //     : response?.data?.id;

      // const newPost = { ...response.data, id: newId };
      // localStorage.setItem(
      //   "posts",
      //   JSON.stringify([...existingPosts, newPost])
      // );
      notification.success({
        message: "Successfully:",
        description: "Post Added Successfully",
      });

      router.push("/");
    } catch (error: any) {
      notification.error({ message: "Error adding post:", description: error });
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
        rules={[{ required: true, message: "Please Enter Title!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="body"
        name="body"
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

export default FormAdd;
