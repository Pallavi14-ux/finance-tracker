import {
  NavLink,
} from "react-router-dom";

import {
  FaChartPie,
  FaMoneyBill,
  FaWallet,
  FaChartBar,
} from "react-icons/fa";


const Sidebar = () => {

  const menuItems = [

    {
      name: "Dashboard",
      path: "/",
      icon: <FaChartPie />,
    },

    {
      name: "Transactions",
      path: "/transactions",
      icon: <FaMoneyBill />,
    },

    {
      name: "Budgets",
      path: "/budgets",
      icon: <FaWallet />,
    },

    {
      name: "Analytics",
      path: "/analytics",
      icon: <FaChartBar />,
    },
  ];


  return (

    <div className="hidden md:block w-64 bg-black text-white min-h-screen p-6">

      <h1 className="text-3xl font-bold mb-10">
        FinanceApp
      </h1>


      <div className="space-y-3">

        {menuItems.map((item) => (

          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-all ${
                isActive
                  ? "bg-white text-black"
                  : "hover:bg-gray-800"
              }`
            }
          >

            {item.icon}

            <span>{item.name}</span>

          </NavLink>

        ))}

      </div>

    </div>
  );
};

export default Sidebar;