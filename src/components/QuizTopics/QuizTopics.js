import React from "react";

const QuizTopics = ({ quiz }) => {
  const { logo, name, total } = quiz;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={logo} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className=" items-center text-center">
        <h2 className="text-xl font-medium">{name}</h2>
        <p className="m-4">Total Quiz : {total}</p>
        <div className="card-actions">
          <button className="bg-blue-400 text-white px-8 py-2 mb-2 rounded-md">
            Start Quiz!
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizTopics;
