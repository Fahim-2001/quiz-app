import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import QuizTopics from "../QuizTopics/QuizTopics";

const Home = () => {
  const quizData = useLoaderData();
  const quizes = quizData.data;
  return (
    <div>
      <Header></Header>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 m-10">
        {quizes.map((quiz) => (
          <QuizTopics key={quiz.id} quiz={quiz}></QuizTopics>
        ))}
      </div>
    </div>
  );
};

export default Home;
