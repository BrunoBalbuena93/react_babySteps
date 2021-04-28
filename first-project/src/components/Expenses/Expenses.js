import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from './ExpensesChart';
import Card from "../UI/Card";
import "./Expenses.css";
const Expenses = ({ expenses }) => {
  const [filterDate, setFilterDate] = useState("2019");

  const changeDate = (selectedYear) => {
    // setFilterDate(e.target.value);
    console.log(selectedYear);
    setFilterDate(selectedYear);
  };
  let expensesContent = <p>No expenses found this year</p>;
  const filterExpenses = expenses.filter(
    (expense) => filterDate === String(expense.date.getFullYear())
  );
  if (filterExpenses.length > 0) {
    expensesContent = filterExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        ></ExpenseItem>
      );
    });
  }
  return (
    <Card className="expenses">
      <ExpenseFilter
        onChangeDate={changeDate}
        initialYear={filterDate}
      ></ExpenseFilter>
      <ExpensesChart expenses={filterExpenses}></ExpensesChart>
      {expensesContent}
    </Card>
  );
};

export default Expenses;
