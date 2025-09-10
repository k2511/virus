// import React, { useState, useEffect } from "react";
// import { FaShoppingCart } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { VscGraph } from "react-icons/vsc";
// import { FaRegHeart } from "react-icons/fa";
// import toast from "react-hot-toast";
// import axios from "axios";

// const IMAGE_BASE_URL = "http://localhost:5000/";

// const Brands = () => {
//   const navigate = useNavigate();

//   const [val, setVal] = useState(0);
//   const [brands, setBrands] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [visibleCount, setVisibleCount] = useState(4);
//   const [visibleCount1, setVisibleCount1] = useState(4);
//   const [featuredProduct, setFeaturedProduct] = useState(null);

//   const getData = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/products");
//       const data = res.data;
      
//       // Group products by brand name (remove Quick Heal filter)
//       const brandGroups = {};
      
//       data.forEach(product => {
//         if (product.bname) {
//           const brandName = product.bname.trim();
//           if (!brandGroups[brandName]) {
//             brandGroups[brandName] = [];
//           }
//           brandGroups[brandName].push(product);
//         }
//       });
      
//       // Convert to array format similar to original structure
//       const brandsArray = Object.keys(brandGroups).map(brandName => ({
//         name: brandName,
//         arr: brandGroups[brandName]
//       }));
      
//       setBrands(brandsArray);
      
//       // Set first product of first brand as featured product
//       if (brandsArray.length > 0 && brandsArray[0].arr.length > 0) {
//         setFeaturedProduct(brandsArray[0].arr[0]);
//       }
      
//       setLoading(false);
//     } catch (err) {
//       console.error("Error fetching data:", err);
//       toast.error("Failed to load products");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const handleViewMore = () => {
//     setVisibleCount((prev) => prev + 4);
//   };

//   const handleViewMore1 = () => {
//     setVisibleCount1((prev) => prev + 4);
//   };

//   const handleBrandSwitch = (idx) => {
//     setVal(idx);
//     setVisibleCount(4);
//     setVisibleCount1(4);
    
//     // Set first product of selected brand as featured
//     if (brands[idx] && brands[idx].arr.length > 0) {
//       setFeaturedProduct(brands[idx].arr[0]);
//     }
//   };

//   const handleProductClick = (product, brandName) => {
//     navigate(`/brands/${encodeURIComponent(product.pname)}`, {
//       state: {
//         image: `${IMAGE_BASE_URL}${product.pic1}`,
//         price: product.oprice,
//         category: product.cname,
//         originalPrice: product.mprice,
//         stock: product.no_of_stock,
//         products: brands[val].arr,
//         brand: brandName,
//         product: product
//       },
//     });
//   };

//   const handleAddToCart = (e, product) => {
//     e.stopPropagation();
//     toast.success(`${product.pname} added to cart!`);
//   };

//   const handleCompare = (e, product) => {
//     e.stopPropagation();
//     toast.success(`${product.pname} added to compare list!`);
//   };

//   const handleWishlist = (e, product) => {
//     e.stopPropagation();
//     toast.success(`${product.pname} added to wishlist!`);
//   };

//   // Reusable component for Compare & Wishlist section
//   const CompareWishlistSection = ({ product }) => (
//     <div className="flex justify-around w-full items-center sm:gap-4 gap-1 text-sm text-gray-500 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//       <div 
//         className="flex items-center gap-1 hover:text-blue-600 cursor-pointer transition-colors"
//         onClick={(e) => handleCompare(e, product)}
//       >
//         <VscGraph className="w-4 h-4" />
//         <span>Compare</span>
//       </div>
//       <span className="text-gray-300">•</span>
//       <div 
//         className="flex items-center gap-1 hover:text-red-500 cursor-pointer transition-colors"
//         onClick={(e) => handleWishlist(e, product)}
//       >
//         <FaRegHeart className="w-4 h-4" />
//         <span>Add to Wishlist</span>
//       </div>
//     </div>
//   );

//   const CompareWishlistSection1 = ({ product }) => (
//     <div className="flex justify-between w-full items-center sm:gap-4 md:gap-2 lg:px-0 lg:gap-0 gap-0 px-2 text-sm text-gray-500 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//       <div 
//         className="flex items-center gap-1 hover:text-blue-600 cursor-pointer transition-colors"
//         onClick={(e) => handleCompare(e, product)}
//       >
//         <VscGraph className="w-4 h-4" />
//         <span className="text-xs sm:text-xs">Compare</span>
//       </div>
//       <span className="text-gray-300">•</span>
//       <div 
//         className="flex items-center sm:gap-1 gap-0 hover:text-red-500 cursor-pointer transition-colors"
//         onClick={(e) => handleWishlist(e, product)}
//       >
//         <FaRegHeart className="sm:w-4 sm:h-4 w-2 h-2" />
//         <span className="text-[0.8rem] sm:text-xs lg:text-">Add to Wishlist</span>
//       </div>
//     </div>
//   );

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading brands...</p>
//         </div>
//       </div>
//     );
//   }

//   if (brands.length === 0) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center">
//         <div className="text-center">
//           <p className="text-gray-600">No brands found</p>
//         </div>
//       </div>
//     );
//   }

//   const currentBrand = brands[val];
//   const currentProducts = currentBrand ? currentBrand.arr : [];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navigation Tabs */}
//       <div className="bg-white shadow-sm border-b flex justify-center">
//         <div className="max-w-7xl mx-auto px-4 w-full">
//           <div className="flex space-x-4 overflow-x-auto no-scrollbar mx-auto items-center justify-center">
//             {brands.map((brand, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => handleBrandSwitch(idx)}
//                 className={`py-3 px-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors flex-shrink-0 ${
//                   val === idx
//                     ? "border-blue-600 text-blue-600"
//                     : "border-transparent text-gray-500 hover:text-gray-700"
//                 }`}
//               >
//                 {brand.name}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       <section>
//         <div className="mx-auto max-w-[1400px] bg-gray-50 p-4 md:p-10">
//           <div className="grid grid-cols-1 lg:grid-cols-3 items-start">
//             {/* Left Grid */}
//             <div
//               className={`${
//                 currentProducts.length === 1
//                   ? "flex justify-end w-full mt-4 lg:mt-0"
//                   : "grid grid-cols-1 sm:grid-cols-2 gap-1 w-fit mt-4 lg:mt-0 mx-auto"
//               }`}
//             >
//               {currentProducts.slice(0, visibleCount).map((product, i) => (
//                 <div
//                   onClick={() => handleProductClick(product, currentBrand.name)}
//                   key={product.PID || i}
//                   className="bg-white p-3 flex flex-col justify-between items-center text-center 
//                    group cursor-pointer transition-all duration-300 hover:shadow-[0px_0px_6px_rgba(0,0,0,0.3)]"
//                 >
//                   <p className="text-sm text-gray-500">{product.cname}</p>
//                   <p className="font-semibold text-blue-700 line-clamp-2">
//                     {product.pname}
//                   </p>
//                   <img
//                     src={`${IMAGE_BASE_URL}${product.pic1}`}
//                     alt={product.pname}
//                     className="h-32 object-contain my-3"
//                     onError={(e) => {
//                       e.target.src = "https://via.placeholder.com/200/200/ffffff/000000?text=Image+Not+Found";
//                     }}
//                   />
//                   <div className="flex items-center justify-between w-full">
//                     <div className="flex flex-col">
//                       {product.mprice && product.mprice !== product.oprice && (
//                         <span className="text-xs text-gray-500 line-through">
//                           ₹{product.mprice}
//                         </span>
//                       )}
//                       <span className="text-lg font-semibold">₹{product.oprice}</span>
//                     </div>
//                     <button 
//                       className="bg-yellow-400 p-2 rounded-full text-white hover:bg-yellow-500 transition-colors"
//                       onClick={(e) => handleAddToCart(e, product)}
//                     >
//                       <FaShoppingCart />
//                     </button>
//                   </div>
//                   <CompareWishlistSection1 product={product} />
//                 </div>
//               ))}
//               {visibleCount < currentProducts.length && (
//                 <button
//                   onClick={handleViewMore}
//                   className="mt-2 px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition-colors"
//                 >
//                   View More
//                 </button>
//               )}
//             </div>

//             {/* Featured Product */}
//             {featuredProduct && (
//               <div 
//                 className="bg-white py-5 px-3 gap-1 mx-1 md:min-h-[41rem] flex flex-col justify-between items-center
//                   text-center mt-4 lg:mt-0 group cursor-pointer transition-all duration-300 hover:shadow-[0px_0px_6px_rgba(0,0,0,0.3)]"
//                 onClick={() => handleProductClick(featuredProduct, currentBrand.name)}
//               >
//                 <div className="w-full space-y-10">
//                   <div>
//                     <p className="text-sm text-gray-500">{featuredProduct.cname}</p>
//                     <p className="font-semibold text-blue-700 mb-4 line-clamp-2">
//                       {featuredProduct.pname}
//                     </p>
//                   </div>
                
