// import React, { useState, useEffect } from "react";
// import { ShoppingCart, BarChart3, Heart } from "lucide-react";
// import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// const NewSection = () => {
//   const [timeLeft, setTimeLeft] = useState({
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });
//   const [activeTab, setActiveTab] = useState("All Products");
//   const [visibleProducts, setVisibleProducts] = useState(8); // Initial number of products to display

//   const navigate = useNavigate();
//   const tabs = ["All Products", "Total Security", "Internet Security", "Antivirus Pro", "Upgrade"];

//   const products = [
//     {
//       id: 1,
//       category: "Total Security",
//       name: "Quick Heal Total Security 1 PC 1 Year",
//       image: "https://antivirusestore.in/admin/model/pics/quick-heal-total-security08_17_12_13_50.png",
//       price: "₹79.00",
//       originalPrice: "₹99.00",
//       available: 6,
//       sold: 28,
//     },
//     {
//       id: 2,
//       category: "Total Security",
//       name: "Quick Heal Total Security 1 PC 3 Years",
//       image: "https://antivirusestore.in/admin/model/pics/A_New_Design_-_Made_with_PosterMyWall09_17_10_53_46.jpg",
//       price: "₹29.99",
//       originalPrice: "₹39.99",
//     },
//     {
//       id: 3,
//       category: "Internet Security",
//       name: "Quick Heal Internet Security 1 User 1 Year",
//       image: "https://antivirusestore.in/admin/model/pics/quick-heal-internet-security08_14_16_54_16.png",
//       price: "₹49.99",
//       originalPrice: "₹59.99",
//     },
//     {
//       id: 4,
//       category: "Antivirus Pro",
//       name: "Upgrade Quick Heal Antivirus Pro 1 User 1 Year",
//       image: "https://antivirusestore.in/admin/model/pics/Quick-heal-renewal-pack08_17_13_02_12.png",
//       price: "₹69.99",
//       originalPrice: "₹79.99",
//     },
//     {
//       id: 5,
//       category: "Total Security",
//       name: "Upgrade Quick Heal Total Security 1 User 1 Year",
//       image: "https://avatars.mds.yandex.net/i?id=0a366ba961fd7fe4444dedd6867a082aa6181972-4415285-images-thumbs&n=13.png",
//       price: "₹24.99",
//       originalPrice: "₹34.99",
//     },
//     {
//       id: 6,
//       category: "Upgrade",
//       name: "Upgrade Quick Heal Total Security 1 User 3 Years",
//       image: "https://antivirusestore.in/admin/model/pics/upgrade-quick-heal-total-security08_17_13_28_37.png",
//       price: "₹39.99",
//       originalPrice: "₹49.99",
//     },
//     {
//       id: 7,
//       category: "Antivirus Pro",
//       name: "Quick Heal Antivirus Pro 1 User 3 Years",
//       image: "https://antivirusestore.in/admin/model/pics/quick-heal-pro08_17_10_59_20.png",
//       price: "₹54.99",
//       originalPrice: "₹64.99",
//     },
//     {
//       id: 8,
//       category: "Upgrade",
//       name: "Upgrade Quick Heal Antivirus Pro 1 User 3 Years",
//       image: "https://antivirusestore.in/admin/model/pics/Quick-heal-renewal-pack08_17_11_00_27.png",
//       price: "₹19.99",
//       originalPrice: "₹29.99",
//     },
//     {
//       id: 9,
//       category: "Antivirus Pro",
//       name: "Quick Heal Antivirus Pro 2 User 1 Year",
//       image: "https://antivirusestore.in/admin/model/pics/quick-heal-pro08_17_10_51_22.png",
//       price: "₹34.99",
//       originalPrice: "₹44.99",
//     },
//     {
//       id: 10,
//       category: "Antivirus Pro",
//       name: "Quick Heal Antivirus Pro 3 User 1 Year",
//       image: "https://antivirusestore.in/admin/model/pics/quick-heal-pro08_17_13_06_15.png",
//       price: "₹49.99",
//       originalPrice: "₹59.99",
//     },
//     {
//       id: 11,
//       category: "Total Security",
//       name: "Upgrade Quick Heal Total Security 2 User 1 Year",
//       image: "https://antivirusestore.in/admin/model/pics/quick-heal-total-security08_17_10_38_32.png",
//       price: "₹59.99",
//       originalPrice: "₹69.99",
//     },
//     {
//       id: 12,
//       category: "Total Security",
//       name: "Upgrade Quick Heal Total Security 3 User 1 Year",
//       image: "https://antivirusestore.in/admin/model/pics/quick-heal-total-security08_17_13_07_07.png",
//       price: "₹49.99",
//       originalPrice: "₹59.99",
//     },
//     {
//       id: 13,
//       category: "Total Security",
//       name: "Upgrade Quick Heal Total Security 3 User 3 Years",
//       image: "https://antivirusestore.in/admin/model/pics/quick-heal-total-security08_17_13_08_03.png",
//       price: "₹39.99",
//       originalPrice: "₹49.99",
//     },
//     {
//       id: 14,
//       category: "Internet Security",
//       name: "Upgrade Quick Heal Internet Security 1 User 3 Years",
//       image: "https://antivirusestore.in/admin/model/pics/quick-heal-internet-security08_17_10_54_32.png",
//       price: "₹39.99",
//       originalPrice: "₹49.99",
//     },
//     {
//       id: 15,
//       category: "Total Security",
//       name: "Upgrade Quick Heal Total Security 5 User 3 Years",
//       image: "https://antivirusestore.in/admin/model/pics/quick-heal-total-security08_17_10_43_41.png",
//       price: "₹39.99",
//       originalPrice: "₹49.99",
//     },
//   ];

