import React from 'react'

function AddTransaction({ formData, handleSubmit, handleInputChange}) {
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label className="label">Date: </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
          <input
            type="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Description"
          />
          <input
            type="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            placeholder="Category"
          />
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            placeholder="Amount"
          />
        </div>
        <button type="submit" className="btn">
          Add Transcation
        </button>
      </form>
    </div>
  );
}

export default AddTransaction
