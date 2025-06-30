import React from "react";

export default function ChangeMovieList({ content }) {
  const { title, list } = content;

  return (
    <div className="movie__list px-5 py-6">
      <h2 className="text-3xl text-yama-main-bg font-extralight">{title}</h2>
      <div className="flex flex-col items-start">
        {list.map((item, i) => (
          <div key={i} className="border-b-1 border-gray-400 py-6 w-full">
            <h4 className="text-yama-dark-gray">{item.name}</h4>
            <p className="text-gray-300">{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
