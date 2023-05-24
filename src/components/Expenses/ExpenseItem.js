import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
    const title = props.title;

    // const [title , setTitle] = useState(props.title);

    // console.log(props.title);

    // const clickedHandler = () => {
    //     setTitle('Updated');
    // }

    return (
        <li>
            <div className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price"><span>&#8377;</span>{props.amount}</div>
                </div>
                {/* <button onClick={clickedHandler} >Change title</button> */}
            </div>
        </li>);
}

export default ExpenseItem;