import React from "react";
import "./income-expenses.styles.scss";

const IncomeAndExpenses = () => {
  return (
    <div className="inc-exp-container">
      <div>
        <h3 className="income">Income</h3>
        <h2>&#165;500</h2>
      </div>
      <div>
        <h3 className="expenses">Expenses</h3>
        <h2>&#165;200</h2>
      </div>
    </div>
  );
};

export default IncomeAndExpenses;
