import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="m-12">
        <h1 className="mx-4 text-xl text-gray-700 dark:text-white">
          What is the purpose of React Router?
        </h1>

        <div className="flex mt-8 md:mx-10 justify-center">
          <span className="border border-blue-500"></span>

          <p className="max-w-3xl px-4 text-gray-500  dark:text-gray-300">
            Routing is a process in which a user is directed to different pages
            based on their action or request. ReactJS Router is mainly used for
            developing Single Page Web Applications. React Router is used to
            define multiple routes in the application. When a user types a
            specific URL into the browser, and if this URL path matches any
            'route' inside the router file, the user will be redirected to that
            particular route. React Router is a standard library system built on
            top of the React and used to create routing in the React application
            using React Router Package. It provides the synchronous URL on the
            browser with data that will be displayed on the web page. It
            maintains the standard structure and behavior of the application and
            mainly used for developing single page web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
