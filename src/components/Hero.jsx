// import React, { useState } from "react";
// import logo from "../assets/images/logo.png"
// import {
//   Search,
//   Heart,
//   ShoppingCart,
//   Menu,
//   X,
//   ChevronRight,
//   ChevronDown,
//   ExternalLink,
//   ArrowRight,
// } from "lucide-react";

// const Hero = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeProduct, setActiveProduct] = useState({
//     img: "https://antivirusestore.in/admin/model/pics/quick-heal-total-security08_18_09_46_14.png",
//     desc: "Premium smartwatch with advanced features.",
//     price: "$749.99",

//   });

//   const data = [
//     {
//       img: "data:image/jpeg;base64,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",
//       text: "CATCH BIG DEALS ON THE ANTIVIRUS",
//     },
//     {
//       img: "data:image/png;base64,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",
//       text: "GET 70% OFF ON WINDOWS PRODUCT",
//     },
//     {
//       img: "data:image/png;base64,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",
//       text: "EXCEL GET 20% OFF ON OFFICE 365",
//     },
//     {
//       img: "data:image/jpeg;base64,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",
//       text: "50% OFF ON COMPUTER PERIPHERAL",
//     },
//   ];

//   const menuItems = [
//     { title: "Antivirus Software", isSpecial: true },
//     { title: "Windows", isSpecial: true },
//     { title: "Office 365", isSpecial: true },
//     { title: "Accounting Software" },
//   ];

//   const [show, setShow] = useState(false);

//   const handleProductSelect = (productName) => {
//     setActiveProduct({
//       name: productName,
//       img: `https://via.placeholder.com/300x200?text=${productName.replace(/\s+/g, "+")}`,
//       desc: "Premium smartwatch with advanced features.",
//       price: "$749.99",
//       devices: "1 device",
//       rating: 4.5,
//     });
//     setIsMobileMenuOpen(false);
//   };

//   const renderStars = (rating) => {
//     return Array.from({ length: 5 }, (_, i) => (
//       <svg
//         key={i}
//         className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
//         viewBox="0 0 24 24"
//       >
//         <path d="M12 .587l3.668 7.431 8.332 1.151-6.001 5.822 1.417 8.376L12 18.892l-7.416 3.475 1.417-8.376-6.001-5.822 8.332-1.151z" />
//       </svg>
//     ));
//   };

//   return (
//     <div className="w-full bg-white min-h-screen">
//       {/* Top Header */}
//       <div className="bg-white border-b">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center justify-between py-4">
//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden mr-2"
//               onClick={() => setIsMobileMenuOpen(true)}
//             >
//               <Menu className="w-6 h-6" />
//             </button>

//             {/* Logo */}
//             <div className="flex items-center justify-around w-[15rem]">
//               <div>
//                 <img
//                   src={logo}
//                   alt="Logo"
//                 />
//               </div>
//               <div className="">
//                 <Menu />
//               </div>
//             </div>

//             {/* Search Bar */}
//             <div className="hidden md:flex items-center flex-1 max-w-2xl mx-8">
//               <div className="flex w-full">
//                 <input
//                   type="text"
//                   placeholder="Search for Products"
//                   className="flex-1 border-2 border-gray-200 px-4 py-2 rounded-l-lg focus:border-yellow-500 focus:outline-none text-gray-700"
//                 />
//                 <select
//                   className="border-2 border-l-0 border-gray-200 px-4 py-2 bg-white text-gray-700 focus:border-yellow-500 focus:outline-none"
//                 >
//                   <option>All Categories</option>
//                   <option>Smartwatches</option>
//                   <option>Accessories</option>
//                 </select>
//                 <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-r-lg">
//                   <Search className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>

