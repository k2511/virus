// // import React, { useState, useEffect } from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import "swiper/css";
// // import "swiper/css/pagination";
// // import "swiper/css/grid";
// // import { Pagination, Grid } from "swiper/modules";

// // import { ShoppingCart, Heart, TrendingUp, Star } from "lucide-react";

// // const Bestseller = () => {
// //   const [activeTab, setActiveTab] = useState("Top 20");
// //   const [currentSlide, setCurrentSlide] = useState(0);
// //   const [itemsToShow, setItemsToShow] = useState(4);

// //   const products = [
// //     {
// //       id: 1,
// //       category: "Antivirus",
// //       name: "Norton 360 Deluxe 2025",
// //       price: "49.99",
// //       originalPrice: "99.99",
// //       image:
// //         "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=300&h=300&fit=crop&crop=center",
// //       rating: 4.8,
// //       bestseller: true,
// //       discount: "50%",
// //     },
// //     {
// //       id: 2,
// //       category: "Total Security",
// //       name: "Kaspersky Total Security Suite",
// //       price: "59.99",
// //       originalPrice: "89.99",
// //       image:
// //         "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop&crop=center",
// //       rating: 4.9,
// //       bestseller: true,
// //       discount: "33%",
// //     },
// //     {
// //       id: 3,
// //       category: "VPN",
// //       name: "ExpressVPN Premium",
// //       price: "12.95",
// //       originalPrice: "19.99",
// //       image:
// //         "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=300&h=300&fit=crop&crop=center",
// //       rating: 4.7,
// //       bestseller: false,
// //       discount: "35%",
// //     },
// //     {
// //       id: 4,
// //       category: "Password Manager",
// //       name: "LastPass Premium Vault",
// //       price: "36.00",
// //       originalPrice: "48.00",
// //       image:
// //         "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=300&h=300&fit=crop&crop=center",
// //       rating: 4.6,
// //       bestseller: false,
// //       discount: "25%",
// //     },
// //     {
// //       id: 5,
// //       category: "Cloud Security",
// //       name: "McAfee Cloud Defender Pro",
// //       price: "79.99",
// //       originalPrice: "119.99",
// //       image:
// //         "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=300&fit=crop&crop=center",
// //       rating: 4.5,
// //       bestseller: true,
// //       discount: "33%",
// //     },
// //     {
// //       id: 6,
// //       category: "Antivirus",
// //       name: "Bitdefender Antivirus Plus",
// //       price: "29.99",
// //       originalPrice: "39.99",
// //       image:
// //         "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQXCO_Zd9PuhgEyUpmaSYLOCIwqe8z666IxZ3FvOcM8m48RiG1ZjpiVuU1eiCBpBlFpkERh9LPyam0QeZa_lxrSjmtTSkpkMsaIJnpizCEjiYuP4_xYEWjq8uy2z86_XY4fVXodE2A&usqp=CAc",
// //       rating: 4.8,
// //       bestseller: false,
// //       discount: "25%",
// //     },
// //     {
// //       id: 7,
// //       category: "Total Security",
// //       name: "ESET Internet Security",
// //       price: "44.99",
// //       originalPrice: "59.99",
// //       image:
// //         "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=300&fit=crop&crop=center",
// //       rating: 4.7,
// //       bestseller: true,
// //       discount: "25%",
// //     },
// //     {
// //       id: 8,
// //       category: "VPN",
// //       name: "NordVPN Complete",
// //       price: "11.95",
// //       originalPrice: "17.99",
// //       image:
// //         "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=300&fit=crop&crop=center",
// //       rating: 4.9,
// //       bestseller: true,
// //       discount: "33%",
// //     },
// //   ];

// //   const tabs = ["Top 20", "New Arrivals", "Discounted", "Featured"];

// //   const filteredProducts =
// //     activeTab === "Top 20"
// //       ? products
// //       : products.filter((p) => p.category === activeTab);

// //   useEffect(() => {
// //     const handleResize = () => {
// //       if (window.innerWidth < 640) {
// //         setItemsToShow(1);
// //       } else if (window.innerWidth < 1024) {
// //         setItemsToShow(2);
// //       } else {
// //         setItemsToShow(4);
// //       }
// //     };

// //     handleResize();
// //     window.addEventListener("resize", handleResize);
// //     return () => window.removeEventListener("resize", handleResize);
// //   }, []);

// //   const handleAddToCart = (product) => {
// //     console.log("Added to cart:", product);
// //   };

// //   const handleWishlist = (product) => {
// //     console.log("Added to wishlist:", product);
// //   };

