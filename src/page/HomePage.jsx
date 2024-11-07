import React, { useState } from "react";
import fullMoon from "../asset/full-moon.png";
import firstQuarter from "../asset/fisrt-quarter.png";
import DayView from "../component/DayView";

function HomePage() {
  const [phase, setPhase] = useState("Full moon");
  const [img, setImg] = useState(firstQuarter);
  return (
    <div>
      <DayView imageUrl={img} title={phase} />
    </div>
  );
}

export default HomePage;