//             {/* Right Side Icons */}
//             <div className="flex items-center space-x-4">
//               <div className="hidden md:flex items-center space-x-1 text-gray-600">
//                 <Heart className="w-5 h-5" />
//               </div>
//               <div className="flex items-center space-x-2 text-gray-900">
//                 <ShoppingCart className="w-6 h-6" />
//                 <div className="text-right">
//                   <div className="bg-yellow-400 text-black text-xs px-1 rounded-full min-w-[20px] h-5 flex items-center justify-center font-bold">
//                     2
//                   </div>
//                   <div className="font-bold text-lg">$1785.00</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Mobile Search */}
//           <div className="md:hidden pb-4">
//             <div className="flex">
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 className="flex-1 border-2 border-gray-200 px-4 py-2 rounded-l-lg focus:border-yellow-500 focus:outline-none"
//               />
//               <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-r-lg">
//                 <Search className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Bar */}
//       <div className="bg-white border-b">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center justify-between">
//             <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 md:px-6 md:py-3 flex items-center space-x-2 font-semibold">
//               <Menu className="w-5 h-5" />
//               <span className="hidden md:inline">All Departments</span>
//             </button>
//             <div className="hidden md:flex items-center space-x-8">
//               <button
//                 onClick={() => setShow(!show)}
//                 className="relative text-red-600 font-semibold hover:text-red-700 flex items-center"
//               >
//                 Super Deals <ChevronDown className="w-4 h-4 ml-1" />
//               </button>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-yellow-600 font-semibold"
//               >
//                 Featured Brands
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-yellow-600 font-semibold"
//               >
//                 Trending Styles
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-yellow-600 font-semibold"
//               >
//                 Gift Cards
//               </a>
//             </div>
//             <div className="hidden md:block text-gray-600 text-sm">
//               Free Shipping on Orders $50+
//             </div>
//           </div>
//         </div>
//       </div>

//       {show && (
//         <div className="absolute top-25 right-20 bg-gray-50 p-4 md:p-8 z-50">
//           <div className="max-w-7xl mx-auto">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
//               <div className="space-y-6">
//                 <h2 className="text-lg font-semibold text-gray-900 border-b border-yellow-400 pb-2">
//                   Home & Static Pages
//                 </h2>
//                 <nav className="space-y-3">
//                   <a
//                     href="#"
//                     className="block text-gray-600 hover:text-gray-900 transition-colors"
//                   >
//                     Home v1
//                   </a>
//                   <a
//                     href="#"
//                     className="block text-gray-600 hover:text-gray-900 transition-colors"
//                   >
//                     Home v2
//                   </a>
//                   <a
//                     href="#"
//                     className="block text-gray-600 hover:text-gray-900 transition-colors"
//                   >
//                     Home v3
//                   </a>
//                   <a
//                     href="#"
//                     className="block text-gray-600 hover:text-gray-900 transition-colors"
//                   >
//                     Home v3.1
//                   </a>
//                   <a
//                     href="#"
//                     className="block text-gray-600 hover:text-gray-900 transition-colors"
//                   >
//                     Home v4
//                   </a>
//                   <a
//                     href="#"
//                     className="block text-gray-600 hover:text-gray-900 transition-colors"
//                   >
//                     Home v5
//                   </a>
//                   <a
//                     href="#"
//                     className="block text-gray-600 hover:text-gray-900 transition-colors"
//                   >
//                     Home v6
//                   </a>
//                   <a
//                     href="#"
//                     className="block text-gray-600 hover:text-gray-900 transition-colors"
//                   >
//                     Home v7
//                   </a>
//                   <a
//                     href="#"
//                     className="block text-gray-600 hover:text-gray-900 transition-colors"
//                   >
//                     About
//                   </a>
//                   <a
//                     href="#"
//                     className="block text-gray-600 hover:text-gray-900 transition-colors"
//                   >
//                     Contact v1
//                   </a>
//                   <a
//                     href="#"
//                     className="block text-gray-600 hover:text-gray-900 transition-colors"
//                   >
//                     Contact v2
//                   </a>
//                   <a
//                     href="#"
//                     className="block text-gray-600 hover:text-gray-900 transition-colors"
//                   >
//                     FAQ
//                   </a>
//                   <a
//                     href="#"
//                     className="block text-gray-600 hover:text-gray-900 transition-colors"
//                   >
//                     Store Directory
//                   </a>
//                   <a
//                     href="#"
//                     className="block text-gray-600 hover:text-gray-900 transition-colors"
//                   >
//                     Terms and Conditions
//                   </a>
//                   <a
//                     href="#"
//                     className="block text-gray-600 hover:text-gray-900 transition-colors"
//                   >
//                     404
//                   </a>
//                 </nav>
//               </div>

//               <div className="space-y-6">
//                 <h2 className="text-lg font-semibold text-gray-900 border-b border-yellow-400 pb-2">
//                   Shop Pages
//                 </h2>
//                 <nav className="space-y-3">
//                   <a
//                     href="#"
//                     className="block text-gray-600 hover:text-gray-900 transition-colors"
//                   >
//                     Shop Grid
//                   </a>
//                   <a
//                     href="#"
//                     className="block text-gray-600 hover:text-gray-900 transition-colors"
//                   >
//                     Shop Grid Extended
//                   </a>
//                   <a
//                     href="#"
//                     className="block text-gray-600 hover:text-gray-900 transition-colors"
//                   >
//                     Shop List View
//                   </a>
//                   <a
//                     href="#"
//                     className="block text-gray-600 hover:text-gray-900 transition-colors"
//                   >
//                     Shop List View Small
//                   </a>
//                   <a
//                     href="#"
//                     className="block text-gray-600 hover:text-gray-900 transition-colors"
//                   >
//                     Shop Left Sidebar
//                   </a>
//                   <a
//                     href="#"
//                     className="block text-gray-600 hover:text-gray-900 transition-colors"
//                   >
//                     Shop Full width
//                   </a>
//                   <a
//                     href="#"
//                     className="block text-gray-600 hover:text-gray-900 transition-colors"
//                   >
//                     Shop Right Sidebar
//                   </a>
//                 </nav>

