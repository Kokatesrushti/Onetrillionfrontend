import React from "react";

const CardDisplay = ({ cards }) => {
  return (
    <div className="flex justify-center mt-4 space-x-4">
    {cards.map((card, index) => (
      <div key={index} className="bg-white p-4 rounded shadow">
        <img src={card.imageURL} alt="iamge" className="w-10 h-10"/>
        <h2 className="text-xl font-bold mb-2">{card.heading}</h2>
        <p>{card.paragraph1}</p>
        <p>{card.paragraph2}</p>
      </div>
    ))}
  </div>
  );
};

export default CardDisplay;
