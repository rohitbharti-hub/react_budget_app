import React from "react";
import {
  FaDollarSign,
  FaPoundSign,
  FaEuroSign,
  FaRupeeSign,
} from "react-icons/fa";

const Currency = ({ updateCurrency }) => {
  return (
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <a
            class="dropdown-item"
            href="#"
            id="dollar"
            onClick={() => updateCurrency("Dollar")}
          >
            <FaDollarSign /> <span>Dollar</span>
          </a>
        </li>
        <li>
          <a
            class="dropdown-item"
            id="pound"
            href="#"
            onClick={() => updateCurrency("Pound")}
          >
            <FaPoundSign /> <span>Pound</span>
          </a>
        </li>
        <li>
          <a
            class="dropdown-item"
            id="euro"
            href="#"
            onClick={() => updateCurrency("Euro")}
          >
            <FaEuroSign /> <span>Euro</span>
          </a>
        </li>
        <li>
          <a
            class="dropdown-item"
            id="rupee"
            href="#"
            onClick={() => updateCurrency("Rupee")}
          >
            <FaRupeeSign /> <span>Rupee</span>
          </a>
        </li>
      </ul>
  );
};
export default Currency;
