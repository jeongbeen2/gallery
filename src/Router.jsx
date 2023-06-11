import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import Card from "./screens/Card";
import Home from "./screens/Home";
import PaintingDetail from "./screens/PaintingDetail";
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
        path: "paintingDetail/:artId",
        element: <PaintingDetail />,
        errorElement: <ErrorComponent/>,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;