//   useEffect(() => {
//     const calculateTimeLeft = () => {
//       const targetDate = new Date();
//       targetDate.setHours(targetDate.getHours() + 12); // 12 hours from now

//       const now = new Date();
//       const difference = targetDate - now;

//       if (difference > 0) {
//         setTimeLeft({
//           hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//           minutes: Math.floor((difference / 1000 / 60) % 60),
//           seconds: Math.floor((difference / 1000) % 60),
//         });
//       }
//     };

//     calculateTimeLeft();
//     const timer = setInterval(calculateTimeLeft, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleViewMore = () => {
//     setVisibleProducts((prev) => prev + 8); // Load 8 more products (2 rows of 4)
//   };

//   const handleProductClick = (product) => {
//     // Navigate to BrandDetails component with proper route
//     navigate(`/new-section-details/${encodeURIComponent(product.name)}`, {
//       state: {
//         image: product.image,
//         price: product.price,
//         category: product.category,
//         originalPrice: product.originalPrice
//       },
//     });
//   };

//   const handleAddToCart = (e, product) => {
//     e.stopPropagation(); // Prevent product click navigation
//     toast.success(`${product.name} added to cart!`);
//   };

//   const handleDealProductClick = () => {
//     const dealProduct = {
//       name: "Quick Heal Total Security 1PC 3 Years",
//       image: "https://antivirusestore.in/admin/model/pics/quick-heal-total-security08_18_09_46_14.png",
//       price: "₹79.00",
//       originalPrice: "₹99.00",
//       category: "Total Security"
//     };

//     navigate(`/new-section-details/${encodeURIComponent(dealProduct.name)}`, {
//       state: {
//         image: dealProduct.image,
//         price: dealProduct.price,
//         category: dealProduct.category,
//         originalPrice: dealProduct.originalPrice
//       },
//     });
//   };

//   return (
//     <div className="min-h-screen bg-white sm:p-4 p-0 lg:p-8 ">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Deal of the Day Section */}
//           <div className="lg:w-80 flex-shrink-0">
//             <div
//               className="border-2 border-yellow-400 rounded-2xl p-6 bg-gradient-to-br from-yellow-50 to-white relative overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
//               onClick={handleDealProductClick}
//             >
//               <div className="absolute top-4 right-4 bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center">
//                 <div className="text-center">
//                   <div className="text-xs font-medium text-gray-700">Save</div>
//                   <div className="text-sm font-bold text-gray-900">₹20</div>
//                 </div>
//               </div>

//               <div className="mb-4">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-1">Deal of the</h3>
//                 <h3 className="text-lg font-semibold text-gray-900">Day</h3>
//               </div>

//               <div className="mb-6">
//                 <img
//                   src="https://antivirusestore.in/admin/model/pics/quick-heal-total-security08_18_09_46_14.png"
//                   style={{ height: "283px" }}
//                   alt="Quick Heal Total Security 1PC 3 Years"
//                   className="w-full object-contain mx-auto"
//                   onError={(e) => {
//                     e.target.src = "https://via.placeholder.com/200/200/ffffff/000000?text=Image+Not+Found";
//                   }}
//                 />
//               </div>

//               <div className="text-center mb-4">
//                 <h4 className="text-blue-600 font-medium mb-2 hover:underline">
//                   Quick Heal Total Security 1PC 3 Years
//                 </h4>

//                 <div className="flex items-center justify-center gap-2 mb-4">
//                   <span className="text-gray-500 line-through text-sm">₹99.00</span>
//                   <span className="text-red-600 text-2xl font-bold">₹79.00</span>
//                 </div>

//                 <div className="flex justify-between text-sm text-gray-600 mb-4">
//                   <span>
//                     Available: <span className="font-semibold">6</span>
//                   </span>
//                   <span>
//                     Already Sold: <span className="font-semibold">28</span>
//                   </span>
//                 </div>

//                 <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
//                   <div className="bg-yellow-400 h-2 rounded-full" style={{ width: "82%" }}></div>
//                 </div>

