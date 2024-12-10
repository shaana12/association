import React from "react";

// Déclaration d'une interface TypeScript pour définir les propriétés que le composant Button attend.
interface ButtonProps {
    label: string; // La chaîne de caractères à afficher sur le bouton.
    onClick?: () => void; // Une fonction à exécuter lorsque le bouton est cliqué (optionnelle).
    type?: "button" | "submit" | "reset";
    className?: string; // Permet d'ajouter des classes CSS supplémentaires (optionnelle).
  }


// Déclaration du composant Button. 
// React.FC<ButtonProps> signifie que ce composant est une fonction React qui prend les propriétés définies dans ButtonProps.
const Button: React.FC<ButtonProps> = ({ label, onClick, type = "button", className }) => {
    return (
      // Rendu d'un élément <button> avec les propriétés et classes spécifiées.
      <button
    type={type} // Utilise la propriété type ici
    onClick={onClick} // Attachement de la fonction onClick pour gérer les clics sur le bouton.
    className={`bg-beige border-2 border-white text-white  py-2 px-4 rounded-full transform transition-transform duration-300 hover:scale-110 ${className}`}
>
    {label} {/* Affichage du texte du bouton (propriété label). */}
</button>

    );
  };
  
  // Exportation du composant Button pour qu'il puisse être utilisé dans d'autres fichiers.
  export default Button;
