import React, { createContext, useReducer } from "react";
import BudgetReducer from "./BudgetReducer";

export const BudgetContext = createContext();

export const BudgetProvider = props => {
  const initialState = {
    transactions: []
  };

  const [state, dispatch] = useReducer(BudgetReducer, initialState);

  const addTransaction = transaction => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    });
  };

  const deleteTransaction = id => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  };

  return (
    <BudgetContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction
      }}
    >
      {props.children}
    </BudgetContext.Provider>
  );
};
