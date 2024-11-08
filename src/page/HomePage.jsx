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
    <div>
      <div className="text-red-50">
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={currentDate}
          onChange={handleDateChange}
          className="w-full max-w-xs p-4 border-2 border-gray-300 bg-transparent text-white rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          wrapperClassName="w-full"
          calendarClassName="bg-gray-800 p-4 rounded-lg shadow-xl text-white"
          monthClassName="text-center text-lg font-semibold text-indigo-400"
          dayClassName={(date) =>
            "text-white hover:bg-indigo-600 hover:text-white"
          }
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          popperPlacement="right-start" // Le calendrier s'affiche à droite du champ
          popperConfig={{
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [10, 0], // Décalage à droite
                },
              },
            ],
          }}
        />
      </div>
      <DayView date={currentDate} imageUrl={img} title={phase} />
    </div>
  );
}

export default HomePage;
