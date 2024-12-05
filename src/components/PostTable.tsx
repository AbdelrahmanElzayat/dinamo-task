"use client";
import { Button, Table, notification } from "antd";
import React from "react";
import style from "./table.module.css";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Post } from "@/utils/post";
import axios from "axios";
const PostTable = ({ posts }: any) => {
  //   const [allPosts, setAllPosts] = React.useState<Post[]>([]);

  //   React.useEffect(() => {}, [posts]);
  //   if (typeof window !== "undefined") {
  //     const storedPosts = localStorage.getItem("posts");
  //     const localPosts = storedPosts ? JSON.parse(storedPosts) : [];

  //     setAllPosts([...localPosts, ...posts]);
  //   }

  const handleDelete = async (id: number) => {
    try {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      notification.success({
        message: "Successfully:",
        description: "Post Deleted Successfully",
      });
    } catch (error: any) {
      notification.error({
        message: "Error in Deleting post:",
        description: error,
      });
    }
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Body",
      dataIndex: "body",
      key: "body",
    },
    {
      title: "Actions",
      key: "actions",
      render: (record: Post) => (
        <div className={style.actions}>
          <Link href={`/edit-post/${record?.id}`}>
            <Button
              type="primary"
              style={{ marginRight: 8 }}
              icon={<EditOutlined />}
            />
          </Link>
          <Button
            onClick={() => handleDelete(record.id)}
            type="primary"
            danger
            icon={<DeleteOutlined />}
          />
        </div>
      ),
    },
  ];
  return (
    <div>
      <Table
        dataSource={posts}
        columns={columns}
        rowKey="id"
        pagination={{ defaultPageSize: 5 }}
      />
    </div>
  );
};

export default PostTable;
