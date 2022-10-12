import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizShow from "../QuizShow/QuizShow";

const Quizes = () => {
  const quizes = useLoaderData();
  // console.log(quizes);
  const quizInfo = quizes.data;
  const quizData = quizes.data.questions;
  // console.log(quizData);

  return (
    <div>
      <div className="flex justify-center items-center mt-4">
        <img
          src={quizInfo.logo}
          alt=""
          height={"50px"}
          width={"50px"}
          className="bg-black rounded-md mr-6"
        />
        <p className="text-2xl font-semibold">{quizInfo.name}</p>
      </div>
      <div className="text-xl font-medium">
        <p>
          In this cateory you have to answer
          <span className="font-bold text-2xl ml-2">{quizInfo.total}</span>{" "}
          Quizes
        </p>
      </div>
      <div className="flex flex-col justify-center items-center m-4">
        {quizData.map((quiz) => (
          <QuizShow key={quiz.id} quiz={quiz}></QuizShow>
        ))}
      </div>
    </div>
  );
};

export default Quizes;
