import React, { useState, useEffect } from "react";
import fullMoon from "../asset/full-moon.png";
import newMoon from "../asset/new-moon.png";
import firstQuarter from "../asset/first-quarter.png";
import waningGibbous from "../asset/waning-gibbous.png";
import waxingGibbous from "../asset/waxing-gibbous.png";
import waxingCrescent from "../asset/waxing-crescent.png";
import waningCrescent from "../asset/waning-crescent.png";
import lastQuarter from "../asset/last-quarter.png";
import { calculateMoonPhaseByDate } from "../application/MoonPhaseCalculator";
import DayView from "../component/DayView";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./HomePage.module.css";

const moonPhaseImages = {
  "New moon": newMoon,
  "Waxing crescent": waxingCrescent,
  "First quarter": firstQuarter,
  "Waxing gibbous": waxingGibbous,
  "Full moon": fullMoon,
  "Waning gibbous": waningGibbous,
  "Last quarter": lastQuarter,
  "Waning crescent": waningCrescent,
};

function HomePage() {
  const [phase, setPhase] = useState("");
  const [img, setImg] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleDateChange = (date) => {
    setCurrentDate(date); // Mettre à jour la date sélectionnée
  };

  // Effectuer un calcul de la phase à chaque fois que la date change
  useEffect(() => {
    const currentPhase = calculateMoonPhaseByDate(currentDate); // Calculer la phase de la lune actuelle
    setPhase(currentPhase); // Mettre à jour l'état avec la phase de la lune
    setImg(moonPhaseImages[currentPhase]); // Mettre à jour l'état avec l'image de la lune correspondant à la phase
  }, [currentDate]); // Le useEffect s'exécute chaque fois que currentDate change

  return (
    <div className="flex flex-col items-center  p-6 text-white">
      <h1 className="text-2xl font-bold text-indigo-200 mb-4">
        Phases de la Lune:
      </h1>
      <div className="w-full max-w-md">
        <DatePicker
          showIcon
          className="w-full py-2 px-4 bg-gray-700 text-white placeholder-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          dateFormat="dd/MM/yyyy"
          selected={currentDate}
          onChange={handleDateChange}
          // customInput={<div className={styles.customDatepickerIcon} />}
          wrapperClassName="w-full"
          calendarClassName="bg-gray-800 p-4 rounded-lg shadow-xl"
          monthClassName="text-center text-lg font-semibold text-indigo-400"
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          popperPlacement="right-start"
          popperConfig={{
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [10, 0],
                },
              },
            ],
          }}
        />
      </div>
      <DayView
        date={currentDate}
        imageUrl={img}
        title={phase}
        className="mt-6 text-center p-4 bg-gray-800 rounded-lg shadow-md transition hover:shadow-lg hover:bg-gray-700"
      />
    </div>
  );
}

export default HomePage;
