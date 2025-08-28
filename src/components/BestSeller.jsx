// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";

// import { ShoppingCart, Heart, TrendingUp } from "lucide-react";

// const Bestseller = () => {
//   const [activeTab, setActiveTab] = useState("Top 20");
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [itemsToShow, setItemsToShow] = useState(4);

//   const products = [
//     {
//       id: 1,
//       category: "Antivirus",
//       name: "Norton 360 Deluxe 2025",
//       price: "49.99",
//       originalPrice: "99.99",
//       image:
//         "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=300&h=300&fit=crop&crop=center",
//       rating: 4.8,
//       bestseller: true,
//       discount: "50%",
//     },
//     {
//       id: 2,
//       category: "Total Security",
//       name: "Kaspersky Total Security Suite",
//       price: "59.99",
//       originalPrice: "89.99",
//       image:
//         "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop&crop=center",
//       rating: 4.9,
//       bestseller: true,
//       discount: "33%",
//     },
//     {
//       id: 3,
//       category: "VPN",
//       name: "ExpressVPN Premium",
//       price: "12.95",
//       originalPrice: "19.99",
//       image:
//         "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=300&h=300&fit=crop&crop=center",
//       rating: 4.7,
//       bestseller: false,
//       discount: "35%",
//     },
//     {
//       id: 4,
//       category: "Password Manager",
//       name: "LastPass Premium Vault",
//       price: "36.00",
//       originalPrice: "48.00",
//       image:
//         "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=300&h=300&fit=crop&crop=center",
//       rating: 4.6,
//       bestseller: false,
//       discount: "25%",
//     },
//     {
//       id: 5,
//       category: "Cloud Security",
//       name: "McAfee Cloud Defender Pro",
//       price: "79.99",
//       originalPrice: "119.99",
//       image:
//         "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=300&fit=crop&crop=center",
//       rating: 4.5,
//       bestseller: true,
//       discount: "33%",
//     },
//     {
//       id: 6,
//       category: "Antivirus",
//       name: "Bitdefender Antivirus Plus",
//       price: "29.99",
//       originalPrice: "39.99",
//       image:
//         "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQXCO_Zd9PuhgEyUpmaSYLOCIwqe8z666IxZ3FvOcM8m48RiG1ZjpiVuU1eiCBpBlFpkERh9LPyam0QeZa_lxrSjmtTSkpkMsaIJnpizCEjiYuP4_xYEWjq8uy2z86_XY4fVXodE2A&usqp=CAc",
//       rating: 4.8,
//       bestseller: false,
//       discount: "25%",
//     },
//     {
//       id: 7,
//       category: "Total Security",
//       name: "ESET Internet Security",
//       price: "44.99",
//       originalPrice: "59.99",
//       image:
//         "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=300&fit=crop&crop=center",
//       rating: 4.7,
//       bestseller: true,
//       discount: "25%",
//     },
//     {
//       id: 8,
//       category: "VPN",
//       name: "NordVPN Complete",
//       price: "11.95",
//       originalPrice: "17.99",
//       image:
//         "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=300&fit=crop&crop=center",
//       rating: 4.9,
//       bestseller: true,
//       discount: "33%",
//     },
//     {
//       id: 1,
//       category: "Antivirus",
//       name: "Norton 360 Deluxe 2025",
//       price: "49.99",
//       originalPrice: "99.99",
//       image:
//         "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=300&h=300&fit=crop&crop=center",
//       rating: 4.8,
//       bestseller: true,
//       discount: "50%",
//     },
//     {
//       id: 2,
//       category: "Total Security",
//       name: "Kaspersky Total Security Suite",
//       price: "59.99",
//       originalPrice: "89.99",
//       image:
//         "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop&crop=center",
//       rating: 4.9,
//       bestseller: true,
//       discount: "33%",
//     },
//     {
//       id: 3,
//       category: "VPN",
//       name: "ExpressVPN Premium",
//       price: "12.95",
//       originalPrice: "19.99",
//       image:
//         "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=300&h=300&fit=crop&crop=center",
//       rating: 4.7,
//       bestseller: false,
//       discount: "35%",
//     },
//     {
//       id: 4,
//       category: "Password Manager",
//       name: "LastPass Premium Vault",
//       price: "36.00",
//       originalPrice: "48.00",
//       image:
//         "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=300&h=300&fit=crop&crop=center",
//       rating: 4.6,
//       bestseller: false,
//       discount: "25%",
//     },
//     {
//       id: 5,
//       category: "Cloud Security",
//       name: "McAfee Cloud Defender Pro",
//       price: "79.99",
//       originalPrice: "119.99",
//       image:
//         "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=300&fit=crop&crop=center",
//       rating: 4.5,
//       bestseller: true,
//       discount: "33%",
//     },
//     {
//       id: 6,
//       category: "Antivirus",
//       name: "Bitdefender Antivirus Plus",
//       price: "29.99",
//       originalPrice: "39.99",
//       image:
//         "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQXCO_Zd9PuhgEyUpmaSYLOCIwqe8z666IxZ3FvOcM8m48RiG1ZjpiVuU1eiCBpBlFpkERh9LPyam0QeZa_lxrSjmtTSkpkMsaIJnpizCEjiYuP4_xYEWjq8uy2z86_XY4fVXodE2A&usqp=CAc",
//       rating: 4.8,
//       bestseller: false,
//       discount: "25%",
//     },
//     {
//       id: 7,
//       category: "Total Security",
//       name: "ESET Internet Security",
//       price: "44.99",
//       originalPrice: "59.99",
//       image:
//         "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=300&fit=crop&crop=center",
//       rating: 4.7,
//       bestseller: true,
//       discount: "25%",
//     },
//     {
//       id: 8,
//       category: "VPN",
//       name: "NordVPN Complete",
//       price: "11.95",
//       originalPrice: "17.99",
//       image:
//         "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=300&fit=crop&crop=center",
//       rating: 4.9,
//       bestseller: true,
//       discount: "33%",
//     },
//   ];

