import React, { useState } from "react";
import { ShoppingCart, Heart, Star, TrendingUp, Award, Shield } from "lucide-react";

const Bestseller = () => {
  const [activeTab, setActiveTab] = useState("Top 20");
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    { 
      id: 1, 
      category: "Antivirus", 
      name: "Norton 360 Deluxe 2025", 
      price: "49.99", 
      originalPrice: "99.99",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=300&h=300&fit=crop&crop=center",
      rating: 4.8,
      bestseller: true,
      discount: "50%"
    },
    { 
      id: 2, 
      category: "Total Security", 
      name: "Kaspersky Total Security Suite", 
      price: "59.99", 
      originalPrice: "89.99",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop&crop=center",
      rating: 4.9,
      bestseller: true,
      discount: "33%"
    },
    { 
      id: 3, 
      category: "VPN", 
      name: "ExpressVPN Premium", 
      price: "12.95", 
      originalPrice: "19.99",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=300&h=300&fit=crop&crop=center",
      rating: 4.7,
      bestseller: false,
      discount: "35%"
    },
    { 
      id: 4, 
      category: "Password Manager", 
      name: "LastPass Premium Vault", 
      price: "36.00", 
      originalPrice: "48.00",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=300&h=300&fit=crop&crop=center",
      rating: 4.6,
      bestseller: false,
      discount: "25%"
    },
    { 
      id: 5, 
      category: "Cloud Security", 
      name: "McAfee Cloud Defender Pro", 
      price: "79.99", 
      originalPrice: "119.99",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=300&fit=crop&crop=center",
      rating: 4.5,
      bestseller: true,
      discount: "33%"
    },
    { 
      id: 6, 
      category: "Antivirus", 
      name: "Bitdefender Antivirus Plus", 
      price: "29.99", 
      originalPrice: "39.99",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop&crop=center",
      rating: 4.8,
      bestseller: false,
      discount: "25%"
    },
    { 
      id: 7, 
      category: "Total Security", 
      name: "ESET Internet Security", 
      price: "44.99", 
      originalPrice: "59.99",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=300&fit=crop&crop=center",
      rating: 4.7,
      bestseller: true,
      discount: "25%"
    },
    { 
      id: 8, 
      category: "VPN", 
      name: "NordVPN Complete", 
      price: "11.95", 
      originalPrice: "17.99",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=300&fit=crop&crop=center",
      rating: 4.9,
      bestseller: true,
      discount: "33%"
    }
  ];

  const tabs = ["Top 20", "Antivirus", "Total Security", "VPN", "Password Manager"];

  const filteredProducts =
    activeTab === "Top 20"
      ? products
      : products.filter((p) => p.category === activeTab);

  const itemsPerSlide = {
    mobile: 1,
    tablet: 2,
    desktop: 4
  };

  const getItemsPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return itemsPerSlide.mobile;
      if (window.innerWidth < 1024) return itemsPerSlide.tablet;
      return itemsPerSlide.desktop;
    }
    return itemsPerSlide.desktop;
  };

  const [itemsToShow, setItemsToShow] = useState(getItemsPerSlide());

  React.useEffect(() => {
    const handleResize = () => {
      setItemsToShow(getItemsPerSlide());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxSlides = Math.max(0, filteredProducts.length - itemsToShow);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev >= maxSlides ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev <= 0 ? maxSlides : prev - 1));
  };

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
  };

  const handleWishlist = (product) => {
    console.log('Added to wishlist:', product);
  };

  React.useEffect(() => {
    setCurrentSlide(0);
  }, [activeTab]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        size={12} 
        className={`${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <TrendingUp size={16} />
            Most Popular Products
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Best<span className="text-yellow-500">sellers</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Discover our top-rated cybersecurity solutions trusted by millions worldwide
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 lg:mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-yellow-400 text-gray-900 shadow-lg transform scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 shadow-sm"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            style={{ marginLeft: '-20px' }}
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide >= maxSlides}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            style={{ marginRight: '-20px' }}
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Products Slider */}
          <div className="overflow-hidden mx-6 sm:mx-8">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentSlide * (100 / itemsToShow)}%)`,
                width: `${(filteredProducts.length / itemsToShow) * 100}%`
              }}
            >
              {filteredProducts.map((product, index) => (
                <div 
                  key={product.id} 
                  className="flex-shrink-0 px-2 sm:px-3"
                  style={{ width: `${100 / filteredProducts.length}%` }}
                >
                  <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden relative">
                    {/* Badges */}
                    <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
                      {product.bestseller && (
                        <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                          <Award size={10} />
                          Best Seller
                        </div>
                      )}
                      {product.discount && (
                        <div className="bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-bold">
                          -{product.discount}
                        </div>
                      )}
                    </div>

                    {/* Wishlist Button */}
                    <button
                      onClick={() => handleWishlist(product)}
                      className="absolute top-3 right-3 z-20 bg-white/80 backdrop-blur-sm hover:bg-white p-2 rounded-full shadow-md transition-all duration-300 group/heart"
                    >
                      <Heart 
                        size={16} 
                        className="text-gray-600 group-hover/heart:text-red-500 transition-colors" 
                      />
                    </button>

                    {/* Product Image */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 h-40 sm:h-48 flex items-center justify-center p-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Product Info */}
                    <div className="p-4 sm:p-6">
                      {/* Category & Rating */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {product.category}
                        </span>
                        <div className="flex items-center gap-1">
                          {renderStars(product.rating)}
                          <span className="text-xs text-gray-600 ml-1">({product.rating})</span>
                        </div>
                      </div>

                      {/* Product Name */}
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>

                      {/* Pricing */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-lg sm:text-xl font-bold text-gray-900">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/cart"
                        >
                          <ShoppingCart 
                            size={16} 
                            className="group-hover/cart:scale-110 transition-transform" 
                          />
                          <span className="text-sm">Add to Cart</span>
                        </button>
                        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-lg transition-all duration-300 flex items-center justify-center">
                          <Shield size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: maxSlides + 1 }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentSlide ? 'bg-yellow-400 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 lg:mt-12">
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bestseller;