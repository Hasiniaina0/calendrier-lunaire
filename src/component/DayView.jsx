import React from "react";

function DayView({ date, imageUrl, title }) {
  return (
    <div className="max-w-sm mx-auto mt-10 p-4 ">
      <img
        src={imageUrl}
        alt={title}
        className="rounded-full border-spacing-52 border-8 border-emerald-950"
      />
      <h1 className=" mt-10 text-4xl font-semibold text-yellow-200 text-center opacity-50">
        {title}
      </h1>
    </div>
  );
}

export default DayView;
