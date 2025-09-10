// import React, { useState, useEffect } from "react";
// import { ShoppingCart, BarChart3, Heart } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import axios from "axios";

// const IMAGE_BASE_URL = "http://localhost:5000/";

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
//   const [categories, setCategories] = useState([]);

//   const navigate = useNavigate();
//   const tabs = ["All Products", "Total Security", "Internet Security", "Antivirus Pro", "Upgrade"];

//   const getData = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/products");
//       const data = res.data;
      
//       // Filter only Quick Heal products
//       const quickHealProducts = data.filter(product => 
//         product.bname && product.bname.toLowerCase().includes("quick heal")
//       );
      
//       setProducts(quickHealProducts);
      
//       // Extract unique categories from Quick Heal products
//       const uniqueCategories = [...new Set(quickHealProducts.map(product => product.cname))];
//       setCategories(uniqueCategories);
      
//       setLoading(false);
//     } catch (err) {
//       console.error("Error fetching data:", err);
//       toast.error("Failed to load products");
//       setLoading(false);
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

//   const handleViewMore = () => {
//     setVisibleProducts((prev) => prev + 8);
//   };

//   const handleProductClick = (product) => {
//     navigate(`/new-section-details/${encodeURIComponent(product.pname)}`, {
//       state: {
//         image: `${IMAGE_BASE_URL}${product.pic1}`,
//         price: product.oprice,
//         category: product.cname,
//         originalPrice: product.mprice,
//         stock: product.no_of_stock,
//         product: product
//       },
//     });
//   };

//   const handleAddToCart = (e, product) => {
//     e.stopPropagation();
//     toast.success(`${product.pname} added to cart!`);
//   };

//   const handleDealProductClick = () => {
//     // Find a suitable deal product from the API data
//     const dealProduct = products.find(product => 
//       product.cname === "Total Security" && product.pname.includes("3 Years")
//     ) || products[0];
    
//     if (dealProduct) {
//       navigate(`/new-section-details/${encodeURIComponent(dealProduct.pname)}`, {
//         state: {
//           image: `${IMAGE_BASE_URL}${dealProduct.pic1}`,
//           price: dealProduct.oprice,
//           category: dealProduct.cname,
//           originalPrice: dealProduct.mprice,
//           stock: dealProduct.no_of_stock,
//           product: dealProduct
//         },
//       });
//     }
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
//     <div className="min-h-screen bg-white sm:p-4 p-0 lg:p-8">
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
//                   alt="Quick Heal Total Security Deal"
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
//             <div className="flex flex-nowrap sm:gap-5 gap-0 mx-auto mb-8 bg-gray-100 rounded-lg p-1 w-full overflow-x-auto">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => {
//                     setActiveTab(tab);
//                     setVisibleProducts(8);
//                   }}
//                   className={`lg:px-4 md:px-2 sm:px-1 py-2 px-2 rounded-md sm:text-sm md:text-md mx-auto text-[0.7rem] font-medium transition-all whitespace-nowrap ${
//                     activeTab === tab
//                       ? "bg-white text-gray-900 shadow-sm"
//                       : "text-gray-600 hover:text-gray-900"
//                   }`}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>

//             <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:gap-0">
//               {products
//                 .filter((product) => activeTab === "All Products" || product.cname === activeTab)
//                 .slice(0, activeTab === "All Products" ? visibleProducts : products.length)
//                 .map((product) => (
//                   <div
//                     key={product.PID}
//                     className="group cursor-pointer"
//                     onClick={() => handleProductClick(product)}
//                   >
//                     <div className="bg-white border-r-2 border-gray-200 mb-4 sm:p-4 p-3 transition-all duration-200 m-1 hover:border-gray-300 border-b-2 sm:border-b-0 hover:shadow-[0px_0px_6px_rgba(0,0,0,0.3)]">
//                       <div className="text-xs text-gray-500 mb-2">{product.cname}</div>
//                       <h3 className="text-blue-600 font-semibold sm:text-sm text-xs mb-3 line-clamp-2 hover:underline">
//                         {product.pname}
//                       </h3>

//                       <div className="mb-4 rounded-lg sm:p-1 h-32 flex items-center justify-center">
//                         <img
//                           src={`${IMAGE_BASE_URL}${product.pic1}`}
//                           alt={product.pname}
//                           className="max-w-full sm:w-full w-40 mt-3 mb-3 sm:h-full h-40 object-contain"
//                           onError={(e) => {
//                             e.target.src = "https://via.placeholder.com/200/200/ffffff/000000?text=Image+Not+Found";
//                           }}
//                         />
//                       </div>