//                   <img
//                     src={`${IMAGE_BASE_URL}${featuredProduct.pic1}`}
//                     alt="featured product"
//                     className="w-full max-h-96 object-contain mb-6"
//                     onError={(e) => {
//                       e.target.src = "https://via.placeholder.com/200/200/ffffff/000000?text=Image+Not+Found";
//                     }}
//                   />
//                   <div className="w-full">
//                     <div className="flex items-center justify-around w-full">
//                       <div className="flex flex-col">
//                         {featuredProduct.mprice && featuredProduct.mprice !== featuredProduct.oprice && (
//                           <span className="text-sm text-gray-500 line-through">
//                             ₹{featuredProduct.mprice}
//                           </span>
//                         )}
//                         <span className="text-lg font-semibold">₹{featuredProduct.oprice}</span>
//                       </div>
//                       <button 
//                         className="bg-yellow-400 px-4 py-2 rounded-full text-white flex items-center gap-2 hover:bg-yellow-500 transition-colors"
//                         onClick={(e) => handleAddToCart(e, featuredProduct)}
//                       >
//                         <FaShoppingCart /> Add to Cart
//                       </button>
//                     </div>
//                     <CompareWishlistSection product={featuredProduct} />
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Right Grid */}
//             <div className={`${
//                 currentProducts.length === 1
//                   ? "flex justify-start w-full mt-4 lg:mt-0"
//                   : "grid grid-cols-1 sm:grid-cols-2 gap-1 w-fit mt-4 lg:mt-0 mx-auto"
//               }`}>
//               {currentProducts.slice(0, visibleCount1).map((product, i) => (
//                 <div
//                   key={product.PID || i}
//                   className="bg-white p-3 flex flex-col justify-between items-center 
//                   text-center group cursor-pointer transition-all duration-300 hover:shadow-[0px_0px_6px_rgba(0,0,0,0.3)]"
//                   onClick={() => handleProductClick(product, currentBrand.name)}
//                 >
//                   <p className="text-sm text-gray-500">{product.cname}</p>
//                   <p className="font-semibold text-blue-700 line-clamp-2">
//                     {product.pname}
//                   </p>
//                   <img
//                     src={`${IMAGE_BASE_URL}${product.pic1}`}
//                     alt={product.pname}
//                     className="h-32 object-contain my-3"
//                     onError={(e) => {
//                       e.target.src = "https://via.placeholder.com/200/200/ffffff/000000?text=Image+Not+Found";
//                     }}
//                   />
//                   <div className="flex items-center justify-between w-full">
//                     <div className="flex flex-col">
//                       {product.mprice && product.mprice !== product.oprice && (
//                         <span className="text-xs text-gray-500 line-through">
//                           ₹{product.mprice}
//                         </span>
//                       )}
//                       <span className="text-lg font-semibold">₹{product.oprice}</span>
//                     </div>
//                     <button 
//                       className="bg-yellow-400 p-2 rounded-full text-white hover:bg-yellow-500 transition-colors"
//                       onClick={(e) => handleAddToCart(e, product)}
//                     >
//                       <FaShoppingCart />
//                     </button>
//                   </div>
//                   <CompareWishlistSection1 product={product} />
//                 </div>
//               ))}
//               {visibleCount1 < currentProducts.length && (
//                 <button
//                   onClick={handleViewMore1}
//                   className="mt-2 px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition-colors"
//                 >
//                   View More
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Brands;

/*************************************************************************************************************** */

// import React, { useState, useEffect } from "react";
// import { FaShoppingCart } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { VscGraph } from "react-icons/vsc";
// import { FaRegHeart } from "react-icons/fa";
// import toast from "react-hot-toast";
// import axios from "axios";

// const IMAGE_BASE_URL = "http://localhost:5000/";

// const Brands = () => {
//   const navigate = useNavigate();
//   const [val, setVal] = useState(0);
//   const [brands, setBrands] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [visibleCount, setVisibleCount] = useState(4);
//   const [visibleCount1, setVisibleCount1] = useState(4);
//   const [featuredProduct, setFeaturedProduct] = useState(null);

//   const getData = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/products");
//       const data = res.data;

//       // Group products by brand name
//       const brandGroups = {};

//       data.forEach(product => {
//         if (product.bname) {
//           const brandName = product.bname.trim();
//           if (!brandGroups[brandName]) {
//             brandGroups[brandName] = [];
//           }
//           brandGroups[brandName].push(product);
//         }
//       });

//       // Convert to array format
//       const brandsArray = Object.keys(brandGroups).map(brandName => ({
//         name: brandName,
//         arr: brandGroups[brandName]
//       }));

//       setBrands(brandsArray);

//       // Set first product of first brand as featured product
//       if (brandsArray.length > 0 && brandsArray[0].arr.length > 0) {
//         setFeaturedProduct(brandsArray[0].arr[0]);
//       }

