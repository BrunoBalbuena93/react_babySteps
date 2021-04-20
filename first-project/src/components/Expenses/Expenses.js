import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";
const Expenses = ({ expenses }) => {
  const [filterDate, setFilterDate] = useState("2019");

  const changeDate = (selectedYear) => {
    // setFilterDate(e.target.value);
    console.log(selectedYear);
    setFilterDate(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter
        onChangeDate={changeDate}
        initialYear={filterDate}
      ></ExpenseFilter>
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
};

export default Expenses;
