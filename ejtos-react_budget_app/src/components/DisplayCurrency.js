// DisplayCurrency.jsx
import React from "react";
import {
  FaDollarSign,
  FaPoundSign,
  FaEuroSign,
  FaRupeeSign,
} from "react-icons/fa";

const DisplayCurrency = ({ selectedCurrency }) => {
  return (
    <div>
      {selectedCurrency === "" && <FaRupeeSign />}
      {selectedCurrency === "Dollar" && (
        <span>
          <FaDollarSign />
        </span>
      )}
      {selectedCurrency === "Pound" && (
        <span>
          <FaPoundSign />
        </span>
      )}
      {selectedCurrency === "Euro" && (
        <span>
          <FaEuroSign />
        </span>
      )}
      {selectedCurrency === "Rupee" && (
        <span>
          <FaRupeeSign />
        </span>
      )}
    </div>
  );
};

export default DisplayCurrency;
