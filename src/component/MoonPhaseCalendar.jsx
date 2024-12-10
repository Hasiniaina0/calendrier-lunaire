import { useState, useMemo } from "react";
import fullMoon from "../asset/full-moon.png";
import newMoon from "../asset/new-moon.png";
import firstQuarter from "../asset/first-quarter.png";
import waningGibbous from "../asset/waning-gibbous.png";
import waxingGibbous from "../asset/waxing-gibbous.png";
import waxingCrescent from "../asset/waxing-crescent.png";
import waningCrescent from "../asset/waning-crescent.png";
import lastQuarter from "../asset/last-quarter.png";
import { calculateMoonPhaseByDate } from "../application/MoonPhaseCalculator";

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

const MoonPhaseCalendar = () => {
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
    <div className="max-w-4xl mx-auto p-4 bg-transparent rounded-lg shadow-md mt-10">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrevMonth}
          className="p-2 bg-white text-black rounded hover:bg-slate-200"
        >
          Précédent
        </button>
        <h2 className="text-2xl font-bold">
          {currentMonth.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <button
          onClick={handleNextMonth}
          className="p-2 bg-white text-black rounded hover:bg-slate-200"
        >
          Suivant
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {/* Weekday Headers */}
        {["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"].map((day) => (
          <div key={day} className="font-bold text-gray-300 p-2 text-center">
            {day}
          </div>
        ))}

        {/* Calendar Days */}
        {calendarDays.map((date, index) => {
          if (date === null) {
            return (
              <div key={`empty-${index}`} className="bg-transparent"></div>
            );
          }

          const moonPhaseKey = calculateMoonPhaseByDate(date);
          const moonPhaseTitle = moonPhaseTitles[moonPhaseKey]; // Récupère le titre de la phase lunaire
          const moonPhaseImage = moonPhaseImages[moonPhaseKey]; // Récupère l'image de la phase lunaire

          return (
            <div
              key={date.toISOString()}
              className="border border-x-amber-200 rounded p-2 bg-transparent relative flex flex-col items-start"
            >
              <div className="text-sm font-semibold mb-1 text-white">
                {date.getDate()} {/* Affichage du jour du mois */}
              </div>
              <div
                className="ml-auto w-12 h-12 flex self-end"
                title={moonPhaseTitle}
              >
                <img
                  src={moonPhaseImage}
                  alt={moonPhaseTitle}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoonPhaseCalendar;
