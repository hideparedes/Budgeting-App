import React from "react";
import "./transaction-item.styles.scss";

const Transaction = props => {
  const deleteItem = id => {
    alert(`Delete item #${id}`);
  };
  return (
    <li className="transaction-item">
      {props.item.name}: <span>&#165;{props.item.price}</span>
      <button onClick={() => deleteItem(props.item.id)} className="delete-btn">
        x
      </button>
    </li>
  );
};

export default Transaction;
