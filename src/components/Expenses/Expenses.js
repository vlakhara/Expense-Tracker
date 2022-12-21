import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import DisplayChart from "./DisplayChart";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2022");
  const getFilterYear = (newFilterYear) => {
    setFilterYear(newFilterYear);
  };
  const filteredExpenses = props.expensesData.filter(
    (expense) => expense.date.getFullYear().toString() == filterYear
  );
  const content =
    filteredExpenses.length === 0 ? (
      <div className="no-expenses">
        <p>No expenses found</p>
      </div>
    ) : (
      filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })
    );
  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={filterYear}
        onFilterYearChange={getFilterYear}
      />
      <DisplayChart expenses={filteredExpenses} />
      {content}
    </Card>
  );
};

export default Expenses;
