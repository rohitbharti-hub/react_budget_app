import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const AllocationForm = (props) => {
  const { dispatch, remaining } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [action, setAction] = useState("");

  const submitEvent = () => {
    if (cost > remaining) {
      alert("The value cannot exceed remaining funds  £" + remaining);
      setCost("");
      return;
    }

    const expense = {
      name: name,
      cost: parseInt(cost),
    };
    if (action === "Reduce") {
      dispatch({
        type: "RED_EXPENSE",
        payload: expense,
      });
    } else {
      dispatch({
        type: "ADD_EXPENSE",
        payload: expense,
      });
    }
  };

  return (
    <div>
      {cost > remaining && (
        <div
          class="position-fixed top-0 start-50 translate-middle w-100 mt-4 alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          The value cannot exceed remaining funds <strong> £{remaining}</strong>
          .
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
      <div className="d-flex flex-column">
        <div className="input-group mb-3">
          <div className="d-block w-100 mb-3">
            <label htmlFor="inputGroupSelect01">Department</label>
            <select
              className="custom-select form-select"
              id="inputGroupSelect01"
              onChange={(event) => setName(event.target.value)}
            >
              <option defaultValue>Choose...</option>
              <option value="Marketing" name="marketing">
                {" "}
                Marketing
              </option>
              <option value="Sales" name="sales">
                Sales
              </option>
              <option value="Finance" name="finance">
                Finance
              </option>
              <option value="HR" name="hr">
                HR
              </option>
              <option value="IT" name="it">
                IT
              </option>
              <option value="Admin" name="admin">
                Admin
              </option>
            </select>
          </div>

          <div className="w-100 mb-3">
            <label className="d-block w-100" htmlFor="inputGroupSelect02">
              Allocation
            </label>
            <select
              className="custom-select form-select"
              id="inputGroupSelect02"
              onChange={(event) => setAction(event.target.value)}
            >
              <option defaultValue value="Add" name="Add">
                Add
              </option>
              <option value="Reduce" name="Reduce">
                Reduce
              </option>
            </select>
          </div>

          <div class="input-group mb-3">
            <input
              className="form-control"
              required="required"
              type="number"
              id="cost"
              value={cost}
              style={{ size: 10 }}
              onChange={(event) => setCost(event.target.value)}
            ></input>
            <button
              class="btn btn-outline-secondary"
              type="button"
              onClick={submitEvent}
              disabled={cost > remaining ? "disabled" : ""}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllocationForm;
