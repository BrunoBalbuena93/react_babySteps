import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
const Expenses = ({ expenses }) => {
  return (
    <div className="expenses">
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          ></ExpenseItem>
        );
      })}
    </div>
  );
};

export default Expenses;
