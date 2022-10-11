import React, { useContext } from "react";
import { QuizDataContext } from "../../Layout/Main";
import ParticularTopic from "../ParticularTopic/ParticularTopic";

const Topics = () => {
  const quizCategories = useContext(QuizDataContext);
  console.log(quizCategories);
  return (
    <div className="flex flex-col justify-center items-center">
      {quizCategories.map((quizCategory) => (
        <ParticularTopic
          key={quizCategory.id}
          quizCategory={quizCategory}
        ></ParticularTopic>
      ))}
    </div>
  );
};

export default Topics;