//                 <div className="pt-6">
//                   <h3 className="text-lg font-semibold text-gray-900 border-b border-yellow-400 pb-2 mb-3">
//                     Product Categories
//                   </h3>
//                   <nav className="space-y-3">
//                     <a
//                       href="#"
//                       className="block text-gray-600 hover:text-gray-900 transition-colors"
//                     >
//                       4 Column Sidebar
//                     </a>
//                     <a
//                       href="#"
//                       className="block text-gray-600 hover:text-gray-900 transition-colors"
//                     >
//                       5 Column Sidebar
//                     </a>
//                     <a
//                       href="#"
//                       className="block text-gray-600 hover:text-gray-900 transition-colors"
//                     >
//                       6 Column Full width
//                     </a>
//                     <a
//                       href="#"
//                       className="block text-gray-600 hover:text-gray-900 transition-colors"
//                     >
//                       7 Column Full width
//                     </a>
//                   </nav>
//                 </div>
//               </div>

//               <div className="space-y-6">
//                 <h2 className="text-lg font-semibold text-gray-900 border-b border-yellow-400 pb-2">
//                   Single Product Pages
//                 </h2>
//                 <nav className="space-y-3">
//                   <a
//                     href="#"
//                     className="block text-gray-600 hover:text-gray-900 transition-colors"
//                   >
//                     Single Product Extended
//                   </a>
//                   <a
//                     href="#"
//                     className="block text-gray-600 hover:text-gray-900 transition-colors"
//                   >
//                     Single Product Fullwidth
//                   </a>
//                   <a
//                     href="#"
//                     className="block text-gray-600 hover:text-gray-900 transition-colors"
//                   >
//                     Single Product Sidebar
//                   </a>
//                 </nav>

//                 <div className="pt-6">
//                   <h3 className="text-lg font-semibold text-gray-900 border-b border-yellow-400 pb-2 mb-3">
//                     Ecommerce Pages
//                   </h3>
//                   <nav className="space-y-3">
//                     <a
//                       href="#"
//                       className="block text-gray-600 hover:text-gray-900 transition-colors"
//                     >
//                       Shop
//                     </a>
//                     <a
//                       href="#"
//                       className="block text-gray-600 hover:text-gray-900 transition-colors"
//                     >
//                       Cart
//                     </a>
//                     <a
//                       href="#"
//                       className="block text-gray-600 hover:text-gray-900 transition-colors"
//                     >
//                       Checkout
//                     </a>
//                     <a
//                       href="#"
//                       className="block text-gray-600 hover:text-gray-900 transition-colors"
//                     >
//                       My Account
//                     </a>
//                     <a
//                       href="#"
//                       className="block text-gray-600 hover:text-gray-900 transition-colors"
//                     >
//                       Track your Order
//                     </a>
//                     <a
//                       href="#"
//                       className="block text-gray-600 hover:text-gray-900 transition-colors"
//                     >
//                       Compare
//                     </a>
//                   </nav>
//                 </div>
//               </div>

//               <div className="space-y-6">
//                 <h2 className="text-lg font-semibold text-gray-900 border-b border-yellow-400 pb-2">
//                   Blog Pages
//                 </h2>
//                 <nav className="space-y-3">
//                   <a
//                     href="#"
//                     className="block text-gray-600 hover:text-gray-900 transition-colors"
//                   >
//                     Blog v1
//                   </a>
//                   <a
//                     href="#"
//                     className="block text-gray-600 hover:text-gray-900 transition-colors"
//                   >
//                     Blog v2
//                   </a>
//                   <a
//                     href="#"
//                     className="block text-gray-600 hover:text-gray-900 transition-colors"
//                   >
//                     Blog v3
//                   </a>
//                   <a
//                     href="#"
//                     className="block text-gray-600 hover:text-gray-900 transition-colors"
//                   >
//                     Blog Full Width
//                   </a>
//                   <a
//                     href="#"
//                     className="block text-gray-600 hover:text-gray-900 transition-colors"
//                   >
//                     Single Blog Post
//                   </a>
//                 </nav>

