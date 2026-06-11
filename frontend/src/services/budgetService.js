import API from "./api";


// GET TOKEN HEADER
const getConfig = () => {

  const user =
    JSON.parse(localStorage.getItem("user"));

  return {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
};


// GET BUDGETS
export const getBudgets =
  async () => {

    const response = await API.get(
      "/budgets",
      getConfig()
    );

    return response.data;
};


// CREATE BUDGET
export const createBudget =
  async (budgetData) => {

    const response = await API.post(
      "/budgets",
      budgetData,
      getConfig()
    );

    return response.data;
};


// DELETE BUDGET
export const deleteBudget =
  async (id) => {

    const response = await API.delete(
      `/budgets/${id}`,
      getConfig()
    );

    return response.data;
};