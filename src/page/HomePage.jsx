import { useState, useEffect } from "react";
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

import DateSelectorView from "../component/DateSelectorView";

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

const moonPhaseTitles = new Map([
  ["new-moon", "Nouvelle lune"],
  ["waxing-crescent", "Premier croissant"],
  ["first-quarter", "Premier quartier"],
  ["waxing-gibbous", "Gibbeuse croissante"],
  ["full-moon", "Pleine lune"],
  ["waning-gibbous", "Gibbeuse décroissante"],
  ["last-quarter", "Dernier quartier"],
  ["waning-crescent", "Dernier croissant"],
]);

function HomePage() {
  // const [phase, setPhase] = useState("");
  const [img, setImg] = useState(null);
  const [selectedDate, setselectedDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [phase, setPhase] = useState("");

  const handleDateChange = (date) => {
    setselectedDate(date); // Mettre à jour la date sélectionnée
  };

  // Effectuer un calcul de la phase à chaque fois que la date change
  useEffect(() => {
    const currentPhase = calculateMoonPhaseByDate(selectedDate); // Calculer la phase de la lune actuelle
    setPhase(currentPhase); // Mettre à jour l'état avec la phase
    setImg(moonPhaseImages[currentPhase]); // Mettre à jour l'état avec l'image de la lune correspondant à la phase
    setTitle(moonPhaseTitles.get(currentPhase)); // Mettre à jour le titre en français
  }, [selectedDate]); // Le useEffect s'exécute chaque fois que selectedDate change

  return (
    <div className="flex flex-col  text-white">
      <div className="relative flex justify-center items-center ml-20 ">
        <div className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6 text-zinc-500"
          >
            <path d="M19 3h-1V2a1 1 0 10-2 0v1H8V2a1 1 0 10-2 0v1H5a2 2 0 00-2 2v15a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 17H5V9h14v11zM7 11h5v5H7v-5z"></path>
          </svg>
        </div>
        <DateSelectorView
          selectedDate={selectedDate}
          handleDateChange={handleDateChange}
        />
      </div>

      <DayView
        date={selectedDate}
        imageUrl={img}
        title={title}
        phase={phase}
        className="mt-6 text-center p-4 bg-gray-800 rounded-lg shadow-md transition hover:shadow-lg hover:bg-gray-700"
      />
    </div>
  );
}

export default HomePage;
