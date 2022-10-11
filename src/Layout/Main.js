import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export const QuizDataContext = createContext([]);

const Main = () => {
  const quizData = useLoaderData();
  const quizCategories = quizData.data;
  return (
    <div>
      <QuizDataContext.Provider value={quizCategories}>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </QuizDataContext.Provider>
    </div>
  );
};

export default Main;
