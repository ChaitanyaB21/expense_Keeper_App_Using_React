import React , {useState} from "react";
import "./ExpenseForm.css";



const ExpenseForm = (props) => {

    const [enteredTitle , setEnteredTitle] = useState('');
    const [enteredAmount , setEnteredAmount] = useState('');
    const [enteredDate , setEnteredDate] = useState('');

    // const [userInput , setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredDate: '',
    //     enteredAmount: '' 
    // })

    const titleChangeHandler = (event) => {
        // setUserInput({
        //     enteredTitle : event.target.value ,
        //     enteredDate: '',
        //     enteredAmount: ''
        // })

        // setUserInput((prevState)=>{
        //     return({...prevState , enteredTitle:event.target.value}) 
        // })
        
        setEnteredTitle(event.target.value);

    }
    
    const amountChangeHandler = (event) => {
        // setUserInput({
        //     enteredTitle : '' ,
        //     enteredDate: event.target.value,
        //     enteredAmount: ''
        // })

        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        // setUserInput({
        //     enteredTitle : '' ,
        //     enteredDate: '',
        //     enteredAmount: event.target.value
        // })

        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        // console.log(expenseData);

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }


    return (
        <form onSubmit={submitHandler} >
            <div className="new-expense__controls" >
                <div className="new-expense__control" >
                    <label>Title</label>
                    <input value={enteredTitle} onChange={titleChangeHandler} type='text' />
                </div>
                <div className="new-expense__control" >
                    <label>Amount (in Rupees) </label>
                    <input value={enteredAmount} onChange={amountChangeHandler} type='number' min="1" step="0.01" />
                </div>
                <div className="new-expense__control" >
                    <label>Date</label>
                    <input value={enteredDate} onChange={dateChangeHandler} type='date' min="2019-01-01" max="2023-12-31"  />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;