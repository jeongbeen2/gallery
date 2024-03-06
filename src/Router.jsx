import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import SlideGallery from "./screens/SlideGallery";
import SandBox from "./screens/SandBox";
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
        path: "slide",
        element: <SlideGallery />,
        errorElement: <ErrorComponent/>,
      },
      {
        path: "sandBox",
        element: <SandBox />,
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