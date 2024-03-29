import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home/Home";
import Roots from "./Component/Roots/Roots";
import ListedBooks from "./Component/ListedBooks/ListedBooks";
import BookReview from "./Component/BookReview/BookReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path: "/home",
        loader: () => fetch("bookslists.json"),
        element: <Home></Home>,
      },
      {
        path: "/listedbooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("db.json"),
      },
      {
        path: "/book/:bookId",
        element: <BookReview></BookReview>,
        loader: () => fetch("db.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
