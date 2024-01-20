import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core";
import "bootstrap";

import { AppProvider } from "./context/AppContext";
import Budget from "./components/Budget";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AllocationForm from "./components/AllocationForm";
import RemainingBudget from "./components/Remaining";
import Currency from "./components/Currency";

const App = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("");

  const updateCurrency = (currency) => {
    setSelectedCurrency(currency);
  };

  return (
    <AppProvider>
      <div className="container mt-4">
        <div class="card">
          <h5 class="card-header text-bg-dark">Company's Budget Allocation</h5>
          <div class="card-body">
            <div className="row mt-3">
              <div className="col-sm">
                <Budget selectedCurrency={selectedCurrency} />
              </div>
              <div className="col-sm">
                <RemainingBudget selectedCurrency={selectedCurrency} />
              </div>
              <div className="col-sm">
                <ExpenseTotal selectedCurrency={selectedCurrency} />
              </div>
              <div className="col-sm">
                <Currency
                  updateCurrency={updateCurrency}
                  selectedCurrency={selectedCurrency}
                />
              </div>
            </div>
          </div>
        </div>

        <div class="row align-items-start">
          <div class="col col-8">
            <div class="card mt-3">
              <h5 class="card-header text-bg-dark">Allocation</h5>
              <div class="card-body">
                <div className="row ">
                  <div className="col-sm">
                    <ExpenseList selectedCurrency={selectedCurrency} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col col-4">
            <div class="card mt-3">
              <h5 class="card-header text-bg-dark">Change allocation</h5>
              <div class="card-body">
                <div className="row mt-3">
                  <div className="col-sm">
                    <AllocationForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
