import React from "react";
import "./newExpense.css";
import ExpenseForm from "./ExpenseForm";

const newExpense = (props) => {

    const saveExpenseDataHandler = (entereaExpenseData) => {
        const expenseData = {
            ...entereaExpenseData,
            id : Math.random().toString()
        }

        props.onAddExpense(expenseData);

        // console.log(expenseData); 
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default newExpense;