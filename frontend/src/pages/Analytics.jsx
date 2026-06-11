
import {
  useEffect,
  useState,
} from "react";

import MainLayout
from "../components/layout/MainLayout";

import ExpensePieChart
from "../components/charts/ExpensePieChart";

import MonthlyBarChart
from "../components/charts/MonthlyBarChart";

import {
  getCategoryData,
  getMonthlyData,
} from "../services/analyticsService";

import {
  FaChartPie,
  FaChartLine,
} from "react-icons/fa";


const Analytics = () => {

  const [categories, setCategories] =
    useState([]);

  const [monthly, setMonthly] =
    useState([]);

  const [loading, setLoading] =
    useState(true);


  useEffect(() => {

    fetchAnalytics();

  }, []);


  const fetchAnalytics =
    async () => {

      try {

        const categoryData =
          await getCategoryData();

        const monthlyData =
          await getMonthlyData();

        setCategories(categoryData);

        setMonthly(monthlyData);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };


  if (loading) {

    return (

      <MainLayout>

        <div className="flex justify-center items-center h-[70vh]">

          <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>

        </div>

      </MainLayout>
    );
  }


  return (

    <MainLayout>

      <div>

        {/* PAGE HEADER */}
        <div className="mb-8">

          <h1 className="text-4xl font-bold text-gray-800">
            Analytics
          </h1>

          <p className="text-gray-500 mt-2">
            Track your spending and income trends
          </p>

        </div>


        {/* ANALYTICS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

          {/* CATEGORY CARD */}
          <div className="bg-white p-6 rounded-3xl shadow-sm">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-12 h-12 bg-blue-100 text-blue-500 rounded-2xl flex items-center justify-center text-xl">

                <FaChartPie />

              </div>

              <div>

                <h2 className="text-2xl font-bold">
                  Expense Categories
                </h2>

                <p className="text-gray-500 text-sm">
                  Category-wise expense analysis
                </p>

              </div>

            </div>


            <div className="flex justify-center">

              <ExpensePieChart
                data={categories}
              />

            </div>

          </div>


          {/* MONTHLY CARD */}
          <div className="bg-white p-6 rounded-3xl shadow-sm">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-12 h-12 bg-green-100 text-green-500 rounded-2xl flex items-center justify-center text-xl">

                <FaChartLine />

              </div>

              <div>

                <h2 className="text-2xl font-bold">
                  Monthly Overview
                </h2>

                <p className="text-gray-500 text-sm">
                  Income vs expense trends
                </p>

              </div>

            </div>


            <div className="overflow-x-auto">

              <MonthlyBarChart
                data={monthly}
              />

            </div>

          </div>

        </div>


        {/* CATEGORY SUMMARY */}
        <div className="bg-white p-6 rounded-3xl shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            Expense Breakdown
          </h2>


          <div className="space-y-5">

            {categories.map((item, index) => (

              <div
                key={index}
                className="flex items-center justify-between border-b pb-4"
              >

                <div>

                  <h3 className="font-semibold text-lg">
                    {item.category}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Total Spending
                  </p>

                </div>


                <div>

                  <p className="text-xl font-bold text-red-500">

                    ₹ {item.total}

                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default Analytics;