//                 <div className="pt-6">
//                   <h3 className="text-lg font-semibold text-gray-900 border-b border-yellow-400 pb-2 mb-3">
//                     Shop Columns
//                   </h3>
//                   <nav className="space-y-3">
//                     <a
//                       href="#"
//                       className="block text-gray-600 hover:text-gray-900 transition-colors"
//                     >
//                       7 Column Full width
//                     </a>
//                     <a
//                       href="#"
//                       className="block text-gray-600 hover:text-gray-900 transition-colors"
//                     >
//                       6 Column Full width
//                     </a>
//                     <a
//                       href="#"
//                       className="block text-gray-600 hover:text-gray-900 transition-colors"
//                     >
//                       5 Column Sidebar
//                     </a>
//                     <a
//                       href="#"
//                       className="block text-gray-600 hover:text-gray-900 transition-colors"
//                     >
//                       4 Column Sidebar
//                     </a>
//                     <a
//                       href="#"
//                       className="block text-gray-600 hover:text-gray-900 transition-colors"
//                     >
//                       3 Column Sidebar
//                     </a>
//                   </nav>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row">
//           {/* Sidebar */}
//           <div className="hidden md:block w-64 bg-white border-r p-4">
//             <ul className="space-y-2">
//               {menuItems.map((item, index) => (
//                 <li key={index}>
//                   {item.isSpecial ? (
//                     <div className="py-2 px-4 text-gray-700 hover:text-yellow-600 cursor-pointer">
//                       {item.title}
//                     </div>
//                   ) : (
//                     <div>
//                       <div
//                         className="flex justify-between items-center cursor-pointer hover:text-yellow-600 py-2 px-4"
//                         onClick={() => item.options && handleProductSelect(item.options[0])}
//                       >
//                         <span className="font-medium text-gray-700">{item.title}</span>
//                         {item.options && <ChevronRight className="w-4 h-4" />}
//                       </div>
//                       {item.options && (
//                         <ul className="ml-4 space-y-1">
//                           {item.options.map((option, i) => (
//                             <li
//                               key={i}
//                               className={`cursor-pointer py-1 px-4 text-sm ${
//                                 activeProduct.name === option
//                                   ? "bg-yellow-50 text-yellow-700"
//                                   : "text-gray-600 hover:bg-gray-50"
//                               }`}
//                               onClick={() => handleProductSelect(option)}
//                             >
//                               {option}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Main Hero Section */}
//           <div className="flex-1 bg-gradient-to-r from-gray-50 to-gray-100 p-4">
//             <div className="grid md:grid-cols-2 gap-6 items-center max-w-6xl mx-auto">
//               {/* Left Content */}
//               <div className="space-y-4">
//                 <div className="space-y-2">
//                   <h2 className="text-3xl md:text-5xl font-light text-gray-800 leading-tight">
//                     BUY<br />
//                     <span className="font-semibold">QUICK HEAL</span>

//                   </h2>
//                   <h3 className="text-lg md:text-xl text-gray-600 font-medium">
//                     TOTAL SECURITY
//                   </h3>
//                 </div>
//                 <div className="space-y-2">
//                   <div className="text-gray-600 text-sm">START FROM</div>
//                   <div className="flex items-baseline space-x-2">
//                     <span className="text-gray-500 text-xl">₹</span>
//                     <span className="text-4xl md:text-5xl font-light text-gray-800">749</span>
//                     <span className="text-xl text-gray-800"></span>
//                   </div>
//                 </div>
//                 <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition-colors">
//                   Start Buying
//                 </button>
//                 <div className="flex space-x-2">
//                   <div className="w-12 h-1 bg-yellow-400 rounded"></div>
//                   <div className="w-3 h-1 bg-gray-300 rounded"></div>
//                   <div className="w-3 h-1 bg-gray-300 rounded"></div>
//                 </div>
//               </div>

