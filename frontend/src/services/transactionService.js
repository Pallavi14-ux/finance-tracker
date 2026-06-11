import API from "./api";


// GET AUTH HEADER
const getConfig = () => {

  const user =
    JSON.parse(localStorage.getItem("user"));

  return {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
};


// GET TRANSACTIONS
export const getTransactions =
  async () => {

    const response = await API.get(
      "/transactions",
      getConfig()
    );

    return response.data;
};


// ADD TRANSACTION
export const addTransaction =
  async (transactionData) => {

    const response = await API.post(
      "/transactions",
      transactionData,
      getConfig()
    );

    return response.data;
};


// DELETE TRANSACTION
export const deleteTransaction =
  async (id) => {

    const response = await API.delete(
      `/transactions/${id}`,
      getConfig()
    );

    return response.data;
};