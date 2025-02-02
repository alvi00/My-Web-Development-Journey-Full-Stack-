import React from "react";

export default async function getallposts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 10,
    },
  });
  return res.json();
}
