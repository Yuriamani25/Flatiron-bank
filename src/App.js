import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import AddTranscations from "./components/Transaction";
import TransactionsHandler from "./components/TransactionsHandler";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const newTransaction = {
      date: formData.date,
      description: formData.description,
      category: formData.category,
      amount: formData.amount,
    };
    setTransactions([...transactions, newTransaction]);
    setFormData({
      date: "",
      description: "",
      category: "",
      amount: "",
    });
  }
  function filterTransaction(transaction) {
    return transaction.description
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  }
  const filteredTransactions = transactions.filter(filterTransaction);
  return (
    <>
      <div className="container">
        <h1 className="title"> The Royal Bank of Flatiron</h1>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <AddTranscations
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
        <TransactionsHandler transactions={filteredTransactions} />
      </div>
    </>
  );
}

export default App;