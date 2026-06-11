import {
  useState,
} from "react";

const BudgetForm = ({
  onAdd,
}) => {

  const [formData, setFormData] =
    useState({
      category: "",
      amount: "",
      month: "",
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
      category: "",
      amount: "",
      month: "",
    });
  };


  return (

    <div className="bg-white p-6 rounded-2xl shadow-md mb-8">

      <h2 className="text-2xl font-bold mb-4">
        Create Budget
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />

        <input
          type="number"
          name="amount"
          placeholder="Budget Amount"
          value={formData.amount}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />

        <input
          type="month"
          name="month"
          value={formData.month}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />

        <button
          className="bg-black text-white p-3 rounded-lg md:col-span-3"
        >
          Add Budget
        </button>

      </form>

    </div>
  );
};

export default BudgetForm;