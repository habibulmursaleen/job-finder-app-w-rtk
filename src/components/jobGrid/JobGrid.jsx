import React from "react";
import "../../styles/style.css";
import Header from "./Header";
import JobsList from "./JobsList";

const JobGrid = () => {
  return (
    <div className="lg:pl-[14rem]  mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <Header />
        <JobsList />
      </main>
    </div>
  );
};

export default JobGrid;
