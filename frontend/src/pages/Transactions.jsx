import MainLayout
from "../components/layout/MainLayout";
import {
  useEffect,
  useState,
} from "react";

import TransactionForm
from "../components/transactions/TransactionForm";

import TransactionList
from "../components/transactions/TransactionList";

import {
  getTransactions,
  addTransaction,
  deleteTransaction,
} from "../services/transactionService";


const Transactions = () => {

  const [transactions, setTransactions] =
    useState([]);


  useEffect(() => {

    fetchTransactions();

  }, []);


  const fetchTransactions =
    async () => {

      try {

        const data =
          await getTransactions();

        setTransactions(data);

      } catch (error) {
        console.log(error);
      }
    };


  const handleAdd =
    async (formData) => {

      try {

        await addTransaction(formData);

        fetchTransactions();

      } catch (error) {
        console.log(error);
      }
    };


  const handleDelete =
    async (id) => {

      try {

        await deleteTransaction(id);

        fetchTransactions();

      } catch (error) {
        console.log(error);
      }
    };


  return (
<MainLayout>
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        Transactions
      </h1>


      {/* FORM */}
      <TransactionForm
        onAdd={handleAdd}
      />


      {/* LIST */}
      <TransactionList
        transactions={transactions}
        onDelete={handleDelete}
      />

    </div>
    </MainLayout>
  );
};

export default Transactions;