import React from "react";
import "../App.css";
const Card = ({ card }) => {
  return (
    <div className="group relative h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] bg-gray-500 border-transparent rounded-xl">
      <div
        key={card.image}
        style={{
          backgroundImage: `url(${card.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
        }}
        className="w-full h-full absolute inset-0 z-0 transition-transform duration-500 rounded-xl border-transparent"
      ></div>
    </div>
  );
};

export default Card;