// //   const renderStars = (rating) => {
// //     return Array.from({ length: 5 }, (_, i) => (
// //       <Star
// //         key={i}
// //         size={12}
// //         className={`${
// //           i < Math.floor(rating)
// //             ? "text-yellow-400 fill-current"
// //             : "text-gray-300"
// //         }`}
// //       />
// //     ));
// //   };

// //   return (
// //     <div className="bg-white py-6 sm:py-8 lg:py-10">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         {/* Header Section */}
// //         <div className="mb-6 lg:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
// //           <div className="mb-6 lg:mb-8">
// //             <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
// //               Bestsellers
// //             </h2>
// //           </div>

// //           {/* Tab Navigation */}
// //           <div className="flex flex-wrap gap-2 mb-6 lg:mb-8 border-gray-200">
// //             {tabs.map((tab) => (
// //               <button
// //                 key={tab}
// //                 onClick={() => setActiveTab(tab)}
// //                 className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
// //                   activeTab === tab
// //                     ? "text-black"
// //                     : "text-gray-500 hover:text-gray-700"
// //                 }`}
// //               >
// //                 {tab}
// //               </button>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Swiper Slider */}
// //         <Swiper
// //           modules={[Pagination, Grid]}
// //           spaceBetween={20}
// //           slidesPerView={4}
// //           grid={{ rows: 2, fill: "row" }}
// //           pagination={{ clickable: true }}
// //           breakpoints={{
// //             320: { slidesPerView: 1, grid: { rows: 2 } },
// //             640: { slidesPerView: 2, grid: { rows: 2 } },
// //             1024: { slidesPerView: 4, grid: { rows: 2 } },
// //           }}
// //           className="pb-10"
// //         >
// //           {filteredProducts.map((product) => (
// //             <SwiperSlide key={product.id}>
// //               <div className="bg-white rounded-lg border border-gray-200 overflow-hidden flex gap-2 mb-20 group">
// //                 {/* Left Side: Product Image */}
// //                 <div className="relative flex items-center justify-center sm:p-2 p-1">
// //                   <img
// //                     src={product.image}
// //                     alt={product.name}
// //                     className="w-36 h-36 object-contain transition-transform duration-300 group-hover:scale-105"
// //                   />

// //                   {/* Hover Overlay */}
// //                   <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 transition-opacity duration-300">
// //                     <button
// //                       onClick={() => handleWishlist(product)}
// //                       className="bg-white rounded-full p-2 shadow-sm hover:shadow-md transition-shadow"
// //                     >
// //                       <Heart size={16} className="text-gray-600" />
// //                     </button>
// //                     <button
// //                       onClick={() => console.log("Compare:", product)}
// //                       className="bg-white rounded-full p-2 shadow-sm hover:shadow-md transition-shadow"
// //                     >
// //                       <TrendingUp size={16} className="text-gray-600" />
// //                     </button>
// //                   </div>
// //                 </div>

// //                 {/* Right Side: Product Info */}
// //                 <div className="flex-1 p-4 flex flex-col justify-between">
// //                   {/* Category */}
// //                   <div className="text-xs text-gray-500 mb-1">
// //                     {product.category}
// //                   </div>

// //                   {/* Product Name */}
// //                   <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
// //                     {product.name}
// //                   </h3>

// //                   {/* Stars */}
// //                   <div className="flex items-center gap-1 mb-2">
// //                     {renderStars(product.rating)}
// //                   </div>

// //                   {/* Pricing + Cart */}
// //                   <div className="flex items-center justify-between gap-3">
// //                     <span className="text-lg font-bold text-gray-900">
// //                       ${product.price}
// //                     </span>
// //                     <button
// //                       onClick={() => handleAddToCart(product)}
// //                       className="bg-yellow-600 text-white p-3 rounded-full transition-colors duration-200 flex items-center justify-center shadow-md"
// //                     >
// //                       <ShoppingCart size={15} />
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             </SwiperSlide>
// //           ))}
// //         </Swiper>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Bestseller;










// import React, { useState, useEffect } from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import "swiper/css";
// // import "swiper/css/pagination";
// // import "swiper/css/grid";
// // import { Pagination, Grid } from "swiper/modules"; // ✅ Import Grid

// // import { Pagination, Grid } from "swiper";

// import { ShoppingCart, Heart, TrendingUp, Star } from "lucide-react";

// const Bestseller = () => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [activeTab, setActiveTab] = useState("Top 20");

