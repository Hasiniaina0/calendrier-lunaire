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
import { LazyLoadImage } from "react-lazy-load-image-component";

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
  const [selectDate, setselectDate] = useState(new Date());

  const handleDateChange = (date) => {
    setselectDate(date); // Mettre à jour la date sélectionnée
  };

  // Effectuer un calcul de la phase à chaque fois que la date change
  useEffect(() => {
    const currentPhase = calculateMoonPhaseByDate(selectDate); // Calculer la phase de la lune actuelle
    setPhase(currentPhase); // Mettre à jour l'état avec la phase de la lune
    setImg(moonPhaseImages[currentPhase]); // Mettre à jour l'état avec l'image de la lune correspondant à la phase
  }, [selectDate]); // Le useEffect s'exécute chaque fois que selectDate change

  return (
    <div className="flex flex-col  text-white">
      <div className="relative flex justify-center items-center ml-20 ">
        <div className="mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6 text-zinc-500"
          >
            <path d="M19 3h-1V2a1 1 0 10-2 0v1H8V2a1 1 0 10-2 0v1H5a2 2 0 00-2 2v15a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 17H5V9h14v11zM7 11h5v5H7v-5z"></path>
          </svg>
        </div>

        <DatePicker
          selected={selectDate}
          onChange={handleDateChange}
          className="bg-transparent  text-stone-400 placeholder-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
          dateFormat="dd/MM/yyyy"
          calendarClassName="bg-gray-800 rounded-lg shadow-xl"
          monthClassName="text-center text-lg font-semibold text-indigo-400"
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          popperConfig={{
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [10, 0],
                  offset: [10, 0],
                },
              },
            ],
          }}
        />
      </div>

      <DayView
        date={selectDate}
        imageUrl={img}
        title={phase}
        className="mt-6 text-center p-4 bg-gray-800 rounded-lg shadow-md transition hover:shadow-lg hover:bg-gray-700"
      >
        <LazyLoadImage
          src={img}
          alt={phase}
          placeholderSrc="Phase de la lune"
          className="rounded-lg"
        />
      </DayView>
    </div>
  );
}

export default HomePage;
