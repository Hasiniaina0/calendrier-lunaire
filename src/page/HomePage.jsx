import React, { useState, useEffect } from "react";
import fullMoon from "../asset/full-moon.png";
import newMoon from "../asset/new-moon.png";
import firstQuarter from "../asset/fisrt-quarter.png";
import waningGibbous from "../asset/waning-gibbous.jpg";
import waxingGibbous from "../asset/waxing-gibbous.png";
import waxingCrescent from "../asset/fisrt-quarter.png";
import waningCrescent from "../asset/waning-crescent.png";
import lastQuarter from "../asset/last-quarter.jpg";
import { calculateMoonPhaseByDate } from "../application/MoonPhaseCalculator";
import DayView from "../component/DayView";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function HomePage() {
  const [phase, setPhase] = useState("Full moon");
  const [img, setImg] = useState(firstQuarter);
  const [currentDate, setCurrentDate] = useState(new Date());

  const moonPhaseImages = {
    "new-moon": newMoon,
    "waxing-crescent": waxingCrescent,
    "first-quarter": firstQuarter,
    "waxing-gibbous": waxingGibbous,
    "full-moon": fullMoon,
    "waning-gibbous": waningGibbous,
    "last-quarter": lastQuarter,
    "waning-crescent": waningCrescent,
  };

  // Effectuer un calcul de la phase à chaque fois que la date change
  useEffect(() => {
    const currentPhase = calculateMoonPhaseByDate(currentDate); // Calculer la phase de la lune actuelle
    setPhase(currentPhase); // Mettre à jour l'état avec la phase de la lune
    setImg(moonPhaseImages[currentPhase]); // Mettre à jour l'état avec l'image de la lune correspondant à la phase
  }, [currentDate]);

  return (
    <div>
      <p className="text-red-50">
        Séléctionnez une date :
        <DatePicker
          className="border-4 border-solid bg-slate-400"
          selected={currentDate}
          onChange={(date) => setCurrentDate(date)}
          showIcon
          dateFormat="dd/MM/yyyy"
        />
      </p>
      <DayView date={currentDate} imageUrl={img} title={phase} />
    </div>
  );
}

export default HomePage;
