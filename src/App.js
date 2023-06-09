// import ExpenseItem from "./components/ExpenseItem";
import React , {useState} from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/newExpense/newExpense";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 4.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: 'e2',
        title: 'New TV',
        amount: 30799.49,
        date: new Date(2021, 2, 12)
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 15294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 13450,
        date: new Date(2021, 5, 12),
    },
];

function App() {

    const [expenses , setExpenses ] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses(prevExpenses => {
            return ([expense , ...prevExpenses])
        });
    }

    return (
        <div>
            <NewExpense onAddExpense = {addExpenseHandler} />
            <Expenses items={expenses} /> 
        </div>
    );
}

export default App;
