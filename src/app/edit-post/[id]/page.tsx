import FormEdit from "@/components/FormEdit";
import { Post } from "@/utils/post";
import React from "react";
interface SingleArticlePageProps {
  params: { id: string };
}
const page = async ({ params }: SingleArticlePageProps) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  if (!response.ok) {
    throw new Error("faild to fetch article !");
  }
  const post: Post = await response.json();

  return <FormEdit post={post} />;
};

export default page;
