import { Tag } from "@prisma/client";
import Link from "next/link";
import React, { FC } from "react";

interface PostCardProps {
  post: {
    id: string;
    title: string;
    content: string;
    Tag: Tag;
  };
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  const { id, title, content, Tag } = post;
  return (
    <div className="card w-full bg-base-100 shadow-xl border">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content.slice(0, 30)}</p>
        <div className="badge badge-neutral">{Tag.name}</div>
        <div className="card-actions justify-end">
          <Link href={`/blog/${id}`} className="hover:underline">
            Read More...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
