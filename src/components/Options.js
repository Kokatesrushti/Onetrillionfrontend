import React from "react";

const Options = ({ selectedOption, handleOptionClick }) => {
  const options = ["Inventory Summary", "Not Promoted", "Best Performing", "Worst Performing"];

  return (
    <div className="flex justify-center mt-8 space-x-4">
    {options.map((option, index) => (
      <button
        key={index}
        className={`${
          selectedOption === option ? "bg-green-500" : "bg-gray-300"
        } py-2 px-4 rounded cursor-pointer`}
        onClick={() => handleOptionClick(option)}
      >
        {option}
      </button>
    ))}
  </div>
  );
};

export default Options;
