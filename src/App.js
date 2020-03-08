import React from "react";
import "./App.scss";

import Header from "./components/header/Header";
import Balance from "./components/balance/Balance";
import IncomeAndExpenses from "./components/income-expenses/IncomeAndExpenses";
import TransactionBody from "./components/transaction-body/TransactionBody";

import { BudgetProvider } from "./contexts/BudgetContext";

const App = () => {
  return (
    <BudgetProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeAndExpenses />
        <TransactionBody />
      </div>
    </BudgetProvider>
  );
};

export default App;
