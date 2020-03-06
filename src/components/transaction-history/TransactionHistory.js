import React from "react";
import "./transaction-history.styles.scss";
import TransactionItem from "../transaction-item/TransactionItem"
import items from "../../dummy-data";

const TransactionHistory = () => {
  // const items = [{ id: 1, name: "CD", price: 1800 },{ id: 2, name: "Book", price: 900 },{ id: 3, name: "Drink", price: 150 }];
  return (
    <div className="history-container">
      <h3>History</h3>
      <ul className="history">
        {
          items.map(item => <TransactionItem key={item.id} item={item} />)
        }
      </ul>
    </div>
  );
};

export default TransactionHistory;
