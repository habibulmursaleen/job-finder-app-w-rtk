import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { editActive, removeJob } from "../../features/jobs/jobSlice";
import "../../styles/style.css";

const SingleJob = ({ job }) => {
  const dispatch = useDispatch();
  const { id, title, type, salary, deadline } = job;
  let iconColor;
  switch (type) {
    case "Full Time":
      iconColor = "#FF8A00";
      break;
    case "Internship":
      iconColor = "#FF5757";
      break;
    case "Remote":
      iconColor = "#56E5C4";
      break;
    default:
      iconColor = "#000000";
  }

  const handleEdit = () => {
    dispatch(editActive(job));
  };

  const handleDelete = () => {
    dispatch(removeJob(id));
  };

  return (
    <div className="lws-single-job">
      <div className="flex-1 min-w-0">
        <h2 className="lws-title">{title}</h2>
        <div className="job-footers">
          <div className="lws-type">
            {/* <!-- Fulltime - #FF8A00,  --><!-- Internship - #FF5757,  --><!-- Remote - #56E5C4,  --> */}
            <i
              className="fa-solid fa-stop !text-[iconColor] text-lg mr-1.5"
              style={{ color: iconColor }}
            ></i>
            {type}
          </div>
          <div className="lws-salary">
            <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
            BDT {salary}
          </div>
          <div className="lws-deadline">
            <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
            Closing on {deadline}
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <Link to="/jobs/edit/:jobId">
          <span className="hidden sm:block">
            <button
              onClick={handleEdit}
              type="button"
              className="lws-edit btn btn-primary"
            >
              <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
              Edit
            </button>
          </span>
        </Link>

        <span className="sm:ml-3">
          <button
            onClick={handleDelete}
            type="button"
            className="lws-delete btn btn-danger "
          >
            <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
            Delete
          </button>
        </span>
      </div>
    </div>
  );
};

export default SingleJob;
