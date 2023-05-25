import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css"


function Expenses(props) {

    const [filteredYear, setFilterYear] = useState("2019");

    const filterChangeHandler = (selectedYear) => {
        setFilterYear(selectedYear);
    }

    const filteredArray = props.items.filter((data) => {         /*Array being filtered on the basis of the entered year */
        return data.date.getFullYear().toString() === filteredYear;
    });

    

    return (
        <div>
            <div className="expenses" >
                <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} />

                {/* {filteredArray.length === 0 ? (
                    <p>No Expenses this year</p>
                ) : (
                    <div>
                        {filteredArray.map((expense) => {
                            return (
                                <ExpenseItem
                                    key={expense.id}
                                    title={expense.title}
                                    amount={expense.amount}
                                    date={expense.date}
                                />
                            );
                        })}
                    </div>
                )} */}
                <ExpensesChart expenses = {filteredArray} /> 
                <ExpensesList items={filteredArray} />

                {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
                <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
                <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
                <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} /> */}
            </div>
        </div>
    );
}

export default Expenses;