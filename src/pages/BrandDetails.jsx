// import React, { useState, useEffect } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import { Star, MessageCircle } from "lucide-react";
// import { GrFacebookOption } from "react-icons/gr";
// import { FiInstagram } from "react-icons/fi";
// import toast from "react-hot-toast";

// const BrandDetails = () => {
//   const { id } = useParams();
//   const location = useLocation();
//   const { image, price, category, originalPrice } = location.state || {};

//   const [quantity, setQuantity] = useState(1);
//   const [activeTab, setActiveTab] = useState("Reviews");

//   const incrementQuantity = () => setQuantity((prev) => prev + 1);
//   const decrementQuantity = () =>
//     setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

//   const renderStars = (rating) => {
//     return Array.from({ length: 5 }, (_, i) => (
//       <Star
//         key={i}
//         className={`w-4 h-4 ${
//           i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
//         }`}
//       />
//     ));
//   };

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="min-h-screen bg-white max-w-6xl mx-auto">
//       <div className="container mx-auto px-4 py-8 ">
//         <div className="grid md:grid-cols-2 sm:gap-1 md:gap-1 lg:gap-16 ">
//           <div className="flex flex-col items-center">
//             <p className="text-red-500 text-sm italic">
//               Image is for Reference purpose only
//             </p>

//             <div className="relative w-git md:max-w-md sm:max-w-sm">
//               <img src={image} />
//             </div>

//             {/* <div className=" text-center">
//               <p className="text-teal-600 font-semibold text-lg">Save 18% GST on business purchase!!</p>
//             </div> */}
//           </div>

//           <div className="lg:space-y-6 md:space-y-3 ">
//             <div>
//               <h1 className="text-2xl lg:text-3xl font-bold text-gray-600 mb-4">
//                 {id}
//               </h1>

//               <div className="flex items-center gap-2 mb-4">
//                 <div className="flex">{renderStars(4)}</div>
//                 <span className="text-blue-600 underline text-sm">
//                   Total 6 Reviews
//                 </span>
//               </div>
//             </div>

//             <div className="grid sm:grid-cols-2 lg:gap-6 md:gap-3 ">
//               <div>
//                 <p className="text-sm text-gray-600 mb-1">Version</p>
//                 <p className="font-semibold text-lg">Latest 2023</p>
//               </div>

//               <div>
//                 <p className="text-sm text-gray-600 mb-1">Software Download</p>
//                 <p className="font-semibold text-lg">Stock Available</p>
//               </div>

//               <div>
//                 <p className="text-sm text-gray-600 mb-1">Brand Name</p>
//                 <p className="font-semibold text-lg">{category}</p>
//               </div>

//               <div>
//                 <p className="text-sm text-gray-600 mb-1">HSN</p>
//                 <p className="font-semibold text-lg">85238020</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-600 mb-1">GSTIN</p>
//                 <p className="font-semibold text-lg">85238020</p>
//               </div>

//               <div>
//                 <p className="text-sm text-gray-600 mb-1">Region</p>
//                 <p className="font-semibold text-lg">India</p>
//               </div>
//             </div>

           

//             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//               <div className="w-full">
//                 {/* <p className="text-sm text-gray-600 mb-1"></p> */}
//                 <div className="flex items-end gap-4   w-full">
//                   <div>
//                     <span className="sm:text-4xl text-2xls font-bold text-gray-600">
//                      Rs. {price}
//                     </span>
//                   </div>

//                   <div className="text-right flex items-end ">
//                     {/* <p className="text-sm text-gray-600">MRP</p> */}
//                     <p className="text-lg text-gray-400 line-through">
//                       {originalPrice}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col  gap-4 justify-start ">
//               <div className=" text-left flex flex-col justify-start ">
//                 <div>
//                   <span>Quantity</span>
//                 </div>
//               </div>
//               <div className="flex justify-start   h-[3rem] gap-3">
//                 <div className="flex items-center border border-gray-300 rounded ">
//                   <span className="px-4 py-2  border-gray-300  text-center">
//                     {quantity}
//                   </span>
//                   <button
//                     onClick={decrementQuantity}
//                     className="px-4 py-2 hover:bg-gray-100 transition-colors  "
//                   >
//                     −
//                   </button>
//                   <button
//                     onClick={incrementQuantity}
//                     className="px-4 py-2 hover:bg-gray-100 transition-colors"
//                   >
//                     +
//                   </button>
//                 </div>

