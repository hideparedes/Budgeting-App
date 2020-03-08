import React, { useContext } from "react";
import "./transaction-history.styles.scss";
import TransactionItem from "../transaction-item/TransactionItem";
import { BudgetContext } from "../../contexts/BudgetContext";

const TransactionHistory = () => {
  const { transactions } = useContext(BudgetContext);
  console.log(transactions);

  return (
    <div className="history-container">
      <h3>History</h3>
      <ul className="history">
        {transactions.map(item => (
          <TransactionItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
