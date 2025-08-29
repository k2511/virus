import React, { useState, useEffect } from "react";
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
import alogo from "../assets/images/antivirusLogo.png";
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
      image:
        "https://megacompuworldjaipur.com/image/cache/catalog/Product/Software/quick%20heal%20(NEW)/Quick-heal-total-security-800x500.jpg",
    },
    {
      title: "BUY K7 ANTIVIRUS PRO",
      subtitle: "TOTAL SECURITY",
      price: "749",
      image:
        "https://files.vplak.com/images/k7/ANTIVIRUS-PREMIUM/white/image-1.jpg",
    },
    {
      title: "GET WINDOWS 10 PRO",
      subtitle: "@50% OFF",
      price: "749",
      image:
        "https://avatars.mds.yandex.net/get-mpic/5233452/2a00000193b5906d024d06ecf3adf5dbd9e9/orig",
    },
    {
      title: "PROTECT YOUR PC ALL TIME",
      subtitle: "BY NETPROTECTOR",
      price: "749",
      image:
        "https://avatars.mds.yandex.net/i?id=c8932dcad233627ea6599ad0b4172e7972878c5e-5259770-images-thumbs&n=13",
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

  const [openIndex, setOpenIndex] = useState(null);
  const [showDepartment, setShowDepartment] = useState(true);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    { title: "Antivirus Software", content: "Submenu for Antivirus" },
    { title: "Windows", content: "Submenu for Windows" },
    { title: "Office 365", content: "Submenu for Office 365" },
    { title: "Accounting Software", content: "Submenu for Accounting" },
    { title: "Tally", content: "Submenu for Tally" },
    { title: "QuickBooks", content: "Submenu for QuickBooks" },
    { title: "Zoho Books", content: "Submenu for Zoho Books" },
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // run every 3 sec
    return () => clearInterval(interval); // cleanup when unmount
  }, [currentSlide]);

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
            <div className="flex items-center justify-around w-[15rem] ">
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
              </div>
            </div>
            <div className="hidden md:flex items-center flex-1 max-w-2xl mx-8 ">
              <div className="flex w-full ">
                <input
                  type="text"
                  placeholder="Search for Products"
                  className="flex-1 border-2 border-gray-200 px-4 py-2 rounded-l-lg focus:border-yellow-500 focus:outline-none text-gray-700 "
                />
                <select className="border-2 border-l-0 border-gray-200 px-4 py-2 bg-white text-gray-700 focus:border-yellow-500 focus:outline-none ">
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
              <div className="hidden md:flex items-center space-x-1 text-gray-600  ">
                <Heart className="w-5 h-5" />
              </div>
              <div className="flex relative items-center space-x-2 text-gray-900  ">
                <div>
                  <ShoppingCart className="w-6 h-6" />

                  <div className=" absolute top-3 -right-2  bg-yellow-400 text-black animate-bounce text-xs px-1 py-1  rounded-full w-5 h-5 flex items-center justify-center font-semibold leading-none">
                    2
                  </div>
                </div>

                {/* <div class="absolute bg-red-500 px-3 sm:px-4 py-1 sm:py-2 animate-bounce -top-[10px] -left-[10px] rounded-[4px] text-xs sm:text-sm">New</div> */}
              </div>
              <div className="text-right ">
                <div className="font-bold text-lg">$1785.00</div>
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
          className={`fixed top-0 left-0 h-full w-64 bg-gray-200 text-white  transform ${
            showslide ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50 flex flex-col`}
        >
          <div className="flex items-center  justify-between pt-5 px-5">
            <h2 className=" text-black font-bold text-center ">
              <img src={alogo} className="w-full h-12" />
            </h2>
            <X
              onClick={() => setShowSlide(!showslide)}
              className="w-7 h-7 cursor-pointer text-black"
            />
          </div>

          <ul className="space-y-2 text-black mt-6 px-4">
            {items.map((item, index) => (
              <div key={index}>
                <div
                  className="flex items-center justify-between cursor-pointer py-2"
                  onClick={() => toggleItem(index)}
                >
                  <li className="hover:text-gray-300">{item.title}</li>
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {openIndex === index && (
                  <div className="ml-4 mt-2 p-2 bg-gray-100 rounded-md text-sm text-gray-700">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </ul>

          {/* SVG pushed to bottom */}
          <div className="mt-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 126.5"
              className="injected-svg js-svg-injector w-full"
            >
              <style type="text/css">{`
        .wave-bottom-with-dots-0{fill:#377DFF;}
        .wave-bottom-with-dots-1{fill:#377DFF;}
        .wave-bottom-with-dots-2{fill:#DE4437;}
        .wave-bottom-with-dots-3{fill:#00C9A7;}
        .wave-bottom-with-dots-4{fill:#FFC107;}
      `}</style>

              <path
                className="wave-bottom-with-dots-0 fill-primary"
                opacity=".6"
                d="M0,58.9c0-0.9,5.1-2,5.8-2.2c6-0.8,11.8,2.2,17.2,4.6c4.5,2.1,8.6,5.3,13.3,7.1C48.2,73.3,61,73.8,73,69  
        c43-16.9,40-7.9,84-2.2c44,5.7,83-31.5,143-10.1v69.8H0C0,126.5,0,59,0,58.9z"
              ></path>

              <path
                className="wave-bottom-with-dots-1 fill-primary"
                d="M300,68.5v58H0v-58c0,0,43-16.7,82,5.6c12.4,7.1,26.5,9.6,40.2,5.9c7.5-2.1,14.5-6.1,20.9-11  
        c6.2-4.7,12-10.4,18.8-13.8c7.3-3.8,15.6-5.2,23.6-5.2c16.1,0.1,30.7,8.2,45,16.1c13.4,7.4,28.1,12.2,43.3,11.2  
        C282.5,76.7,292.7,74.4,300,68.5z"
              ></path>

              <g>
                <circle
                  className="wave-bottom-with-dots-2 fill-danger"
                  cx="259.5"
                  cy="17"
                  r="13"
                ></circle>
                <circle
                  className="wave-bottom-with-dots-1 fill-primary"
                  cx="290"
                  cy="35.5"
                  r="8.5"
                ></circle>
                <circle
                  className="wave-bottom-with-dots-3 fill-success"
                  cx="288"
                  cy="5.5"
                  r="5.5"
                ></circle>
                <circle
                  className="wave-bottom-with-dots-4 fill-warning"
                  cx="232.5"
                  cy="34"
                  r="2"
                ></circle>
              </g>
            </svg>
          </div>
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
      <div className="bg-[#e5e7eb] border-b relative ">
        <div className=" max-w-7xl mx-auto px-4 ">
          <div className="flex items-center justify-between ">
            <button
              onClick={() => {
                setShowDepartment(!showDepartment);
              }}
              className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2  w-56 rounded-t-lg md:px-6 md:py-3 flex items-center space-x-2 font-semibold"
            >
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
          <div className="absolute top-full left-0 w-full  p-4 md:p-8 z-50 shadow-lg">
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
      <div className="max-w-7xl mx-auto  ">
        <div className="flex flex-col md:flex-row   ">
          {/* Sidebar */}
          <div className="hidden md:block w-60 from-gray-50 to-gray-100 border-r p-4 ">
            {showDepartment && (
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
                          onClick={() =>
                            item.options && handleProductSelect(item.options[0])
                          }
                        >
                          <span className="font-medium text-gray-700">
                            {item.title}
                          </span>
                          {item.options && <ChevronRight className="w-4 h-4" />}
                        </div>
                        {item.options && (
                          <ul className="ml-4 space-y-1">
                            {item.options.map((option, i) => (
                              <li
                                key={i}
                                className={`cursor-pointer py-1 px-4 text-sm ${
                                  slides[currentSlide].title
                                    .toLowerCase()
                                    .includes(option.toLowerCase())
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
            )}
          </div>

          {/* Slider Section */}
          <div className="flex-1 bg-gradient-to-r from-gray-50 to-gray-100 p-4 overflow-hidden ">
            {/* overflow hidden */}
            <div className="relative w-full max-w-6xl mx-auto overflow-hidden ">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 flex flex-col md:flex-row items-center justify-center p-4 "
                  >
                    <div className="space-y-4 md:w-1/2">
                      <div className="space-y-2">
                        <h2 className="text-3xl md:text-5xl font-light text-gray-800 leading-tight">
                          {slide.title.split(" ")[0]}
                          <br />
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
                          className="md:w-80 md:h-80 h-40 w-40 mx-auto rounded-lg shadow-2xl cursor-pointer transform transition-transform group-hover:scale-105"
                        />
                        <div className="absolute  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-20 rounded-lg cursor-pointer">
                          {/* <ExternalLink className="w-12 h-12 text-white" /> */}
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
        <div className="px-4 sm:px-6 md:px-5 lg:px-2 py-10 flex justify-center max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-3 w-full  ">
          
            {data.map((val, i) => (
              <div
                key={i}
                className="flex items-center bg-[#e5e7eb] shadow-md xl:p-4 p-2 rounded-lg"
              >
                <div className="flex-shrink-0">
                  <img
                    src={val.img}
                    alt="deal"
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 "
                  />
                </div>
                <div className="ml-4 flex flex-col justify-between">
                  <p className="text-gray-700 text-sm sm:text-base md:text-sm leading-snug">
                    {val.text}
                  </p>
                  <button className="flex items-center gap-2 font-semibold text-gray-800 hover:text-black mt-2 text-sm sm:text-xs ">
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



