import React, { useContext } from "react";
import "./income-expenses.styles.scss";

import { BudgetContext } from "../../contexts/BudgetContext";

const IncomeAndExpenses = () => {
  const { transactions } = useContext(BudgetContext);
  const amounts = transactions.map(item => Number(item.amount));

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, value) => acc + value, 0);
  const expense = amounts
    .filter(item => item < 0)
    .reduce((acc, value) => acc + value, 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h3 className="income">Income</h3>
        <h2>&#165;{income}</h2>
      </div>
      <div>
        <h3 className="expenses">Expenses</h3>
        <h2>&#165;{expense}</h2>
      </div>
    </div>
  );
};

export default IncomeAndExpenses;
