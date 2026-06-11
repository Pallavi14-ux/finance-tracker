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


// DASHBOARD DATA
export const getDashboardData =
  async () => {

    const response = await API.get(
      "/analytics/dashboard",
      getConfig()
    );

    return response.data;
};


// CATEGORY DATA
export const getCategoryData =
  async () => {

    const response = await API.get(
      "/analytics/categories",
      getConfig()
    );

    return response.data;
};


// MONTHLY DATA
export const getMonthlyData =
  async () => {

    const response = await API.get(
      "/analytics/monthly",
      getConfig()
    );

    return response.data;
};