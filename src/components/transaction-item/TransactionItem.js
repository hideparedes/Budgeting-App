import React from "react";
import "./transaction-item.styles.scss";

const Transaction = (props) => {
  return (
    <li className="transaction-item">
      {props.item.name}: <span>&#165;{props.item.price}</span>
    </li>
  );
};

export default Transaction;
