import React from "react";
import AddJob from "../components/AddJob";
import NavBar from "../components/layout/NavBar";
import SideBar from "../components/layout/SideBar";
import "../styles/style.css";

const Add = () => {
  return (
    <div>
      <NavBar />
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
        <SideBar />
        <AddJob />
      </div>
    </div>
  );
};

export default Add;
