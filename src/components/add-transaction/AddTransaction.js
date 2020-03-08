import React, { useState, useContext } from "react";
import "./add-transaction.styles.scss";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { BudgetContext } from "../../contexts/BudgetContext";
import { v4 as uuidv4 } from "uuid";

const AddTransaction = () => {
  const { addTransaction } = useContext(BudgetContext);

  const [transaction, setTransaction] = useState({
    category: "",
    amount: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setTransaction({ ...transaction, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setTransaction({ ...transaction });

    const newItem = {
      id: uuidv4(),
      ...transaction
    };
    console.log(newItem);

    addTransaction(newItem);

    setTransaction({
      category: "",
      amount: ""
    });
  };

  return (
    <div className="add-transaction-container">
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit} className="transaction-form">
        <FormInput
          type="text"
          label="Category"
          value={transaction.category}
          name="category"
          handleChange={handleChange}
          placeholder="Enter category..."
        />
        <FormInput
          type="text"
          label="Amount"
          value={transaction.amount}
          name="amount"
          handleChange={handleChange}
          placeholder="Enter amount..."
        />
        <p className="amount-note">&#10033;negative - expense, positive - income</p>

        <CustomButton type="submit">Submit</CustomButton>
      </form>
    </div>
  );
};

export default AddTransaction;
