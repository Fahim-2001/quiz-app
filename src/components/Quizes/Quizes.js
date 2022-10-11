import React from "react";
import { useLoaderData } from "react-router-dom";

const Quizes = () => {
  const quizes = useLoaderData();
  console.log(quizes);
  return (
    <div>
      <h1>Quizes</h1>
    </div>
  );
};

export default Quizes;
