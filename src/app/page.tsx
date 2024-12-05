import PostTable from "@/components/PostTable";
import { Button, Col, Row } from "antd";
import style from "./page.module.css";
import { Post } from "@/utils/post";
import { PlusCircleOutlined } from "@ant-design/icons";
import Link from "next/link";
export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Faild to fetch articles !");
  }
  const posts: Post[] = await response.json();
  return (
    <Row>
      <Col span={24}>
        <Link href="/add-post">
          <Button
            type="primary"
            className={style.addBtn}
            icon={<PlusCircleOutlined />}
          >
            Add New Post
          </Button>
        </Link>
      </Col>
      <Col span={24}>
        <h2 className={style.head}>Posts List</h2>
        <PostTable posts={posts} />
      </Col>
    </Row>
  );
}
