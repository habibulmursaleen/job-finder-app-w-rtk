import React, { useEffect } from "react";
import "../../styles/style.css";
import SingleJob from "./SingleJob";

import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../features/jobs/jobSlice";

const JobsList = () => {
  const dispatch = useDispatch();

  const { filter, sort, search } = useSelector((state) => state.filter);
  const { jobs, isLoading, isError, error } = useSelector((state) => state.job);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const filterByStatus = (job) => {
    switch (filter) {
      case "All":
        return job.type;
      case "Full Time":
        return job.type === "Full Time";
      case "Internship":
        return job.type === "Internship";
      case "Remote":
        return job.type === "Remote";

      default:
        return job.type;
    }
  };

  const filterByDropdown = (jobs) => {
    switch (sort) {
      case "low_to_high":
        return [...jobs].sort(
          (b, a) => parseInt(b.salary) - parseInt(a.salary)
        );

      case "high_to_low":
        return [...jobs].sort(
          (a, b) => parseInt(b.salary) - parseInt(a.salary)
        );

      default:
        return jobs;
    }
  };

  const filterBySearch = (job) => {
    if (search?.length > 0) {
      return job.title.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  };

  // decide what to render
  let content = null;
  if (isLoading) content = <div className="col-span-12">Loading...</div>;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isError && !isLoading && jobs?.length === 0) {
    content = <div className="col-span-12">No blogs found!</div>;
  }

  if (!isLoading && !isError && jobs?.length > 0) {
    content = filterByDropdown(jobs)
      .filter(filterByStatus)
      .filter(filterBySearch)
      .map((job) => <SingleJob key={job.id} job={job} />);
  }

  return <div className="jobs-list">{content}</div>;
};

export default JobsList;
