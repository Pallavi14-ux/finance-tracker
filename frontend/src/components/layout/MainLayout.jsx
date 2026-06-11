import Sidebar
from "./Sidebar";

import Navbar
from "./Navbar";


const MainLayout = ({
  children,
}) => {

  return (

    <div className="flex bg-gray-100 min-h-screen">

      {/* SIDEBAR */}
      <Sidebar />


      {/* MAIN CONTENT */}
      <div className="flex-1 p-6">

        <Navbar />

        {children}

      </div>

    </div>
  );
};

export default MainLayout;