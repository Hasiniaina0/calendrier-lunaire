import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const [activeLink, setActiveLink] = useState("Jour"); // Défaut : Jour
  const location = useLocation(); // Récupère la route actuelle

  // Met à jour activeLink selon la route actuelle
  useEffect(() => {
    if (location.pathname === "/jour") {
      setActiveLink("Jour");
    } else if (location.pathname === "/mois") {
      setActiveLink("Mois");
    } else if (location.pathname === "/annee") {
      setActiveLink("Année");
    }
  }, [location.pathname]);

  return (
    <nav className="bg-transparent from-teal-800 via-teal-700 to-teal-900 rounded-lg opacity-95 text-lg text-gray-200 mx-auto w-full shadow-xl fixed top-0 left-0 z-50">
      <div className="container mx-auto px-12 py-3 flex items-center justify-center">
        <div className="flex space-x-1">
          {/* Lien Jour */}
          <Link
            to="/jour"
            className={`px-3 py-2 text-center border-2 transition-all duration-300 rounded-l-full pl-9 pr-9 ${
              activeLink === "Jour"
                ? "text-amber-300 border-amber-300 shadow-lg"
                : "text-gray-300 border-gray-500 hover:border-amber-200 hover:text-amber-200"
            }`}
          >
            Jour
          </Link>

          {/* Lien Mois */}
          <Link
            to="/mois"
            className={`px-3 py-2 text-center border-2 transition-all duration-300 pl-9 pr-9 ${
              activeLink === "Mois"
                ? "text-amber-300 border-amber-300 shadow-lg"
                : "text-gray-300 border-gray-500 hover:border-amber-200 hover:text-amber-200"
            }`}
          >
            Mois
          </Link>

          {/* Lien Année */}
          <Link
            to="/annee"
            className={`px-3 py-2 text-center border-2 transition-all duration-300 rounded-r-full pl-9 pr-9 ${
              activeLink === "Année"
                ? "text-amber-300 border-amber-300 shadow-lg"
                : "text-gray-300 border-gray-500 hover:border-amber-200 hover:text-amber-200"
            }`}
          >
            Année
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
