import React from "react";
import EditJob from "../components/EditJob";
import NavBar from "../components/layout/NavBar";
import SideBar from "../components/layout/SideBar";
import "../styles/style.css";

const Edit = () => {
  return (
    <div>
      <NavBar />
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
        <SideBar />
        <EditJob />
      </div>
    </div>
  );
};

export default Edit;
