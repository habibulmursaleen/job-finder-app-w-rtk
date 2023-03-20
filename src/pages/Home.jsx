import React from "react";
import JobGrid from "../components/jobGrid/JobGrid";
import NavBar from "../components/layout/NavBar";
import SideBar from "../components/layout/SideBar";
import "../styles/style.css";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
        <SideBar />
        <JobGrid />
      </div>
    </div>
  );
};

export default Home;
