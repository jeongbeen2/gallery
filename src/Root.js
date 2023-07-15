import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./root.style.css";

function Root() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Header />
      <Outlet />
    </div>
  );
}

export default Root;
