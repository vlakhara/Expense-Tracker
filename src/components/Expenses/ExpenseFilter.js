import React from "react";
import "./ExpenseFilter.css";
const ExpenseFilter = (props) => {
  const filterYearChangeHandler = (event) => {
    return props.onFilterYearChange(event.target.value);
  };

  return (
    <div className="expense-filter">
      <div className="expense-filter__title">Filter by year</div>
      <div className="expense-filter__dropdown">
        <select
          value={props.selectedYear}
          onChange={filterYearChangeHandler}
          name="year_selection"
          className="year_selection"
          id="year_selection"
        >
          <option value="2022" className="year">
            2022
          </option>
          <option value="2021" className="year">
            2021
          </option>
          <option value="2020" className="year">
            2020
          </option>
          <option value="2019" className="year">
            2019
          </option>
        </select>
      </div>
    </div>
  );
};
export default ExpenseFilter;