//                 <div className="text-center mb-4">
//                   <div className="text-sm text-gray-600 mb-2">Hurry Up! Offer ends in:</div>
//                   <div className="flex justify-center gap-1">
//                     <div className="bg-gray-800 text-white px-2 py-1 rounded text-xl font-mono">
//                       {String(timeLeft.hours).padStart(2, "0")}
//                     </div>
//                     <span className="text-xl font-bold">:</span>
//                     <div className="bg-gray-800 text-white px-2 py-1 rounded text-xl font-mono">
//                       {String(timeLeft.minutes).padStart(2, "0")}
//                     </div>
//                     <span className="text-xl font-bold">:</span>
//                     <div className="bg-gray-800 text-white px-2 py-1 rounded text-xl font-mono">
//                       {String(timeLeft.seconds).padStart(2, "0")}
//                     </div>
//                   </div>
//                   <div className="flex justify-between text-xs text-gray-500 mt-1 px-4">
//                     <span>HOURS</span>
//                     <span>MINS</span>
//                     <span>SECS</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Products Section */}
//           <div className="flex-1 mx-auto">
//             <div className="flex flex-nowrap sm:gap-5 gap-0 mx-auto mb-8 bg-gray-100 rounded-lg p-1 w-full">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => {
//                     setActiveTab(tab);
//                     setVisibleProducts(8);
//                   }}
//                   className={`lg:px-4 md:px-2 sm:px-1 py-2 px-2 rounded-md sm:text-sm md:text-md mx-auto text-[0.7rem] font-medium transition-all ${
//                     activeTab === tab
//                       ? "bg-white text-gray-900 shadow-sm"
//                       : "text-gray-600 hover:text-gray-900"
//                   }`}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>

//             <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:gap-0 ">
//               {products
//                 .filter((product) => activeTab === "All Products" || product.category === activeTab)
//                 .slice(0, activeTab === "All Products" ? visibleProducts : products.length)
//                 .map((product) => (
//                   <div
//                     key={product.id}
//                     className="group cursor-pointer "
//                     onClick={() => handleProductClick(product)}
//                   >

//                     <div className="bg-white border-r-2 border-gray-200 mb-4 sm:p-4 p-3 transition-all duration-200 m-1 hover:border-gray-300 border-b-2 sm:border-b-0  hover:shadow-[0px_0px_6px_rgba(0,0,0,0.3)]  ">
//                       <div className="text-xs text-gray-500 mb-2">{product.category}</div>
//                       <h3 className="text-blue-600 font-semibold sm:text-sm text-xs mb-3 line-clamp-2 hover:underline">
//                         {product.name}
//                       </h3>

//                       <div className="mb-4 rounded-lg sm:p-1 h-32 flex items-center justify-center">
//                         <img
//                           src={product.image}
//                           alt={product.name}
//                           className="max-w-full sm:w-full w-40 mt-3 mb-3 sm:h-full h-40 object-contain"
//                           onError={(e) => {
//                             e.target.src = "https://via.placeholder.com/200/200/ffffff/000000?text=Image+Not+Found";
//                           }}
//                         />
//                       </div>

//                       <div className="flex items-center justify-between">
//                         <div className="flex flex-col">
//                           {product.originalPrice && (
//                             <span className="text-xs text-gray-500 line-through">
//                               {product.originalPrice}
//                             </span>
//                           )}
//                           <span className="text-lg font-semibold text-gray-900">
//                             {product.price}
//                           </span>
//                         </div>

//                         <button
//                           className="bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded-full transition-colors"
//                           onClick={(e) => handleAddToCart(e, product)}
//                         >
//                           <ShoppingCart className="w-4 h-4" />
//                         </button>
//                       </div>

//                       <div className="flex items-center justify-between gap-1 mt-3 text-xs text-gray-500">
//                         <button
//                           className="flex items-center gap-1 hover:text-gray-700"
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             toast.success("Added to compare list!");
//                           }}
//                         >
//                           <BarChart3 className="w-3 h-3" />
//                           Compare
//                         </button>
//                         <button
//                           className="flex items-center gap-1 hover:text-gray-700 text-[0.8rem] sm:text-xs lg:text-"
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             toast.success("Added to wishlist!");
//                           }}
//                         >
//                           <Heart className="w-3 h-3" />
//                           Add to Wishlist
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//             </div>

//             {activeTab === "All Products" && visibleProducts < products.length && (
//               <div className="text-center mt-8">
//                 <button
//                   onClick={handleViewMore}
//                   className="px-6 py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-500 transition-colors"
//                 >
//                   View More
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewSection;

/******************************************************************** */

// import React, { useState, useEffect } from "react";
// import { ShoppingCart, BarChart3, Heart } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import axios from "axios"; // Import axios

// const NewSection = () => {
//   const [timeLeft, setTimeLeft] = useState({
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });
//   const [activeTab, setActiveTab] = useState("All Products");
//   const [visibleProducts, setVisibleProducts] = useState(8);
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const navigate = useNavigate();
//   const tabs = ["All Products", "Total Security", "Internet Security", "Antivirus Pro", "Upgrade"];

//   // Function to fetch data from API
//   const getData = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get('http://localhost:5000/api/products');
//       const data = res.data;

//       // Map API data to match our product structure
//       const formattedProducts = data.map(item => ({
//         id: item._id || item.id,
//         category: item.category || "Uncategorized",
//         name: item.bname || item.name || "Unnamed Product",
//         image: item.image || "https://via.placeholder.com/200x200?text=No+Image",
//         price: item.price ? `₹${item.price}` : "₹0.00",
//         originalPrice: item.originalPrice ? `₹${item.originalPrice}` : null,
//         available: item.available || 0,
//         sold: item.sold || 0
//       }));

