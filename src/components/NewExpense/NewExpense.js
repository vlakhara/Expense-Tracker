import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import Card from "../UI/Card";
const NewExpense = (props) => {
  const [isAdding, setIsAdding] = useState(false);
  const getForm = () => {
    setIsAdding(true);
  };
  const getNewExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 100).toString(),
    };
    props.getNewExpense(expenseData);
  };

  return (
    <Card className="new-expense">
      {!isAdding && (
        <button className="addNew" onClick={getForm}>
          Add new expense
        </button>
      )}
      {isAdding && <ExpenseForm onSaveExpenseData={getNewExpenseData} />}
    </Card>
  );
};

export default NewExpense;
