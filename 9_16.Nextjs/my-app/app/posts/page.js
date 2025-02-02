import React from "react";
import getallposts from "@/app/lib/getallposts";
import Link from "next/link";
export default async function getallpost() {
  const posts = await getallposts();
  //   console.log(posts);
  return (
    <div>
      <h1>All Post</h1>
      <div className="mt-5">
        {posts.map((post) => (
          <div key={post.id} className="mb-5">
            <h2>
              <Link href={`/posts/${post.id}`}> {post.title}</Link>
            </h2>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
