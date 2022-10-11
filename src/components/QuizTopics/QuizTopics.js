import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const QuizTopics = ({ quizType }) => {
  const { id, logo, name, total } = quizType;

  const navigate = useNavigate();
  const handleShowQuizes = (id) => {
    navigate(`/quizes/${id}`);
  };

  return (
    <div className="max-w-xs rounded-lg shadow-lg dark:bg-gray-800 bg-gradient-to-r from-cyan-500 to-blue-500">
      <img
        src={logo}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl text-white font-semibold tracking-wide">
            {name}
          </h2>
          <p className="text-white">Total Quizes : {total}</p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 text-white font-medium uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
          onClick={() => handleShowQuizes(id)}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizTopics;