//                       <div className="flex items-center justify-between">
//                         <div className="flex flex-col">
//                           {product.mprice && product.mprice !== product.oprice && (
//                             <span className="text-xs text-gray-500 line-through">
//                               ₹{product.mprice}
//                             </span>
//                           )}
//                           <span className="text-lg font-semibold text-gray-900">
//                             ₹{product.oprice}
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
//                           className="flex items-center gap-1 hover:text-gray-700 text-[0.8rem] sm:text-xs"
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             toast.success("Added to wishlist!");
//                           }}
//                         >
//                           <Heart className="w-3 h-3" />
//                           Wishlist
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










import React, { useState, useEffect } from "react";
import { ShoppingCart, BarChart3, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const IMAGE_BASE_URL = "http://localhost:5000/";

const NewSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [activeTab, setActiveTab] = useState("All Products");
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const tabs = ["All Products", "Total Security", "Internet Security", "Antivirus Pro", "Upgrade"];

  // Map API categories to our tab names
  const categoryMap = {
    "Total Security": ["total security", "total", "ts"],
    "Internet Security": ["internet security", "internet", "is"],
    "Antivirus Pro": ["antivirus pro", "antivirus", "avp", "pro"],
    "Upgrade": ["upgrade", "renewal", "update"]
  };

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      const data = res.data;
      console.log('data', data)
      // Filter only Quick Heal products
      const quickHealProducts = data.filter(product => 
        product.bname && product.bname.toLowerCase().includes("quick heal")
      );
      
      setProducts(quickHealProducts);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching data:", err);
      toast.error("Failed to load products");
      setLoading(false);
    }
  };

  // Filter products based on active tab
  const filteredProducts = () => {
    if (activeTab === "All Products") {
      return products;
    }
    
    // Find matching category keys for the active tab
    const categoryKeys = categoryMap[activeTab] || [activeTab.toLowerCase()];
    
    return products.filter(product => {
      if (!product.cname) return false;
      
      const productCategory = product.cname.toLowerCase();
      return categoryKeys.some(key => productCategory.includes(key.toLowerCase()));
    });
  };

  useEffect(() => {
    getData();

    const calculateTimeLeft = () => {
      const targetDate = new Date();
      targetDate.setHours(targetDate.getHours() + 12);

      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleViewMore = () => {
    setVisibleProducts((prev) => prev + 8);
  };

  const handleProductClick = (product) => {
    navigate(`/new-section-details/${encodeURIComponent(product.pname)}`, {
      state: {
        image: `${IMAGE_BASE_URL}${product.pic1}`,
        price: product.oprice,
        category: product.cname,
        originalPrice: product.mprice,
        stock: product.no_of_stock,
        product: product
      },
    });
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    toast.success(`${product.pname} added to cart!`);
  };

  const handleDealProductClick = () => {
    // Find a suitable deal product from the API data
    const totalSecurityProducts = filteredProducts().filter(product => 
      product.cname && product.cname.toLowerCase().includes("total")
    );
    
    const dealProduct = totalSecurityProducts.find(product => 
      product.pname && product.pname.includes("3 Years")
    ) || totalSecurityProducts[0] || products[0];
    
    if (dealProduct) {
      navigate(`/new-section-details/${encodeURIComponent(dealProduct.pname)}`, {
        state: {
          image: `${IMAGE_BASE_URL}${dealProduct.pic1}`,
          price: dealProduct.oprice,
          category: dealProduct.cname,
          originalPrice: dealProduct.mprice,
          stock: dealProduct.no_of_stock,
          product: dealProduct
        },
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white sm:p-4 p-0 lg:p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  const productsToShow = filteredProducts();
  const displayProducts = activeTab === "All Products" 
    ? productsToShow.slice(0, visibleProducts) 
    : productsToShow;

  return (
    <div className="min-h-screen bg-white sm:p-4 p-0 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Deal of the Day Section */}
          <div className="lg:w-80 flex-shrink-0">
            <div
              className="border-2 border-yellow-400 rounded-2xl p-6 bg-gradient-to-br from-yellow-50 to-white relative overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={handleDealProductClick}
            >
              <div className="absolute top-4 right-4 bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xs font-medium text-gray-700">Save</div>
                  <div className="text-sm font-bold text-gray-900">₹20</div>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Deal of the</h3>
                <h3 className="text-lg font-semibold text-gray-900">Day</h3>
              </div>

              <div className="mb-6">
                <img
                  src="https://antivirusestore.in/admin/model/pics/quick-heal-total-security08_18_09_46_14.png"
                  style={{ height: "283px" }}
                  alt="Quick Heal Total Security Deal"
                  className="w-full object-contain mx-auto"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/200/200/ffffff/000000?text=Image+Not+Found";
                  }}
                />
              </div>

              <div className="text-center mb-4">
                <h4 className="text-blue-600 font-medium mb-2 hover:underline">
                  Quick Heal Total Security 1PC 3 Years
                </h4>

                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-gray-500 line-through text-sm">₹99.00</span>
                  <span className="text-red-600 text-2xl font-bold">₹79.00</span>
                </div>

                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span>
                    Available: <span className="font-semibold">6</span>
                  </span>
                  <span>
                    Already Sold: <span className="font-semibold">28</span>
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{ width: "82%" }}></div>
                </div>

                <div className="text-center mb-4">
                  <div className="text-sm text-gray-600 mb-2">Hurry Up! Offer ends in:</div>
                  <div className="flex justify-center gap-1">
                    <div className="bg-gray-800 text-white px-2 py-1 rounded text-xl font-mono">
                      {String(timeLeft.hours).padStart(2, "0")}
                    </div>
                    <span className="text-xl font-bold">:</span>
                    <div className="bg-gray-800 text-white px-2 py-1 rounded text-xl font-mono">
                      {String(timeLeft.minutes).padStart(2, "0")}
                    </div>
                    <span className="text-xl font-bold">:</span>
                    <div className="bg-gray-800 text-white px-2 py-1 rounded text-xl font-mono">
                      {String(timeLeft.seconds).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1 px-4">
                    <span>HOURS</span>
                    <span>MINS</span>
                    <span>SECS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="flex-1 mx-auto">
            <div className="flex flex-nowrap sm:gap-5 gap-0 mx-auto mb-8 bg-gray-100 rounded-lg p-1 w-full overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setVisibleProducts(8);
                  }}
                  className={`lg:px-4 md:px-2 sm:px-1 py-2 px-2 rounded-md sm:text-sm md:text-md mx-auto text-[0.7rem] font-medium transition-all whitespace-nowrap ${
                    activeTab === tab
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab} {tab !== "All Products" && `(${filteredProducts().filter(p => {
                    const categoryKeys = categoryMap[tab] || [tab.toLowerCase()];
                    return p.cname && categoryKeys.some(key => p.cname.toLowerCase().includes(key.toLowerCase()));
                  }).length})`}
                </button>
              ))}
            </div>

            {displayProducts.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-500">No products found in this category.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:gap-0">
                  {displayProducts.map((product) => (
                    <div
                      key={product.PID}
                      className="group cursor-pointer"
                      onClick={() => handleProductClick(product)}
                    >
                      <div className="bg-white border-r-2 border-gray-200 mb-4 sm:p-4 p-3 transition-all duration-200 m-1 hover:border-gray-300 border-b-2 sm:border-b-0 hover:shadow-[0px_0px_6px_rgba(0,0,0,0.3)]">
                        <div className="text-xs text-gray-500 mb-2">{product.cname}</div>
                        <h3 className="text-blue-600 font-semibold sm:text-sm text-xs mb-3 line-clamp-2 hover:underline">
                          {product.pname}
                        </h3>

                        <div className="mb-4 rounded-lg sm:p-1 h-32 flex items-center justify-center">
                          <img
                            src={`${IMAGE_BASE_URL}${product.pic1}`}
                            alt={product.pname}
                            className="max-w-full sm:w-full w-40 mt-3 mb-3 sm:h-full h-40 object-contain"
                            onError={(e) => {
                              e.target.src = "https://via.placeholder.com/200/200/ffffff/000000?text=Image+Not+Found";
                            }}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex flex-col">
                            {product.mprice && product.mprice !== product.oprice && (
                              <span className="text-xs text-gray-500 line-through">
                                ₹{product.mprice}
                              </span>
                            )}
                            <span className="text-lg font-semibold text-gray-900">
                              ₹{product.oprice}
                            </span>
                          </div>

                          <button
                            className="bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded-full transition-colors"
                            onClick={(e) => handleAddToCart(e, product)}
                          >
                            <ShoppingCart className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between gap-1 mt-3 text-xs text-gray-500">
                          <button
                            className="flex items-center gap-1 hover:text-gray-700"
                            onClick={(e) => {
                              e.stopPropagation();
                              toast.success("Added to compare list!");
                            }}
                          >
                            <BarChart3 className="w-3 h-3" />
                            Compare
                          </button>
                          <button
                            className="flex items-center gap-1 hover:text-gray-700 text-[0.8rem] sm:text-xs"
                            onClick={(e) => {
                              e.stopPropagation();
                              toast.success("Added to wishlist!");
                            }}
                          >
                            <Heart className="w-3 h-3" />
                            Wishlist
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {activeTab === "All Products" && visibleProducts < productsToShow.length && (
                  <div className="text-center mt-8">
                    <button
                      onClick={handleViewMore}
                      className="px-6 py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-500 transition-colors"
                    >
                      View More
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSection;