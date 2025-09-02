



import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Star, MessageCircle } from "lucide-react";
import { GrFacebookOption } from "react-icons/gr";
import { FiInstagram } from "react-icons/fi";
import toast from "react-hot-toast";

const BrandDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
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
              <img src={image} alt="Product" className="w-full h-auto" />
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
                      {price}
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
                  <span>Quantity</span>
                </div>
              </div>
              <div className="flex justify-start h-[3rem] gap-3">
                <div className="flex items-center border border-gray-300 rounded">
                  <span className="px-4 py-2 border-gray-300 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={decrementQuantity}
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    −
                  </button>
                  <button
                    onClick={incrementQuantity}
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>

                <div className="sm:gap-3 gap-1 flex justify-around w-fit">
                  <button
                    className="bg-lime-500 hover:bg-lime-600 text-black text-xs sm:text-sm md:text-base lg:text-lg font-normal py-2 px-3 sm:py-2 sm:px-4 rounded"
                    onClick={() => {
                      // toast.success("Buy Successfully");
                           navigate('/payment');
                    }}
                  >
                    Buy now
                  </button>
                  <button
                    className="bg-yellow-400 hover:bg-yellow-500 text-xs sm:text-sm md:text-base lg:text-lg text-black font-normal py-2 px-3 sm:py-2 sm:px-4 rounded"
                    onClick={() => {
                      toast.success("Cart added Successfully");
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section - Improved Responsive Design */}
        <div className="mt-10">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-1 sm:gap-2 mx-auto w-full overflow-x-auto">
            {["Reviews", "Details", "Installation Instructions"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3 lg:px-8 lg:py-3
                  text-xs sm:text-sm md:text-base lg:text-lg
                  font-medium sm:font-semibold
                  transition-all duration-200
                  rounded-t-lg sm:rounded-none
                  whitespace-nowrap
                  min-w-[80px] sm:min-w-[120px] md:min-w-[140px]
                  ${
                    activeTab === tab
                      ? "bg-lime-500 text-black shadow-md transform scale-105 sm:scale-100"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900"
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-4 sm:mt-6 p-4 sm:p-6 md:p-8 lg:p-10 bg-gray-50 rounded-lg min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[350px] w-full">
            {activeTab === "Reviews" && (
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-gray-800">
                  Customer Reviews
                </h3>
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                    No reviews available yet. Be the first to review this product!
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex">{renderStars(0)}</div>
                    <span className="text-sm text-gray-500">0/5 stars</span>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === "Details" && (
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-gray-800">
                  Product Details
                </h3>
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    {category} provides comprehensive protection for your PC with advanced security features and real-time threat detection.
                  </p>
                  <div className="grid gap-3 sm:gap-4">
                    <div className="flex items-start gap-3">
                      <span className="text-lime-500 font-bold text-lg">✓</span>
                      <span className="text-sm sm:text-base text-gray-600">Real-time antivirus protection</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-lime-500 font-bold text-lg">✓</span>
                      <span className="text-sm sm:text-base text-gray-600">Advanced firewall protection</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-lime-500 font-bold text-lg">✓</span>
                      <span className="text-sm sm:text-base text-gray-600">Safe Money for secure online banking</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-lime-500 font-bold text-lg">✓</span>
                      <span className="text-sm sm:text-base text-gray-600">Webcam and privacy protection</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-lime-500 font-bold text-lg">✓</span>
                      <span className="text-sm sm:text-base text-gray-600">24/7 technical support</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === "Installation Instructions" && (
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-gray-800">
                  Installation Instructions
                </h3>
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      "Download the software from the provided link after purchase",
                      "Run the installer as administrator on your computer",
                      "Follow the on-screen installation wizard step by step",
                      "Enter your activation key when prompted during setup",
                      "Complete the initial system scan and configuration",
                      "Restart your computer to complete the installation"
                    ].map((step, index) => (
                      <div key={index} className="flex items-start gap-3 sm:gap-4">
                        <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-lime-500 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                          {index + 1}
                        </div>
                        <span className="text-sm sm:text-base text-gray-600 leading-relaxed pt-1">
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-3 sm:p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                    <p className="text-xs sm:text-sm text-blue-700">
                      <strong>Note:</strong> Make sure to disable other antivirus software before installation to avoid conflicts.
                    </p>
                  </div>
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