import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizShow from "../QuizShow/QuizShow";

const Quizes = () => {
  const quizes = useLoaderData();
  // const quizInfo = quizes.data;
  const quizData = quizes.data.questions;
  console.log(quizData);

  return (
    <div className="flex flex-col justify-center items-center m-4">
      {quizData.map((quiz) => (
        <QuizShow key={quiz.id} quiz={quiz}></QuizShow>
      ))}
    </div>
  );
};

export default Quizes;
