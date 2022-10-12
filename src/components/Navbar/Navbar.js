import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-4 bg-gradient-to-r from-green-400 to-blue-500 text-xl font-medium text-white">
      <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <Link
              to="/home"
              className="flex items-center px-4 -mb-1 hover:border-b-2 focus:text-yellow-400"
            >
              Home
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/topics"
              className="flex items-center px-4 -mb-1 hover:border-b-2 focus:text-yellow-400 "
            >
              Topics
            </Link>
          </li>
        </ul>
        <Link
          to="/home"
          aria-label="Back to homepage"
          className="flex flex-col items-center p-2 "
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/5692/5692030.png"
            alt=""
            width={"50px"}
            height={"50px"}
          />
          <p className="text-white text-xs ">QUIZ-Hunter</p>
        </Link>
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <Link
              to="/statistics"
              className="flex items-center px-4 -mb-1 hover:border-b-2 focus:text-yellow-400 "
            >
              Statistics
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/blog"
              className="flex items-center px-4 -mb-1 hover:border-b-2 focus:text-yellow-400 "
            >
              Blog
            </Link>
          </li>
        </ul>
        <div className="flex md:hidden">
          <div>
            <Link
              to="/home"
              className="flex items-center px-4 -mb-1 hover:border-b-2 focus:text-yellow-400"
            >
              Home
            </Link>
            <Link
              to="/topics"
              className="flex items-center px-4 -mb-1 mt-1 hover:border-b-2 focus:text-yellow-400 "
            >
              Topics
            </Link>
          </div>
          <div>
            <Link
              to="/statistics"
              className="flex items-center px-4 -mb-1 hover:border-b-2 focus:text-yellow-400 "
            >
              Statistics
            </Link>
            <Link
              to="/blog"
              className="flex items-center px-4 -mb-1 mt-1 hover:border-b-2 focus:text-yellow-400 "
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
