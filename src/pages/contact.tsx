import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Contenu principal */}
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Contactez-nous</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Formulaire de contact */}
          <div className="flex-1 bg-gray-100 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h2>
            <form action="#" method="POST">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Votre nom"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Votre email"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Votre message"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Envoyer
              </button>
            </form>
          </div>

          {/* Informations de contact */}
          <div className="flex-1 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Nos informations</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="material-icons text-blue-500 mr-3">phone</span>
                <p className="text-gray-700">+33 1 23 45 67 89</p>
              </li>
              <li className="flex items-center">
                <span className="material-icons text-blue-500 mr-3">email</span>
                <p className="text-gray-700">contact@monprojet.com</p>
              </li>
              <li className="flex items-center">
                <span className="material-icons text-blue-500 mr-3">location_on</span>
                <p className="text-gray-700">123 Rue Exemple, Paris, France</p>
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
