import { useState, useMemo } from "react";
import fullMoon from "../asset/f-moon.png";
import newMoon from "../asset/n-moon.png";
import firstQuarter from "../asset/f-quarter.png";
import waningGibbous from "../asset/wan-gibbous.png";
import waxingGibbous from "../asset/wax-gibbous.png";
import waxingCrescent from "../asset/wax-crescent.png";
import waningCrescent from "../asset/wan-crescent.png";
import lastQuarter from "../asset/last-quart.png";
import { calculateMoonPhaseByDate } from "../application/MoonPhaseCalculator";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

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

const moonPhaseTitles = {
  "new-moon": "Nouvelle lune",
  "waxing-crescent": "Premier croissant",
  "first-quarter": "Premier quartier",
  "waxing-gibbous": "Gibbeuse croissante",
  "full-moon": "Pleine lune",
  "waning-gibbous": "Gibbeuse décroissante",
  "last-quarter": "Dernier quartier",
  "waning-crescent": "Dernier croissant",
};

const MonthView = () => {
  // Déclaration de l'état pour le mois actuel
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Génération des jours du calendrier pour le mois actuel
  const calendarDays = useMemo(() => {
    const days = [];
    const firstDay = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    );
    const lastDay = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    );

    // Ajouter les jours du mois précédent pour remplir la première semaine si nécessaire
    const startingDay = firstDay.getDay();
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }

    // Ajouter les jours du mois actuel
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const currentDate = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        day
      );
      days.push(currentDate);
    }

    return days;
  }, [currentMonth]); // Le calcul des jours dépend de `currentMonth`

  // Fonction pour naviguer vers le mois précédent
  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) => {
      const newMonth = new Date(prevMonth);
      newMonth.setMonth(newMonth.getMonth() - 1);
      return newMonth;
    });
  };

  // Fonction pour naviguer vers le mois suivant
  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => {
      const newMonth = new Date(prevMonth);
      newMonth.setMonth(newMonth.getMonth() + 1);
      return newMonth;
    });
  };

  return (
    <div className="static max-w-6xl mx-auto p-4 bg-transparent rounded-lg shadow-md mt-30">
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md"></div>
      <div className=" static flex justify-between items-center mb-4">
        <MdOutlineKeyboardDoubleArrowLeft
          onClick={handlePrevMonth}
          className="text-4xl text-white  hover:text-gray-400"
        />

        <h2 className="text-2xl font-bold">
          {currentMonth.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <MdOutlineKeyboardDoubleArrowRight
          onClick={handleNextMonth}
          className="text-4xl text-white  hover:text-gray-400"
        />
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-4">
        {/* Weekday Headers */}
        {["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"].map((day) => (
          <div key={day} className="font-bold text-gray-300 p-2 text-center">
            {day}
          </div>
        ))}

        {/* Calendar Days */}
        {calendarDays.map((date, index) => {
          if (date === null) {
            return <div key={`empty-${index}`}></div>;
          }

          const moonPhaseKey = calculateMoonPhaseByDate(date);

          const moonPhaseImage = moonPhaseImages[moonPhaseKey]; // Récupère l'image de la phase lunaire

          return (
            <div
              key={date.toISOString()}
              aria-label={moonPhaseTitles[moonPhaseKey]}
              style={{
                backgroundImage: `url(${moonPhaseImage})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="xs:h-12 xs:w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 flex px-1 sm:px-2 items-center justify-center">
                {date.getDate()} {/* Affichage du jour du mois */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MonthView;
