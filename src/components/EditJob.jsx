import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeJob } from "../features/jobs/jobSlice";
import "../styles/style.css";

const EditJob = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState("");
  const [deadline, setDeadline] = useState("");
  const [editMode, setEditMode] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError } = useSelector((state) => state.job);
  const { editing } = useSelector((state) => state.job) || {};

  const reset = () => {
    setTitle("");
    setType("");
    setSalary("");
    setDeadline("");
  };
  // listen for edit mode active
  useEffect(() => {
    const { id, title, salary, type, deadline } = editing || {};
    if (id) {
      setEditMode(true);
      setTitle(title);
      setType(type);
      setSalary(salary);
      setDeadline(deadline);
    } else {
      setEditMode(false);
      reset();
    }
  }, [editing]);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      changeJob({
        id: editing?.id,
        data: {
          title,
          type,
          salary: Number(salary),
          deadline: deadline,
        },
      })
    );
    setEditMode(false);
    reset();
    navigate("/");
  };

  return (
    <div className="lg:pl-[14rem] mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <h1 className="mb-10 text-center lws-section-title">Edit Job</h1>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={editMode ? handleUpdate : null} className="space-y-6">
            <div className="fieldContainer">
              <label
                htmlFor="lws-JobTitle"
                className="text-sm font-medium text-slate-300"
              >
                Job Title
              </label>
              <select
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                id="lws-JobTitle"
                name="lwsJobTitle"
                required
              >
                <option value="" hidden selected>
                  Select Job
                </option>
                <option>Software Engineer</option>
                <option>Software Developer</option>
                <option>Full Stack Developer</option>
                <option>MERN Stack Developer</option>
                <option>DevOps Engineer</option>
                <option>QA Engineer</option>
                <option>Product Manager</option>
                <option>Social Media Manager</option>
                <option>Senior Executive</option>
                <option>Junior Executive</option>
                <option>Android App Developer</option>
                <option>IOS App Developer</option>
                <option>Frontend Developer</option>
                <option>Frontend Engineer</option>
              </select>
            </div>

            <div className="fieldContainer">
              <label htmlFor="lws-JobType">Job Type</label>
              <select
                onChange={(e) => setType(e.target.value)}
                value={type}
                id="lws-JobType"
                name="lwsJobType"
                required
              >
                <option value="" hidden selected>
                  Select Job Type
                </option>
                <option>Full Time</option>
                <option>Internship</option>
                <option>Remote</option>
              </select>
            </div>

            <div className="fieldContainer">
              <label htmlFor="lws-JobSalary">Salary</label>
              <div className="flex border rounded-md shadow-sm border-slate-600">
                <span className="input-tag">BDT</span>
                <input
                  type="number"
                  name="lwsJobSalary"
                  id="lws-JobSalary"
                  required
                  className="!rounded-l-none !border-0"
                  placeholder="20,00,000"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                />
              </div>
            </div>

            <div className="fieldContainer">
              <label htmlFor="lws-JobDeadline">Deadline</label>
              <input
                type="date"
                name="lwsJobDeadline"
                id="lws-JobDeadline"
                required
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>

            <div className="text-right">
              <button
                type="submit"
                id="lws-submit"
                className="cursor-pointer btn btn-primary w-fit"
                disabled={isLoading}
              >
                Edit
              </button>
              {!isLoading && isError && (
                <p className="error">There was an error occured</p>
              )}
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default EditJob;
