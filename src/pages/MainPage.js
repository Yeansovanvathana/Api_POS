import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

import "./Mainpage.css";

const MainPage = () => {
  return (
    <div className="main-root">
        <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainPage;
