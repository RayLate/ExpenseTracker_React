import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const newExpenseHandler = () => {
    setShowForm(true);
  };

  const hideForm = () => {
    setShowForm(false);
  };

  if (showForm === false) {
    return (
      <div className="new-expense">
        <button type="button" onClick={newExpenseHandler}>
          Add New Expense
        </button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={hideForm}
      ></ExpenseForm>
    </div>
  );
};

export default NewExpense;