//   // All products data
//   const allProducts = {
//     "Top 20": [
//       {
//         id: 1,
//         category: "Antivirus",
//         name: "Norton 360 Deluxe 2025",
//         price: "49.99",
//         originalPrice: "99.99",
//         image:
//           "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=300&h=300&fit=crop&crop=center",
//         rating: 4.8,
//         bestseller: true,
//         discount: "50%",
//       },

//       {
//         id: 2,
//         category: "Total Security",
//         name: "Kaspersky Total Security Suite",
//         price: "59.99",
//         originalPrice: "89.99",
//         image:
//           "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop&crop=center",
//         rating: 4.9,
//         bestseller: true,
//         discount: "33%",
//       },

//       {
//         id: 3,
//         category: "VPN",
//         name: "ExpressVPN Premium",
//         price: "12.95",
//         originalPrice: "19.99",
//         image:
//           "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=300&h=300&fit=crop&crop=center",
//         rating: 4.7,
//         bestseller: false,
//         discount: "35%",
//       },

//       {
//         id: 4,
//         category: "Password Manager",
//         name: "LastPass Premium Vault",
//         price: "36.00",
//         originalPrice: "48.00",
//         image:
//           "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=300&h=300&fit=crop&crop=center",
//         rating: 4.6,
//         bestseller: false,
//         discount: "25%",
//       },

//       {
//         id: 1,
//         category: "Antivirus",
//         name: "Norton 360 Deluxe 2025",
//         price: "49.99",
//         originalPrice: "99.99",
//         image:
//           "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=300&h=300&fit=crop&crop=center",
//         rating: 4.8,
//         bestseller: true,
//         discount: "50%",
//       },

//       {
//         id: 2,
//         category: "Total Security",
//         name: "Kaspersky Total Security Suite",
//         price: "59.99",
//         originalPrice: "89.99",
//         image:
//           "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop&crop=center",
//         rating: 4.9,
//         bestseller: true,
//         discount: "33%",
//       },

//       {
//         id: 3,
//         category: "VPN",
//         name: "ExpressVPN Premium",
//         price: "12.95",
//         originalPrice: "19.99",
//         image:
//           "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=300&h=300&fit=crop&crop=center",
//         rating: 4.7,
//         bestseller: false,
//         discount: "35%",
//       },

//       {
//         id: 4,
//         category: "Password Manager",
//         name: "LastPass Premium Vault",
//         price: "36.00",
//         originalPrice: "48.00",
//         image:
//           "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=300&h=300&fit=crop&crop=center",
//         rating: 4.6,
//         bestseller: false,
//         discount: "25%",
//       },
//       {
//         id: 1,
//         category: "Antivirus",
//         name: "Norton 360 Deluxe 2025",
//         price: "49.99",
//         originalPrice: "99.99",
//         image:
//           "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=300&h=300&fit=crop&crop=center",
//         rating: 4.8,
//         bestseller: true,
//         discount: "50%",
//       },

//       {
//         id: 2,
//         category: "Total Security",
//         name: "Kaspersky Total Security Suite",
//         price: "59.99",
//         originalPrice: "89.99",
//         image:
//           "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop&crop=center",
//         rating: 4.9,
//         bestseller: true,
//         discount: "33%",
//       },

//       {
//         id: 3,
//         category: "VPN",
//         name: "ExpressVPN Premium",
//         price: "12.95",
//         originalPrice: "19.99",
//         image:
//           "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=300&h=300&fit=crop&crop=center",
//         rating: 4.7,
//         bestseller: false,
//         discount: "35%",
//       },

//       {
//         id: 4,
//         category: "Password Manager",
//         name: "LastPass Premium Vault",
//         price: "36.00",
//         originalPrice: "48.00",
//         image:
//           "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=300&h=300&fit=crop&crop=center",
//         rating: 4.6,
//         bestseller: false,
//         discount: "25%",
//       },
//     ],
//     "New arrivals": [
//       // Add phones and tablets products here
//     ],
//     "Discounted": [
//       // Add laptop products here
//     ],
//     "Features": [
//       // Add camera products here
//     ],
//   };

//   const tabs = ["Top 20", "New Arrivals", "Discounted", "Featured"];

//   // Get products for active tab
//   const products = allProducts[activeTab] || [];
//   const itemsPerPage = 8;
//   const totalPages = Math.ceil(products.length / itemsPerPage);
//   const startIndex = currentPage * itemsPerPage;
//   const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

//   return (
//     <div className="bg-white py-6 sm:py-8 lg:py-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="mb-6 lg:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
//           <div className="mb-6 lg:mb-8">
//             <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
//               Bestsellers
//             </h2>
//           </div>
//           <div className="flex flex-wrap gap-2 mb-6 lg:mb-8 border-gray-200 justify-end">
//             {tabs.map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
//                   activeTab === tab
//                     ? "text-black "
//                     : "text-gray-500 hover:text-gray-700"
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//         </div>

