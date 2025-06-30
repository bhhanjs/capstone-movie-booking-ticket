import React from "react";

export default function Screening({ content }) {
  const { title, subtitle, list } = content;

  return (
    <div className="movie__list px-5 py-6">
      <h2 className="text-3xl text-yama-main-bg font-extralight">{title}</h2>
      <p className="text-xl">{subtitle}</p>
      <div className="flex flex-col items-start">
        {list.map((item, i) => (
          <div
            key={i}
            className="border-b-1 border-gray-400 py-6 w-full space-y-1"
          >
            <h4 className="text-yama-dark-gray">Screening: {item.time}</h4>
            <p className="text-gray-300 text-xs">
              Expect to end at: {item.end}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
