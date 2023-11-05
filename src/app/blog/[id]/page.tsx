import BackButton from "@/components/BackButton";
import ButtonAction from "@/components/ButtonAction";
import { db } from "@/lib/db";
import React, { FC } from "react";

interface BlogDetailPageProps {
  params: {
    id: string;
  };
}

async function getPost(id: string) {
  const response = await db.post.findFirst({
    where: {
      id: id,
    },
    select: {
      id: true,
      title: true,
      content: true,
      Tag: true,
    },
  });
  return response;
}

const BlogDetailPage: FC<BlogDetailPageProps> = async ({ params }) => {
  const post = await getPost(params.id);

  return (
    <div>
      <div className="mb-8">
        <BackButton />
        <div className="flex items-center gap-4">
          <h2 className="font-bold text-2xl my-4">{post?.title}</h2>
          <span className="badge badge-neutral">{post?.Tag.name}</span>
        </div>
        <ButtonAction id={params.id} />
      </div>
      <p className="text-slate-700">{post?.content}</p>
    </div>
  );
};

export default BlogDetailPage;
