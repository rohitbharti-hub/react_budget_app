import React, { useState } from "react";
import {
  FaDollarSign,
  FaPoundSign,
  FaEuroSign,
  FaRupeeSign,
} from "react-icons/fa";
import CurrencyList from "./CurrencyList";
import DisplayCurrency from "./DisplayCurrency";

const Currency = (props) => {
  return (
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {props.selectedCurrency === "" && (
          <span>
            <FaRupeeSign /> Rupee
          </span>
        )}
        {props.selectedCurrency === "Dollar" && (
          <span>
            <FaDollarSign /> Dollar
          </span>
        )}
        {props.selectedCurrency === "Pound" && (
          <span>
            <FaPoundSign /> Pound
          </span>
        )}
        {props.selectedCurrency === "Euro" && (
          <span>
            <FaEuroSign /> Euro
          </span>
        )}
        {props.selectedCurrency === "Rupee" && (
          <span>
            <FaRupeeSign /> Rupee
          </span>
        )}
      </button>
      <CurrencyList updateCurrency={props.updateCurrency} />
    </div>
  );
};
export default Currency;
