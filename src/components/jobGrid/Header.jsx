import React from "react";
import { useDispatch } from "react-redux";
import { search, sortSelected } from "../../features/filter/filterSlice";
import "../../styles/style.css";

const Header = () => {
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const searchText = e.target.value;
    dispatch(search(searchText));
  };
  const handleSortChange = (event) => {
    dispatch(sortSelected(event.target.value));
  };

  return (
    <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
      <h1 className="lws-section-title">All Available Jobs</h1>
      <div className="flex gap-4">
        <div className="search-field group flex-1">
          <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
          <input
            type="text"
            placeholder="Search Job"
            className="search-input"
            id="lws-searchJob"
            onChange={handleInput}
          />
        </div>
        <select
          id="lws-sort"
          name="sort"
          autoComplete="sort"
          className="flex-1"
          onChange={handleSortChange}
        >
          <option>Default</option>
          <option value="low_to_high">Salary (Low to High)</option>
          <option value="high_to_low">Salary (High to Low)</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
