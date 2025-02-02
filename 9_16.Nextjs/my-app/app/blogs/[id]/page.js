import { notFound } from "next/navigation";
import React from "react";

export default function blogdescriptions({ params }) {
  const { id } = params;
  if (id > 3) {
    notFound();
  }
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}
