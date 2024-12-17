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
import Menu from "../component/Menu";

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
  const [img, setImg] = useState(null);
  const [selectedDate, setselectedDate] = useState(new Date());
  const [phase, setPhase] = useState("");

  const handleDateChange = (date) => {
    setselectedDate(date); // Mettre à jour la date sélectionnée
  };

  // Effectuer un calcul de la phase à chaque fois que la date change
  useEffect(() => {
    const currentPhase = calculateMoonPhaseByDate(selectedDate); // Calculer la phase de la lune actuelle
    setImg(moonPhaseImages[currentPhase]); // Mettre à jour l'état avec l'image de la lune correspondant à la phase
    setPhase(moonPhaseTitles.get(currentPhase)); // Mettre à jour le titre en français
  }, [selectedDate]); // Le useEffect s'exécute chaque fois que selectedDate change

  return (
    <div>
      <Menu />
      <div className="flex flex-col items-center justitfy-center text-white mt-2">
        <div className="relative flex justify-center items-center">
          <DateSelectorView
            selectedDate={selectedDate}
            handleDateChange={handleDateChange}
          />
        </div>

        <DayView
          date={selectedDate}
          imageUrl={img}
          title={phase}
          className="mt-6 text-center p-4 bg-gray-800 rounded-lg shadow-md transition hover:shadow-lg hover:bg-gray-700"
        />
      </div>
    </div>
  );
}

export default HomePage;