//       setProducts(formattedProducts);
//       setLoading(false);
//       setError(null);
//     } catch (err) {
//       console.error("Error fetching data:", err);
//       setError("Failed to fetch products. Please make sure the backend server is running on port 5000.");
//       setLoading(false);

//       // Fallback to dummy data if API is not available
//       const dummyProducts = [
//         {
//           id: 1,
//           category: "Total Security",
//           name: "Quick Heal Total Security 1 PC 1 Year",
//           image: "https://antivirusestore.in/admin/model/pics/quick-heal-total-security08_17_12_13_50.png",
//           price: "₹79.00",
//           originalPrice: "₹99.00",
//           available: 6,
//           sold: 28,
//         },
//         // Add more dummy products as needed
//       ];
//       setProducts(dummyProducts);
//     }
//   };

//   useEffect(() => {
//     getData();

//     const calculateTimeLeft = () => {
//       const targetDate = new Date();
//       targetDate.setHours(targetDate.getHours() + 12);

//       const now = new Date();
//       const difference = targetDate - now;

//       if (difference > 0) {
//         setTimeLeft({
//           hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//           minutes: Math.floor((difference / 1000 / 60) % 60),
//           seconds: Math.floor((difference / 1000) % 60),
//         });
//       }
//     };

//     calculateTimeLeft();
//     const timer = setInterval(calculateTimeLeft, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   // Rest of your component code remains the same...
//   const handleViewMore = () => {
//     setVisibleProducts((prev) => prev + 8);
//   };

//   const handleProductClick = (product) => {
//     navigate(`/new-section-details/${encodeURIComponent(product.name)}`, {
//       state: {
//         image: product.image,
//         price: product.price,
//         category: product.category,
//         originalPrice: product.originalPrice
//       },
//     });
//   };

//   const handleAddToCart = (e, product) => {
//     e.stopPropagation();
//     toast.success(`${product.name} added to cart!`);
//   };

//   const handleDealProductClick = () => {
//     const dealProduct = {
//       name: "Quick Heal Total Security 1PC 3 Years",
//       image: "https://antivirusestore.in/admin/model/pics/quick-heal-total-security08_18_09_46_14.png",
//       price: "₹79.00",
//       originalPrice: "₹99.00",
//       category: "Total Security"
//     };

//     navigate(`/new-section-details/${encodeURIComponent(dealProduct.name)}`, {
//       state: {
//         image: dealProduct.image,
//         price: dealProduct.price,
//         category: dealProduct.category,
//         originalPrice: dealProduct.originalPrice
//       },
//     });
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-white sm:p-4 p-0 lg:p-8 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading products...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white sm:p-4 p-0 lg:p-8 ">
//       <div className="max-w-7xl mx-auto">
//         {error && (
//           <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4" role="alert">
//             <p>{error}</p>
//           </div>
//         )}

//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Deal of the Day Section */}
//           <div className="lg:w-80 flex-shrink-0">
//             <div
//               className="border-2 border-yellow-400 rounded-2xl p-6 bg-gradient-to-br from-yellow-50 to-white relative overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
//               onClick={handleDealProductClick}
//             >
//               <div className="absolute top-4 right-4 bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center">
//                 <div className="text-center">
//                   <div className="text-xs font-medium text-gray-700">Save</div>
//                   <div className="text-sm font-bold text-gray-900">₹20</div>
//                 </div>
//               </div>

//               <div className="mb-4">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-1">Deal of the</h3>
//                 <h3 className="text-lg font-semibold text-gray-900">Day</h3>
//               </div>

//               <div className="mb-6">
//                 <img
//                   src="https://antivirusestore.in/admin/model/pics/quick-heal-total-security08_18_09_46_14.png"
//                   style={{ height: "283px" }}
//                   alt="Quick Heal Total Security 1PC 3 Years"
//                   className="w-full object-contain mx-auto"
//                   onError={(e) => {
//                     e.target.src = "https://via.placeholder.com/200/200/ffffff/000000?text=Image+Not+Found";
//                   }}
//                 />
//               </div>

//               <div className="text-center mb-4">
//                 <h4 className="text-blue-600 font-medium mb-2 hover:underline">
//                   Quick Heal Total Security 1PC 3 Years
//                 </h4>

//                 <div className="flex items-center justify-center gap-2 mb-4">
//                   <span className="text-gray-500 line-through text-sm">₹99.00</span>
//                   <span className="text-red-600 text-2xl font-bold">₹79.00</span>
//                 </div>

//                 <div className="flex justify-between text-sm text-gray-600 mb-4">
//                   <span>
//                     Available: <span className="font-semibold">6</span>
//                   </span>
//                   <span>
//                     Already Sold: <span className="font-semibold">28</span>
//                   </span>
//                 </div>

//                 <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
//                   <div className="bg-yellow-400 h-2 rounded-full" style={{ width: "82%" }}></div>
//                 </div>

