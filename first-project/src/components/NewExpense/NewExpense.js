import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      date: new Date(enteredData.date),
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm addExpense={saveExpenseDataHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