//       setLoading(false);
//     } catch (err) {
//       console.error("Error fetching data:", err);
//       toast.error("Failed to load products");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const handleViewMore = () => {
//     setVisibleCount((prev) => prev + 4);
//   };

//   const handleViewMore1 = () => {
//     setVisibleCount1((prev) => prev + 4);
//   };

//   const handleBrandSwitch = (idx) => {
//     setVal(idx);
//     setVisibleCount(4);
//     setVisibleCount1(4);

//     // Set first product of selected brand as featured
//     if (brands[idx] && brands[idx].arr.length > 0) {
//       setFeaturedProduct(brands[idx].arr[0]);
//     }
//   };

//   const handleProductClick = (product, brandName) => {
//     navigate(`/brands/${encodeURIComponent(product.pname)}`, {
//       state: {
//         image: `${IMAGE_BASE_URL}${product.pic1}`,
//         price: product.oprice,
//         originalPrice: product.mprice,
//         category: product.cname,
//         stock: product.no_of_stock,
//         features: product.features,
//         systemreq: product.systemreq,
//         csupport: product.csupport,
//         dlink: product.dlink,
//         dprocess: product.dprocess,
//         products: brands[val].arr,
//         brand: brandName,
//         product: product
//       },
//     });
//   };

//   const handleAddToCart = (e, product) => {
//     e.stopPropagation();
//     toast.success(`${product.pname} added to cart!`);
//   };

//   const handleCompare = (e, product) => {
//     e.stopPropagation();
//     toast.success(`${product.pname} added to compare list!`);
//   };

//   const handleWishlist = (e, product) => {
//     e.stopPropagation();
//     toast.success(`${product.pname} added to wishlist!`);
//   };

//   // Reusable component for Compare & Wishlist section
//   const CompareWishlistSection = ({ product }) => (
//     <div className="flex justify-around w-full items-center sm:gap-4 gap-1 text-sm text-gray-500 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//       <div
//         className="flex items-center gap-1 hover:text-blue-600 cursor-pointer transition-colors"
//         onClick={(e) => handleCompare(e, product)}
//       >
//         <VscGraph className="w-4 h-4" />
//         <span>Compare</span>
//       </div>
//       <span className="text-gray-300">•</span>
//       <div
//         className="flex items-center gap-1 hover:text-red-500 cursor-pointer transition-colors"
//         onClick={(e) => handleWishlist(e, product)}
//       >
//         <FaRegHeart className="w-4 h-4" />
//         <span>Add to Wishlist</span>
//       </div>
//     </div>
//   );

//   const CompareWishlistSection1 = ({ product }) => (
//     <div className="flex justify-between w-full items-center sm:gap-4 md:gap-2 lg:px-0 lg:gap-0 gap-0 px-2 text-sm text-gray-500 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//       <div
//         className="flex items-center gap-1 hover:text-blue-600 cursor-pointer transition-colors"
//         onClick={(e) => handleCompare(e, product)}
//       >
//         <VscGraph className="w-4 h-4" />
//         <span className="text-xs sm:text-xs">Compare</span>
//       </div>
//       <span className="text-gray-300">•</span>
//       <div
//         className="flex items-center sm:gap-1 gap-0 hover:text-red-500 cursor-pointer transition-colors"
//         onClick={(e) => handleWishlist(e, product)}
//       >
//         <FaRegHeart className="sm:w-4 sm:h-4 w-2 h-2" />
//         <span className="text-[0.8rem] sm:text-xs lg:text-sm">Add to Wishlist</span>
//       </div>
//     </div>
//   );

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading brands...</p>
//         </div>
//       </div>
//     );
//   }

//   if (brands.length === 0) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center">
//         <div className="text-center">
//           <p className="text-gray-600">No brands found</p>
//         </div>
//       </div>
//     );
//   }

