import React, { useState } from "react";
import "./add-transaction.styles.scss";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

const AddTransaction = () => {
  const [transaction, setTransaction] = useState({
    category: "",
    amount: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;

    setTransaction({ ...transaction, [name]: value });
    console.log(name, value);
  };

  const handleSubmit = e => {
    e.preventDefault();

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
        />
        <FormInput
          type="text"
          label="Amount"
          value={transaction.amount}
          name="amount"
          handleChange={handleChange}
        />
        
        <CustomButton type="submit">Submit</CustomButton>
      </form>
    </div>
  );
};

export default AddTransaction;