//                 <div className="text-center mb-4">
//                   <div className="text-sm text-gray-600 mb-2">Hurry Up! Offer ends in:</div>
//                   <div className="flex justify-center gap-1">
//                     <div className="bg-gray-800 text-white px-2 py-1 rounded text-xl font-mono">
//                       {String(timeLeft.hours).padStart(2, "0")}
//                     </div>
//                     <span className="text-xl font-bold">:</span>
//                     <div className="bg-gray-800 text-white px-2 py-1 rounded text-xl font-mono">
//                       {String(timeLeft.minutes).padStart(2, "0")}
//                     </div>
//                     <span className="text-xl font-bold">:</span>
//                     <div className="bg-gray-800 text-white px-2 py-1 rounded text-xl font-mono">
//                       {String(timeLeft.seconds).padStart(2, "0")}
//                     </div>
//                   </div>
//                   <div className="flex justify-between text-xs text-gray-500 mt-1 px-4">
//                     <span>HOURS</span>
//                     <span>MINS</span>
//                     <span>SECS</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Products Section */}
//           <div className="flex-1 mx-auto">
//             <div className="flex flex-nowrap sm:gap-5 gap-0 mx-auto mb-8 bg-gray-100 rounded-lg p-1 w-full">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => {
//                     setActiveTab(tab);
//                     setVisibleProducts(8);
//                   }}
//                   className={`lg:px-4 md:px-2 sm:px-1 py-2 px-2 rounded-md sm:text-sm md:text-md mx-auto text-[0.7rem] font-medium transition-all ${
//                     activeTab === tab
//                       ? "bg-white text-gray-900 shadow-sm"
//                       : "text-gray-600 hover:text-gray-900"
//                   }`}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>

//             <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:gap-0 ">
//               {products
//                 .filter((product) => activeTab === "All Products" || product.category === activeTab)
//                 .slice(0, activeTab === "All Products" ? visibleProducts : products.length)
//                 .map((product) => (
//                   <div
//                     key={product.id}
//                     className="group cursor-pointer "
//                     onClick={() => handleProductClick(product)}
//                   >
//                     <div className="bg-white border-r-2 border-gray-200 mb-4 sm:p-4 p-3 transition-all duration-200 m-1 hover:border-gray-300 border-b-2 sm:border-b-0  hover:shadow-[0px_0px_6px_rgba(0,0,0,0.3)]  ">
//                       <div className="text-xs text-gray-500 mb-2">{product.category}</div>
//                       <h3 className="text-blue-600 font-semibold sm:text-sm text-xs mb-3 line-clamp-2 hover:underline">
//                         {product.name}
//                       </h3>

//                       <div className="mb-4 rounded-lg sm:p-1 h-32 flex items-center justify-center">
//                         <img
//                           src={product.image}
//                           alt={product.name}
//                           className="max-w-full sm:w-full w-40 mt-3 mb-3 sm:h-full h-40 object-contain"
//                           onError={(e) => {
//                             e.target.src = "https://via.placeholder.com/200/200/ffffff/000000?text=Image+Not+Found";
//                           }}
//                         />
//                       </div>

//                       <div className="flex items-center justify-between">
//                         <div className="flex flex-col">
//                           {product.originalPrice && (
//                             <span className="text-xs text-gray-500 line-through">
//                               {product.originalPrice}
//                             </span>
//                           )}
//                           <span className="text-lg font-semibold text-gray-900">
//                             {product.price}
//                           </span>
//                         </div>

//                         <button
//                           className="bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded-full transition-colors"
//                           onClick={(e) => handleAddToCart(e, product)}
//                         >
//                           <ShoppingCart className="w-4 h-4" />
//                         </button>
//                       </div>

//                       <div className="flex items-center justify-between gap-1 mt-3 text-xs text-gray-500">
//                         <button
//                           className="flex items-center gap-1 hover:text-gray-700"
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             toast.success("Added to compare list!");
//                           }}
//                         >
//                           <BarChart3 className="w-3 h-3" />
//                           Compare
//                         </button>
//                         <button
//                           className="flex items-center gap-1 hover:text-gray-700 text-[0.8rem] sm:text-xs lg:text-"
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             toast.success("Added to wishlist!");
//                           }}
//                         >
//                           <Heart className="w-3 h-3" />
//                           Add to Wishlist
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//             </div>

//             {activeTab === "All Products" && visibleProducts < products.length && (
//               <div className="text-center mt-8">
//                 <button
//                   onClick={handleViewMore}
//                   className="px-6 py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-500 transition-colors"
//                 >
//                   View More
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewSection;

/******************************************************** */  
// import React, { useState, useEffect } from "react";
// import { ShoppingCart, BarChart3, Heart } from "lucide-react";
// import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import axios from 'axios'

//  const IMAGE_BASE_URL = "http://localhost:5000/"


// const NewSection = () => {
//   const [products , setProducts] = useState([])
//   const [brands, setBrands] = useState([]);
 

//   const [timeLeft, setTimeLeft] = useState({
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });
//   const [activeTab, setActiveTab] = useState("All Products");
//   const [visibleProducts, setVisibleProducts] = useState(8); // Initial number of products to display
  
//   const navigate = useNavigate();
//   const tabs = ["All Products", "Total Security", "Internet Security", "Antivirus Pro", "Upgrade"];

