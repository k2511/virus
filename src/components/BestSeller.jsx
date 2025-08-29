import React, { useState, useEffect } from "react";

import { ShoppingCart, Heart, TrendingUp, Star } from "lucide-react";

const BestSeller = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [activeTab, setActiveTab] = useState("Top 20");

  // All products data
  const allProducts = {
    "Top 20": [
      {
        id: 0,
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
        id: 1,
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
        id: 2,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 10,
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
        id: 11,
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
        id: 12,
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
        id: 13,
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
        id: 14,
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
        id: 15,
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
        id: 16,
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
        id: 17,
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
    "New arrivals": [],
    Discounted: [],
    Features: [],
  };

  const tabs = ["Top 20", "New Arrivals", "Discounted", "Featured"];
  // const [activeTab, setActiveTab] = useState("Top 20");
  // const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 7;
  const products = allProducts[activeTab] || [];

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

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

export default BestSeller;