//         <section>
       
//           <div className="max-w-7xl mx-auto p-6 bg-white">
//             {/* Products Grid */}
//             <div className="grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-4  mb-8">
//               {currentProducts.map((product) => (
//                 <div
//                   key={product.id}
//                   className="bg-white border border-gray-200 gap-2 scale-95 rounded-lg  hover:shadow-lg transition-shadow"
//                 >
//                   <div
//                     className={`${product.bgColor} gap-4 rounded-lg  mb-1 flex items-center justify-center h-32`}
//                   >
//                     <div className=" w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center text-gray-500 text-xs">
//                       <img src={product.image} />
//                     </div>
//                     <div>
//                       <div className="text-xs  text-gray-500 mb-2 font-medium">
//                         {product.category}
//                       </div>

//                       <div className="">

//                         <h3 className="text-sm font-medium  text-gray-900 mb-3 line-clamp-2 min-h-[2.5rem]">
//                           {product.name}
//                         </h3>
//                         <div className="flex items-center justify-between">
//                           <span className="text-lg font-semibold text-gray-900">
//                            ${product.price}
//                           </span>
//                           <button className="bg-yellow-400 hover:bg-yellow-500 p-2 rounded-full transition-colors">
//                             <ShoppingCart className="w-4 h-4 text-gray-700" />
//                           </button>
//                         </div>


//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Pagination Dots */}
//             <div className="flex justify-center space-x-2">
//               {Array.from({ length: totalPages }, (_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentPage(index)}
//                   className={`w-3 h-3 rounded-full transition-colors ${
//                     index === currentPage
//                       ? "bg-yellow-400"
//                       : "bg-gray-300 hover:bg-gray-400"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Bestseller;




import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/grid";
// import { Pagination, Grid } from "swiper/modules"; // ✅ Import Grid

// import { Pagination, Grid } from "swiper";

import { ShoppingCart, Heart, TrendingUp, Star } from "lucide-react";

const Bestseller = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [activeTab, setActiveTab] = useState("Top 20");

  // All products data
  const allProducts = {
    "Top 20": [
    
      {
        id: 2,
        category: "Total Security",
        name: "Kaspersky Total Security Suite",
        price: "59.99",
        originalPrice: "89.99",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop&crop=center",
        rating: 4.9,
        bestseller: true,
        discount: "33%",
      },
      {
        id: 3,
        category: "VPN",
        name: "ExpressVPN Premium",
        price: "12.95",
        originalPrice: "19.99",
        image:
          "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=300&h=300&fit=crop&crop=center",
        rating: 4.7,
        bestseller: false,
        discount: "35%",
      },

      {
        id: 4,
        category: "Password Manager",
        name: "LastPass Premium Vault",
        price: "36.00",
        originalPrice: "48.00",
        image:
          "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=300&h=300&fit=crop&crop=center",
        rating: 4.6,
        bestseller: false,
        discount: "25%",
      },
      {
        id: 1,
        category: "Antivirus",
        name: "Norton 360 Deluxe 2025",
        price: "49.99",
        originalPrice: "99.99",
        image:
          "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=300&h=300&fit=crop&crop=center",
        rating: 4.8,
        bestseller: true,
        discount: "50%",
      },
      {
        id: 2,
        category: "Total Security",
        name: "Kaspersky Total Security Suite",
        price: "59.99",
        originalPrice: "89.99",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop&crop=center",
        rating: 4.9,
        bestseller: true,
        discount: "33%",
      },
      {
        id: 3,
        category: "VPN",
        name: "ExpressVPN Premium",
        price: "12.95",
        originalPrice: "19.99",
        image:
          "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=300&h=300&fit=crop&crop=center",
        rating: 4.7,
        bestseller: false,
        discount: "35%",
      },

      {
        id: 4,
        category: "Password Manager",
        name: "LastPass Premium Vault",
        price: "36.00",
        originalPrice: "48.00",
        image:
          "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=300&h=300&fit=crop&crop=center",
        rating: 4.6,
        bestseller: false,
        discount: "25%",
      },
      {
        id: 3,
        category: "VPN",
        name: "ExpressVPN Premium",
        price: "12.95",
        originalPrice: "19.99",
        image:
          "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=300&h=300&fit=crop&crop=center",
        rating: 4.7,
        bestseller: false,
        discount: "35%",
      },

      {
        id: 4,
        category: "Password Manager",
        name: "LastPass Premium Vault",
        price: "36.00",
        originalPrice: "48.00",
        image:
          "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=300&h=300&fit=crop&crop=center",
        rating: 4.6,
        bestseller: false,
        discount: "25%",
      },
      {
        id: 1,
        category: "Antivirus",
        name: "Norton 360 Deluxe 2025",
        price: "49.99",
        originalPrice: "99.99",
        image:
          "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=300&h=300&fit=crop&crop=center",
        rating: 4.8,
        bestseller: true,
        discount: "50%",
      },

      {
        id: 2,
        category: "Total Security",
        name: "Kaspersky Total Security Suite",
        price: "59.99",
        originalPrice: "89.99",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop&crop=center",
        rating: 4.9,
        bestseller: true,
        discount: "33%",
      },

      {
        id: 3,
        category: "VPN",
        name: "ExpressVPN Premium",
        price: "12.95",
        originalPrice: "19.99",
        image:
          "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=300&h=300&fit=crop&crop=center",
        rating: 4.7,
        bestseller: false,
        discount: "35%",
      },

      {
        id: 4,
        category: "Password Manager",
        name: "LastPass Premium Vault",
        price: "36.00",
        originalPrice: "48.00",
        image:
          "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=300&h=300&fit=crop&crop=center",
        rating: 4.6,
        bestseller: false,
        discount: "25%",
      },
      {
        id: 1,
        category: "Antivirus",
        name: "Norton 360 Deluxe 2025",
        price: "49.99",
        originalPrice: "99.99",
        image:
          "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=300&h=300&fit=crop&crop=center",
        rating: 4.8,
        bestseller: true,
        discount: "50%",
      },

      {
        id: 2,
        category: "Total Security",
        name: "Kaspersky Total Security Suite",
        price: "59.99",
        originalPrice: "89.99",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop&crop=center",
        rating: 4.9,
        bestseller: true,
        discount: "33%",
      },

      {
        id: 3,
        category: "VPN",
        name: "ExpressVPN Premium",
        price: "12.95",
        originalPrice: "19.99",
        image:
          "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=300&h=300&fit=crop&crop=center",
        rating: 4.7,
        bestseller: false,
        discount: "35%",
      },
    ],
    "New arrivals": [
    ],
    "Discounted": [
    ],
    "Features": [
    ],
  };

  const tabs = ["Top 20", "New Arrivals", "Discounted", "Featured"];
