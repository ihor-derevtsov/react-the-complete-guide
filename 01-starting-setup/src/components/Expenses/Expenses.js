import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

export default function Expenses(props)
{

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(item => (item.date.getFullYear().toString() === filteredYear));

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    className="expenses-filter"
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler} />
                {filteredExpenses.map(expense => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date} />
                ))}
            </Card>
        </div>
    );
}