//   const tabs = ["Top 20", "New Arrivals", "Discounted", "Featured"];

//   const filteredProducts =
//     activeTab === "Top 20"
//       ? products
//       : products.filter((p) => p.category === activeTab);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) {
//         setItemsToShow(1);
//       } else if (window.innerWidth < 1024) {
//         setItemsToShow(2);
//       } else {
//         setItemsToShow(4);
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const maxSlides = Math.max(
//     0,
//     Math.ceil(filteredProducts.length / itemsToShow) - 1
//   );

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev >= maxSlides ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev <= 0 ? maxSlides : prev - 1));
//   };

//   const handleAddToCart = (product) => {
//     console.log("Added to cart:", product);
//   };

//   const handleWishlist = (product) => {
//     console.log("Added to wishlist:", product);
//   };

//   useEffect(() => {
//     setCurrentSlide(0);
//   }, [activeTab]);

//   const renderStars = (rating) => {
//     return Array.from({ length: 5 }, (_, i) => (
//       <Star
//         key={i}
//         size={12}
//         className={`${
//           i < Math.floor(rating)
//             ? "text-yellow-400 fill-current"
//             : "text-gray-300"
//         }`}
//       />
//     ));
//   };

//   return (
//     <div className="bg-white py-6 sm:py-8 lg:py-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header Section */}
//         <div className="mb-6 lg:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
//           <div className="mb-6 lg:mb-8">
//             <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
//               Bestsellers
//             </h2>
//           </div>

//           {/* Tab Navigation */}
//           <div className="flex flex-wrap gap-2 mb-6 lg:mb-8 border-gray-200">
//             {tabs.map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
//                   activeTab === tab
//                     ? "text-black"
//                     : "text-gray-500 hover:text-gray-700"
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Swiper Slider */}
//         <Swiper
//          modules={[Pagination, Grid]}
//         spaceBetween={20}
//         slidesPerView={4}
//         grid={{ rows: 2, fill: "row" }}
//         pagination={{ clickable: true }}
//         breakpoints={{
//           320: { slidesPerView: 1, grid: { rows: 2 } },
//           640: { slidesPerView: 2, grid: { rows: 2 } },
//           1024: { slidesPerView: 4, grid: { rows: 2 } },
//         }}
//         >
//           {filteredProducts.map((product) => (
//             <SwiperSlide key={product.id}>
//               <div className="bg-white rounded-lg border border-gray-200 overflow-hidden flex gap-2 mb-20">
//                 {/* Left Side: Product Image */}
//                 <div className="relative flex items-center justify-center sm:p-2 p-1">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-36 h-36 object-contain transition-transform duration-300 group-hover:scale-105"
//                   />

//                   {/* Hover Overlay */}
//                   <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 transition-opacity duration-300">
//                     <button
//                       onClick={() => handleWishlist(product)}
//                       className="bg-white rounded-full p-2 shadow-sm hover:shadow-md transition-shadow"
//                     >
//                       <Heart size={16} className="text-gray-600" />
//                     </button>
//                     <button
//                       onClick={() => console.log("Compare:", product)}
//                       className="bg-white rounded-full p-2 shadow-sm hover:shadow-md transition-shadow"
//                     >
//                       <TrendingUp size={16} className="text-gray-600" />
//                     </button>
//                   </div>
//                 </div>

