import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import "./App.css";

function App() {
  return (
    <Router basename='/association'>
      <div className="App">
        {/* Définition des routes */}
        <Routes>
          {/* Page d'accueil */}
          <Route path="/" element={<Home />} />

          {/* Page de contact */}
          <Route path="/contact" element={<Contact />} />

          {/* Route par défaut pour les pages non trouvées */}
          <Route
            path="*"
            element={
              <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-4xl font-bold">404 - Page non trouvée</h1>
                <p className="mt-4 text-gray-600">La page que vous recherchez n'existe pas.</p>
                <a
                  href="/"
                  className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Retour à l'accueil
                </a>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
