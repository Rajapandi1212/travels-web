import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutPage from "./pages/AboutPage";
import LandingPage from "./pages/LandingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "about",
        element: <AboutPage />,

        // loader: async (props) => {
        //   return fetch("https://fakestoreapi.com/products/1").then((res) =>
        //     res.json()
        //   );
        // },
        errorElement: <>error occured</>,
      },
    ],
  },
]);