// const [activeTab, setActiveTab] = useState("Top 20");
// const [currentPage, setCurrentPage] = useState(0);

const itemsPerPage = 8;
const products = allProducts[activeTab] || [];

// Total number of pages
const totalPages = Math.ceil(products.length / itemsPerPage);

// Start & end index for current page
const startIndex = currentPage * itemsPerPage;
const endIndex = startIndex + itemsPerPage;

// Only show 8 items for that page
const currentProducts = products.slice(startIndex, endIndex);

  return (

    <div className="bg-white py-6 sm:py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 lg:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="mb-6 lg:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Bestsellers
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 mb-6 lg:mb-8 border-gray-200 justify-end">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? "text-black "
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <section>
       
          <div className="max-w-7xl mx-auto p-6 bg-white">
            {/* Products Grid */}
            <div className="grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-4  mb-8">
              {currentProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-gray-200 gap-2 scale-95 rounded-lg  hover:shadow-lg transition-shadow"
                >
                  <div
                    className={`${product.bgColor} gap-4 rounded-lg  mb-1 flex items-center justify-center h-32`}
                  >
                    <div className=" w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center text-gray-500 text-xs">
                      <img src={product.image} />
                    </div>
                    <div>
                      <div className="text-xs  text-gray-500 mb-2 font-medium">
                        {product.category}
                      </div>

                      <div className="">

                        <h3 className="text-sm font-medium  text-gray-900 mb-3 line-clamp-2 min-h-[2.5rem]">
                          {product.name}
                        </h3>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-semibold text-gray-900">
                           ${product.price}
                          </span>
                          <button className="bg-yellow-400 hover:bg-yellow-500 p-2 rounded-full transition-colors">
                            <ShoppingCart className="w-4 h-4 text-gray-700" />
                          </button>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center space-x-2">
  {Array.from({ length: totalPages }, (_, index) => (
    <button
      key={index}
      onClick={() => setCurrentPage(index)}
      className={`w-3 h-3 rounded-full transition-colors ${
        index === currentPage
          ? "bg-yellow-400"
          : "bg-gray-300 hover:bg-gray-400"
      }`}
    />
  ))}
</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Bestseller;