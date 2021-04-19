import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ date, title, amount }) => {
  return (
    <div className="expense-item">
      <div>
        <ExpenseDate date={date}></ExpenseDate>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
