import { FaMapMarkerAlt, FaTruck, FaUser } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";

const Topbar = ({ setActivePanel }) => {
  return (
    <div className="w-full bg-gray-100 text-sm text-gray-700 border-b">
      <div className="max-w-7xl    mx-auto px-4 flex justify-between items-center py-2">
        
        {/* Left side text */}
        <span>Welcome to Worldwide Electronics Store</span>

        {/* Right side links */}
        <div className="flex items-center space-x-4">
          <a href="#" className="flex items-center gap-1 hover:text-[#65A30D]">
            <FaMapMarkerAlt size={14} /> Store Locator
          </a>

          <span className="text-gray-300">|</span>

          <a href="#" className="flex items-center gap-1 hover:text-[#65A30D]">
            <FaTruck size={14} /> Track Your Order
          </a>

          <span className="text-gray-300">|</span>

          <div className="flex items-center gap-1 cursor-pointer hover:text-[#65A30D]">
            <FaDollarSign size={14} /> Dollar (US)
          </div>

          <span className="text-gray-300">|</span>

          {/* ✅ Triggers Navbar Drawer */}
          <button 
            onClick={() => setActivePanel("register")} 
            className="flex items-center gap-1 hover:text-[#65A30D]"
          >
            <FaUser size={14} /> Register
          </button>

          <button 
            onClick={() => setActivePanel("login")} 
            className="flex items-center gap-1 hover:text-[#65A30D]"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
