import React from "react";
import getsinglepost from "@/app/lib/getsinglepost";
import Link from "next/link";
import getallposts from "@/app/lib/getallposts";

export async function generateMetadata({ params }) {
  const { id } = params;
  const posts = await getsinglepost(id);
  return {
    title: posts.title,
    description: posts.body,
  };
}

export default async function getsingleposts({ params }) {
  const { id } = params;
  const posts = await getsinglepost(id);
  return (
    <div>
      <h1>All Post</h1>
      <div className="mt-5">
        <h2>{posts.title}</h2>
        <p>{posts.body}</p>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getallposts();
  return posts.map((post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    };
  });
}
