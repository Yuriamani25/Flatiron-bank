import React from 'react'

function TransactionsHandler({transactions}) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <h3>Date</h3>
          </th>
          <th>
            <h3>Description</h3>
          </th>
          <th>
            <h3>Category</h3>
          </th>
          <th>
            <h3>Amount</h3>
          </th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index}>
            <td>
              <h3>{transaction.date}</h3>
            </td>
            <td>
              <h3>{transaction.description}</h3>
            </td>
            <td>
              <h3>{transaction.category}</h3>
            </td>
            <td>
              <h3>{transaction.amount}</h3>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsHandler