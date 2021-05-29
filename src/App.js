import React, { useState } from "react";
import Expenses from "./componets/Expenses/Expenses";
import NewExpense from "./componets/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [...prevState, {
        id: `e${prevState.length+1}`,
        title: expense.title,
        amount: parseFloat(expense.amount),
        date: expense.date,
      }];
    });
    // console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
