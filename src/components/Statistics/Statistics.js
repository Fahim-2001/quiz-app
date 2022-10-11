import React, { useContext } from "react";
import { QuizDataContext } from "../../Layout/Main";

const Statistics = () => {
  const quizCategories = useContext(QuizDataContext);
  return (
    <div>
      <h1>Statistics {quizCategories.length}</h1>
    </div>
  );
};

export default Statistics;
