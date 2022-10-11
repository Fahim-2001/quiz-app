import React, { useContext } from "react";
import { QuizDataContext } from "../../Layout/Main";
import Header from "../Header/Header";
import QuizTopics from "../QuizTopics/QuizTopics";

const Home = () => {
  const quizCategories = useContext(QuizDataContext);
  // console.log(quizTypesData);
  return (
    <div>
      <Header></Header>
      <div className="grid gap-4 justify-center sm:grid-cols-2 md:grid-cols-4 m-10">
        {quizCategories.map((quizType) => (
          <QuizTopics key={quizType.id} quizType={quizType}></QuizTopics>
        ))}
      </div>
    </div>
  );
};

export default Home;
