import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [entry, setEntry] = useState({ title: "", amount: "", date: "" });
  const [activ, setActiv] = useState(false);
  const submitHandler = (event) => {
    event.preventDefault();
    props.addExpense(entry);
    setEntry({ title: "", amount: "", date: "" });
    activate();
  };

  const changeTitle = (event) => {
    setEntry({ ...entry, title: event.target.value });
  };

  const changeAmount = (event) => {
    setEntry({ ...entry, amount: event.target.value });
  };

  const changeDate = (event) => {
    setEntry({ ...entry, date: event.target.value });
  };
  const activate = () => {
    setActiv(!activ);
  };

  if (activ) {
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={entry.title} onChange={changeTitle} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={entry.amount}
              onChange={changeAmount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={entry.date}
              onChange={changeDate}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={activate}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }
  return <button onClick={activate}>Add Expense</button>;
};

export default ExpenseForm;
