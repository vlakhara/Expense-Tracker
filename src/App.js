import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const [newExpenses, setNewExpense] = useState([]);

  const addExpenseHandler = (expense) => {
    setNewExpense((prevExpenses) => [expense, ...prevExpenses]);
  };
  return (
    <div className="App">
      <NewExpense getNewExpense={addExpenseHandler} />
      <Expenses expensesData={newExpenses} />
    </div>
  );
};
export default App;