//                 {/* Right Side: Product Info */}
//                 <div className="flex-1 p-4 flex flex-col justify-between">
//                   {/* Category */}
//                   <div className="text-xs text-gray-500 mb-1">
//                     {product.category}
//                   </div>

//                   {/* Product Name */}
//                   <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
//                     {product.name}
//                   </h3>

//                   {/* Pricing + Cart */}
//                   <div className="flex items-center justify-between gap-3">
//                     <span className="text-lg font-bold text-gray-900">
//                       ${product.price}
//                     </span>
//                     <button
//                       onClick={() => handleAddToCart(product)}
//                       className="bg-yellow-600 text-white p-3 rounded-full transition-colors duration-200 flex items-center justify-center shadow-md "
//                     >
//                       <ShoppingCart size={15} />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Bestseller;








import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import { Pagination, Grid } from "swiper/modules";

import { ShoppingCart, Heart, TrendingUp, Star } from "lucide-react";

const Bestseller = () => {
  const [activeTab, setActiveTab] = useState("Top 20");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);

  const products = [
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
      id: 5,
      category: "Cloud Security",
      name: "McAfee Cloud Defender Pro",
      price: "79.99",
      originalPrice: "119.99",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=300&fit=crop&crop=center",
      rating: 4.5,
      bestseller: true,
      discount: "33%",
    },
    {
      id: 6,
      category: "Antivirus",
      name: "Bitdefender Antivirus Plus",
      price: "29.99",
      originalPrice: "39.99",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQXCO_Zd9PuhgEyUpmaSYLOCIwqe8z666IxZ3FvOcM8m48RiG1ZjpiVuU1eiCBpBlFpkERh9LPyam0QeZa_lxrSjmtTSkpkMsaIJnpizCEjiYuP4_xYEWjq8uy2z86_XY4fVXodE2A&usqp=CAc",
      rating: 4.8,
      bestseller: false,
      discount: "25%",
    },
    {
      id: 7,
      category: "Total Security",
      name: "ESET Internet Security",
      price: "44.99",
      originalPrice: "59.99",
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=300&fit=crop&crop=center",
      rating: 4.7,
      bestseller: true,
      discount: "25%",
    },
    {
      id: 8,
      category: "VPN",
      name: "NordVPN Complete",
      price: "11.95",
      originalPrice: "17.99",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=300&fit=crop&crop=center",
      rating: 4.9,
      bestseller: true,
      discount: "33%",
    },
  ];

  const tabs = ["Top 20", "New Arrivals", "Discounted", "Featured"];

  const filteredProducts =
    activeTab === "Top 20"
      ? products
      : products.filter((p) => p.category === activeTab);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
  };

  const handleWishlist = (product) => {
    console.log("Added to wishlist:", product);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={12}
        className={`${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-6 lg:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="mb-6 lg:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Bestsellers
            </h2>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-6 lg:mb-8 border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? "text-black"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Grid]}
          spaceBetween={20}
          slidesPerView={4}
          grid={{ rows: 2, fill: "row" }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, grid: { rows: 2 } },
            640: { slidesPerView: 2, grid: { rows: 2 } },
            1024: { slidesPerView: 4, grid: { rows: 2 } },
          }}
          className="pb-10"
        >
          {filteredProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden flex gap-2 mb-20 group">
                {/* Left Side: Product Image */}
                <div className="relative flex items-center justify-center sm:p-2 p-1">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-36 h-36 object-contain transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 transition-opacity duration-300">
                    <button
                      onClick={() => handleWishlist(product)}
                      className="bg-white rounded-full p-2 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <Heart size={16} className="text-gray-600" />
                    </button>
                    <button
                      onClick={() => console.log("Compare:", product)}
                      className="bg-white rounded-full p-2 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <TrendingUp size={16} className="text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Right Side: Product Info */}
                <div className="flex-1 p-4 flex flex-col justify-between">
                  {/* Category */}
                  <div className="text-xs text-gray-500 mb-1">
                    {product.category}
                  </div>

                  {/* Product Name */}
                  <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-2">
                    {renderStars(product.rating)}
                  </div>

                  {/* Pricing + Cart */}
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-lg font-bold text-gray-900">
                      ${product.price}
                    </span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-yellow-600 text-white p-3 rounded-full transition-colors duration-200 flex items-center justify-center shadow-md"
                    >
                      <ShoppingCart size={15} />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Bestseller;