//                 <div className="sm:gap-3  gap-1 flex justify-around w-fit">
//                   <button
//                     className=" bg-lime-500 hover:bg-lime-600 text-black   text-[0.6rem] sm:text-sm md:text-base lg:text-lg font-normal py-1 px-2 sm:py-2 sm:px-2 rounded s"
//                     onClick={() => {
//                       toast.success("Buy Successfully");
//                     }}
//                   >
//                     BUY NOW
//                   </button>
//                   <button
//                     className=" bg-yellow-400 hover:bg-yellow-500  text-[0.6rem] sm:text-sm md:text-base lg:text-lg  text-black font-normal  py-1 px-2 sm:py-2 sm:px-2 rounded "
//                     onClick={() => {
//                       toast.success("Cart added Successfully");
//                     }}
//                   >
//                     Add to cart
//                   </button>
//                 </div>
//               </div>
//             </div>

          
//           </div>

//         </div>

//         <div className="mt-10 ">
//           <div className="flex flex-nowrap gap-1 mx-auto sm:w-fit w-fit overflow-x-auto sm:overflow-x-hidden items-center      ">
//             {["Reviews", "Detail", "Installation Instruction"].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}

//                 className={`sm:px-3  px-1 py-3 font-semibold sm:text-sm text-[0.6rem] transition-colors w-fit 
//         ${
//           activeTab === tab
//             ? "bg-lime-500 text-black"
//             : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//         }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>

//           <div className="mt-6 p-6 bg-gray-50 rounded-lg min-h-48 w-fit mx-auto">
//             {activeTab === "Reviews" && (
//               <div>
//                 <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
//                 <p className="text-gray-600">
//                   No reviews available yet. Be the first to review this product!
//                 </p>
//               </div>
//             )}
//             {activeTab === "Detail" && (
//               <div>
//                 <h3 className="text-xl font-bold mb-4">Product Details</h3>
//                 <p className="text-gray-600 mb-4">
//                   Kaspersky Internet Security provides comprehensive protection
//                   for your PC with advanced security features.
//                 </p>
//                 <ul className="text-gray-600 space-y-2">
//                   <li>• Real-time antivirus protection</li>
//                   <li>• Advanced firewall</li>
//                   <li>• Safe Money for secure online banking</li>
//                   <li>• Webcam protection</li>
//                   <li>• Privacy protection</li>
//                 </ul>
//               </div>
//             )}
//             {activeTab === "Installation Instruction" && (
//               <div>
//                 <h3 className="text-xl font-bold mb-4">
//                   Installation Instructions
//                 </h3>
//                 <ol className="text-gray-600 space-y-2">
//                   <li>1. Download the software from the provided link</li>
//                   <li>2. Run the installer as administrator</li>
//                   <li>3. Follow the on-screen installation wizard</li>
//                   <li>4. Enter your activation key when prompted</li>
//                   <li>5. Complete the initial scan and setup</li>
//                 </ol>
//               </div>
//             )}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default BrandDetails;



import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Star, MessageCircle } from "lucide-react";
import { GrFacebookOption } from "react-icons/gr";
import { FiInstagram } from "react-icons/fi";
import toast from "react-hot-toast";

const BrandDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { image, price, category, originalPrice } = location.state || {};

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("Reviews");

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white max-w-6xl mx-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 sm:gap-1 md:gap-1 lg:gap-16">
          <div className="flex flex-col items-center">
            <p className="text-red-500 text-sm italic">
              Image is for Reference purpose only
            </p>

            <div className="relative w-full md:max-w-md sm:max-w-sm">
              <img src={image} alt="Product" className="w-full h-auto object-contain" />
            </div>
          </div>

          <div className="lg:space-y-6 md:space-y-3">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-600 mb-4">
                {id}
              </h1>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex">{renderStars(4)}</div>
                <span className="text-blue-600 underline text-sm">
                  Total 6 Reviews
                </span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:gap-6 md:gap-3">
              <div>
                <p className="text-sm text-gray-600 mb-1">Version</p>
                <p className="font-semibold text-lg">Latest 2023</p>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-1">Software Download</p>
                <p className="font-semibold text-lg">Stock Available</p>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-1">Brand Name</p>
                <p className="font-semibold text-lg">{category}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-1">HSN</p>
                <p className="font-semibold text-lg">85238020</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-600 mb-1">GSTIN</p>
                <p className="font-semibold text-lg">85238020</p>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-1">Region</p>
                <p className="font-semibold text-lg">India</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="w-full">
                <div className="flex items-end gap-4 w-full">
                  <div>
                    <span className="sm:text-4xl text-2xl font-bold text-gray-600">
                      Rs. {price}
                    </span>
                  </div>

                  <div className="text-right flex items-end">
                    <p className="text-lg text-gray-400 line-through">
                      {originalPrice}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 justify-start">
              <div className="text-left flex flex-col justify-start">
                <div>
                  <span className="text-base font-medium">Quantity</span>
                </div>
              </div>
              
              <div className="flex justify-start h-[3rem] gap-3">
                <div className="flex items-center border border-gray-300 rounded">
                  <span className="px-4 py-2 border-gray-300 text-center min-w-[3rem]">
                    {quantity}
                  </span>
                  <button
                    onClick={decrementQuantity}
                    className="px-4 py-2 hover:bg-gray-100 transition-colors border-l border-gray-300"
                  >
                    −
                  </button>
                  <button
                    onClick={incrementQuantity}
                    className="px-4 py-2 hover:bg-gray-100 transition-colors border-l border-gray-300"
                  >
                    +
                  </button>
                </div>

                <div className="flex gap-2 sm:gap-3">
                  <button
                    className="bg-lime-500 hover:bg-lime-600 text-black text-xs sm:text-sm md:text-base font-semibold py-2 px-3 sm:py-2 sm:px-4 md:py-3 md:px-6 rounded transition-colors"
                    onClick={() => {
                      toast.success("Buy Successfully");
                    }}
                  >
                    BUY NOW
                  </button>
                  <button
                    className="bg-yellow-400 hover:bg-yellow-500 text-black text-xs sm:text-sm md:text-base font-semibold py-2 px-3 sm:py-2 sm:px-4 md:py-3 md:px-6 rounded transition-colors"
                    onClick={() => {
                      toast.success("Cart added Successfully");
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section - Improved Responsive Design */}
        <div className="mt-8 sm:mt-12">
          {/* Tab Buttons */}
          <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-start gap-1 sm:gap-2 w-full overflow-x-auto">
            {["Reviews", "Details", "Installation Instructions"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3 lg:px-8 lg:py-4 
                  font-medium text-xs sm:text-sm md:text-base lg:text-lg 
                  transition-all duration-200 rounded-t-lg
                  ${
                    activeTab === tab
                      ? "bg-lime-500 text-black shadow-lg transform -translate-y-1"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-md"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-gray-50 rounded-lg rounded-tl-none min-h-[300px] sm:min-h-[350px] md:min-h-[400px] w-full p-4 sm:p-6 md:p-8 shadow-lg">
            {activeTab === "Reviews" && (
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">
                  Customer Reviews
                </h3>
                <div className="space-y-4">
                  <p className="text-sm sm:text-base text-gray-600">
                    No reviews available yet. Be the first to review this product!
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-sm sm:text-base mb-2">Write a Review</h4>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Share your experience with other customers.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === "Details" && (
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">
                  Product Details
                </h3>
                <div className="space-y-4">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Kaspersky Internet Security provides comprehensive protection
                    for your PC with advanced security features designed to keep you safe online.
                  </p>
                  <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-sm sm:text-base mb-3 text-gray-800">Key Features:</h4>
                    <ul className="text-xs sm:text-sm text-gray-600 space-y-2 sm:space-y-3">
                      <li className="flex items-start">
                        <span className="text-lime-500 mr-2">•</span>
                        Real-time antivirus protection against all types of malware
                      </li>
                      <li className="flex items-start">
                        <span className="text-lime-500 mr-2">•</span>
                        Advanced firewall with network attack blocker
                      </li>
                      <li className="flex items-start">
                        <span className="text-lime-500 mr-2">•</span>
                        Safe Money for secure online banking and shopping
                      </li>
                      <li className="flex items-start">
                        <span className="text-lime-500 mr-2">•</span>
                        Webcam protection from unauthorized access
                      </li>
                      <li className="flex items-start">
                        <span className="text-lime-500 mr-2">•</span>
                        Privacy protection and data leak prevention
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === "Installation Instructions" && (
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">
                  Installation Instructions
                </h3>
                <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
                  <ol className="text-xs sm:text-sm text-gray-600 space-y-3 sm:space-y-4">
                    <li className="flex items-start">
                      <span className="bg-lime-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 mt-0.5">1</span>
                      <div>
                        <strong>Download:</strong> Download the software from the provided link or email
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-lime-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 mt-0.5">2</span>
                      <div>
                        <strong>Run as Administrator:</strong> Right-click the installer and select "Run as administrator"
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-lime-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 mt-0.5">3</span>
                      <div>
                        <strong>Installation Wizard:</strong> Follow the on-screen installation wizard steps
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-lime-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 mt-0.5">4</span>
                      <div>
                        <strong>Activation:</strong> Enter your activation key when prompted during setup
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-lime-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 mt-0.5">5</span>
                      <div>
                        <strong>Complete Setup:</strong> Complete the initial scan and configure your preferences
                      </div>
                    </li>
                  </ol>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <p className="text-xs sm:text-sm text-yellow-800">
                    <strong>Note:</strong> Make sure to disable any existing antivirus software before installation to avoid conflicts.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDetails;