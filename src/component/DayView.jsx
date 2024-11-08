import React from "react";

function DayView({ date, imageUrl, title }) {
  return (
    <div className="max-w-sm mx-auto mt-10 p-4 ">
      <img src={imageUrl} alt={title} className="w-full" loading="lazy" />
      <h1 className="text-4xl font-semibold text-blue-300 text-center">
        {title}
      </h1>
    </div>
  );
}

export default DayView;
