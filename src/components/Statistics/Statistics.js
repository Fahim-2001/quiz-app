import React, { useContext } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { QuizDataContext } from "../../Layout/Main";

const Statistics = () => {
  const quizCategories = useContext(QuizDataContext);
  // console.log(quizCategories);
  return (
    <div className="flex flex-col justify-center items-center mt-20 ">
      <LineChart
        width={350}
        height={250}
        data={quizCategories}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="total" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis dataKey="total" />
        <Tooltip />
      </LineChart>
      <p>A Graph of number of containing questions in every category</p>
    </div>
  );
};

export default Statistics;
