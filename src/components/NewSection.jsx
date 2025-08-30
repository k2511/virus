import React, { useState, useEffect } from "react";
import { ShoppingCart, BarChart3, Heart } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NewSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [activeTab, setActiveTab] = useState("All Products");
  const [visibleProducts, setVisibleProducts] = useState(8); // Initial number of products to display

  const navigate = useNavigate();
  const tabs = ["All Products", "Total Security", "Internet Security", "Antivirus Pro", "Upgrade"];

  const products = [
    {
      id: 1,
      category: "Total Security",
      name: "Quick Heal Total Security 1 PC 1 Year",
      image: "https://antivirusestore.in/admin/model/pics/quick-heal-total-security08_17_12_13_50.png",
      price: "$79.00",
      originalPrice: "$99.00",
      available: 6,
      sold: 28,
    },
    {
      id: 2,
      category: "Total Security",
      name: "Quick Heal Total Security 1 PC 3 Years",
      image: "https://antivirusestore.in/admin/model/pics/A_New_Design_-_Made_with_PosterMyWall09_17_10_53_46.jpg",
      price: "$29.99",
      originalPrice: "$39.99",
    },
    {
      id: 3,
      category: "Internet Security",
      name: "Quick Heal Internet Security 1 User 1 Year",
      image: "https://antivirusestore.in/admin/model/pics/quick-heal-internet-security08_14_16_54_16.png",
      price: "$49.99",
      originalPrice: "$59.99",
    },
    {
      id: 4,
      category: "Antivirus Pro",
      name: "Upgrade Quick Heal Antivirus Pro 1 User 1 Year",
      image: "https://antivirusestore.in/admin/model/pics/Quick-heal-renewal-pack08_17_13_02_12.png",
      price: "$69.99",
      originalPrice: "$79.99",
    },
    {
      id: 5,
      category: "Total Security",
      name: "Upgrade Quick Heal Total Security 1 User 1 Year",
      image: "https://via.placeholder.com/200/200/ffffff/000000?text=Upgrade+Total+Security+1U+1Y",
      price: "$24.99",
      originalPrice: "$34.99",
    },
    {
      id: 6,
      category: "Upgrade",
      name: "Upgrade Quick Heal Total Security 1 User 3 Years",
      image: "https://antivirusestore.in/admin/model/pics/upgrade-quick-heal-total-security08_17_13_28_37.png",
      price: "$39.99",
      originalPrice: "$49.99",
    },
    {
      id: 7,
      category: "Antivirus Pro",
      name: "Quick Heal Antivirus Pro 1 User 3 Years",
      image: "https://antivirusestore.in/admin/model/pics/quick-heal-pro08_17_10_59_20.png",
      price: "$54.99",
      originalPrice: "$64.99",
    },
    {
      id: 8,
      category: "Upgrade",
      name: "Upgrade Quick Heal Antivirus Pro 1 User 3 Years",
      image: "https://antivirusestore.in/admin/model/pics/Quick-heal-renewal-pack08_17_11_00_27.png",
      price: "$19.99",
      originalPrice: "$29.99",
    },
    {
      id: 9,
      category: "Antivirus Pro",
      name: "Quick Heal Antivirus Pro 2 User 1 Year",
      image: "https://antivirusestore.in/admin/model/pics/quick-heal-pro08_17_10_51_22.png",
      price: "$34.99",
      originalPrice: "$44.99",
    },
    {
      id: 10,
      category: "Antivirus Pro",
      name: "Quick Heal Antivirus Pro 3 User 1 Year",
      image: "https://antivirusestore.in/admin/model/pics/quick-heal-pro08_17_13_06_15.png",
      price: "$49.99",
      originalPrice: "$59.99",
    },
    {
      id: 11,
      category: "Total Security",
      name: "Upgrade Quick Heal Total Security 2 User 1 Year",
      image: "https://antivirusestore.in/admin/model/pics/quick-heal-total-security08_17_10_38_32.png",
      price: "$59.99",
      originalPrice: "$69.99",
    },
    {
      id: 12,
      category: "Total Security",
      name: "Upgrade Quick Heal Total Security 3 User 1 Year",
      image: "https://antivirusestore.in/admin/model/pics/quick-heal-total-security08_17_13_07_07.png",
      price: "$49.99",
      originalPrice: "$59.99",
    },
    {
      id: 13,
      category: "Total Security",
      name: "Upgrade Quick Heal Total Security 3 User 3 Years",
      image: "https://antivirusestore.in/admin/model/pics/quick-heal-total-security08_17_13_08_03.png",
      price: "$39.99",
      originalPrice: "$49.99",
    },
    {
      id: 14,
      category: "Internet Security",
      name: "Upgrade Quick Heal Internet Security 1 User 3 Years",
      image: "https://antivirusestore.in/admin/model/pics/quick-heal-internet-security08_17_10_54_32.png",
      price: "$39.99",
      originalPrice: "$49.99",
    },
    {
      id: 15,
      category: "Total Security",
      name: "Upgrade Quick Heal Total Security 5 User 3 Years",
      image: "https://antivirusestore.in/admin/model/pics/quick-heal-total-security08_17_10_43_41.png",
      price: "$39.99",
      originalPrice: "$49.99",
    },
  ];

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date();
      targetDate.setHours(targetDate.getHours() + 12); // 12 hours from now (until 09:26 AM IST, August 26, 2025)

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
    setVisibleProducts((prev) => prev + 8); // Load 8 more products (2 rows of 4)
  };

  return (
    <div className="min-h-screen bg-white p-4 lg:p-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-80 flex-shrink-0">
            <div className="border-2 border-yellow-400 rounded-2xl p-6 bg-gradient-to-br from-yellow-50 to-white relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xs font-medium text-gray-700">Save</div>
                  <div className="text-sm font-bold text-gray-900">$120</div>
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
                  alt="Quick Heal Total Security 1PC 3 Years"
                  className="w-full object-contain mx-auto"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/200/200/ffffff/000000?text=Image+Not+Found";
                  }}
                />
              </div>

              <div className="text-center mb-4">
                <h4 className="text-blue-600 font-medium mb-2">
                  Quick Heal Total Security 1PC 3 Years
                </h4>

                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-gray-500 line-through text-sm">$99.00</span>
                  <span className="text-red-600 text-2xl font-bold">$79.00</span>
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

          <div className="flex-1 mx-auto">
            <div className="flex flex-nowrap sm:gap-5 gap-4 mx-auto mb-8 bg-gray-100 rounded-lg p-1 w-full">
              {tabs.map((tab) => (
                <button 
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setVisibleProducts(8);
                    
                  }}
                  className={`lg:px-4 md:px-2 sm:px-1 py-2 px-0 rounded-md sm:text-sm md:text-md  mx-auto text-[0.7rem] font-medium transition-all ${
                    activeTab === tab
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products
                .filter((product) => activeTab === "All Products" || product.category === activeTab)
                .slice(0, activeTab === "All Products" ? visibleProducts : products.length)
                .map((product) => (
                  <div key={product.id} className="group"  onClick={() =>
                    navigate(`/new-section-details/${encodeURIComponent(product.name)}`, {
                      state: { 
                        image: product.image, 
                        price: product.price, 
                        category: product.category ,
                        originalPrice: product.originalPrice
                      },
                    })
                  }>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                      <div className="text-xs text-gray-500 mb-2">{product.category}</div>

                      <h3 className="text-blue-600 font-medium text-sm mb-3 line-clamp-2 hover:underline cursor-pointer">
                        {product.name}
                      </h3>

                      <div className="mb-4 bg-gray-50 rounded-lg p-4 h-32 flex items-center justify-center">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="max-w-full max-h-full object-contain"
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/200/200/ffffff/000000?text=Image+Not+Found";
                          }}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          {product.originalPrice && (
                            <span className="text-xs text-gray-500 line-through">
                              {product.originalPrice}
                            </span>
                          )}
                          <span className="text-lg font-semibold text-gray-900">
                            {product.price}
                          </span>
                        </div>

                        <button className="bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded-full transition-colors">
                          <ShoppingCart className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                        <button className="flex items-center gap-1 hover:text-gray-700">
                          <BarChart3 className="w-3 h-3" />
                          Compare
                        </button>
                        <button className="flex items-center gap-1 hover:text-gray-700">
                          <Heart className="w-3 h-3" />
                          Add to Wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {activeTab === "All Products" && visibleProducts < products.length && (
              <div className="text-center mt-8">
                <button
                  onClick={handleViewMore}
                  className="px-6 py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-500 transition-colors"
                >
                  View More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSection;








