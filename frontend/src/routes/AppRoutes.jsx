import ProtectedRoute
from "../components/ProtectedRoute";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Transactions from "../pages/Transactions";
import Budgets from "../pages/Budgets";
import Analytics from "../pages/Analytics";


const AppRoutes = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/"
          element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
        />

        <Route
          path="/transactions"
          element={
          <ProtectedRoute>
            <Transactions />
          </ProtectedRoute>
        }
        />

        <Route
          path="/budgets"
          element={
          <ProtectedRoute>
            <Budgets />
          </ProtectedRoute>
        }
        />

        <Route
          path="/analytics"
          element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        }
        />

      </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;