
// // import React, { useState } from "react";
// // import { 
// //   Search, 
// //   Heart, 
// //   ShoppingCart, 
// //   Shield, 
// //   Menu, 
// //   X, 
// //   HelpCircle, 
// //   Package, 
// //   User,
// //   Star,
// //   Check,
// //   Zap,
// //   Globe,
// //   Lock
// // } from "lucide-react";

// // const Hero = () => {
// //   // Antivirus product data with realistic content
// //   const products = {
// //     avira: {
// //       name: "Avira Prime",
// //       img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop&crop=center",
// //       desc: "Complete digital security suite with real-time protection, VPN, password manager, and system optimization tools.",
// //       price: "$45.99",
// //       originalPrice: "$89.99",
// //       devices: "Up to 5 devices",
// //       features: ["Real-time protection", "Secure VPN", "Password manager", "System optimizer"],
// //       rating: 4.6,
// //       badge: "Most Popular"
// //     },
// //     kaspersky: {
// //       name: "Kaspersky Internet Security",
// //       img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&h=200&fit=crop&crop=center",
// //       desc: "Advanced protection against viruses, ransomware, and cyber threats with banking protection and parental controls.",
// //       price: "$39.99",
// //       originalPrice: "$79.99",
// //       devices: "Up to 3 devices",
// //       features: ["Anti-ransomware", "Banking protection", "Parental controls", "Privacy cleaner"],
// //       rating: 4.8,
// //       badge: "Best Security"
// //     },
// //     norton: {
// //       name: "Norton 360 Deluxe",
// //       img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop&crop=center",
// //       desc: "Comprehensive protection with dark web monitoring, 50GB cloud backup, and secure VPN for complete peace of mind.",
// //       price: "$49.99",
// //       originalPrice: "$149.99",
// //       devices: "Up to 5 devices",
// //       features: ["Dark web monitoring", "50GB cloud backup", "Secure VPN", "Identity theft protection"],
// //       rating: 4.5,
// //       badge: "Premium Choice"
// //     },
// //     mcafee: {
// //       name: "McAfee Total Protection",
// //       img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop&crop=center",
// //       desc: "Award-winning antivirus with identity monitoring, encrypted storage, and password manager for ultimate security.",
// //       price: "$34.99",
// //       originalPrice: "$119.99",
// //       devices: "Unlimited devices",
// //       features: ["Identity monitoring", "Encrypted storage", "Password manager", "Safe web browsing"],
// //       rating: 4.4,
// //       badge: "Best Value"
// //     },
// //   };

// //   const [activeProduct, setActiveProduct] = useState(products.avira);
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// //   const renderStars = (rating) => {
// //     return Array.from({ length: 5 }, (_, i) => (
// //       <Star
// //         key={i}
// //         className={`w-4 h-4 ${
// //           i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
// //         }`}
// //       />
// //     ));
// //   };

// //   return (
// //     <div className="w-full bg-white min-h-screen">
// //       {/* Top welcome bar */}
// //       <div className="bg-gray-900 text-white text-sm py-2 px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
// //         <span className="flex items-center mb-1 md:mb-0">
// //           <Shield className="w-4 h-4 mr-2" />
// //           Welcome to Antivirus E-Store - Protect Your Digital Life
// //         </span>
// //         <div className="flex space-x-4 text-xs md:text-sm">
// //           <a href="#" className="hover:text-lime-400 flex items-center">
// //             <HelpCircle className="w-3 h-3 mr-1" />
// //             Help
// //           </a>
// //           <a href="#" className="hover:text-lime-400 flex items-center">
// //             <Package className="w-3 h-3 mr-1" />
// //             Track Order
// //           </a>
// //           <a href="#" className="hover:text-lime-400 flex items-center">
// //             <User className="w-3 h-3 mr-1" />
// //             Sign In
// //           </a>
// //         </div>
// //       </div>

// //       {/* Navbar + Search */}
// //       <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b shadow-sm">
// //         <h1 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center">
// //           <Shield className="w-6 h-6 md:w-8 md:h-8 mr-2 text-lime-600" />
// //           antivirus<span className="text-lime-600">.store</span>
// //         </h1>

// //         {/* Desktop Search */}
// //         <div className="hidden md:flex items-center w-1/2">
// //           <div className="relative w-full">
// //             <input
// //               type="text"
// //               placeholder="Search Antivirus Products..."
// //               className="w-full border-2 border-gray-200 p-3 pl-4 pr-12 rounded-lg focus:border-lime-500 focus:outline-none"
// //             />
// //             <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-lime-500 p-2 rounded text-white hover:bg-lime-600 transition-colors">
// //               <Search className="w-4 h-4" />
// //             </button>
// //           </div>
// //         </div>

// //         <div className="flex items-center space-x-4">
// //           {/* Mobile menu button */}
// //           <button 
// //             className="md:hidden"
// //             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// //           >
// //             {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
// //           </button>