//               {/* Right Content - Product Image */}
//               <div className="relative">
//                 <div className="relative group">
//                   <img
//                     src={activeProduct.img}
//                     alt={activeProduct.name}
//                     className="w-full max-w-md mx-auto rounded-lg shadow-2xl cursor-pointer transform transition-transform group-hover:scale-105"
//                     onClick={() => alert(`Selected: ${activeProduct.name}`)}
//                   />
//                   <div
//                     className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-20 rounded-lg cursor-pointer"
//                     onClick={() => alert(`Selected: ${activeProduct.name}`)}
//                   >
//                     <ExternalLink className="w-12 h-12 text-white" />
//                   </div>
//                   <div className="absolute -bottom-8 -left-8 bg-white p-3 rounded-lg shadow-lg border">
//                     <h4 className="font-semibold text-gray-900 mb-1">{activeProduct.name}</h4>
//                     <div className="flex items-center space-x-1">
//                       {renderStars(activeProduct.rating)}
//                       <span className="text-sm text-gray-500">({activeProduct.rating})</span>
//                     </div>
//                     <div className="text-yellow-600 font-semibold mt-1">{activeProduct.devices}</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
//           <div className="fixed top-0 left-0 h-full w-64 bg-white overflow-y-auto">
//             <div className="p-4 border-b flex justify-between items-center">
//               <h2 className="text-xl font-bold">Menu</h2>
//               <button onClick={() => setIsMobileMenuOpen(false)}>
//                 <X className="w-6 h-6" />
//               </button>
//             </div>
//             <div className="p-4">
//               <ul className="space-y-2">
//                 {menuItems.map((item, index) => (
//                   <li key={index}>
//                     {item.isSpecial ? (
//                       <div className="py-2 px-4 text-gray-700 hover:text-yellow-600 cursor-pointer">
//                         {item.title}
//                       </div>
//                     ) : (
//                       <div>
//                         <div
//                           className="flex justify-between items-center cursor-pointer hover:text-yellow-600 py-2 px-4"
//                           onClick={() => item.options && handleProductSelect(item.options[0])}
//                         >
//                           <span className="font-medium text-gray-700">{item.title}</span>
//                           {item.options && <ChevronRight className="w-4 h-4" />}
//                         </div>
//                         {item.options && (
//                           <ul className="ml-4 space-y-1">
//                             {item.options.map((option, i) => (
//                               <li
//                                 key={i}
//                                 className={`cursor-pointer py-1 px-4 text-sm ${
//                                   activeProduct.name === option
//                                     ? "bg-yellow-50 text-yellow-700"
//                                     : "text-gray-600 hover:bg-gray-50"
//                                 }`}
//                                 onClick={() => handleProductSelect(option)}
//                               >
//                                 {option}
//                               </li>
//                             ))}
//                           </ul>
//                         )}
//                       </div>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Deals Section */}
//       <div className="px-6 md:px-12 lg:px-20 py-8 flex justify-center">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl w-full">
//           {data.map((val, i) => (
//             <div
//               key={i}
//               className="flex items-center bg-[#e5e7eb] shadow-md p-4 rounded-lg"
//             >
//               {/* Left Image */}
//               <div className="flex-shrink-0">
//                 <img
//                   src={val.img}
//                   alt="deal"
//                   className="w-32 h-28 object-contain"
//                 />
//               </div>

//               {/* Right Content */}
//               <div className="ml-4 flex flex-col justify-between">
//                 <p className="text-gray-700 text-lg leading-snug">
//                   {val.text}
//                 </p>
//                 <button className="flex items-center gap-2 font-semibold text-gray-800 hover:text-black">
//                   Shop now
//                   <ArrowRight className="text-yellow-400" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;








import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import {
  Search,
  Heart,
  ShoppingCart,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  ArrowRight,AlignJustify
} from "lucide-react";

