import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import {
  Search,
  Heart,
  ShoppingCart,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  ArrowRight,AlignJustify
} from "lucide-react";

const Hero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showslide, setShowSlide] = useState(false);
  const [open, setOpen] = useState(false);

  const sidebarOpen = () => {
    setOpen(!open);
  };

  const slides = [
    {
      title: "BUY QUICK HEAL",
      subtitle: "TOTAL SECURITY",
      price: "749",
      image: "https://megacompuworldjaipur.com/image/cache/catalog/Product/Software/quick%20heal%20(NEW)/Quick-heal-total-security-800x500.jpg",
    },
    {
      title: "BUY K7 ANTIVIRUS PRO",
      subtitle: "TOTAL SECURITY",
      price: "749",
      image: "https://files.vplak.com/images/k7/ANTIVIRUS-PREMIUM/white/image-1.jpg",
    },
    {
      title: "GET WINDOWS 10 PRO",
      subtitle: "@50% OFF",
      price: "749",
      image: "https://avatars.mds.yandex.net/get-mpic/5233452/2a00000193b5906d024d06ecf3adf5dbd9e9/orig",
    },
    {
      title: "PROTECT YOUR PC ALL TIME",
      subtitle: "BY NETPROTECTOR",
      price: "749",
      image: "https://avatars.mds.yandex.net/i?id=c8932dcad233627ea6599ad0b4172e7972878c5e-5259770-images-thumbs&n=13",
    },
  ];

  const data = [
    {
      img: "https://megacompuworldjaipur.com/image/cache/catalog/Product/Software/quick%20heal%20(NEW)/Quick-heal-total-security-800x500.jpg",
      text: "CATCH BIG DEALS ON THE ANTIVIRUS",
    },
    {
      img: "https://files.vplak.com/images/k7/ANTIVIRUS-PREMIUM/white/image-1.jpg",
      text: "GET 70% OFF ON WINDOWS PRODUCT",
    },
    {
      img: "https://avatars.mds.yandex.net/get-mpic/5233452/2a00000193b5906d024d06ecf3adf5dbd9e9/orig",
      text: "EXCEL GET 20% OFF ON OFFICE 365",
    },
    {
      img: "https://avatars.mds.yandex.net/i?id=c8932dcad233627ea6599ad0b4172e7972878c5e-5259770-images-thumbs&n=13",
      text: "50% OFF ON COMPUTER PERIPHERAL",
    },
  ];

  const menuItems = [
    {
      title: "Antivirus Software",
      isSpecial: true,
      options: ["Quick Heal", "K7 Antivirus", "NetProtector", "McAfee"],
    },
    {
      title: "Windows",
      isSpecial: true,
      options: ["Windows 10 Pro", "Windows 11", "Windows Server"],
    },
    {
      title: "Office 365",
      isSpecial: true,
      options: ["Office Home", "Office Business", "Office Enterprise"],
    },
    {
      title: "Accounting Software",
      options: ["Tally", "QuickBooks", "Zoho Books"],
    },
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const handleProductSelect = (productName) => {
    const slideIndex = slides.findIndex((slide) =>
      slide.title.toLowerCase().includes(productName.toLowerCase())
    );
    if (slideIndex !== -1) {
      setCurrentSlide(slideIndex);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Top Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <button
              className="md:hidden mr-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center justify-around w-[15rem]">
              <div>
                <img src={logo} alt="Logo" className="h-10" />
              </div>
              <div className="">
              {/* <AlignJustify /> */}
              {showslide ? (
                <X
                  onClick={() => setShowSlide(false)}
                  className="w-6 h-6 cursor-pointer"
                />
              ) : (
                <Menu
                  onClick={() => setShowSlide(true)}
                  className="w-6 h-6 cursor-pointer"
                />
              )}

               {/* <div className="flex">
      
      <button
        onClick={sidebarOpen}
        className="p-2 m-4 bg-blue-500 text-white rounded-lg"
      >
        {open ? "Close Sidebar" : "Open Sidebar"}
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-6 transform 
        ${open ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 ease-in-out`}
      >
        <h2 className="text-2xl font-bold mb-4">Sidebar Menu</h2>
        <ul className="space-y-3">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">About</li>
          <li className="hover:text-gray-300 cursor-pointer">Services</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>
      </div>
    </div> */}



              </div>
            </div>
            <div className="hidden md:flex items-center flex-1 max-w-2xl mx-8">
              <div className="flex w-full">
                <input
                  type="text"
                  placeholder="Search for Products"
                  className="flex-1 border-2 border-gray-200 px-4 py-2 rounded-l-lg focus:border-yellow-500 focus:outline-none text-gray-700"
                />
                <select
                  className="border-2 border-l-0 border-gray-200 px-4 py-2 bg-white text-gray-700 focus:border-yellow-500 focus:outline-none"
                >
                  <option>All Categories</option>
                  <option>Antivirus</option>
                  <option>Windows</option>
                  <option>Office</option>
                </select>
                <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-r-lg">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-1 text-gray-600">
                <Heart className="w-5 h-5" />
              </div>
              <div className="flex items-center space-x-2 text-gray-900">
                <ShoppingCart className="w-6 h-6" />
                <div className="text-right">
                  <div className="bg-yellow-400 text-black text-xs px-1 rounded-full min-w-[20px] h-5 flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="font-bold text-lg">$1785.00</div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden pb-4">
            <div className="flex">
              <input
                type="text"
                placeholder="Search products..."
                className="flex-1 border-2 border-gray-200 px-4 py-2 rounded-l-lg focus:border-yellow-500 focus:outline-none"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-r-lg">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
         {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-300 text-white p-6 transform ${
          showslide ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex items-center border-2 border-white justify-between">
           <h2 className="text-2xl font-bold mb-6">Sidebar Menu  </h2> <X
                  onClick={() => setShowSlide(!showslide)}
                  className="w-6 h-6 cursor-pointer"
                />
        </div>
       
        <ul className="space-y-4">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">Shop</li>
          <li className="hover:text-gray-300 cursor-pointer">About</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>
      </div>

      {/* Overlay */}
      {showslide && (
        <div
          onClick={() => setShowSlide(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}
      </div>

      {/* Navigation Bar */}
      <div className="bg-white border-b relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 md:px-6 md:py-3 flex items-center space-x-2 font-semibold">
              <Menu className="w-5 h-5" />
              <span className="hidden md:inline">All Departments</span>
            </button>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => setShow(!show)}
                className="relative text-red-600 font-semibold hover:text-red-700 flex items-center"
              >
                Super Deals <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <a
                href="#"
                className="text-gray-700 hover:text-yellow-600 font-semibold"
              >
                Featured Brands
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-yellow-600 font-semibold"
              >
                Trending Styles
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-yellow-600 font-semibold"
              >
                Gift Cards
              </a>
            </div>
            <div className="hidden md:block text-gray-600 text-sm">
              Free Shipping on Orders $50+
            </div>
          </div>
        </div>
        {show && (
          <div className="absolute top-full left-0 w-full bg-gray-50 p-4 md:p-8 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                <div className="space-y-6">
                  <h2 className="text-lg font-semibold text-gray-900 border-b border-yellow-400 pb-2">
                    Home & Static Pages
                  </h2>
                  <nav className="space-y-3">
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Home v1
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Home v2
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Home v3
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Home v3.1
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Home v4
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Home v5
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Home v6
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Home v7
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Contact v1
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Contact v2
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      FAQ
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Store Directory
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Terms and Conditions
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      404
                    </a>
                  </nav>
                </div>
                <div className="space-y-6">
                  <h2 className="text-lg font-semibold text-gray-900 border-b border-yellow-400 pb-2">
                    Shop Pages
                  </h2>
                  <nav className="space-y-3">
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Shop Grid
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Shop Grid Extended
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Shop List View
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Shop List View Small
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Shop Left Sidebar
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Shop Full width
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Shop Right Sidebar
                    </a>
                  </nav>
                  <div className="pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 border-b border-yellow-400 pb-2 mb-3">
                      Product Categories
                    </h3>
                    <nav className="space-y-3">
                      <a
                        href="#"
                        className="block text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        4 Column Sidebar
                      </a>
                      <a
                        href="#"
                        className="block text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        5 Column Sidebar
                      </a>
                      <a
                        href="#"
                        className="block text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        6 Column Full width
                      </a>
                      <a
                        href="#"
                        className="block text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        7 Column Full width
                      </a>
                    </nav>
                  </div>
                </div>
                <div className="space-y-6">
                  <h2 className="text-lg font-semibold text-gray-900 border-b border-yellow-400 pb-2">
                    Single Product Pages
                  </h2>
                  <nav className="space-y-3">
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Single Product Extended
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Single Product Fullwidth
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Single Product Sidebar
                    </a>
                  </nav>
                  <div className="pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 border-b border-yellow-400 pb-2 mb-3">
                      Ecommerce Pages
                    </h3>
                    <nav className="space-y-3">
                      <a
                        href="#"
                        className="block text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        Shop
                      </a>
                      <a
                        href="#"
                        className="block text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        Cart
                      </a>
                      <a
                        href="#"
                        className="block text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        Checkout
                      </a>
                      <a
                        href="#"
                        className="block text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        My Account
                      </a>
                      <a
                        href="#"
                        className="block text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        Track your Order
                      </a>
                      <a
                        href="#"
                        className="block text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        Compare
                      </a>
                    </nav>
                  </div>
                </div>
                <div className="space-y-6">
                  <h2 className="text-lg font-semibold text-gray-900 border-b border-yellow-400 pb-2">
                    Blog Pages
                  </h2>
                  <nav className="space-y-3">
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Blog v1
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Blog v2
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Blog v3
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Blog Full Width
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Single Blog Post
                    </a>
                  </nav>
                  <div className="pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 border-b border-yellow-400 pb-2 mb-3">
                      Shop Columns
                    </h3>
                    <nav className="space-y-3">
                      <a
                        href="#"
                        className="block text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        7 Column Full width
                      </a>
                      <a
                        href="#"
                        className="block text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        6 Column Full width
                      </a>
                      <a
                        href="#"
                        className="block text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        5 Column Sidebar
                      </a>
                      <a
                        href="#"
                        className="block text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        4 Column Sidebar
                      </a>
                      <a
                        href="#"
                        className="block text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        3 Column Sidebar
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="hidden md:block w-64 bg-white border-r p-4">
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  {item.isSpecial ? (
                    <div className="py-2 px-4 text-gray-700 hover:text-yellow-600 cursor-pointer">
                      {item.title}
                    </div>
                  ) : (
                    <div>
                      <div
                        className="flex justify-between items-center cursor-pointer hover:text-yellow-600 py-2 px-4"
                        onClick={() => item.options && handleProductSelect(item.options[0])}
                      >
                        <span className="font-medium text-gray-700">{item.title}</span>
                        {item.options && <ChevronRight className="w-4 h-4" />}
                      </div>
                      {item.options && (
                        <ul className="ml-4 space-y-1">
                          {item.options.map((option, i) => (
                            <li
                              key={i}
                              className={`cursor-pointer py-1 px-4 text-sm ${
                                slides[currentSlide].title.toLowerCase().includes(option.toLowerCase())
                                  ? "bg-yellow-50 text-yellow-700"
                                  : "text-gray-600 hover:bg-gray-50"
                              }`}
                              onClick={() => handleProductSelect(option)}
                            >
                              {option}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Slider Section */}
          <div className="flex-1 bg-gradient-to-r from-gray-50 to-gray-100 p-4">
            <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 flex flex-col md:flex-row items-center justify-center p-4"
                  >
                    <div className="space-y-4 md:w-1/2">
                      <div className="space-y-2">
                        <h2 className="text-3xl md:text-5xl font-light text-gray-800 leading-tight">
                          {slide.title.split(" ")[0]}<br />
                          <span className="font-semibold">
                            {slide.title.split(" ").slice(1).join(" ")}
                          </span>
                        </h2>
                        <h3 className="text-lg md:text-xl text-gray-600 font-medium">
                          {slide.subtitle}
                        </h3>
                      </div>
                      <div className="space-y-2">
                        <div className="text-gray-600 text-sm">START FROM</div>
                        <div className="flex items-baseline space-x-2">
                          <span className="text-gray-500 text-xl">₹</span>
                          <span className="text-4xl md:text-5xl font-light text-gray-800">
                            {slide.price}
                          </span>
                        </div>
                      </div>
                      <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition-colors">
                        Buy Now
                      </button>
                    </div>
                    <div className="relative md:w-1/2 mt-4 md:mt-0">
                      <div className="relative group">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full max-w-md mx-auto rounded-lg shadow-2xl cursor-pointer transform transition-transform group-hover:scale-105"
                        />
                        <div
                          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-20 rounded-lg cursor-pointer"
                        >
                          <ExternalLink className="w-12 h-12 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Navigation buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full p-2 shadow-md"
              >
                &#8592;
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full p-2 shadow-md"
              >
                &#8594;
              </button>
              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentSlide === index ? "bg-yellow-400" : "bg-gray-300"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
            <div className="fixed top-0 left-0 h-full w-64 bg-white overflow-y-auto">
              <div className="p-4 border-b flex justify-between items-center">
                <h2 className="text-xl font-bold">Menu</h2>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      {item.isSpecial ? (
                        <div className="py-2 px-4 text-gray-700 hover:text-yellow-600 cursor-pointer">
                          {item.title}
                        </div>
                      ) : (
                        <div>
                          <div
                            className="flex justify-between items-center cursor-pointer hover:text-yellow-600 py-2 px-4"
                            onClick={() => item.options && handleProductSelect(item.options[0])}
                          >
                            <span className="font-medium text-gray-700">{item.title}</span>
                            {item.options && <ChevronRight className="w-4 h-4" />}
                          </div>
                          {item.options && (
                            <ul className="ml-4 space-y-1">
                              {item.options.map((option, i) => (
                                <li
                                  key={i}
                                  className={`cursor-pointer py-1 px-4 text-sm ${
                                    slides[currentSlide].title.toLowerCase().includes(option.toLowerCase())
                                      ? "bg-yellow-50 text-yellow-700"
                                      : "text-gray-600 hover:bg-gray-50"
                                  }`}
                                  onClick={() => handleProductSelect(option)}
                                >
                                  {option}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Deals Section */}
        <div className="px-6 md:px-12 lg:px-20 py-8 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
            {data.map((val, i) => (
              <div
                key={i}
                className="flex items-center bg-[#e5e7eb] shadow-md p-4 rounded-lg"
              >
                <div className="flex-shrink-0">
                  <img
                    src={val.img}
                    alt="deal"
                    className="w-32 h-28 object-contain"
                  />
                </div>
                <div className="ml-4 flex flex-col justify-between">
                  <p className="text-gray-700 text-lg leading-snug">
                    {val.text}
                  </p>
                  <button className="flex items-center gap-2 font-semibold text-gray-800 hover:text-black mt-2">
                    Shop now
                    <ArrowRight className="text-yellow-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;