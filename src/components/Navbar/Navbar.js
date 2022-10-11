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
        <button title="Button" type="button" className="p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
