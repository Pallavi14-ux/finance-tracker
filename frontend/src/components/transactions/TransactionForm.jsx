import {
  useState,
} from "react";

const TransactionForm = ({
  onAdd,
}) => {

  const [formData, setFormData] =
    useState({
      type: "expense",
      amount: "",
      category: "",
      description: "",
      date: "",
    });


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {

    e.preventDefault();

    onAdd(formData);

    setFormData({
      type: "expense",
      amount: "",
      category: "",
      description: "",
      date: "",
    });
  };


  return (

    <div className="bg-white shadow-md rounded-2xl p-6 mb-8">

      <h2 className="text-2xl font-bold mb-4">
        Add Transaction
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        >

          <option value="expense">
            Expense
          </option>

          <option value="income">
            Income
          </option>

        </select>


        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />


        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />


        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />


        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />


        <button
          className="bg-black text-white p-3 rounded-lg"
        >
          Add Transaction
        </button>

      </form>

    </div>
  );
};

export default TransactionForm;