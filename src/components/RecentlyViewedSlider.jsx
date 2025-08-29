// import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight, RotateCcw, Heart } from "lucide-react";

// const RecentlyViewedSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const products = [
//     {
//       name: "Windows 10 Home",
//       price: "₹139.00",
//       category: "Speakers",
//       image:
//         "https://avatars.mds.yandex.net/i?id=50bc55deea68a40cb15789b52cff24d194458ded-4575688-images-thumbs&n=13",
//     },
//     {
//       name: "Windows 10 Pro",
//       price: "₹199.00",
//       category: "Speakers",
//       image:
//         "https://rukminim2.flixcart.com/image/704/844/kll7bm80/operating-system/x/z/c/windows-10-professional-32-bit-64-bit-usb-full-retail-pack-original-imagyzdzssczjrfg.jpeg?q=90&crop=false",
//     },
//     {
//       name: "Windows 11 Home",
//       price: "₹139.00",
//       category: "Speakers",
//       image:
//         "https://avatars.mds.yandex.net/i?id=c33e1f6613279a15ff2b65d2ecca6a5bb9fe1a68-4374572-images-thumbs&n=13",
//     },
//     {
//       name: "Windows 11 Pro",
//       price: "₹199.00",
//       category: "Speakers",
//       image:
//         "https://avatars.mds.yandex.net/i?id=58d1f19b0a71da499968ddc6f3b33acfa3387d1d-5235855-images-thumbs&n=13",
//     },
//     {
//       name: "Microsoft 365 Personal",
//       price: "₹69.99/year",
//       category: "Speakers",
//       image:
//         "https://avatars.mds.yandex.net/i?id=6d797b1156e9223e59c9dab9bc5e81a608bd9fdd-5315965-images-thumbs&n=13",
//     },
//     {
//       name: "Microsoft 365 Family",
//       price: "₹99.99/year",
//       category: "Speakers",
//       image:
//         "https://avatars.mds.yandex.net/i?id=e3b457271ddd4397d062d0d203d47367-5242896-images-thumbs&n=13",
//     },
//   ];

//   const itemsPerPage =
//     window.innerWidth >= 1280
//       ? 6
//       : window.innerWidth >= 1024
//       ? 4
//       : window.innerWidth >= 768
//       ? 3
//       : 2;

//   const totalPages = Math.ceil(products.length / itemsPerPage);

//   const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalPages);
//   const prevSlide = () =>
//     setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   const startIdx = currentIndex * itemsPerPage;
//   const visibleProducts = products.slice(startIdx, startIdx + itemsPerPage);

//   return (
//     <div className="w-full bg-white py-10 border-t border-gray-200">
//       <div className="max-w-[1200px] mx-auto relative">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-6">
//           <div>
//             <h2 className="text-2xl font-bold text-gray-900">
//               Recently Viewed
//             </h2>
//             <div className="w-36 h-[3px] bg-yellow-400 mt-2"></div>
//           </div>

//           {/* Navigation */}
//           <div className="flex gap-3">
//             <button
//               onClick={prevSlide}
//               className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-full hover:bg-gray-100 hover:shadow-md transition"
//             >
//               <ChevronLeft className="w-5 h-5 text-gray-600" />
//             </button>
//             <button
//               onClick={nextSlide}
//               className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-full hover:bg-gray-100 hover:shadow-md transition"
//             >
//               <ChevronRight className="w-5 h-5 text-gray-600" />
//             </button>
//           </div>
//         </div>

//         {/* Product Row */}
//         <div className="flex">
//           {visibleProducts.map((product, index) => (
//             <div
//               key={index}
//               className={`basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6 flex flex-col items-center group border-r border-gray-200 p-4 transition hover:shadow-[0px_0px_6px_rgba(0,0,0,0.3)]`}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               {/* Category */}
//               <div className="w-full text-left mb-2">
//                 <span className="text-sm text-gray-500">
//                   {product.category}
//                 </span>
//               </div>

//               {/* Product Image */}
//               <div className="w-40 h-40 mb-3 flex items-center justify-center">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="object-contain h-full"
//                 />
//               </div>

//               {/* Product Name */}
//               <h3 className="text-sm text-blue-600 font-semibold text-center mb-2 line-clamp-2 leading-tight">
//                 {product.name}
//               </h3>

//               {/* Price + Cart */}
//               <div className="flex items-center justify-between w-full">
//                 <span className="text-base font-bold text-gray-900">
//                   {product.price}
//                 </span>
//                 <button className="w-9 h-9 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition">
//                   🛒
//                 </button>
//               </div>

