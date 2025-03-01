import React from "react";

// Définir un type pour l'expérience
type Experience = {
  icon: React.JSX.Element; // ou `string` si l'icône est une chaîne de caractères
  date: string;
  title: string;
  company: string;
};

export const CardShineEffectCSS = ({ experience }: { experience: Experience }) => {
  return (
    <div className="card-shine-effect">
      <p className="icon text-white space-x-4 flex">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        /> */}
        {experience.icon}
        <span className="text-blue-500">{experience.date}</span>
      </p>
      <h3 className="title">{experience.title}</h3>
      <p className="description">{experience.company}</p>
    </div>
  );
};
