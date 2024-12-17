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
    <div className="">
      <nav className="transition-all duration-300 ease-in-out  backdrop-blur-md top-0 left-0 z-50 w-full shadow-xl">
        <div className="container mx-auto py-8 flex items-center justify-center">
          <div className="flex space-x-1">
            {/* Lien Jour */}
            <Link
              to="/jour"
              className={`  w-full sm:w-auto px-3 py-2 text-center border-2 
              transition-all duration-300 
              rounded-l-full pl-9 pr-9
              max-sm:flex-1 max-sm:text-center  ${
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
              className={`px-3 py-2 text-center border-2 transition-all duration-300 rounded-r-full pl-7 pr-7 ${
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
    </div>
  );
};

export default Menu;
