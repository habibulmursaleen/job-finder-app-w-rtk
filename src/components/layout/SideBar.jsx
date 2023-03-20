import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { filterSelected } from "../../features/filter/filterSlice";
import "../../styles/style.css";

const SideBar = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (filterValue) => {
    dispatch(filterSelected(filterValue));
  };

  return (
    <div className="sidebar">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link
              to="/"
              className="main-menu menu-active"
              id="lws-alljobs-menu"
            >
              <i className="fa-solid fa-briefcase"></i>
              <span
                className="cursor-pointer"
                onClick={() => handleFilterChange("All")}
              >
                {" "}
                All Available Jobs
              </span>
            </Link>
            <ul className="space-y-6 lg:space-y-2">
              <li
                onClick={() => handleFilterChange("Internship")}
                className="sub-menu cursor-pointer"
                id="lws-internship-menu"
              >
                <i className="fa-solid fa-stop !text-[#FF5757]"></i> Internship
              </li>
              <li
                onClick={() => handleFilterChange("Full Time")}
                className="sub-menu cursor-pointer"
                id="lws-fulltime-menu"
              >
                <i className="fa-solid fa-stop !text-[#FF8A00]"></i> Full Time
              </li>
              <li
                onClick={() => handleFilterChange("Remote")}
                className="sub-menu cursor-pointer"
                id="lws-remote-menu"
              >
                <i className="fa-solid fa-stop !text-[#56E5C4]"></i> Remote
              </li>
            </ul>
          </li>
          <li>
            <Link to="/jobs/add" className="main-menu" id="lws-addJob-menu">
              <i className="fa-solid fa-file-circle-plus"></i>{" "}
              <span> Add New Job</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
