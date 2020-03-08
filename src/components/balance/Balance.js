import React, { useContext } from "react";
import "./balance.styles.scss";
import { BudgetContext } from "../../contexts/BudgetContext";

const Balance = () => {
  const { transactions } = useContext(BudgetContext);

  const amount = transactions.map(item => Number(item.amount));

  const balance = amount.reduce((acc, value) => acc + value, 0);

  return (
    <div className="balance-container">
      <h4>Total Balance</h4>
      <h1>&#165;{balance}</h1>
    </div>
  );
};

export default Balance;
