import React, { useState } from "react";
import { toast } from "react-toastify";

const QuizShow = ({ quiz }) => {
  const { question, options, correctAnswer } = quiz;
  // const [ans, setAns] = useState();
  // console.log(ans);
  // if (ans === correctAnswer) {
  //   console.log("Correct!");
  // } else {
  //   console.log("Wrong!");
  // }
  const setAns = (ans) => {
    console.log(ans);
    if (ans === correctAnswer) {
      toast.success("Correct!", { autoClose: 750 });
    } else {
      toast.warning("Wrong Answer", { autoClose: 750 });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center m-4 border-2 bg-gradient-to-r from-cyan-500 to-blue-500  shadow-lg dark:bg-gray-800 w-2/4 rounded-md text-white">
      <h1 className="text-white text-md font-medium m-2">{question}</h1>
      <div className="grid grid-cols-2 gap-2 m-4">
        <button
          className="focus:bg-slate-600 rounded-md"
          onClick={() => setAns(options[0])}
        >
          1.{options[0]}
        </button>
        <button
          className="focus:bg-slate-600 rounded-md"
          onClick={() => setAns(options[1])}
        >
          2.{options[1]}
        </button>
        <button
          className="focus:bg-slate-600 rounded-md"
          onClick={() => setAns(options[2])}
        >
          3.{options[2]}
        </button>
        <button
          className="focus:bg-slate-600 rounded-md"
          onClick={() => setAns(options[3])}
        >
          4.{options[3]}
        </button>
      </div>
    </div>
  );
};

export default QuizShow;
