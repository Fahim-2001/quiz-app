import React from "react";

const ParticularTopic = ({ quizCategory }) => {
  const { logo, name, total } = quizCategory;
  return (
    <div className="flex items-center max-w-lg m-4 overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg dark:bg-gray-800">
      <div className="w-1/3 bg-cover">
        <img src={logo} alt="" />
      </div>

      <div className="w-2/3 p-4 md:p-4">
        <h1 className="text-2xl font-bold text-white">{name}</h1>

        <p className="mt-2 text-sm text-white">Number of quiz : {total}</p>

        <div className="flex justify-center mt-3 item-center">
          <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
            Start the game
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParticularTopic;
