// import logo from "./logo.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import Quizes from "./components/Quizes/Quizes";
import Statistics from "./components/Statistics/Statistics";
import Topics from "./components/Topics/Topics";
import Main from "./Layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      loader: async () => {
        return fetch(`https://openapi.programming-hero.com/api/quiz`);
      },
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        { path: "/topics", element: <Topics></Topics> },
        { path: "/statistics", element: <Statistics></Statistics> },
        { path: "/blog", element: <Blog></Blog> },
        {
          path: "/quizes/:quizesID",
          loader: async ({ params }) => {
            // console.log(params);
            const url = `https://openapi.programming-hero.com/api/quiz/${params.quizesID}`;
            return fetch(url);
          },
          element: <Quizes></Quizes>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