//   // const products = [
//   //   {
//   //     id: 1,
//   //     category: "Total Security",
//   //     name: "Quick Heal Total Security 1 PC 1 Year",
//   //     image: "https://antivirusestore.in/admin/model/pics/quick-heal-total-security08_17_12_13_50.png",
//   //     price: "₹79.00",
//   //     originalPrice: "₹99.00",
//   //     available: 6,
//   //     sold: 28,
//   //   },
//   //   {
//   //     id: 2,
//   //     category: "Total Security",
//   //     name: "Quick Heal Total Security 1 PC 3 Years",
//   //     image: "https://antivirusestore.in/admin/model/pics/A_New_Design_-_Made_with_PosterMyWall09_17_10_53_46.jpg",
//   //     price: "₹29.99",
//   //     originalPrice: "₹39.99",
//   //   },
//   //   {
//   //     id: 3,
//   //     category: "Internet Security",
//   //     name: "Quick Heal Internet Security 1 User 1 Year",
//   //     image: "https://antivirusestore.in/admin/model/pics/quick-heal-internet-security08_14_16_54_16.png",
//   //     price: "₹49.99",
//   //     originalPrice: "₹59.99",
//   //   },
//   //   {
//   //     id: 4,
//   //     category: "Antivirus Pro",
//   //     name: "Upgrade Quick Heal Antivirus Pro 1 User 1 Year",
//   //     image: "https://antivirusestore.in/admin/model/pics/Quick-heal-renewal-pack08_17_13_02_12.png",
//   //     price: "₹69.99",
//   //     originalPrice: "₹79.99",
//   //   },
//   //   {
//   //     id: 5,
//   //     category: "Total Security",
//   //     name: "Upgrade Quick Heal Total Security 1 User 1 Year",
//   //     image: "https://avatars.mds.yandex.net/i?id=0a366ba961fd7fe4444dedd6867a082aa6181972-4415285-images-thumbs&n=13.png",
//   //     price: "₹24.99",
//   //     originalPrice: "₹34.99",
//   //   },
//   //   {
//   //     id: 6,
//   //     category: "Upgrade",
//   //     name: "Upgrade Quick Heal Total Security 1 User 3 Years",
//   //     image: "https://antivirusestore.in/admin/model/pics/upgrade-quick-heal-total-security08_17_13_28_37.png",
//   //     price: "₹39.99",
//   //     originalPrice: "₹49.99",
//   //   },
//   //   {
//   //     id: 7,
//   //     category: "Antivirus Pro",
//   //     name: "Quick Heal Antivirus Pro 1 User 3 Years",
//   //     image: "https://antivirusestore.in/admin/model/pics/quick-heal-pro08_17_10_59_20.png",
//   //     price: "₹54.99",
//   //     originalPrice: "₹64.99",
//   //   },
//   //   {
//   //     id: 8,
//   //     category: "Upgrade",
//   //     name: "Upgrade Quick Heal Antivirus Pro 1 User 3 Years",
//   //     image: "https://antivirusestore.in/admin/model/pics/Quick-heal-renewal-pack08_17_11_00_27.png",
//   //     price: "₹19.99",
//   //     originalPrice: "₹29.99",
//   //   },
//   //   {
//   //     id: 9,
//   //     category: "Antivirus Pro",
//   //     name: "Quick Heal Antivirus Pro 2 User 1 Year",
//   //     image: "https://antivirusestore.in/admin/model/pics/quick-heal-pro08_17_10_51_22.png",
//   //     price: "₹34.99",
//   //     originalPrice: "₹44.99",
//   //   },
//   //   {
//   //     id: 10,
//   //     category: "Antivirus Pro",
//   //     name: "Quick Heal Antivirus Pro 3 User 1 Year",
//   //     image: "https://antivirusestore.in/admin/model/pics/quick-heal-pro08_17_13_06_15.png",
//   //     price: "₹49.99",
//   //     originalPrice: "₹59.99",
//   //   },
//   //   {
//   //     id: 11,
//   //     category: "Total Security",
//   //     name: "Upgrade Quick Heal Total Security 2 User 1 Year",
//   //     image: "https://antivirusestore.in/admin/model/pics/quick-heal-total-security08_17_10_38_32.png",
//   //     price: "₹59.99",
//   //     originalPrice: "₹69.99",
//   //   },
//   //   {
//   //     id: 12,
//   //     category: "Total Security",
//   //     name: "Upgrade Quick Heal Total Security 3 User 1 Year",
//   //     image: "https://antivirusestore.in/admin/model/pics/quick-heal-total-security08_17_13_07_07.png",
//   //     price: "₹49.99",
//   //     originalPrice: "₹59.99",
//   //   },
//   //   {
//   //     id: 13,
//   //     category: "Total Security",
//   //     name: "Upgrade Quick Heal Total Security 3 User 3 Years",
//   //     image: "https://antivirusestore.in/admin/model/pics/quick-heal-total-security08_17_13_08_03.png",
//   //     price: "₹39.99",
//   //     originalPrice: "₹49.99",
//   //   },
//   //   {
//   //     id: 14,
//   //     category: "Internet Security",
//   //     name: "Upgrade Quick Heal Internet Security 1 User 3 Years",
//   //     image: "https://antivirusestore.in/admin/model/pics/quick-heal-internet-security08_17_10_54_32.png",
//   //     price: "₹39.99",
//   //     originalPrice: "₹49.99",
//   //   },
//   //   {
//   //     id: 15,
//   //     category: "Total Security",
//   //     name: "Upgrade Quick Heal Total Security 5 User 3 Years",
//   //     image: "https://antivirusestore.in/admin/model/pics/quick-heal-total-security08_17_10_43_41.png",
//   //     price: "₹39.99",
//   //     originalPrice: "₹49.99",
//   //   },
//   // ];
  
