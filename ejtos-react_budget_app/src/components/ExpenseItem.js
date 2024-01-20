import React, { useContext } from "react";
import { TiDelete, TiPlus, TiTrash } from "react-icons/ti";
import { AppContext } from "../context/AppContext";
import DisplayCurrency from "./DisplayCurrency";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  const decreaseBudget = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };
    dispatch({
      type: "RED_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        <DisplayCurrency selectedCurrency={props.selectedCurrency} />
        {props.cost}
      </td>
      <td>
        <button
          className="btn btn-success rounded-pill"
          onClick={(event) => increaseAllocation(props.name)}
        >
          <TiPlus size="1.5em" />
        </button>
      </td>
      <td>
        <button
          className="btn btn-danger rounded-pill"
          onClick={(event) => decreaseBudget(props.name)}
        >
          <TiDelete size="1.5em" />
        </button>
      </td>
      <td>
        <button
          className="btn btn-dark rounded-pill"
          onClick={handleDeleteExpense}
        >
          <TiTrash size="1.5em" />
        </button>
      </td>
    </tr>
  );
};

export default ExpenseItem;
