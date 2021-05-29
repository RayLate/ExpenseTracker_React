import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          date={expense.date}
          amount={expense.amount}
          title={expense.title}
          key={expense.id.toString()}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpensesList;
