import MainLayout
from "../components/layout/MainLayout";
import {
  useEffect,
  useState,
} from "react";

import BudgetForm
from "../components/budget/BudgetForm";

import BudgetList
from "../components/budget/BudgetList";

import {
  getBudgets,
  createBudget,
  deleteBudget,
} from "../services/budgetService";


const Budgets = () => {

  const [budgets, setBudgets] =
    useState([]);


  useEffect(() => {

    fetchBudgets();

  }, []);


  const fetchBudgets =
    async () => {

      try {

        const data =
          await getBudgets();

        setBudgets(data);

      } catch (error) {
        console.log(error);
      }
    };


  const handleAdd =
    async (formData) => {

      try {

        await createBudget(formData);

        fetchBudgets();

      } catch (error) {
        console.log(error);
      }
    };


  const handleDelete =
    async (id) => {

      try {

        await deleteBudget(id);

        fetchBudgets();

      } catch (error) {
        console.log(error);
      }
    };


  return (
<MainLayout>
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        Budget Planner
      </h1>


      {/* FORM */}
      <BudgetForm
        onAdd={handleAdd}
      />


      {/* BUDGET LIST */}
      <BudgetList
        budgets={budgets}
        onDelete={handleDelete}
      />

    </div>
    </MainLayout>
  );
};

export default Budgets;