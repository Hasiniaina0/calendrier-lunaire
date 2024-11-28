import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [activeLink, setActiveLink] = useState("Jour");

  return (
    <nav className="bg-teal-950 rounded-lg opacity-90 text-lg text-gray-400 mx-auto w-full  shadow-lg fixed top-0 left-0 z-50 mb-4">
      <div className="mx-auto px-6 py-2 flex items-center justify-end h-16">
        <div className="flex space-x-10">
          <Link
            to="/jour"
            className={`hover:text-amber-200 transition-colors duration-300 ${
              activeLink === "Jour" ? "text-amber-200" : ""
            }`}
            onClick={() => setActiveLink("Jour")}
          >
            Jour
          </Link>
          <p> | </p>
          <Link
            to="/mois"
            className={`hover:text-amber-200 transition-colors duration-300 ${
              activeLink === "Mois" ? "text-amber-200" : ""
            }`}
            onClick={() => setActiveLink("Mois")}
          >
            Mois
          </Link>
          <p> | </p>
          <Link
            to="/annee"
            className={`hover:text-amber-200 transition-colors duration-300 ${
              activeLink === "Année" ? "text-amber-200" : ""
            }`}
            onClick={() => setActiveLink("Année")}
          >
            Année
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