//   const getData = async() => {
//     setBrands(["All Products"])
//     try{
//        const res = await axios.get('http://localhost:5000/api/products');
//        const data = res.data;

//        console.log("data", data,);
//        setProducts(data);

//        const brandSet = new Set(data.map((item) => item.bname));
//        setBrands([...brandSet]);
       
//     }catch(err){
//       console.log("err", err);
//     }
//   } 
//   useEffect(() => {
//       getData();
//   }, [])

//   useEffect(() => {
//     const calculateTimeLeft = () => {
//       const targetDate = new Date();
//       targetDate.setHours(targetDate.getHours() + 12); // 12 hours from now

//       const now = new Date();
//       const difference = targetDate - now;

//       if (difference > 0) {
//         setTimeLeft({
//           hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//           minutes: Math.floor((difference / 1000 / 60) % 60),
//           seconds: Math.floor((difference / 1000) % 60),
//         });
//       }
//     };

//     calculateTimeLeft();
//     const timer = setInterval(calculateTimeLeft, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleViewMore = () => {
//     setVisibleProducts((prev) => prev + 8); // Load 8 more products (2 rows of 4)
//   };

//   const handleProductClick = (product) => {
//     // Navigate to BrandDetails component with proper route
//     navigate(`/new-section-details/${encodeURIComponent(product.pname)}`, {
//       state: { 
//         image: product.pic1, 
//         price: product.oprice, 
//         category: product.cname,
//         originalPrice: product.mprice
//       },
//     });
//   };

//   const handleAddToCart = (e, product) => {
//     e.stopPropagation(); // Prevent product click navigation
//     toast.success(`${product.pname} added to cart!`);
//   };

//   const handleDealProductClick = () => {
//     const dealProduct = {
//       name: "Quick Heal Total Security 1PC 3 Years",
//       image: "https://antivirusestore.in/admin/model/pics/quick-heal-total-security08_18_09_46_14.png",
//       price: "₹79.00",
//       originalPrice: "₹99.00",
//       category: "Total Security"
//     };
    
//     navigate(`/new-section-details/${encodeURIComponent(dealProduct.name)}`, {
//       state: { 
//         image: dealProduct.image, 
//         price: dealProduct.price, 
//         category: dealProduct.category,
//         originalPrice: dealProduct.originalPrice
//       },
//     });
//   };

//   return (
//     <div className="min-h-screen bg-white sm:p-4 p-0 lg:p-8 ">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Deal of the Day Section */}
//           <div className="lg:w-80 flex-shrink-0">
//             <div 
//               className="border-2 border-yellow-400 rounded-2xl p-6 bg-gradient-to-br from-yellow-50 to-white relative overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
//               onClick={handleDealProductClick}
//             >
//               <div className="absolute top-4 right-4 bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center">
//                 <div className="text-center">
//                   <div className="text-xs font-medium text-gray-700">Save</div>
//                   <div className="text-sm font-bold text-gray-900">₹20</div>
//                 </div>
//               </div>

//               <div className="mb-4">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-1">Deal of the</h3>
//                 <h3 className="text-lg font-semibold text-gray-900">Day</h3>
//               </div>

//               <div className="mb-6">
//                 <img
//                   src="https://antivirusestore.in/admin/model/pics/quick-heal-total-security08_18_09_46_14.png"
//                   style={{ height: "283px" }}
//                   alt="Quick Heal Total Security 1PC 3 Years"
//                   className="w-full object-contain mx-auto"
//                   onError={(e) => {
//                     e.target.src = "https://via.placeholder.com/200/200/ffffff/000000?text=Image+Not+Found";
//                   }}
//                 />
//               </div>

//               <div className="text-center mb-4">
//                 <h4 className="text-blue-600 font-medium mb-2 hover:underline">
//                   Quick Heal Total Security 1PC 3 Years
//                 </h4>

//                 <div className="flex items-center justify-center gap-2 mb-4">
//                   <span className="text-gray-500 line-through text-sm">₹99.00</span>
//                   <span className="text-red-600 text-2xl font-bold">₹79.00</span>
//                 </div>

//                 <div className="flex justify-between text-sm text-gray-600 mb-4">
//                   <span>
//                     Available: <span className="font-semibold">6</span>
//                   </span>
//                   <span>
//                     Already Sold: <span className="font-semibold">28</span>
//                   </span>
//                 </div>

//                 <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
//                   <div className="bg-yellow-400 h-2 rounded-full" style={{ width: "82%" }}></div>
//                 </div>