const Hero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showslide, setShowSlide] = useState(false);
  const [open, setOpen] = useState(false);

  const sidebarOpen = () => {
    setOpen(!open);
  };

  const slides = [
    {
      title: "BUY QUICK HEAL",
      subtitle: "TOTAL SECURITY",
      price: "749",
      image: "https://megacompuworldjaipur.com/image/cache/catalog/Product/Software/quick%20heal%20(NEW)/Quick-heal-total-security-800x500.jpg",
    },
    {
      title: "BUY K7 ANTIVIRUS PRO",
      subtitle: "TOTAL SECURITY",
      price: "749",
      image: "https://files.vplak.com/images/k7/ANTIVIRUS-PREMIUM/white/image-1.jpg",
    },
    {
      title: "GET WINDOWS 10 PRO",
      subtitle: "@50% OFF",
      price: "749",
      image: "https://avatars.mds.yandex.net/get-mpic/5233452/2a00000193b5906d024d06ecf3adf5dbd9e9/orig",
    },
    {
      title: "PROTECT YOUR PC ALL TIME",
      subtitle: "BY NETPROTECTOR",
      price: "749",
      image: "https://avatars.mds.yandex.net/i?id=c8932dcad233627ea6599ad0b4172e7972878c5e-5259770-images-thumbs&n=13",
    },
  ];

  const data = [
    {
      img: "https://megacompuworldjaipur.com/image/cache/catalog/Product/Software/quick%20heal%20(NEW)/Quick-heal-total-security-800x500.jpg",
      text: "CATCH BIG DEALS ON THE ANTIVIRUS",
    },
    {
      img: "https://files.vplak.com/images/k7/ANTIVIRUS-PREMIUM/white/image-1.jpg",
      text: "GET 70% OFF ON WINDOWS PRODUCT",
    },
    {
      img: "https://avatars.mds.yandex.net/get-mpic/5233452/2a00000193b5906d024d06ecf3adf5dbd9e9/orig",
      text: "EXCEL GET 20% OFF ON OFFICE 365",
    },
    {
      img: "https://avatars.mds.yandex.net/i?id=c8932dcad233627ea6599ad0b4172e7972878c5e-5259770-images-thumbs&n=13",
      text: "50% OFF ON COMPUTER PERIPHERAL",
    },
  ];

  const menuItems = [
    {
      title: "Antivirus Software",
      isSpecial: true,
      options: ["Quick Heal", "K7 Antivirus", "NetProtector", "McAfee"],
    },
    {
      title: "Windows",
      isSpecial: true,
      options: ["Windows 10 Pro", "Windows 11", "Windows Server"],
    },
    {
      title: "Office 365",
      isSpecial: true,
      options: ["Office Home", "Office Business", "Office Enterprise"],
    },
    {
      title: "Accounting Software",
      options: ["Tally", "QuickBooks", "Zoho Books"],
    },
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const handleProductSelect = (productName) => {
    const slideIndex = slides.findIndex((slide) =>
      slide.title.toLowerCase().includes(productName.toLowerCase())
    );
    if (slideIndex !== -1) {
      setCurrentSlide(slideIndex);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Top Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <button
              className="md:hidden mr-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center justify-around w-[15rem]">
              <div>
                <img src={logo} alt="Logo" className="h-10" />
              </div>
              <div className="">
              {/* <AlignJustify /> */}
              {showslide ? (
                <X
                  onClick={() => setShowSlide(false)}
                  className="w-6 h-6 cursor-pointer"
                />
              ) : (
                <Menu
                  onClick={() => setShowSlide(true)}
                  className="w-6 h-6 cursor-pointer"
                />
              )}

               {/* <div className="flex">
      
      <button
        onClick={sidebarOpen}
        className="p-2 m-4 bg-blue-500 text-white rounded-lg"
      >
        {open ? "Close Sidebar" : "Open Sidebar"}
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-6 transform 
        ${open ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 ease-in-out`}
      >
        <h2 className="text-2xl font-bold mb-4">Sidebar Menu</h2>
        <ul className="space-y-3">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">About</li>
          <li className="hover:text-gray-300 cursor-pointer">Services</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>
      </div>
    </div> */}



              </div>
            </div>
            <div className="hidden md:flex items-center flex-1 max-w-2xl mx-8">
              <div className="flex w-full">
                <input
                  type="text"
                  placeholder="Search for Products"
                  className="flex-1 border-2 border-gray-200 px-4 py-2 rounded-l-lg focus:border-yellow-500 focus:outline-none text-gray-700"
                />
                <select
                  className="border-2 border-l-0 border-gray-200 px-4 py-2 bg-white text-gray-700 focus:border-yellow-500 focus:outline-none"
                >
                  <option>All Categories</option>
                  <option>Antivirus</option>
                  <option>Windows</option>
                  <option>Office</option>
                </select>
                <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-r-lg">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-1 text-gray-600">
                <Heart className="w-5 h-5" />
              </div>
              <div className="flex items-center space-x-2 text-gray-900">
                <ShoppingCart className="w-6 h-6" />
                <div className="text-right">
                  <div className="bg-yellow-400 text-black text-xs px-1 rounded-full min-w-[20px] h-5 flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="font-bold text-lg">$1785.00</div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden pb-4">
            <div className="flex">
              <input
                type="text"
                placeholder="Search products..."
                className="flex-1 border-2 border-gray-200 px-4 py-2 rounded-l-lg focus:border-yellow-500 focus:outline-none"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-r-lg">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
         {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-300 text-white p-6 transform ${
          showslide ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex items-center border-2 border-white justify-between">
           <h2 className="text-2xl font-bold mb-6">Sidebar Menu  </h2> <X
                  onClick={() => setShowSlide(!showslide)}
                  className="w-6 h-6 cursor-pointer"
                />
        </div>
       
        <ul className="space-y-4">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">Shop</li>
          <li className="hover:text-gray-300 cursor-pointer">About</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>
      </div>

      {/* Overlay */}
      {showslide && (
        <div
          onClick={() => setShowSlide(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}
      </div>

      {/* Navigation Bar */}
      <div className="bg-white border-b relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 md:px-6 md:py-3 flex items-center space-x-2 font-semibold">
              <Menu className="w-5 h-5" />
              <span className="hidden md:inline">All Departments</span>
            </button>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => setShow(!show)}
                className="relative text-red-600 font-semibold hover:text-red-700 flex items-center"
              >
                Super Deals <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <a
                href="#"
                className="text-gray-700 hover:text-yellow-600 font-semibold"
              >
                Featured Brands
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-yellow-600 font-semibold"
              >
                Trending Styles
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-yellow-600 font-semibold"
              >
                Gift Cards
              </a>
            </div>
            <div className="hidden md:block text-gray-600 text-sm">
              Free Shipping on Orders $50+
            </div>
          </div>
        </div>
        {show && (
          <div className="absolute top-full left-0 w-full bg-gray-50 p-4 md:p-8 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                <div className="space-y-6">
                  <h2 className="text-lg font-semibold text-gray-900 border-b border-yellow-400 pb-2">
                    Home & Static Pages
                  </h2>
                  <nav className="space-y-3">
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Home v1
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Home v2
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Home v3
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Home v3.1
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Home v4
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Home v5
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Home v6
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Home v7
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Contact v1
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Contact v2
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      FAQ
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Store Directory
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Terms and Conditions
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      404
                    </a>
                  </nav>
                </div>
                <div className="space-y-6">
                  <h2 className="text-lg font-semibold text-gray-900 border-b border-yellow-400 pb-2">
                    Shop Pages
                  </h2>
                  <nav className="space-y-3">
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Shop Grid
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Shop Grid Extended
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Shop List View
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Shop List View Small
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Shop Left Sidebar
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Shop Full width
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Shop Right Sidebar
                    </a>
                  </nav>
                  <div className="pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 border-b border-yellow-400 pb-2 mb-3">
                      Product Categories
                    </h3>
                    <nav className="space-y-3">
                      <a
                        href="#"
                        className="block text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        4 Column Sidebar
                      </a>
                      <a
                        href="#"
                        className="block text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        5 Column Sidebar
                      </a>
                      <a
                        href="#"
                        className="block text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        6 Column Full width
                      </a>
                      <a
                        href="#"
                        className="block text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        7 Column Full width
                      </a>
                    </nav>
                  </div>
                </div>
                <div className="space-y-6">
                  <h2 className="text-lg font-semibold text-gray-900 border-b border-yellow-400 pb-2">
                    Single Product Pages
                  </h2>
                  <nav className="space-y-3">
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Single Product Extended
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Single Product Fullwidth
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Single Product Sidebar
                    </a>
                  </nav>
                  <div className="pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 border-b border-yellow-400 pb-2 mb-3">
                      Ecommerce Pages
                    </h3>
                    <nav className="space-y-3">
                      <a
                        href="#"
                        className="block text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        Shop
                      </a>
                      <a
                        href="#"
                        className="block text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        Cart
                      </a>
                      <a
                        href="#"
                        className="block text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        Checkout
                      </a>
                      <a
                        href="#"
                        className="block text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        My Account
                      </a>
                      <a
                        href="#"
                        className="block text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        Track your Order
                      </a>
                      <a
                        href="#"
                        className="block text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        Compare
                      </a>
                    </nav>
                  </div>
                </div>
                <div className="space-y-6">
                  <h2 className="text-lg font-semibold text-gray-900 border-b border-yellow-400 pb-2">
                    Blog Pages
                  </h2>
                  <nav className="space-y-3">
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Blog v1
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Blog v2
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Blog v3
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Blog Full Width
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Single Blog Post
                    </a>
                  </nav>
                  <div className="pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 border-b border-yellow-400 pb-2 mb-3">
                      Shop Columns
                    </h3>
                    <nav className="space-y-3">
                      <a
                        href="#"
                        className="block text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        7 Column Full width
                      </a>
                      <a
                        href="#"
                        className="block text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        6 Column Full width
                      </a>
                      <a
                        href="#"
                        className="block text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        5 Column Sidebar
                      </a>
                      <a
                        href="#"
                        className="block text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        4 Column Sidebar
                      </a>
                      <a
                        href="#"
                        className="block text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        3 Column Sidebar
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="hidden md:block w-64 bg-white border-r p-4">
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  {item.isSpecial ? (
                    <div className="py-2 px-4 text-gray-700 hover:text-yellow-600 cursor-pointer">
                      {item.title}
                    </div>
                  ) : (
                    <div>
                      <div
                        className="flex justify-between items-center cursor-pointer hover:text-yellow-600 py-2 px-4"
                        onClick={() => item.options && handleProductSelect(item.options[0])}
                      >
                        <span className="font-medium text-gray-700">{item.title}</span>
                        {item.options && <ChevronRight className="w-4 h-4" />}
                      </div>
                      {item.options && (
                        <ul className="ml-4 space-y-1">
                          {item.options.map((option, i) => (
                            <li
                              key={i}
                              className={`cursor-pointer py-1 px-4 text-sm ${
                                slides[currentSlide].title.toLowerCase().includes(option.toLowerCase())
                                  ? "bg-yellow-50 text-yellow-700"
                                  : "text-gray-600 hover:bg-gray-50"
                              }`}
                              onClick={() => handleProductSelect(option)}
                            >
                              {option}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Slider Section */}
          <div className="flex-1 bg-gradient-to-r from-gray-50 to-gray-100 p-4">
            <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 flex flex-col md:flex-row items-center justify-center p-4"
                  >
                    <div className="space-y-4 md:w-1/2">
                      <div className="space-y-2">
                        <h2 className="text-3xl md:text-5xl font-light text-gray-800 leading-tight">
                          {slide.title.split(" ")[0]}<br />
                          <span className="font-semibold">
                            {slide.title.split(" ").slice(1).join(" ")}
                          </span>
                        </h2>
                        <h3 className="text-lg md:text-xl text-gray-600 font-medium">
                          {slide.subtitle}
                        </h3>
                      </div>
                      <div className="space-y-2">
                        <div className="text-gray-600 text-sm">START FROM</div>
                        <div className="flex items-baseline space-x-2">
                          <span className="text-gray-500 text-xl">₹</span>
                          <span className="text-4xl md:text-5xl font-light text-gray-800">
                            {slide.price}
                          </span>
                        </div>
                      </div>
                      <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition-colors">
                        Buy Now
                      </button>
                    </div>
                    <div className="relative md:w-1/2 mt-4 md:mt-0">
                      <div className="relative group">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full max-w-md mx-auto rounded-lg shadow-2xl cursor-pointer transform transition-transform group-hover:scale-105"
                        />
                        <div
                          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-20 rounded-lg cursor-pointer"
                        >
                          <ExternalLink className="w-12 h-12 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Navigation buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full p-2 shadow-md"
              >
                &#8592;
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full p-2 shadow-md"
              >
                &#8594;
              </button>
              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentSlide === index ? "bg-yellow-400" : "bg-gray-300"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
            <div className="fixed top-0 left-0 h-full w-64 bg-white overflow-y-auto">
              <div className="p-4 border-b flex justify-between items-center">
                <h2 className="text-xl font-bold">Menu</h2>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      {item.isSpecial ? (
                        <div className="py-2 px-4 text-gray-700 hover:text-yellow-600 cursor-pointer">
                          {item.title}
                        </div>
                      ) : (
                        <div>
                          <div
                            className="flex justify-between items-center cursor-pointer hover:text-yellow-600 py-2 px-4"
                            onClick={() => item.options && handleProductSelect(item.options[0])}
                          >
                            <span className="font-medium text-gray-700">{item.title}</span>
                            {item.options && <ChevronRight className="w-4 h-4" />}
                          </div>
                          {item.options && (
                            <ul className="ml-4 space-y-1">
                              {item.options.map((option, i) => (
                                <li
                                  key={i}
                                  className={`cursor-pointer py-1 px-4 text-sm ${
                                    slides[currentSlide].title.toLowerCase().includes(option.toLowerCase())
                                      ? "bg-yellow-50 text-yellow-700"
                                      : "text-gray-600 hover:bg-gray-50"
                                  }`}
                                  onClick={() => handleProductSelect(option)}
                                >
                                  {option}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Deals Section */}
        <div className="px-6 md:px-12 lg:px-20 py-8 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
            {data.map((val, i) => (
              <div
                key={i}
                className="flex items-center bg-[#e5e7eb] shadow-md p-4 rounded-lg"
              >
                <div className="flex-shrink-0">
                  <img
                    src={val.img}
                    alt="deal"
                    className="w-32 h-28 object-contain"
                  />
                </div>
                <div className="ml-4 flex flex-col justify-between">
                  <p className="text-gray-700 text-lg leading-snug">
                    {val.text}
                  </p>
                  <button className="flex items-center gap-2 font-semibold text-gray-800 hover:text-black mt-2">
                    Shop now
                    <ArrowRight className="text-yellow-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;