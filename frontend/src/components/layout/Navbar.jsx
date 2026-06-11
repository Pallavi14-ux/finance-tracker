import { useAuth }
from "../../context/AuthContext";


const Navbar = () => {

  const { user, logout } =
    useAuth();

  return (

    <div className="bg-white shadow-sm p-4 flex justify-between items-center rounded-xl mb-6">

      <h1 className="text-2xl font-bold">
        Welcome, {user?.name}
      </h1>


      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded-lg"
      >
        Logout
      </button>

    </div>
  );
};

export default Navbar;