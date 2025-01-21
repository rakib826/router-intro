import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./components/Home/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Users from "./components/Users/Users.jsx";
import UserDetails from "./components/UserDetails/UserDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Header></Header>,
    element: <Home></Home>,
    children: [
      { path: "/about", element: <About></About> },
      { path: "/contact", element: <Contact></Contact> },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },
      {
        path: "/user/:id",
        loader: (params) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        element: <UserDetails></UserDetails>,
      }
    ],
  },
  // {
  //   path: "/about",
  //   element: <div>About</div>,
  // },
  // {
  //   path: "/contact",
  //   element: <div>Contact</div>,
  // }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
