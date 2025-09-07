import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { VscGraph } from "react-icons/vsc";
import { FaRegHeart } from "react-icons/fa";

const Brands = () => {
  const navigate = useNavigate();

  const [val, setVal] = useState(0);
  const topSelling = {
    image: "https://dantivirus.com/admin/model/pics/kas_standard.png",
    name: "Kaspersky Antivirus 1 PC 1 Year",
    price: "₹249.00",
    category: "Antivirus",
  };

  const [sale, setSale] = useState(topSelling);
  const [visibleCount, setVisibleCount] = useState(4);
  const [visibleCount1, setVisibleCount1] = useState(4);

  const list = [
    {
      name: "Kaspersky",
      arr: [
        {
          image: "https://dantivirus.com/admin/model/pics/kas_standard.png",
          name: "Kaspersky Antivirus 1 PC 1 Year",
          price: "₹249.00",
          category: "Antivirus",
        },
        {
          image: "https://dantivirus.com/admin/model/pics/kas_plus.png",
          name: "Kaspersky Plus 1 PC 1 Year",
          price: "₹349.00",
          category: "Antivirus",
        },
        {
          image: "https://dantivirus.com/admin/model/pics/kas_premium.png",
          name: "Kaspersky Total Security 1 User 1 Year",
          price: "₹409.00",
          category: "Security Suite",
        },
        {
          image: "https://dantivirus.com/admin/model/pics/kas_premium.png",
          name: "Kaspersky Total Security1 User 3 Years",
          price: "₹1399.00",
          category: "Security Suite",
        },
        {
          image: "https://dantivirus.com/admin/model/pics/kas_premium.png",
          name: "Kaspersky Total Security 3 User 3 Years",
          price: "₹1899.00",
          category: "Security Suite",
        },
      ],
    },
    {
      name: "Net Protector",
      arr: [
        {
          image: "https://dantivirus.com/admin/model/pics/net-protector-total-security08_17_11_33_41.png",
          name: "Net Protector Total Security 1 User 1 Year",
          price: "₹428.00",
          category: "Security Suite",
        },
        {
          image: "https://dantivirus.com/admin/model/pics/net-protector-total-security08_17_11_33_41.png",
          name: "Renew Net Protector Total Security 1 PC-1 Year",
          price: "₹438.00",
          category: "Security Suite",
        },
        {
          image: "https://dantivirus.com/admin/model/pics/net-protector-total-security08_17_11_30_17.png",
          name: "Net Protector Total Security 1 User 3 Years",
          price: "₹998.00",
          category: "Security Suite",
        },
        {
          image: "https://dantivirus.com/admin/model/pics/net-protector-antivirus-pro.png",
          name: "Net Protector Antivirus 1 User 1 Year",
          price: "₹350.00",
          category: "Antivirus",
        },
        {
          image: "https://dantivirus.com/admin/model/pics/net-protector-total-security.png",
          name: "Upgrade Net Protector Total Security 1 User 3 Year",
          price: "₹998.00",
          category: "Security Suite",
        },
      ],
    },
    {
      name: "K7",
      arr: [
        {
          image: "https://dantivirus.com/admin/model/pics/k7-antivirus-premuim.png",
          name: "K7 Antivirus Premium 1 PC 1 Year",
          price: "₹205.00",
          category: "Antivirus",
        },
        {
          image: "https://dantivirus.com/admin/model/pics/k7-total-security.png",
          name: "K7 Total Security 1 PC 1 Year",
          price: "₹295.00",
          category: "Security Suite",
        },
        {
          image: "https://dantivirus.com/admin/model/pics/k7-total-security.png",
          name: "Renew K7 Total Security 1 PC 1 Year",
          price: "₹379.00",
          category: "Security Suite",
        },
        {
          image: "https://dantivirus.com/admin/model/pics/k7-antivirus-premuim08_17_11_35_40.png",
          name: "Upgrade K7 Antivirus Premium 1 User 1 Year",
          price: "₹350.00",
          category: "Antivirus",
        },
        {
          image: "https://dantivirus.com/admin/model/pics/K7-Mobile-Security08_08_11_05_34.jpg",
          name: "K7 Total Security 10 PC 1 Year",
          price: "₹1900.00",
          category: "Security Suite",
        },
      ],
    },
    {
      name: "McAfee",
      arr: [
        {
          image: "https://dantivirus.com/admin/model/pics/mcafee-antivirus08_14_16_59_00.png",
          name: "McAfee Antivirus 1 User 1 Year",
          price: "₹238.00",
          category: "Antivirus",
        },
        {
          image: "https://dantivirus.com/admin/model/pics/mcafee-antivirus08_17_11_39_37.png",
          name: "Renew McAfee Antivirus 1 User 1 Year",
          price: "₹249.00",
          category: "Antivirus",
        },
        {
          image: "https://dantivirus.com/admin/model/pics/mcafee-total-protection-security08_17_13_57_10.png",
          name: "McAfee Total Protection 1 User 1 Year",
          price: "₹298.00",
          category: "Security Suite",
        },
        {
          image: "https://dantivirus.com/admin/model/pics/mcafee-antivirus08_17_11_40_25.png",
          name: "McAfee Antivirus 1 User 3 Year",
          price: "₹669.00",
          category: "Antivirus",
        },
        {
          image: "https://dantivirus.com/admin/model/pics/mcafee-total-protection-security08_17_13_57_52.png",
          name: "McAfee Total Protection 1 User 3 Year",
          price: "₹1200.00",
          category: "Security Suite",
        },
      ],
    },
    {
      name: "Guardian",
      arr: [
        {
          image: "https://dantivirus.com/admin/model/pics/guardian-total-security08_15_08_36_52.png",
          name: "Guardian Total Security 1 User 1 Year",
          price: "₹435.00",
          category: "Security Suite",
        },
        {
          image: "https://dantivirus.com/admin/model/pics/guardian-net-secure08_15_08_23_02.png",
          name: "Renew Guardian NetSecure 1 PC 1 Year",
          price: "₹299.00",
          category: "Security Suite",
        },
        {
          image: "https://dantivirus.com/admin/model/pics/guardian-net-secure08_15_08_23_02.png",
          name: "Guardian Net Secure 1 User 1 Year",
          price: "₹299.00",
          category: "Security Suite",
        },
      ],
    },
    {
      name: "ESET",
      arr: [
        {
          image: "https://dantivirus.com/admin/model/pics/eset-node-antivirus08_15_08_44_11.png",
          name: "ESET NOD32 Antivirus 1 User 1 Year",
          price: "₹280.00",
          category: "Antivirus",
        },
      ],
    },
  ];

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const handleViewMore1 = () => {
    setVisibleCount1((prev) => prev + 4);
  };

  // Reusable component for Compare & Wishlist section
  const CompareWishlistSection = () => (
    <div className="flex justify-around w-full items-center sm:gap-4 gap-1 text-sm  text-gray-500 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="flex items-center gap-1 hover:text-blue-600 cursor-pointer transition-colors">
        <VscGraph className="w-4 h-4" />
        <span>Compare</span>
      </div>
      <span className="text-gray-300">•</span>
      <div className="flex items-center gap-1 hover:text-red-500 cursor-pointer transition-colors">
        <FaRegHeart className="w-4 h-4" />
        <span>Add to Wishlist</span>
      </div>
    </div>
  );

  const CompareWishlistSection1 = () => (
    <div className="flex justify-between w-full items-center sm:gap-4 md:gap-2 gap-0 px-2 text-sm  text-gray-500 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="flex items-center gap-1 hover:text-blue-600 cursor-pointer transition-colors">
        <VscGraph className="w-4 h-4" />
        <span className="text-xs sm:text-xs ">Compare</span>
      </div>
      <span className="text-gray-300">•</span>
      <div className="flex items-center sm:gap-1  gap-0 hover:text-red-500 cursor-pointer transition-colors">
        <FaRegHeart className="sm:w-4 sm:h-4 w-2 h-2" />
        <span className="text-[0.8rem] sm:text-xs lg:text-">Add to Wishlist</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm border-b flex justify-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="flex space-x-4 overflow-x-auto no-scrollbar mx-auto items-center justify-center">
            {list.map((brand, idx) => (
              <button
                key={idx}
                onClick={() => setSale(brand.arr[0]) || setVal(idx)}
                className={`py-3 px-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors flex-shrink-0 ${
                  val === idx
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {brand.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section>
        <div className="mx-auto max-w-[1400px] bg-gray-50 p-4 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-3  items-start ">
            {/* Left Grid */}

            <div
              className={`${
                list[val].arr.length === 1
                  ? "flex justify-end w-full mt-4 lg:mt-0"  // only 1 item → push right
                  : "grid grid-cols-1 sm:grid-cols-2 gap-1 w-fit mt-4 lg:mt-0  mx-auto" // multiple items → grid
              }`}
            >
              {list[val].arr.slice(0, visibleCount).map((item, i) => (
                <div
                  onClick={() =>
                    navigate(`/brands/${encodeURIComponent(item.name)}`, {
                      state: {
                        image: item.image,
                        price: item.price,
                        category: item.category,
                        products: list[val].arr,
                        brand: list[val].name,
                      },
                    })
                  }
                  key={i}
                  className="bg-white rounded-md sm:p-2 shadow flex flex-col justify-between items-center text-center hover:shadow-xl group cursor-pointer transition-all duration-300">
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <p className="font-semibold text-blue-700 line-clamp-2">
                    {item.name}
                  </p>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-32 object-contain my-3 "
                  />
                  <div className="flex items-center justify-between w-full">
                    <span className="text-lg font-semibold">{item.price}</span>
                    <button className="bg-yellow-400 p-2 rounded-full text-white hover:bg-yellow-500 transition-colors">
                      <FaShoppingCart />
                    </button>
                  </div>
                  <CompareWishlistSection1 />
                </div>
              ))}
              {visibleCount < list[val].arr.length && (
                <button
                  onClick={handleViewMore}
                  className="mt-2 px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition-colors"
                >
                  View More
                </button>
              )}
            </div>

            {/* Featured Product */}
            <div 
              className="bg-white rounded-md  sm:p-2  md:min-h-[43rem] shadow flex flex-col justify-between items-center  text-center hover:shadow-xl mt-4 lg:mt-0 group cursor-pointer transition-all duration-300"
              onClick={()=> navigate(`/brands/${encodeURIComponent(sale.name)}`, {
                state: { 
                  image: sale.image, 
                  price: sale.price, 
                  category: sale.category,
                  products: list[val].arr,
                  brand: list[val].name,
                },
              })}
            >
              <div className="w-full space-y-10">
                <div>  <p className="text-sm text-gray-500">{sale.category}</p>
                <p className="font-semibold text-blue-700 mb-4 line-clamp-2">
                  {sale.name}
                </p> </div>
              
                <img
                  src={sale.image}
                  alt="featured product"
                  className="w-full  max-h-96 m object-contain mb-6"
                />
                <div className="w-full">
                  <div className="flex items-center justify-around w-full ">
                    <span className="text-lg font-semibold">{sale.price}</span>
                    <button className="bg-yellow-400 px-4 py-2 rounded-full text-white flex items-center gap-2 hover:bg-yellow-500 transition-colors">
                      <FaShoppingCart /> Add to Cart
                    </button>
                  </div>
                  <CompareWishlistSection />
                </div>
              </div>
            </div>

            {/* Right Grid */}
            <div   className={`${
                list[val].arr.length === 1
                  ? "flex justify-start w-full mt-4 lg:mt-0"  // only 1 item → push right
                  : "grid grid-cols-1 sm:grid-cols-2 gap-1 w-fit mt-4 lg:mt-0 mx-auto" // multiple items → grid
              }`}>
              {list[val].arr.slice(0, visibleCount1).map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-md  sm:p-2 shadow flex flex-col justify-between items-center text-center hover:shadow-xl group cursor-pointer transition-all duration-300"
                  onClick={()=> navigate(`/brands/${encodeURIComponent(item.name)}`, {
                    state: { 
                      image: item.image, 
                      price: item.price, 
                      category: item.category,
                      products: list[val].arr,
                      brand: list[val].name,
                    },
                  })}
                >
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <p className="font-semibold text-blue-700 line-clamp-2">
                    {item.name}
                  </p>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-32 object-contain my-3"
                  />
                  <div className="flex items-center justify-between w-full">
                    <span className="text-lg font-semibold">{item.price}</span>
                    <button className="bg-yellow-400 p-2 rounded-full text-white hover:bg-yellow-500 transition-colors">
                      <FaShoppingCart />
                    </button>
                  </div>
                  <CompareWishlistSection1 />
                </div>
              ))}
              {visibleCount1 < list[val].arr.length && (
                <button
                  onClick={handleViewMore1}
                  className="mt-2 px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition-colors"
                >
                  View More
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brands;
