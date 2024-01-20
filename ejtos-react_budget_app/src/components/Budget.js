import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import DisplayCurrency from "./DisplayCurrency";

const Budget = (props) => {
  const { budget } = useContext(AppContext);
  const { expenses } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const handleBudgetChange = (event) => {
    if (event.target.value > 20000) {
      alert("The value cannot exceed remaining funds 20000");
    } else if (event.target.value < 0) {
      alert("The value cannot be negative");
    } else if (totalExpenses > event.target.value) {
      alert("You cannot reduce the budget below the total expenses");
    } else {
      setNewBudget(event.target.value);
    }
  };
  return (
    <div className="alert alert-secondary">
      Budget: {totalExpenses}
      <span className="d-flex align-items-center">
        <DisplayCurrency selectedCurrency={props.selectedCurrency} />
        <input
          className="form-control"
          type="number"
          step="10"
          value={newBudget}
          onChange={handleBudgetChange}
        ></input>
        {/* {budget} */}
      </span>
    </div>
  );
};
export default Budget;
