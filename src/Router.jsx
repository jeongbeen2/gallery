import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import Card from "./screens/Card";
import Home from "./screens/Home";
import ArtDetail from "./screens/ArtDetail";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./components/ErrorComponent";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "card",
        element: <Card />,
        errorElement: <ErrorComponent/>,
      },
      {
        path: "artDetail/:artId",
        element: <ArtDetail />,
        errorElement: <ErrorComponent/>,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;