//               {/* Hover Actions (inline, not absolute) */}
//               <div
//                 className={`overflow-hidden transition-all duration-300 w-full border-t border-gray-200
//                   `}
//                   //${hoveredIndex === index ? "max-h-16 opacity-100 mt-2" : "max-h-0 opacity-0"}
//               >
//                 <div className="flex items-center justify-center gap-6 py-2 bg-white">
//                   <button className="flex items-center gap-1 hover:text-blue-600">
//                     <RotateCcw className="w-4 h-4" />
//                     Compare
//                   </button>
//                   <button className="flex items-center gap-1 hover:text-red-500">
//                     <Heart className="w-4 h-4" />
//                     Wishlist
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Pagination Dots */}
//         <div className="flex justify-center mt-6 gap-2">
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentIndex(i)}
//               className={`h-2 rounded-full transition-all ${
//                 i === currentIndex
//                   ? "bg-yellow-400 w-5"
//                   : "bg-gray-300 w-2 hover:bg-gray-400"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecentlyViewedSlider;





import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, RotateCcw, Heart } from "lucide-react";

const RecentlyViewedSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const products = [
    {
      name: "Windows 10 Home",
      price: "₹139.00",
      category: "Speakers",
      image:
        "https://avatars.mds.yandex.net/i?id=50bc55deea68a40cb15789b52cff24d194458ded-4575688-images-thumbs&n=13",
    },
    {
      name: "Windows 10 Pro",
      price: "₹199.00",
      category: "Speakers",
      image:
        "https://rukminim2.flixcart.com/image/704/844/kll7bm80/operating-system/x/z/c/windows-10-professional-32-bit-64-bit-usb-full-retail-pack-original-imagyzdzssczjrfg.jpeg?q=90&crop=false",
    },
    {
      name: "Windows 11 Home",
      price: "₹139.00",
      category: "Speakers",
      image:
        "https://avatars.mds.yandex.net/i?id=c33e1f6613279a15ff2b65d2ecca6a5bb9fe1a68-4374572-images-thumbs&n=13",
    },
    {
      name: "Windows 11 Pro",
      price: "₹199.00",
      category: "Speakers",
      image:
        "https://avatars.mds.yandex.net/i?id=58d1f19b0a71da499968ddc6f3b33acfa3387d1d-5235855-images-thumbs&n=13",
    },
    {
      name: "Microsoft 365 Personal",
      price: "₹69.99/year",
      category: "Speakers",
      image:
        "https://avatars.mds.yandex.net/i?id=6d797b1156e9223e59c9dab9bc5e81a608bd9fdd-5315965-images-thumbs&n=13",
    },
    {
      name: "Microsoft 365 Family",
      price: "₹99.99/year",
      category: "Speakers",
      image:
        "https://avatars.mds.yandex.net/i?id=e3b457271ddd4397d062d0d203d47367-5242896-images-thumbs&n=13",
    },
  ];

  // Dynamic items per page based on screen width
  const getItemsPerPage = () => {
    if (window.innerWidth >= 1280) return 6; // Desktop XL
    if (window.innerWidth >= 1024) return 4; // Desktop
    if (window.innerWidth >= 768) return 3; // Tablet
    if (window.innerWidth >= 640) return 2; // Larger mobile
    return 1; // Small mobile
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  // Update itemsPerPage on window resize
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalPages);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  const startIdx = currentIndex * itemsPerPage;
  const visibleProducts = products.slice(startIdx, startIdx + itemsPerPage);

  // Touch support for mobile
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="w-full bg-white py-10 border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto relative px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Recently Viewed
            </h2>
            <div className="w-36 h-[3px] bg-yellow-400 mt-2"></div>
          </div>

          {/* Navigation */}
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-full hover:bg-gray-100 hover:shadow-md transition"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-full hover:bg-gray-100 hover:shadow-md transition"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Product Slider */}
        <div
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex transition-transform duration-300 ease-in-out">
            {visibleProducts.map((product, index) => (
              <div
                key={index}
                className={`flex-none w-full sm:w-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6 flex flex-col items-center group border-r border-gray-200 p-4 transition hover:shadow-[0px_0px_6px_rgba(0,0,0,0.3)]`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Category */}
                <div className="w-full text-left mb-2">
                  <span className="text-sm text-gray-500">
                    {product.category}
                  </span>
                </div>

                {/* Product Image */}
                <div className="w-40 h-40 mb-3 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain h-full"
                  />
                </div>

                {/* Product Name */}
                <h3 className="text-sm text-blue-600 font-semibold text-center mb-2 line-clamp-2 leading-tight">
                  {product.name}
                </h3>

                {/* Price + Cart */}
                <div className="flex items-center justify-between w-full">
                  <span className="text-base font-bold text-gray-900">
                    {product.price}
                  </span>
                  <button className="w-9 h-9 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition">
                    🛒
                  </button>
                </div>

                {/* Hover Actions */}
                <div
                  className={`overflow-hidden transition-all duration-300 w-full border-t border-gray-200 ${
                    hoveredIndex === index
                      ? "max-h-16 opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex items-center justify-center gap-6 py-2 bg-white">
                    <button className="flex items-center gap-1 hover:text-blue-600">
                      <RotateCcw className="w-4 h-4" />
                      Compare
                    </button>
                    <button className="flex items-center gap-1 hover:text-red-500">
                      <Heart className="w-4 h-4" />
                      Wishlist
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === currentIndex
                  ? "bg-yellow-400 w-5"
                  : "bg-gray-300 w-2 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewedSlider;