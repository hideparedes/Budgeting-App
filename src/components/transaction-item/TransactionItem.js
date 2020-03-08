import React, { useContext } from "react";
import "./transaction-item.styles.scss";

import { BudgetContext } from "../../contexts/BudgetContext";

const Transaction = props => {
  const { deleteTransaction } = useContext(BudgetContext);

  const deleteItem = id => {
    deleteTransaction(id);
  };

  const plus = Number(props.item.amount) > 0 && "+";
  return (
    <li className="transaction-item">
      {props.item.category}:{" "}
      <span>
        {plus}
        {props.item.amount}
      </span>
      <button onClick={() => deleteItem(props.item.id)} className="delete-btn">
        x
      </button>
    </li>
  );
};

export default Transaction;
