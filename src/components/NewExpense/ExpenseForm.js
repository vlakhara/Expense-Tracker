import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newExpense = {
      title: enteredTitle[0].toUpperCase() + enteredTitle.slice(1),
      amount: +enteredAmount,
      date: new Date(
        new Date(enteredDate).getFullYear(),
        new Date(enteredDate).getMonth(),
        new Date(enteredDate).getDate() + 1
      ),
    };
    props.onSaveExpenseData(newExpense);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form className="addNewExpense" onSubmit={submitHandler}>
      <div className="form-controls">
        <div className="form-control">
          <label> Title </label>
          <input
            type="text"
            value={enteredTitle}
            placeholder="Expense"
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="form-control">
          <label> Amount </label>
          <input
            type="number"
            value={enteredAmount}
            min={0.1}
            step={0.01}
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className="form-control">
          <label> Date </label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
            required
          />
        </div>
        <div className="form-control">
          <span></span>
          <button type="submit"> Add </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
