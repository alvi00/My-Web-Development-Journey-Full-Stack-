"use client";

import button from "../about/button/page";

export default function Button() {
  return (
    <button className="bg-green-500 rounded-sm px-4 py-1 " onClick={alvi}>
      Click Here
    </button>
  );
}

function alvi() {
  console.log("Alvi");
}
