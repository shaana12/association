import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/mon-logo.png"

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavigation = (sectionId: string) => {
    navigate("/"); // Redirection vers la page d'accueil
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Délai pour s'assurer que la page est chargée
    closeMenu();
  };

  return (
    <header className="bg-beige text-white sticky top-0 z-50 shadow-md h-20 flex justify-between items-center px-4">
      {/* Logo */}
      <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Logo" className="h-32 w-auto cursor-pointer" />
        </Link>

      {/* Menu hamburger pour petits écrans */}
      <button
        onClick={toggleMenu}
        className="md:hidden focus:outline-none"
        aria-label="Toggle menu"
      >
        {/* Icône des 3 traits horizontaux */}
        <div className="space-y-1">
          <div className="w-6 h-0.5 bg-white rounded"></div>
          <div className="w-6 h-0.5 bg-white rounded"></div>
          <div className="w-6 h-0.5 bg-white rounded"></div>
        </div>
      </button>

      {/* Menu de navigation */}
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-20 right-0 bg-beige w-full md:static md:flex md:items-center md:w-auto md:bg-transparent`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-8 space-perso-3 md:space-y-0 text-center md:text-left">
          <li className="transition-all duration-300 hover:text-gray-300">
            <button
              onClick={() => handleNavigation("about")}
              className="transition-all duration-300 hover:text-gray-300 py-3"
            >
              À propos
            </button>
          </li>
          <li className="transition-all duration-300 hover:text-gray-300">
            <button
              onClick={() => handleNavigation("vision")}
              className="transition-all duration-300 hover:text-gray-300 py-3"
            >
              Notre vision
            </button>
          </li>
          <li className="transition-all duration-300 hover:text-gray-300">
            <button
              onClick={() => handleNavigation("projects")}
              className="transition-all duration-300 hover:text-gray-300 py-3"
            >
              Nos projets
            </button>
          </li>
          <li className="transition-all duration-300 hover:text-gray-300">
            <button
              onClick={() => handleNavigation("team")}
              className="transition-all duration-300 hover:text-gray-300 py-3"
            >
              Notre équipe
            </button>
          </li>
          <li className="transition-all duration-300 hover:text-gray-300">
            <button
              onClick={() => handleNavigation("contact")}
              className="transition-all duration-300 hover:text-gray-300 py-3"
            >
              Contact
            </button>
          </li>

          {/* Lien vers "Faire un don" dans le menu sur mobile */}
          <li className="md:hidden mb-8">
            <a
              href="#donate"
              className="bg-white beige font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300"
              onClick={closeMenu}
            >
              Faire un don
            </a>
          </li>
        </ul>
      </nav>

      {/* Menu principal pour les écrans plus grands */}
      <div className="hidden md:flex md:space-x-8">
        <a
          href="#donate"
          className="bg-white beige font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-300"
        >
          Faire un don
        </a>
      </div>
    </header>
  );
};

export default Header;
