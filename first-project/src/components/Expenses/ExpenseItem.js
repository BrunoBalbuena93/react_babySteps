import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = ({ date, title, amount }) => {
  const [title_, setTitle] = useState(title);
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={date}></ExpenseDate>
      </div>
      <div className="expense-item__description">
        <h2>{title_}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