//                 <div className="text-center mb-4">
//                   <div className="text-sm text-gray-600 mb-2">Hurry Up! Offer ends in:</div>
//                   <div className="flex justify-center gap-1">
//                     <div className="bg-gray-800 text-white px-2 py-1 rounded text-xl font-mono">
//                       {String(timeLeft.hours).padStart(2, "0")}
//                     </div>
//                     <span className="text-xl font-bold">:</span>
//                     <div className="bg-gray-800 text-white px-2 py-1 rounded text-xl font-mono">
//                       {String(timeLeft.minutes).padStart(2, "0")}
//                     </div>
//                     <span className="text-xl font-bold">:</span>
//                     <div className="bg-gray-800 text-white px-2 py-1 rounded text-xl font-mono">
//                       {String(timeLeft.seconds).padStart(2, "0")}
//                     </div>
//                   </div>
//                   <div className="flex justify-between text-xs text-gray-500 mt-1 px-4">
//                     <span>HOURS</span>
//                     <span>MINS</span>
//                     <span>SECS</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Products Section */}
//           <div className="flex-1 mx-auto">
//             <div className="flex flex-nowrap sm:gap-5 gap-0 mx-auto mb-8 bg-gray-100 rounded-lg p-1 w-full">
//               {brands.map((tab, idx) => (
//                 <button 
//                   key={idx}
//                   onClick={() => {
//                     setActiveTab(tab);
//                     setVisibleProducts(8);
//                   }}
//                   className={`lg:px-4 md:px-2 sm:px-1 py-2 px-2 rounded-md sm:text-sm md:text-md mx-auto text-[0.7rem] font-medium transition-all ${
//                     activeTab === tab
//                       ? "bg-white text-gray-900 shadow-sm"
//                       : "text-gray-600 hover:text-gray-900"
//                   }`}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>

//             <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:gap-0 ">
//               {products
//                 .filter((product) => activeTab === "All Products" || product.bname === activeTab)
//                 .slice(0, activeTab === "All Products" ? visibleProducts : products.length)
//                 .map((product) => (
//                   <div 
//                     key={product.PID} 
//                     className="group cursor-pointer "  
//                     onClick={() => handleProductClick(product)}
//                   >

//                     <div className="bg-white border-r-2 border-gray-200 mb-4 sm:p-4 p-3 transition-all duration-200 m-1 hover:border-gray-300 border-b-2 sm:border-b-0  hover:shadow-[0px_0px_6px_rgba(0,0,0,0.3)]  ">
//                       <div className="text-xs text-gray-500 mb-2">{product.cname}</div>
//                       <h3 className="text-blue-600 font-semibold sm:text-sm text-xs mb-3 line-clamp-2 hover:underline">
//                         {product.pname}
//                       </h3>

//                       <div className="mb-4 rounded-lg sm:p-1 h-32 flex items-center justify-center">
//                         <img
//                         src={`${IMAGE_BASE_URL}${product.pic1}`}
//                           alt={product.pname}
//                           className="max-w-full sm:w-full w-40 mt-3 mb-3 sm:h-full h-40 object-contain"
//                           onError={(e) => {
//                             e.target.src = "https://via.placeholder.com/200/200/ffffff/000000?text=Image+Not+Found";
//                           }}
//                         />
//                       </div>

//                       <div className="flex items-center justify-between">
//                         <div className="flex flex-col">
//                           {product.mprice && (
//                             <span className="text-xs text-gray-500 line-through">
//                               {product.mprice}
//                             </span>
//                           )}
//                           <span className="text-lg font-semibold text-gray-900">
//                             {product.oprice}
//                           </span>
//                         </div>

//                         <button 
//                           className="bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded-full transition-colors"
//                           onClick={(e) => handleAddToCart(e, product)}
//                         >
//                           <ShoppingCart className="w-4 h-4" />
//                         </button>
//                       </div>

//                       <div className="flex items-center justify-between gap-1 mt-3 text-xs text-gray-500">
//                         <button 
//                           className="flex items-center gap-1 hover:text-gray-700"
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             toast.success("Added to compare list!");
//                           }}
//                         >
//                           <BarChart3 className="w-3 h-3" />
//                           Compare
//                         </button>
//                         <button 
//                           className="flex items-center gap-1 hover:text-gray-700 text-[0.8rem] sm:text-xs lg:text-"
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             toast.success("Added to wishlist!");
//                           }}
//                         >
//                           <Heart className="w-3 h-3" />
//                           Add to Wishlist
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//             </div>

//             { visibleProducts < products.length && (
//               <div className="text-center mt-8">
//                 <button
//                   onClick={handleViewMore}
//                   className="px-6 py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-500 transition-colors"
//                 >
//                   View More
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewSection;

/**************************************************************** */
/**************************************************************** */
/**************************************************************** */



import React, { useState, useEffect } from "react";
import axios from "axios";

const NewSection = () => {
  const [products, setProducts] = useState([]); // ✅ define state

  // Fetch products from backend
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      console.log("✅ API Response:", res.data); // log to console
      setProducts(res.data);
    } catch (err) {
      console.error("❌ Error fetching products:", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <p>Data is Fetching....!!!</p>

      {/* ✅ Show fetched products */}
      <ul>
        {products.map((p) => (
          <li key={p.PID}>{p.pname}</li>
        ))}
      </ul>
    </div>
  );
};

export default NewSection;
