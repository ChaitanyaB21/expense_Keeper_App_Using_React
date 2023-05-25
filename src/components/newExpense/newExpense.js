import React , {useState} from "react";
import "./newExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const [isEditing , setIsEditing] = useState(false);

    const saveExpenseDataHandler = (entereaExpenseData) => {
        const expenseData = {
            ...entereaExpenseData,
            id : Math.random().toString()
        }

        props.onAddExpense(expenseData);
        setIsEditing(false);
        // console.log(expenseData); 
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const cancelClickHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
        {!isEditing ? <button onClick={startEditingHandler} >Add New Expense</button> :
        <ExpenseForm cancelBtn={cancelClickHandler} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    )
}

export default NewExpense;