import React from "react";

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-sm mx-auto rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
