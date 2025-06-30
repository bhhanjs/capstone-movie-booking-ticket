import React from "react";

export default function Theater({ content }) {
  const { title, name, address } = content;
  return (
    <div className="movie__list px-5 py-6 space-y-2">
      <h2 className="text-3xl text-yama-main-bg font-extralight">{title}</h2>
      <p className="text-yama-black">{name}</p>
      <p className="text-gray-400">{address}</p>
    </div>
  );
}
