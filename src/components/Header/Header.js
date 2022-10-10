import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header flex justify-center items-center">
      <p className="text-3xl ">
        Welcome to
        <span className="text-4xl font-semibold"> QUIZ-Hunter</span>
        devlopers!
      </p>
    </div>
  );
};

export default Header;
