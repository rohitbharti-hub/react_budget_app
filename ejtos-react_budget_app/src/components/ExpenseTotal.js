import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import DisplayCurrency from "./DisplayCurrency";

const ExpenseTotal = (props) => {
  const { expenses } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  return (
    <div className="alert alert-primary">
        Spent so far:
      <span className="d-flex align-items-center">
        <DisplayCurrency selectedCurrency={props.selectedCurrency} />
        {totalExpenses}
      </span>
    </div>
  );
};
export default ExpenseTotal;
