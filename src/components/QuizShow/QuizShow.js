import React from "react";

const QuizShow = ({ quiz }) => {
  const { question, options, correctAnswer } = quiz;
  return (
    <div className="flex flex-col justify-center items-center m-4 border-2 bg-gradient-to-r from-cyan-500 to-blue-500  shadow-lg dark:bg-gray-800 w-2/4 rounded-md text-white">
      <h1 className="text-white text-md font-medium m-2">{question}</h1>
      <div className="grid grid-cols-2 gap-2 ">
        <label htmlFor="1">
          <p>
            <input type="radio" name="answer" id="1" value={options[0]} />{" "}
            {options[0]}
          </p>
        </label>
        <label htmlFor="2">
          <p>
            <input type="radio" name="answer" id="2" value={options[1]} />{" "}
            {options[1]}
          </p>
        </label>
        <label htmlFor="3">
          <p>
            <input type="radio" name="answer" id="3" value={options[2]} />{" "}
            {options[2]}
          </p>
        </label>
        <label htmlFor="4">
          <p>
            <input type="radio" name="answer" id="4" value={options[3]} />{" "}
            {options[3] ? options[3] : "Above All"}
          </p>
        </label>
      </div>
    </div>
  );
};

export default QuizShow;
