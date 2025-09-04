// import { FaMapMarkerAlt, FaTruck, FaUser } from "react-icons/fa";
// import { FaDollarSign } from "react-icons/fa6";

// const Topbar = ({ setActivePanel }) => {
//   return (
//     <div className="w-full bg-gray-100 text-sm text-gray-700 border-b">
//       <div className="max-w-7xl    mx-auto px-4 flex justify-between items-center py-2">
        
//         {/* Left side text */}
//         <span>Welcome to Worldwide Electronics Store</span>

//         {/* Right side links */}
//         <div className="flex items-center space-x-4">
//           <a href="#" className="flex items-center gap-1 hover:text-[#65A30D]">
//             <FaMapMarkerAlt size={14} /> Store Locator
//           </a>

//           <span className="text-gray-300">|</span>

//           <a href="#" className="flex items-center gap-1 hover:text-[#65A30D]">
//             <FaTruck size={14} /> Track Your Order
//           </a>

//           <span className="text-gray-300">|</span>

//           <div className="flex items-center gap-1 cursor-pointer hover:text-[#65A30D]">
//             <FaDollarSign size={14} /> Dollar (US)
//           </div>

//           <span className="text-gray-300">|</span>

//           {/* ✅ Triggers Navbar Drawer */}
//           <button 
//             onClick={() => setActivePanel("register")} 
//             className="flex items-center gap-1 hover:text-[#65A30D]"
//           >
//             <FaUser size={14} /> Register
//           </button>

//           <button 
//             onClick={() => setActivePanel("login")} 
//             className="flex items-center gap-1 hover:text-[#65A30D]"
//           >
//             Sign in
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Topbar;



import { useState } from "react";
import { FaMapMarkerAlt, FaTruck, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";

const Topbar = ({ setActivePanel }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = (e) => {
    e.preventDefault(); // Prevent default touch/click behavior to avoid conflicts
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handlePanelChange = (panel) => {
    if (typeof setActivePanel === "function") {
      setActivePanel(panel); // Only call if setActivePanel is a function
    } else {
      console.warn("setActivePanel is not a function");
    }
    setIsMobileMenuOpen(false); // Close mobile menu
  };

  return (
    <div className="w-full bg-gray-100 text-sm text-gray-700 border-b">
      <div className="max-w-7xl mx-auto px-4 py-2">
        {/* Desktop View */}
        <div className="hidden md:flex justify-between items-center">
          <span>Welcome to Antivirus E-Store</span>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="flex items-center gap-1 hover:text-[#65A30D] focus:outline-none"
              aria-label="Store Locator"
            >
              <FaMapMarkerAlt size={14} /> Store Locator
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-[#65A30D]"
              aria-label="Track Your Order"
            >
              <FaTruck size={14} /> Track Your Order
            </a>
            <span className="text-gray-300">|</span>
            <div
              className="flex items-center gap-1 cursor-pointer hover:text-[#65A30D]"
              aria-label="Currency: Rupees (INR)"
            >
              <MdOutlineCurrencyRupee size={14} /> Rupees (INR)
            </div>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => handlePanelChange("register")}
              className="flex items-center gap-1 hover:text-[#65A30D]"
              aria-label="Register"
            >
              <FaUser size={14} /> Register
            </button>
            <button
              onClick={() => handlePanelChange("login")}
              className="flex items-center gap-1 hover:text-[#65A30D]"
              aria-label="Sign in"
            >
              Sign in
            </button>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex justify-between items-center">
          <span className="text-xs">Welcome to Worldwide Electronics</span>
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 focus:outline-none p-2" // Added padding for larger tap target
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col items-start space-y-3 mt-3 pb-3">
            <a
              href="#"
              className="flex items-center gap-1 hover:text-[#65A30D] text-xs py-1"
              aria-label="Store Locator"
            >
              <FaMapMarkerAlt size={12} /> Store Locator
            </a>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-[#65A30D] text-xs py-1"
              aria-label="Track Your Order"
            >
              <FaTruck size={12} /> Track Your Order
            </a>
            <div
              className="flex items-center gap-1 cursor-pointer hover:text-[#65A30D] text-xs py-1"
              aria-label="Currency: Rupees (INR)"
            >
              <MdOutlineCurrencyRupee size={12} /> Rupees (INR)
            </div>
            <button
              onClick={() => handlePanelChange("register")}
              className="flex items-center gap-1 hover:text-[#65A30D] text-xs py-1"
              aria-label="Register"
            >
              <FaUser size={12} /> Register
            </button>
            <button
              onClick={() => handlePanelChange("login")}
              className="flex items-center gap-1 hover:text-[#65A30D] text-xs py-1"
              aria-label="Sign in"
            >
              Sign in
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;