//   const currentBrand = brands[val];
//   const currentProducts = currentBrand ? currentBrand.arr : [];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navigation Tabs */}
//       <div className="bg-white shadow-sm border-b flex justify-center">
//         <div className="max-w-7xl mx-auto px-4 w-full">
//           <div className="flex space-x-4 overflow-x-auto no-scrollbar mx-auto items-center justify-center">
//             {brands.map((brand, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => handleBrandSwitch(idx)}
//                 className={`py-3 px-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors flex-shrink-0 ${
//                   val === idx
//                     ? "border-blue-600 text-blue-600"
//                     : "border-transparent text-gray-500 hover:text-gray-700"
//                 }`}
//               >
//                 {brand.name}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//       <section>
//         <div className="mx-auto max-w-[1400px] bg-gray-50 p-4 md:p-10">
//           <div className="grid grid-cols-1 lg:grid-cols-3 items-start">
//             {/* Left Grid */}
//             <div
//               className={`${
//                 currentProducts.length === 1
//                   ? "flex justify-end w-full mt-4 lg:mt-0"
//                   : "grid grid-cols-1 sm:grid-cols-2 gap-1 w-fit mt-4 lg:mt-0 mx-auto"
//               }`}
//             >
//               {currentProducts.slice(0, visibleCount).map((product, i) => (
//                 <div
//                   onClick={() => handleProductClick(product, currentBrand.name)}
//                   key={product.PID || i}
//                   className="bg-white p-3 flex flex-col justify-between items-center text-center group cursor-pointer transition-all duration-300 hover:shadow-[0px_0px_6px_rgba(0,0,0,0.3)]"
//                 >
//                   <p className="text-sm text-gray-500">{product.bname} - {product.cname}</p>
//                   <p className="font-semibold text-blue-700 line-clamp-2">
//                     {product.pname}
//                   </p>
//                   <img
//                     src={`${IMAGE_BASE_URL}${product.pic1}`}
//                     alt={product.pname}
//                     className="h-32 object-contain my-3"
//                     onError={(e) => {
//                       e.target.src = "https://via.placeholder.com/200/200/ffffff/000000?text=Image+Not+Found";
//                     }}
//                   />
//                   <div className="flex items-center justify-between w-full">
//                     <div className="flex flex-col">
//                       {product.mprice && product.mprice !== product.oprice && (
//                         <span className="text-xs text-gray-500 line-through">
//                           ₹{product.mprice} (MRP)
//                         </span>
//                       )}
//                       <span className="text-lg font-semibold">₹{product.oprice}</span>
//                     </div>
//                     <button
//                       className="bg-yellow-400 p-2 rounded-full text-white hover:bg-yellow-500 transition-colors"
//                       onClick={(e) => handleAddToCart(e, product)}
//                     >
//                       <FaShoppingCart />
//                     </button>
//                   </div>
//                   {product.no_of_stock && (
//                     <div className="mt-2 text-xs text-green-600">
//                       In Stock: {product.no_of_stock} units
//                     </div>
//                   )}
//                   <CompareWishlistSection1 product={product} />
//                 </div>
//               ))}
//               {visibleCount < currentProducts.length && (
//                 <button
//                   onClick={handleViewMore}
//                   className="mt-2 px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition-colors"
//                 >
//                   View More
//                 </button>
//               )}
//             </div>
//             {/* Featured Product */}
//             {featuredProduct && (
//               <div
//                 className="bg-white py-5 px-3 gap-1 mx-1 md:min-h-[41rem] flex flex-col justify-between items-center text-center mt-4 lg:mt-0 group cursor-pointer transition-all duration-300 hover:shadow-[0px_0px_6px_rgba(0,0,0,0.3)]"
//                 onClick={() => handleProductClick(featuredProduct, currentBrand.name)}
//               >
//                 <div className="w-full space-y-10">
//                   <div>
//                     <p className="text-sm text-gray-500">{featuredProduct.bname} - {featuredProduct.cname}</p>
//                     <p className="font-semibold text-blue-700 mb-4 line-clamp-2">
//                       {featuredProduct.pname}
//                     </p>
//                   </div>
//                   <img
//                     src={`${IMAGE_BASE_URL}${featuredProduct.pic1}`}
//                     alt="featured product"
//                     className="w-full max-h-96 object-contain mb-6"
//                     onError={(e) => {
//                       e.target.src = "https://via.placeholder.com/200/200/ffffff/000000?text=Image+Not+Found";
//                     }}
//                   />
//                   <div className="w-full">
//                     <div className="flex items-center justify-around w-full">
//                       <div className="flex flex-col">
//                         {featuredProduct.mprice && featuredProduct.mprice !== featuredProduct.oprice && (
//                           <span className="text-sm text-gray-500 line-through">
//                             ₹{featuredProduct.mprice} (MRP)
//                           </span>
//                         )}
//                         <span className="text-lg font-semibold">₹{featuredProduct.oprice}</span>
//                       </div>
//                       <button
//                         className="bg-yellow-400 px-4 py-2 rounded-full text-white flex items-center gap-2 hover:bg-yellow-500 transition-colors"
//                         onClick={(e) => handleAddToCart(e, featuredProduct)}
//                       >
//                         <FaShoppingCart /> Add to Cart
//                       </button>
//                     </div>
//                     {featuredProduct.no_of_stock && (
//                       <div className="mt-2 text-xs text-green-600">
//                         In Stock: {featuredProduct.no_of_stock} units
//                       </div>
//                     )}
//                     <CompareWishlistSection product={featuredProduct} />
//                   </div>
//                 </div>
//               </div>
//             )}
//             {/* Right Grid */}
//             <div
//               className={`${
//                 currentProducts.length === 1
//                   ? "flex justify-start w-full mt-4 lg:mt-0"
//                   : "grid grid-cols-1 sm:grid-cols-2 gap-1 w-fit mt-4 lg:mt-0 mx-auto"
//               }`}
//             >
//               {currentProducts.slice(0, visibleCount1).map((product, i) => (
//                 <div
//                   key={product.PID || i}
//                   className="bg-white p-3 flex flex-col justify-between items-center text-center group cursor-pointer transition-all duration-300 hover:shadow-[0px_0px_6px_rgba(0,0,0,0.3)]"
//                   onClick={() => handleProductClick(product, currentBrand.name)}
//                 >
//                   <p className="text-sm text-gray-500">{product.bname} - {product.cname}</p>
//                   <p className="font-semibold text-blue-700 line-clamp-2">
//                     {product.pname}
//                   </p>
//                   <img
//                     src={`${IMAGE_BASE_URL}${product.pic1}`}
//                     alt={product.pname}
//                     className="h-32 object-contain my-3"
//                     onError={(e) => {
//                       e.target.src = "https://via.placeholder.com/200/200/ffffff/000000?text=Image+Not+Found";
//                     }}
//                   />
//                   <div className="flex items-center justify-between w-full">
//                     <div className="flex flex-col">
//                       {product.mprice && product.mprice !== product.oprice && (
//                         <span className="text-xs text-gray-500 line-through">
//                           ₹{product.mprice} (MRP)
//                         </span>
//                       )}
//                       <span className="text-lg font-semibold">₹{product.oprice}</span>
//                     </div>
//                     <button
//                       className="bg-yellow-400 p-2 rounded-full text-white hover:bg-yellow-500 transition-colors"
//                       onClick={(e) => handleAddToCart(e, product)}
//                     >
//                       <FaShoppingCart />
//                     </button>
//                   </div>
//                   {product.no_of_stock && (
//                     <div className="mt-2 text-xs text-green-600">
//                       In Stock: {product.no_of_stock} units
//                     </div>
//                   )}
//                   <CompareWishlistSection1 product={product} />
//                 </div>
//               ))}
//               {visibleCount1 < currentProducts.length && (
//                 <button
//                   onClick={handleViewMore1}
//                   className="mt-2 px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition-colors"
//                 >
//                   View More
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Brands;









import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { VscGraph } from "react-icons/vsc";
import { FaRegHeart } from "react-icons/fa";
import toast from "react-hot-toast";
import axios from "axios";

const IMAGE_BASE_URL = "http://localhost:5000/";

const Brands = () => {
  const navigate = useNavigate();
  const [val, setVal] = useState(0);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(4);
  const [visibleCount1, setVisibleCount1] = useState(4);
  const [featuredProduct, setFeaturedProduct] = useState(null);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      const data = res.data;

      // Group products by brand name, skip Quick Heal
      const brandGroups = {};

      data.forEach((product) => {
        if (product.bname) {
          const brandName = product.bname.trim();
          if (brandName.toLowerCase() === "quick heal") return; // ❌ Skip Quick Heal

          if (!brandGroups[brandName]) {
            brandGroups[brandName] = [];
          }
          brandGroups[brandName].push(product);
        }
      });

      // Convert to array format
      const brandsArray = Object.keys(brandGroups).map((brandName) => ({
        name: brandName,
        arr: brandGroups[brandName],
      }));

      setBrands(brandsArray);

      // Set first product of first brand as featured product
      if (brandsArray.length > 0 && brandsArray[0].arr.length > 0) {
        setFeaturedProduct(brandsArray[0].arr[0]);
      }

      setLoading(false);
    } catch (err) {
      console.error("Error fetching data:", err);
      toast.error("Failed to load products");
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const handleViewMore1 = () => {
    setVisibleCount1((prev) => prev + 4);
  };

  const handleBrandSwitch = (idx) => {
    setVal(idx);
    setVisibleCount(4);
    setVisibleCount1(4);

    // Set first product of selected brand as featured
    if (brands[idx] && brands[idx].arr.length > 0) {
      setFeaturedProduct(brands[idx].arr[0]);
    }
  };

  const handleProductClick = (product, brandName) => {
    navigate(`/brands/${encodeURIComponent(product.pname)}`, {
      state: {
        image: `${IMAGE_BASE_URL}${product.pic1}`,
        price: product.oprice,
        originalPrice: product.mprice,
        category: product.cname,
        stock: product.no_of_stock,
        features: product.features,
        systemreq: product.systemreq,
        csupport: product.csupport,
        dlink: product.dlink,
        dprocess: product.dprocess,
        products: brands[val].arr,
        brand: brandName,
        product: product,
      },
    });
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    toast.success(`${product.pname} added to cart!`);
  };

  const handleCompare = (e, product) => {
    e.stopPropagation();
    toast.success(`${product.pname} added to compare list!`);
  };

  const handleWishlist = (e, product) => {
    e.stopPropagation();
    toast.success(`${product.pname} added to wishlist!`);
  };

  // Reusable component for Compare & Wishlist section
  const CompareWishlistSection = ({ product }) => (
    <div className="flex justify-around w-full items-center sm:gap-4 gap-1 text-sm text-gray-500 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div
        className="flex items-center gap-1 hover:text-blue-600 cursor-pointer transition-colors"
        onClick={(e) => handleCompare(e, product)}
      >
        <VscGraph className="w-4 h-4" />
        <span>Compare</span>
      </div>
      <span className="text-gray-300">•</span>
      <div
        className="flex items-center gap-1 hover:text-red-500 cursor-pointer transition-colors"
        onClick={(e) => handleWishlist(e, product)}
      >
        <FaRegHeart className="w-4 h-4" />
        <span>Add to Wishlist</span>
      </div>
    </div>
  );

  const CompareWishlistSection1 = ({ product }) => (
    <div className="flex justify-between w-full items-center sm:gap-4 md:gap-2 lg:px-0 lg:gap-0 gap-0 px-2 text-sm text-gray-500 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div
        className="flex items-center gap-1 hover:text-blue-600 cursor-pointer transition-colors"
        onClick={(e) => handleCompare(e, product)}
      >
        <VscGraph className="w-4 h-4" />
        <span className="text-xs sm:text-xs">Compare</span>
      </div>
      <span className="text-gray-300">•</span>
      <div
        className="flex items-center sm:gap-1 gap-0 hover:text-red-500 cursor-pointer transition-colors"
        onClick={(e) => handleWishlist(e, product)}
      >
        <FaRegHeart className="sm:w-4 sm:h-4 w-2 h-2" />
        <span className="text-[0.8rem] sm:text-xs lg:text-sm">Add to Wishlist</span>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading brands...</p>
        </div>
      </div>
    );
  }

  if (brands.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">No brands found</p>
        </div>
      </div>
    );
  }

  const currentBrand = brands[val];
  const currentProducts = currentBrand ? currentBrand.arr : [];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm border-b flex justify-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="flex space-x-4 overflow-x-auto no-scrollbar mx-auto items-center justify-center">
            {brands.map((brand, idx) => (
              <button
                key={idx}
                onClick={() => handleBrandSwitch(idx)}
                className={`py-3 px-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors flex-shrink-0 ${
                  val === idx
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {brand.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <section>
        <div className="mx-auto max-w-[1400px] bg-gray-50 p-4 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-start">
            {/* Left Grid */}
            <div
              className={`${
                currentProducts.length === 1
                  ? "flex justify-end w-full mt-4 lg:mt-0"
                  : "grid grid-cols-1 sm:grid-cols-2 gap-1 w-fit mt-4 lg:mt-0 mx-auto"
              }`}
            >
              {currentProducts.slice(0, visibleCount).map((product, i) => (
                <div
                  onClick={() => handleProductClick(product, currentBrand.name)}
                  key={product.PID || i}
                  role="button"
                  tabIndex={0}
                  className="bg-white p-3 flex flex-col justify-between items-center text-center group cursor-pointer transition-all duration-300 hover:shadow-[0px_0px_6px_rgba(0,0,0,0.3)]"
                >
                  <p className="text-sm text-gray-500">
                    {product.bname} - {product.cname}
                  </p>
                  <p className="font-semibold text-blue-700 line-clamp-2">
                    {product.pname}
                  </p>
                  <img
                    src={`${IMAGE_BASE_URL}${product.pic1}`}
                    alt={product.pname}
                    className="h-32 object-contain my-3"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/200/200/ffffff/000000?text=Image+Not+Found";
                    }}
                  />
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col">
                      {product.mprice && product.mprice !== product.oprice && (
                        <span className="text-xs text-gray-500 line-through">
                          ₹{product.mprice} (MRP)
                        </span>
                      )}
                      <span className="text-lg font-semibold">₹{product.oprice}</span>
                    </div>
                    <button
                      className="bg-yellow-400 p-2 rounded-full text-white hover:bg-yellow-500 transition-colors"
                      onClick={(e) => handleAddToCart(e, product)}
                    >
                      <FaShoppingCart />
                    </button>
                  </div>
                  {product.no_of_stock && (
                    <div className="mt-2 text-xs text-green-600">
                      In Stock: {product.no_of_stock} units
                    </div>
                  )}
                  <CompareWishlistSection1 product={product} />
                </div>
              ))}
              {visibleCount < currentProducts.length && (
                <button
                  onClick={handleViewMore}
                  className="mt-2 px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition-colors"
                >
                  View More
                </button>
              )}
            </div>
            {/* Featured Product */}
            {featuredProduct && (
              <div
                className="bg-white py-5 px-3 gap-1 mx-1 md:min-h-[41rem] flex flex-col justify-between items-center text-center mt-4 lg:mt-0 group cursor-pointer transition-all duration-300 hover:shadow-[0px_0px_6px_rgba(0,0,0,0.3)]"
                onClick={() => handleProductClick(featuredProduct, currentBrand.name)}
                role="button"
                tabIndex={0}
              >
                <div className="w-full space-y-10">
                  <div>
                    <p className="text-sm text-gray-500">
                      {featuredProduct.bname} - {featuredProduct.cname}
                    </p>
                    <p className="font-semibold text-blue-700 mb-4 line-clamp-2">
                      {featuredProduct.pname}
                    </p>
                  </div>
                  <img
                    src={`${IMAGE_BASE_URL}${featuredProduct.pic1}`}
                    alt="featured product"
                    className="w-full max-h-96 object-contain mb-6"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/200/200/ffffff/000000?text=Image+Not+Found";
                    }}
                  />
                  <div className="w-full">
                    <div className="flex items-center justify-around w-full">
                      <div className="flex flex-col">
                        {featuredProduct.mprice &&
                          featuredProduct.mprice !== featuredProduct.oprice && (
                            <span className="text-sm text-gray-500 line-through">
                              ₹{featuredProduct.mprice} (MRP)
                            </span>
                          )}
                        <span className="text-lg font-semibold">
                          ₹{featuredProduct.oprice}
                        </span>
                      </div>
                      <button
                        className="bg-yellow-400 px-4 py-2 rounded-full text-white flex items-center gap-2 hover:bg-yellow-500 transition-colors"
                        onClick={(e) => handleAddToCart(e, featuredProduct)}
                      >
                        <FaShoppingCart /> Add to Cart
                      </button>
                    </div>
                    {featuredProduct.no_of_stock && (
                      <div className="mt-2 text-xs text-green-600">
                        In Stock: {featuredProduct.no_of_stock} units
                      </div>
                    )}
                    <CompareWishlistSection product={featuredProduct} />
                  </div>
                </div>
              </div>
            )}
            {/* Right Grid */}
            <div
              className={`${
                currentProducts.length === 1
                  ? "flex justify-start w-full mt-4 lg:mt-0"
                  : "grid grid-cols-1 sm:grid-cols-2 gap-1 w-fit mt-4 lg:mt-0 mx-auto"
              }`}
            >
              {currentProducts.slice(0, visibleCount1).map((product, i) => (
                <div
                  key={product.PID || i}
                  role="button"
                  tabIndex={0}
                  className="bg-white p-3 flex flex-col justify-between items-center text-center group cursor-pointer transition-all duration-300 hover:shadow-[0px_0px_6px_rgba(0,0,0,0.3)]"
                  onClick={() => handleProductClick(product, currentBrand.name)}
                >
                  <p className="text-sm text-gray-500">
                    {product.bname} - {product.cname}
                  </p>
                  <p className="font-semibold text-blue-700 line-clamp-2">
                    {product.pname}
                  </p>
                  <img
                    src={`${IMAGE_BASE_URL}${product.pic1}`}
                    alt={product.pname}
                    className="h-32 object-contain my-3"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/200/200/ffffff/000000?text=Image+Not+Found";
                    }}
                  />
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col">
                      {product.mprice && product.mprice !== product.oprice && (
                        <span className="text-xs text-gray-500 line-through">
                          ₹{product.mprice} (MRP)
                        </span>
                      )}
                      <span className="text-lg font-semibold">₹{product.oprice}</span>
                    </div>
                    <button
                      className="bg-yellow-400 p-2 rounded-full text-white hover:bg-yellow-500 transition-colors"
                      onClick={(e) => handleAddToCart(e, product)}
                    >
                      <FaShoppingCart />
                    </button>
                  </div>
                  {product.no_of_stock && (
                    <div className="mt-2 text-xs text-green-600">
                      In Stock: {product.no_of_stock} units
                    </div>
                  )}
                  <CompareWishlistSection1 product={product} />
                </div>
              ))}
              {visibleCount1 < currentProducts.length && (
                <button
                  onClick={handleViewMore1}
                  className="mt-2 px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition-colors"
                >
                  View More
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brands;