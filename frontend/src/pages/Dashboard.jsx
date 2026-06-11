import MainLayout
from "../components/layout/MainLayout";
import {
  useEffect,
  useState,
} from "react";

import SummaryCard
from "../components/dashboard/SummaryCard";

import RecentTransactions
from "../components/dashboard/RecentTransactions";

import ExpensePieChart
from "../components/charts/ExpensePieChart";

import MonthlyBarChart
from "../components/charts/MonthlyBarChart";

import {
  getDashboardData,
  getCategoryData,
  getMonthlyData,
} from "../services/analyticsService";


const Dashboard = () => {

  const [dashboard, setDashboard] =
    useState(null);

  const [categories, setCategories] =
    useState([]);

  const [monthly, setMonthly] =
    useState([]);


  useEffect(() => {

    fetchData();

  }, []);


  const fetchData = async () => {

    try {

      const dashboardData =
        await getDashboardData();

      const categoryData =
        await getCategoryData();

      const monthlyData =
        await getMonthlyData();

      setDashboard(dashboardData);

      setCategories(categoryData);

      setMonthly(monthlyData);

    } catch (error) {
      console.log(error);
    }
  };


  if (!dashboard) {
    return <h1>Loading...</h1>;
  }


  return (
   <MainLayout>
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        Finance Dashboard
      </h1>


      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        <SummaryCard
          title="Total Income"
          amount={dashboard.totalIncome}
        />

        <SummaryCard
          title="Total Expense"
          amount={dashboard.totalExpense}
        />

        <SummaryCard
          title="Total Savings"
          amount={dashboard.totalSavings}
        />

      </div>


      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

        <ExpensePieChart
          data={categories}
        />

        <MonthlyBarChart
          data={monthly}
        />

      </div>


      {/* RECENT TRANSACTIONS */}
      <RecentTransactions
        transactions={
          dashboard.recentTransactions
        }
      />

    </div>
    </MainLayout>
  );
};

export default Dashboard;