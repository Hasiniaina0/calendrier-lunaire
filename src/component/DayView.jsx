import React from "react";

function DayView({ date, imageUrl, title }) {
  return (
    <div className="max-w-sm mx-auto mt-10 p-4 ">
      <img
        src={imageUrl}
        alt={title}
        className="rounded-full border-spacing-52 border-8 border-emerald-950"
        loading="lazy"
      />
      <h1 className=" mt-6 text-4xl font-semibold text-orange-300 text-center">
        {title}
      </h1>
    </div>
  );
}

export default DayView;
