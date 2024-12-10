import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gris text-white py-6">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <p className="text-sm">
            © {new Date().getFullYear()} JMC. Tous droits réservés.
          </p>
        </div>
        <div className="flex justify-center space-x-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Facebook
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
