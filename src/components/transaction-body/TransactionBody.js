import React from 'react'
import TransactionHistory from '../transaction-history/TransactionHistory'
import AddTransaction from '../add-transaction/AddTransaction'
import "./transaction-body.styles.scss";

const TransactionBody = () => {
  return (
    <div className="transaction-container">
      <TransactionHistory />
      <AddTransaction />
    </div>
  )
}

export default TransactionBody