// //           {/* Desktop icons */}
// //           <div className="hidden md:flex items-center space-x-4">
// //             <Heart className="w-6 h-6 text-gray-600 hover:text-red-500 cursor-pointer transition-colors" />
// //             <div className="flex items-center space-x-1 cursor-pointer">
// //               <ShoppingCart className="w-6 h-6 text-gray-600" />
// //               <span className="font-semibold">$0.00</span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile Search */}
// //       <div className="md:hidden px-4 py-3 border-b">
// //         <div className="relative">
// //           <input
// //             type="text"
// //             placeholder="Search products..."
// //             className="w-full border-2 border-gray-200 p-3 pl-4 pr-12 rounded-lg focus:border-lime-500 focus:outline-none"
// //           />
// //           <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-lime-500 p-2 rounded text-white">
// //             <Search className="w-4 h-4" />
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       {isMobileMenuOpen && (
// //         <div className="md:hidden bg-gray-50 border-b">
// //           <div className="px-4 py-3">
// //             <h3 className="font-semibold mb-3 flex items-center">
// //               <Shield className="w-4 h-4 mr-2" />
// //               Antivirus Packages
// //             </h3>
// //             <ul className="space-y-3">
// //               {Object.entries(products).map(([key, product]) => (
// //                 <li 
// //                   key={key}
// //                   className={`cursor-pointer p-3 rounded-lg transition-colors ${
// //                     activeProduct.name === product.name 
// //                       ? 'bg-lime-100 text-lime-700 font-semibold' 
// //                       : 'hover:bg-gray-100'
// //                   }`}
// //                   onClick={() => {
// //                     setActiveProduct(product);
// //                     setIsMobileMenuOpen(false);
// //                   }}
// //                 >
// //                   <div className="flex justify-between items-center">
// //                     <span>{product.name}</span>
// //                     {product.badge && (
// //                       <span className="bg-lime-500 text-white px-2 py-1 rounded-full text-xs">
// //                         {product.badge}
// //                       </span>
// //                     )}
// //                   </div>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         </div>
// //       )}

// //       {/* Main content */}
// //       <div className="flex flex-col md:flex-row">
// //         {/* Desktop Sidebar */}
// //         <div className="hidden md:block w-1/4 bg-gray-50 border-r p-6">
// //           <h3 className="font-semibold mb-4 text-lg flex items-center">
// //             <Shield className="w-5 h-5 mr-2 text-lime-600" />
// //             Antivirus Packages
// //           </h3>
// //           <ul className="space-y-3">
// //             {Object.entries(products).map(([key, product]) => (
// //               <li 
// //                 key={key}
// //                 className={`cursor-pointer p-3 rounded-lg transition-colors relative ${
// //                   activeProduct.name === product.name 
// //                     ? 'bg-lime-100 text-lime-700 font-semibold border-l-4 border-lime-500' 
// //                     : 'hover:bg-gray-100'
// //                 }`}
// //                 onClick={() => setActiveProduct(product)}
// //               >
// //                 <div className="flex justify-between items-start">
// //                   <div>
// //                     <div className="font-medium">{product.name}</div>
// //                     <div className="text-sm text-gray-500">{product.devices}</div>
// //                     <div className="flex items-center mt-1">
// //                       {renderStars(product.rating)}
// //                       <span className="ml-1 text-xs text-gray-500">({product.rating})</span>
// //                     </div>
// //                   </div>
// //                 </div>
// //                 {product.badge && (
// //                   <span className="absolute top-1 right-1 bg-lime-500 text-white px-2 py-1 rounded-full text-xs">
// //                     {product.badge}
// //                   </span>
// //                 )}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         {/* Main product display */}
// //         <div className="w-full md:w-3/4 p-4 md:p-8">
// //           <div className="max-w-4xl mx-auto">
// //             <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-xl p-6 md:p-8 shadow-lg">
// //               {/* Product badge */}
// //               {activeProduct.badge && (
// //                 <div className="flex justify-center mb-4">
// //                   <span className="bg-lime-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
// //                     <Zap className="w-4 h-4 mr-1" />
// //                     {activeProduct.badge}
// //                   </span>
// //                 </div>
// //               )}

// //               <div className="grid md:grid-cols-2 gap-8 items-center">
// //                 {/* Product image and basic info */}
// //                 <div className="text-center md:text-left">
// //                   <img
// //                     src={activeProduct.img}
// //                     alt={activeProduct.name}
// //                     className="w-full max-w-[300px] mx-auto md:mx-0 mb-6 rounded-lg shadow-md"
// //                   />
// //                   <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
// //                     {activeProduct.name}
// //                   </h2>
// //                   <div className="flex items-center justify-center md:justify-start mb-3">
// //                     {renderStars(activeProduct.rating)}
// //                     <span className="ml-2 text-gray-600">({activeProduct.rating} out of 5)</span>
// //                   </div>
// //                   <p className="text-gray-600 mb-4 leading-relaxed">
// //                     {activeProduct.desc}
// //                   </p>
// //                 </div>

// //                 {/* Pricing and features */}
// //                 <div className="space-y-6">
// //                   <div className="bg-white p-6 rounded-lg shadow-sm">
// //                     <div className="flex items-center justify-between mb-4">
// //                       <div>
// //                         <span className="text-3xl font-bold text-gray-900">
// //                           {activeProduct.price}
// //                         </span>
// //                         <span className="text-lg text-gray-500 line-through ml-2">
// //                           {activeProduct.originalPrice}
// //                         </span>
// //                       </div>
// //                       <div className="text-right">
// //                         <div className="text-sm text-gray-500">per year</div>
// //                         <div className="text-sm text-lime-600 font-semibold">
// //                           {Math.round((1 - parseFloat(activeProduct.price.slice(1)) / parseFloat(activeProduct.originalPrice.slice(1))) * 100)}% OFF
// //                         </div>
// //                       </div>
// //                     </div>

// //                     <div className="mb-4">
// //                       <div className="flex items-center text-gray-600 mb-2">
// //                         <Globe className="w-4 h-4 mr-2" />
// //                         <span className="font-medium">{activeProduct.devices}</span>
// //                       </div>
// //                     </div>

// //                     <div className="space-y-2 mb-6">
// //                       {activeProduct.features.map((feature, index) => (
// //                         <div key={index} className="flex items-center text-gray-700">
// //                           <Check className="w-4 h-4 mr-3 text-green-500" />
// //                           <span className="text-sm">{feature}</span>
// //                         </div>
// //                       ))}
// //                     </div>

// //                     <button className="w-full bg-lime-500 px-6 py-4 rounded-lg text-white font-semibold hover:bg-lime-600 transition-colors flex items-center justify-center space-x-2 text-lg">
// //                       <Lock className="w-5 h-5" />
// //                       <span>Buy Now - Secure Checkout</span>
// //                     </button>

// //                     <p className="text-xs text-gray-500 text-center mt-3">
// //                       30-day money-back guarantee • Instant download • 24/7 support
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Hero;




// import React, { useState } from "react";
// import {
//   Search,
//   Heart,
//   ShoppingCart,
//   Shield,
//   Menu,
//   X,
//   HelpCircle,
//   Package,
//   User,
//   Star,
//   Check,
//   Zap,
//   Globe,
//   Lock,
// } from "lucide-react";

// const Hero = () => {
//   const products = {
//     avira: {
//       name: "Avira Prime",
//       img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center",
//       desc: "Complete digital security suite with real-time protection, VPN, password manager, and system optimization tools.",
//       price: "$45.99",
//       originalPrice: "$89.99",
//       devices: "Up to 5 devices",
//       features: ["Real-time protection", "Secure VPN", "Password manager", "System optimizer"],
//       rating: 4.6,
//       badge: "Most Popular",
//     },
//     kaspersky: {
//       name: "Kaspersky Internet Security",
//       img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop&crop=center",
//       desc: "Advanced protection against viruses, ransomware, and cyber threats with banking protection and parental controls.",
//       price: "$39.99",
//       originalPrice: "$79.99",
//       devices: "Up to 3 devices",
//       features: ["Anti-ransomware", "Banking protection", "Parental controls", "Privacy cleaner"],
//       rating: 4.8,
//       badge: "Best Security",
//     },
//     norton: {
//       name: "Norton 360 Deluxe",
//       img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center",
//       desc: "Comprehensive protection with dark web monitoring, 50GB cloud backup, and secure VPN for complete peace of mind.",
//       price: "$49.99",
//       originalPrice: "$149.99",
//       devices: "Up to 5 devices",
//       features: ["Dark web monitoring", "50GB cloud backup", "Secure VPN", "Identity theft protection"],
//       rating: 4.5,
//       badge: "Premium Choice",
//     },
//     mcafee: {
//       name: "McAfee Total Protection",
//       img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&crop=center",
//       desc: "Award-winning antivirus with identity monitoring, encrypted storage, and password manager for ultimate security.",
//       price: "$34.99",
//       originalPrice: "$119.99",
//       devices: "Unlimited devices",
//       features: ["Identity monitoring", "Encrypted storage", "Password manager", "Safe web browsing"],
//       rating: 4.4,
//       badge: "Best Value",
//     },
//   };

//   const [activeProduct, setActiveProduct] = useState(products.avira);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [imageModal, setImageModal] = useState(null);

//   const renderStars = (rating) => {
//     return Array.from({ length: 5 }, (_, i) => (
//       <Star
//         key={i}
//         className={`w-4 h-4 ${
//           i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
//         }`}
//       />
//     ));
//   };

//   return (
//     <div className="w-full bg-white min-h-screen">
//       {/* Top welcome bar */}
//       <div className="bg-gray-900 text-white text-sm py-2 px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
//         <span className="flex items-center mb-1 md:mb-0">
//           <Shield className="w-4 h-4 mr-2" />
//           Welcome to Antivirus E-Store - Protect Your Digital Life
//         </span>
//         <div className="flex space-x-4 text-xs md:text-sm">
//           <a href="#" className="hover:text-lime-400 flex items-center">
//             <HelpCircle className="w-3 h-3 mr-1" /> Help
//           </a>
//           <a href="#" className="hover:text-lime-400 flex items-center">
//             <Package className="w-3 h-3 mr-1" /> Track Order
//           </a>
//           <a href="#" className="hover:text-lime-400 flex items-center">
//             <User className="w-3 h-3 mr-1" /> Sign In
//           </a>
//         </div>
//       </div>

//       {/* Navbar */}
//       <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b shadow-sm">
//         <h1 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center">
//           <Shield className="w-6 h-6 md:w-8 md:h-8 mr-2 text-lime-600" />
//           antivirus<span className="text-lime-600">.store</span>
//         </h1>

//         {/* Desktop Search */}
//         <div className="hidden md:flex items-center w-1/2">
//           <div className="relative w-full">
//             <input
//               type="text"
//               placeholder="Search Antivirus Products..."
//               className="w-full border-2 border-gray-200 p-3 pl-4 pr-12 rounded-lg focus:border-lime-500 focus:outline-none"
//             />
//             <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-lime-500 p-2 rounded text-white hover:bg-lime-600">
//               <Search className="w-4 h-4" />
//             </button>
//           </div>
//         </div>

//         <div className="flex items-center space-x-4">
//           <button
//             className="md:hidden"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>

//           <div className="hidden md:flex items-center space-x-4">
//             <Heart className="w-6 h-6 text-gray-600 hover:text-red-500 cursor-pointer" />
//             <div className="flex items-center space-x-1 cursor-pointer">
//               <ShoppingCart className="w-6 h-6 text-gray-600" />
//               <span className="font-semibold">$0.00</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Layout */}
//       <div className="flex flex-col md:flex-row">
//         {/* Sidebar */}
//         <div className="hidden md:block w-1/4 bg-gray-50 border-r p-6">
//           <h3 className="font-semibold mb-4 text-lg flex items-center">
//             <Shield className="w-5 h-5 mr-2 text-lime-600" /> Antivirus Packages
//           </h3>
//           <ul className="space-y-3">
//             {Object.entries(products).map(([key, product]) => (
//               <li
//                 key={key}
//                 className={`cursor-pointer p-3 rounded-lg transition-colors relative ${
//                   activeProduct.name === product.name
//                     ? "bg-lime-100 text-lime-700 font-semibold border-l-4 border-lime-500"
//                     : "hover:bg-gray-100"
//                 }`}
//                 onClick={() => setActiveProduct(product)}
//               >
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <div className="font-medium">{product.name}</div>
//                     <div className="text-sm text-gray-500">{product.devices}</div>
//                     <div className="flex items-center mt-1">
//                       {renderStars(product.rating)}
//                       <span className="ml-1 text-xs text-gray-500">({product.rating})</span>
//                     </div>
//                   </div>
//                 </div>
//                 {product.badge && (
//                   <span className="absolute top-1 right-1 bg-lime-500 text-white px-2 py-1 rounded-full text-xs">
//                     {product.badge}
//                   </span>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Main product display */}
//         <div className="w-full md:w-3/4 p-4 md:p-8">
//           <div className="max-w-4xl mx-auto">
//             <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-xl p-6 md:p-8 shadow-lg">
//               {activeProduct.badge && (
//                 <div className="flex justify-center mb-4">
//                   <span className="bg-lime-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
//                     <Zap className="w-4 h-4 mr-1" /> {activeProduct.badge}
//                   </span>
//                 </div>
//               )}

//               <div className="grid md:grid-cols-2 gap-8 items-center">
//                 <div className="text-center md:text-left">
//                   <img
//                     src={activeProduct.img}
//                     alt={activeProduct.name}
//                     className="w-full max-w-[300px] mx-auto md:mx-0 mb-6 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
//                     onClick={() => setImageModal(activeProduct.img)}
//                   />
//                   <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
//                     {activeProduct.name}
//                   </h2>
//                   <div className="flex items-center justify-center md:justify-start mb-3">
//                     {renderStars(activeProduct.rating)}
//                     <span className="ml-2 text-gray-600">({activeProduct.rating} out of 5)</span>
//                   </div>
//                   <p className="text-gray-600 mb-4 leading-relaxed">{activeProduct.desc}</p>
//                 </div>

//                 <div className="space-y-6">
//                   <div className="bg-white p-6 rounded-lg shadow-sm">
//                     <div className="flex items-center justify-between mb-4">
//                       <div>
//                         <span className="text-3xl font-bold text-gray-900">
//                           {activeProduct.price}
//                         </span>
//                         <span className="text-lg text-gray-500 line-through ml-2">
//                           {activeProduct.originalPrice}
//                         </span>
//                       </div>
//                       <div className="text-right">
//                         <div className="text-sm text-gray-500">per year</div>
//                         <div className="text-sm text-lime-600 font-semibold">
//                           {Math.round(
//                             (1 -
//                               parseFloat(activeProduct.price.slice(1)) /
//                                 parseFloat(activeProduct.originalPrice.slice(1))) *
//                               100
//                           )}% OFF
//                         </div>
//                       </div>
//                     </div>

//                     <div className="mb-4">
//                       <div className="flex items-center text-gray-600 mb-2">
//                         <Globe className="w-4 h-4 mr-2" />
//                         <span className="font-medium">{activeProduct.devices}</span>
//                       </div>
//                     </div>

//                     <div className="space-y-2 mb-6">
//                       {activeProduct.features.map((feature, index) => (
//                         <div key={index} className="flex items-center text-gray-700">
//                           <Check className="w-4 h-4 mr-3 text-green-500" />
//                           <span className="text-sm">{feature}</span>
//                         </div>
//                       ))}
//                     </div>

//                     <button className="w-full bg-lime-500 px-6 py-4 rounded-lg text-white font-semibold hover:bg-lime-600 flex items-center justify-center space-x-2 text-lg">
//                       <Lock className="w-5 h-5" /> <span>Buy Now - Secure Checkout</span>
//                     </button>

//                     <p className="text-xs text-gray-500 text-center mt-3">
//                       30-day money-back guarantee • Instant download • 24/7 support
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Image Modal */}
//       {imageModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//           <div className="relative">
//             <img src={imageModal} alt="Preview" className="max-h-[90vh] rounded-lg shadow-lg" />
//             <button
//               className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
//               onClick={() => setImageModal(null)}
//             >
//               <X className="w-6 h-6 text-gray-800" />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Hero;







import React, { useState } from "react";
import { 
  Search, 
  Heart, 
  ShoppingCart, 
  Shield, 
  Menu, 
  X, 
  HelpCircle, 
  Package, 
  User,
  Star,
  Check,
  Zap,
  Globe,
  Lock,
  ChevronRight,
  ChevronDown,
  Smartphone,
  Cloud,
  Wifi,
  ExternalLink
} from "lucide-react";

const Hero = () => {
  // Antivirus product data with realistic content organized by categories
  const productCategories = {
    freeAntivirus: [
      {
        name: "Avast Free Antivirus",
        img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop&crop=center",
        desc: "Essential protection against viruses and malware with real-time security updates and Wi-Fi security scanner.",
        price: "Free",
        originalPrice: "Free",
        devices: "1 device",
        features: ["Real-time protection", "Wi-Fi security scanner", "Browser cleanup", "Passive mode for multiple AVs"],
        rating: 4.2,
        badge: "Most Popular Free",
        category: "Free Antivirus"
      },
      {
        name: "AVG AntiVirus Free",
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&h=200&fit=crop&crop=center",
        desc: "Free protection with advanced virus detection, email shield, and web protection for safe browsing.",
        price: "Free",
        originalPrice: "Free",
        devices: "1 device",
        features: ["Email shield", "Web protection", "File shield", "Behavior shield"],
        rating: 4.1,
        badge: "Best Free Detection",
        category: "Free Antivirus"
      },
      {
        name: "Avira Free Security",
        img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop&crop=center",
        desc: "German-engineered security with real-time protection, privacy tools, and system optimization.",
        price: "Free",
        originalPrice: "Free",
        devices: "1 device",
        features: ["Real-time protection", "Privacy tools", "System speedup", "Browser safety"],
        rating: 4.3,
        badge: "Privacy Focused",
        category: "Free Antivirus"
      }
    ],
    internetSecurity: [
      {
        name: "Kaspersky Internet Security",
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&h=200&fit=crop&crop=center",
        desc: "Advanced protection against viruses, ransomware, and cyber threats with banking protection and parental controls.",
        price: "$39.99",
        originalPrice: "$79.99",
        devices: "Up to 3 devices",
        features: ["Anti-ransomware", "Banking protection", "Parental controls", "Privacy cleaner"],
        rating: 4.8,
        badge: "Best Security",
        category: "Internet Security"
      },
      {
        name: "Bitdefender Internet Security",
        img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop&crop=center",
        desc: "Multi-layer ransomware protection with advanced threat defense and secure VPN included.",
        price: "$44.99",
        originalPrice: "$89.99",
        devices: "Up to 3 devices",
        features: ["Advanced threat defense", "Ransomware remediation", "Firewall", "Anti-spam"],
        rating: 4.7,
        badge: "Top Rated",
        category: "Internet Security"
      },
      {
        name: "ESET Internet Security",
        img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop&crop=center",
        desc: "Multilayered protection with banking protection, anti-phishing, and secure data encryption.",
        price: "$49.99",
        originalPrice: "$99.99",
        devices: "Up to 5 devices",
        features: ["Banking protection", "Anti-phishing", "Firewall", "Device control"],
        rating: 4.6,
        badge: "Enterprise Grade",
        category: "Internet Security"
      }
    ],
    totalSecurity: [
      {
        name: "Norton 360 Deluxe",
        img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop&crop=center",
        desc: "Comprehensive protection with dark web monitoring, 50GB cloud backup, and secure VPN for complete peace of mind.",
        price: "$49.99",
        originalPrice: "$149.99",
        devices: "Up to 5 devices",
        features: ["Dark web monitoring", "50GB cloud backup", "Secure VPN", "Identity theft protection"],
        rating: 4.5,
        badge: "Premium Choice",
        category: "Total Security"
      },
      {
        name: "McAfee Total Protection",
        img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop&crop=center",
        desc: "Award-winning antivirus with identity monitoring, encrypted storage, and password manager for ultimate security.",
        price: "$34.99",
        originalPrice: "$119.99",
        devices: "Unlimited devices",
        features: ["Identity monitoring", "Encrypted storage", "Password manager", "Safe web browsing"],
        rating: 4.4,
        badge: "Best Value",
        category: "Total Security"
      },
      {
        name: "Quick Heal Total Security",
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&h=200&fit=crop&crop=center",
        desc: "Complete security suite with parental control, data theft protection, and safe banking features.",
        price: "$42.99",
        originalPrice: "$85.99",
        devices: "Up to 10 devices",
        features: ["Parental control", "Data theft protection", "Safe banking", "PC tuner"],
        rating: 4.3,
        badge: "Family Protection",
        category: "Total Security"
      }
    ],
    mobileSecurity: [
      {
        name: "Kaspersky Mobile Antivirus",
        img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop&crop=center",
        desc: "Premium mobile protection with anti-theft, app lock, and call filtering for Android devices.",
        price: "$14.99",
        originalPrice: "$29.99",
        devices: "1 mobile device",
        features: ["Anti-theft protection", "App lock", "Call filtering", "Text anti-phishing"],
        rating: 4.6,
        badge: "Mobile Expert",
        category: "Mobile Security"
      },
      {
        name: "Norton Mobile Security",
        img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop&crop=center",
        desc: "Comprehensive mobile security with Wi-Fi security, device security, and web protection.",
        price: "$19.99",
        originalPrice: "$39.99",
        devices: "1 mobile device",
        features: ["Wi-Fi security", "Device security", "Web protection", "SMS security"],
        rating: 4.4,
        badge: "Trusted Brand",
        category: "Mobile Security"
      },
      {
        name: "Avast Mobile Security",
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&h=200&fit=crop&crop=center",
        desc: "Advanced mobile protection with photo vault, app insights, and junk cleaner for optimal performance.",
        price: "$11.99",
        originalPrice: "$23.99",
        devices: "1 mobile device",
        features: ["Photo vault", "App insights", "Junk cleaner", "Anti-theft"],
        rating: 4.2,
        badge: "Performance Plus",
        category: "Mobile Security"
      }
    ],
    cloudAntivirus: [
      {
        name: "Panda Dome Advanced",
        img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop&crop=center",
        desc: "Cloud-based protection with unlimited VPN, password manager, and parental controls.",
        price: "$28.49",
        originalPrice: "$56.99",
        devices: "Up to 5 devices",
        features: ["Unlimited VPN", "Password manager", "Parental controls", "Wi-Fi protection"],
        rating: 4.3,
        badge: "Cloud Leader",
        category: "Cloud Antivirus"
      },
      {
        name: "Sophos Home Premium",
        img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop&crop=center",
        desc: "Next-generation cybersecurity with AI-powered threat detection and remote management.",
        price: "$45.00",
        originalPrice: "$60.00",
        devices: "Up to 10 devices",
        features: ["AI-powered detection", "Remote management", "Ransomware protection", "Web filtering"],
        rating: 4.5,
        badge: "AI Powered",
        category: "Cloud Antivirus"
      },
      {
        name: "Webroot SecureAnywhere",
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&h=200&fit=crop&crop=center",
        desc: "Lightweight cloud antivirus with identity protection and secure browsing for fast performance.",
        price: "$37.49",
        originalPrice: "$49.99",
        devices: "Up to 3 devices",
        features: ["Identity protection", "Secure browsing", "Firewall monitor", "Fast scanning"],
        rating: 4.1,
        badge: "Lightweight",
        category: "Cloud Antivirus"
      }
    ]
  };

  // Sidebar menu items
  const menuItems = [
    {
      title: "Free Antivirus",
      icon: <Shield className="w-4 h-4" />,
      options: ["Avast Free Antivirus", "AVG AntiVirus Free", "Avira Free Security"],
      products: productCategories.freeAntivirus
    },
    {
      title: "Internet Security",
      icon: <Wifi className="w-4 h-4" />,
      options: ["Kaspersky Internet Security", "Bitdefender Internet Security", "ESET Internet Security"],
      products: productCategories.internetSecurity
    },
    {
      title: "Total Security",
      icon: <Lock className="w-4 h-4" />,
      options: ["Norton 360 Deluxe", "McAfee Total Protection", "Quick Heal Total Security"],
      products: productCategories.totalSecurity
    },
    {
      title: "Mobile Security",
      icon: <Smartphone className="w-4 h-4" />,
      options: ["Kaspersky Mobile Antivirus", "Norton Mobile Security", "Avast Mobile Security"],
      products: productCategories.mobileSecurity
    },
    {
      title: "Cloud Antivirus",
      icon: <Cloud className="w-4 h-4" />,
      options: ["Panda Dome Advanced", "Sophos Home Premium", "Webroot SecureAnywhere"],
      products: productCategories.cloudAntivirus
    },
  ];

  // Get all products in a flat array for easy access
  const allProducts = Object.values(productCategories).flat();

  const [activeProduct, setActiveProduct] = useState(allProducts[3]); // Start with Norton 360
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSidebarItem, setOpenSidebarItem] = useState(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  const toggleSidebarItem = (index) => {
    setOpenSidebarItem(openSidebarItem === index ? null : index);
  };

  const handleProductSelect = (productName) => {
    const product = allProducts.find(p => p.name === productName);
    if (product) {
      setActiveProduct(product);
      setIsMobileMenuOpen(false);
      setOpenSidebarItem(null);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  const ProductModal = () => {
    if (!isProductModalOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
            <h3 className="text-xl font-bold text-gray-900">{activeProduct.name}</h3>
            <button
              onClick={() => setIsProductModalOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img
                  src={activeProduct.img}
                  alt={activeProduct.name}
                  className="w-full rounded-lg shadow-lg mb-6"
                />
                <div className="bg-lime-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-lime-800 mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {activeProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-lime-700">
                        <Check className="w-4 h-4 mr-2 text-lime-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    {renderStars(activeProduct.rating)}
                    <span className="ml-2 text-gray-600">({activeProduct.rating} out of 5)</span>
                  </div>
                  {activeProduct.badge && (
                    <span className="bg-lime-500 text-white px-3 py-1 rounded-full text-sm">
                      {activeProduct.badge}
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{activeProduct.desc}</p>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-3xl font-bold text-gray-900">{activeProduct.price}</span>
                      {activeProduct.originalPrice !== activeProduct.price && activeProduct.originalPrice !== "Free" && (
                        <span className="text-lg text-gray-500 line-through ml-2">
                          {activeProduct.originalPrice}
                        </span>
                      )}
                    </div>
                    {activeProduct.price !== "Free" && activeProduct.originalPrice !== activeProduct.price && (
                      <div className="text-right">
                        <div className="text-sm text-gray-500">per year</div>
                        <div className="text-sm text-lime-600 font-semibold">
                          {Math.round((1 - parseFloat(activeProduct.price.slice(1)) / parseFloat(activeProduct.originalPrice.slice(1))) * 100)}% OFF
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <Globe className="w-4 h-4 mr-2" />
                    <span>{activeProduct.devices}</span>
                  </div>
                  
                  <button className="w-full bg-lime-500 px-6 py-4 rounded-lg text-white font-semibold hover:bg-lime-600 transition-colors flex items-center justify-center space-x-2">
                    <Lock className="w-5 h-5" />
                    <span>{activeProduct.price === "Free" ? "Download Now" : "Buy Now - Secure Checkout"}</span>
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center mt-3">
                    {activeProduct.price === "Free" ? "No credit card required • Instant download" : "30-day money-back guarantee • Instant download • 24/7 support"}
                  </p>
                </div>
                
                <div className="text-sm text-gray-600">
                  <p><strong>Category:</strong> {activeProduct.category}</p>
                  <p><strong>Compatibility:</strong> Windows, Mac, Android, iOS</p>
                  <p><strong>Support:</strong> 24/7 Customer Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Top welcome bar */}
      <div className="bg-gray-900 text-white text-sm py-2 px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
        <span className="flex items-center mb-1 md:mb-0">
          <Shield className="w-4 h-4 mr-2" />
          Welcome to Antivirus E-Store - Protect Your Digital Life
        </span>
        <div className="flex space-x-4 text-xs md:text-sm">
          <a href="#" className="hover:text-lime-400 flex items-center">
            <HelpCircle className="w-3 h-3 mr-1" />
            Help
          </a>
          <a href="#" className="hover:text-lime-400 flex items-center">
            <Package className="w-3 h-3 mr-1" />
            Track Order
          </a>
          <a href="#" className="hover:text-lime-400 flex items-center">
            <User className="w-3 h-3 mr-1" />
            Sign In
          </a>
        </div>
      </div>

      {/* Navbar + Search */}
      <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b shadow-sm">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center">
          <Shield className="w-6 h-6 md:w-8 md:h-8 mr-2 text-lime-600" />
          antivirus<span className="text-lime-600">.store</span>
        </h1>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center w-1/2">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search Antivirus Products..."
              className="w-full border-2 border-gray-200 p-3 pl-4 pr-12 rounded-lg focus:border-lime-500 focus:outline-none"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-lime-500 p-2 rounded text-white hover:bg-lime-600 transition-colors">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="hidden md:flex items-center space-x-4">
            <Heart className="w-6 h-6 text-gray-600 hover:text-red-500 cursor-pointer transition-colors" />
            <div className="flex items-center space-x-1 cursor-pointer">
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              <span className="font-semibold">$0.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 py-3 border-b">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border-2 border-gray-200 p-3 pl-4 pr-12 rounded-lg focus:border-lime-500 focus:outline-none"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-lime-500 p-2 rounded text-white">
            <Search className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-50 border-b">
          <div className="px-4 py-3">
            <h3 className="font-semibold mb-3 flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              Antivirus Categories
            </h3>
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <div
                    className="flex justify-between items-center cursor-pointer hover:text-lime-600 p-2 rounded"
                    onClick={() => toggleSidebarItem(index)}
                  >
                    <span className="flex items-center">
                      {item.icon}
                      <span className="ml-2">{item.title}</span>
                    </span>
                    {openSidebarItem === index ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </div>
                  {openSidebarItem === index && (
                    <ul className="ml-6 mt-2 space-y-1">
                      {item.options.map((option, i) => (
                        <li
                          key={i}
                          className="hover:text-lime-600 cursor-pointer p-2 text-sm text-gray-600 hover:bg-lime-50 rounded"
                          onClick={() => handleProductSelect(option)}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex flex-col md:flex-row">
        {/* Desktop Sidebar */}
        <div className="hidden md:block w-1/4 bg-gray-50 border-r p-6">
          <h3 className="font-semibold mb-4 text-lg flex items-center">
            <Shield className="w-5 h-5 mr-2 text-lime-600" />
            Antivirus Categories
          </h3>
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <div
                  className="flex justify-between items-center cursor-pointer hover:text-lime-600 p-2 rounded transition-colors"
                  onClick={() => toggleSidebarItem(index)}
                >
                  <span className="flex items-center font-medium">
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                  </span>
                  {openSidebarItem === index ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </div>
                {openSidebarItem === index && (
                  <ul className="ml-6 mt-2 space-y-1">
                    {item.options.map((option, i) => (
                      <li
                        key={i}
                        className={`hover:text-lime-600 cursor-pointer p-2 text-sm rounded transition-colors ${
                          activeProduct.name === option 
                            ? 'bg-lime-100 text-lime-700 font-semibold' 
                            : 'text-gray-600 hover:bg-lime-50'
                        }`}
                        onClick={() => handleProductSelect(option)}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Main product display */}
        <div className="w-full md:w-3/4 p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-xl p-6 md:p-8 shadow-lg">
              {/* Product badge */}
              {activeProduct.badge && (
                <div className="flex justify-center mb-4">
                  <span className="bg-lime-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Zap className="w-4 h-4 mr-1" />
                    {activeProduct.badge}
                  </span>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Product image and basic info */}
                <div className="text-center md:text-left">
                  <div className="relative group">
                    <img
                      src={activeProduct.img}
                      alt={activeProduct.name}
                      className="w-full max-w-[300px] mx-auto md:mx-0 mb-6 rounded-lg shadow-md cursor-pointer transform transition-transform group-hover:scale-105"
                      onClick={() => setIsProductModalOpen(true)}
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-20 rounded-lg cursor-pointer"
                         onClick={() => setIsProductModalOpen(true)}>
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
                    {activeProduct.name}
                  </h2>
                  <div className="flex items-center justify-center md:justify-start mb-3">
                    {renderStars(activeProduct.rating)}
                    <span className="ml-2 text-gray-600">({activeProduct.rating} out of 5)</span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {activeProduct.desc}
                  </p>
                  <p className="text-sm text-lime-600 font-medium">
                    Category: {activeProduct.category}
                  </p>
                </div>

                {/* Pricing and features */}
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-3xl font-bold text-gray-900">
                          {activeProduct.price}
                        </span>
                        {activeProduct.originalPrice !== activeProduct.price && activeProduct.originalPrice !== "Free" && (
                          <span className="text-lg text-gray-500 line-through ml-2">
                            {activeProduct.originalPrice}
                          </span>
                        )}
                      </div>
                      {activeProduct.price !== "Free" && activeProduct.originalPrice !== activeProduct.price && (
                        <div className="text-right">
                          <div className="text-sm text-gray-500">per year</div>
                          <div className="text-sm text-lime-600 font-semibold">
                            {Math.round((1 - parseFloat(activeProduct.price.slice(1)) / parseFloat(activeProduct.originalPrice.slice(1))) * 100)}% OFF
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center text-gray-600 mb-2">
                        <Globe className="w-4 h-4 mr-2" />
                        <span className="font-medium">{activeProduct.devices}</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {activeProduct.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-gray-700">
                          <Check className="w-4 h-4 mr-3 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <button 
                        className="w-full bg-lime-500 px-6 py-4 rounded-lg text-white font-semibold hover:bg-lime-600 transition-colors flex items-center justify-center space-x-2 text-lg"
                        onClick={() => setIsProductModalOpen(true)}
                      >
                        <Lock className="w-5 h-5" />
                        <span>{activeProduct.price === "Free" ? "Download Now" : "Buy Now - Secure Checkout"}</span>
                      </button>
                      
                      <button 
                        className="w-full border-2 border-lime-500 text-lime-600 px-6 py-3 rounded-lg font-semibold hover:bg-lime-50 transition-colors flex items-center justify-center space-x-2"
                        onClick={() => setIsProductModalOpen(true)}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View Details</span>
                      </button>
                    </div>

                    <p className="text-xs text-gray-500 text-center mt-3">
                      {activeProduct.price === "Free" ? "No credit card required • Instant download" : "30-day money-back guarantee • Instant download • 24/7 support"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Modal */}
      <ProductModal />
    </div>
  );
};

export default Hero;
