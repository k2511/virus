import React, { useState } from "react";

const Brands = () => {
  const [val, setVal] = useState(0);
  const list = [
    {
      name: "Kaspersky",
      arr: [
        {
          img: "https://dantivirus.com/admin/model/pics/kas_standard.png",
          name: "Kaspersky Antivirus 1 PC 1 Year",
          price: "249.00",
          category: "Antivirus"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/kas_plus.png",
          name: "Kaspersky Plus 1 PC 1 Year",
          price: "349.00",
          category: "Antivirus"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/kas_premium.png",
          name: "Kaspersky Total Security 1 User 1 Year",
          price: "409.00",
          category: "Security Suite"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/kas_premium.png",
          name: "Kaspersky Total Security 1 User 3 Years",
          price: "1399.00",
          category: "Security Suite"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/kas_premium.png",
          name: "Kaspersky Total Security 3 User 3 Years",
          price: "1899.00",
          category: "Security Suite"
        },
      ],
    },
    {
      name: "Net Protector",
      arr: [
        {
          img: "https://dantivirus.com/admin/model/pics/net-protector-total-security08_17_11_33_41.png",
          name: "Net Protector Total Security 1 User 1 Year",
          price: "428.00",
          category: "Security Suite"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/net-protector-total-security08_17_11_33_41.png",
          name: "Renew Net Protector Total Security 1 PC-1 Year",
          price: "438.00",
          category: "Security Suite"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/net-protector-total-security08_17_11_30_17.png",
          name: "Net Protector Total Security 1 User 3 Years",
          price: "998.00",
          category: "Security Suite"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/net-protector-antivirus-pro.png",
          name: "Net Protector Antivirus 1 User 1 Year",
          price: "350.00",
          category: "Antivirus"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/net-protector-total-security.png",
          name: "Upgrade Net Protector Total Security 1 User 3 Year",
          price: "998.00",
          category: "Security Suite"
        },
      ],
    },
    {
      name: "K7",
      arr: [
        {
          img: "https://dantivirus.com/admin/model/pics/k7-antivirus-premuim.png",
          name: "K7 Antivirus Premium 1 PC 1 Year",
          price: "205.00",
          category: "Antivirus"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/k7-total-security.png",
          name: "K7 Total Security 1 PC 1 Year",
          price: "295.00",
          category: "Security Suite"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/k7-total-security.png",
          name: "Renew K7 Total Security 1 PC 1 Year",
          price: "379.00",
          category: "Security Suite"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/k7-antivirus-premuim08_17_11_35_40.png",
          name: "Upgrade K7 Antivirus Premium 1 User 1 Year",
          price: "350.00",
          category: "Antivirus"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/K7-Mobile-Security08_08_11_05_34.jpg",
          name: "K7 Total Security 10 PC 1 Year",
          price: "1900.00",
          category: "Security Suite"
        },
      ],
    },
    {
      name: "McAfee",
      arr: [
        {
          img: "https://dantivirus.com/admin/model/pics/mcafee-antivirus08_14_16_59_00.png",
          name: "McAfee Antivirus 1 User 1 Year",
          price: "238.00",
          category: "Antivirus"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/mcafee-antivirus08_17_11_39_37.png",
          name: "Renew McAfee Antivirus 1 User 1 Year",
          price: "249.00",
          category: "Antivirus"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/mcafee-total-protection-security08_17_13_57_10.png",
          name: "McAfee Total Protection 1 User 1 Year",
          price: "298.00",
          category: "Security Suite"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/mcafee-antivirus08_17_11_40_25.png",
          name: "McAfee Antivirus 1 User 3 Year",
          price: "669.00",
          category: "Antivirus"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/mcafee-total-protection-security08_17_13_57_52.png",
          name: "McAfee Total Protection 1 User 3 Year",
          price: "1200.00",
          category: "Security Suite"
        },
      ],
    },
    {
      name: "Guardian",
      arr: [
        {
          img: "https://dantivirus.com/admin/model/pics/guardian-total-security08_15_08_36_52.png",
          name: "Guardian Total Security 1 User 1 Year",
          price: "435.00",
          category: "Security Suite"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/guardian-net-secure08_15_08_23_02.png",
          name: "Renew Guardian NetSecure 1 PC 1 Year",
          price: "299.00",
          category: "Security Suite"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/guardian-net-secure08_15_08_23_02.png",
          name: "Guardian Net Secure 1 User 1 Year",
          price: "299.00",
          category: "Security Suite"
        },
      ],
    },
    {
      name: "ESET",
      arr: [
        {
          img: "https://dantivirus.com/admin/model/pics/eset-node-antivirus08_15_08_44_11.png",
          name: "ESET NOD32 Antivirus 1 User 1 Year",
          price: "280.00",
          category: "Antivirus"
        },
      ],
    },
  ];

  const handleAddToCart = (item) => {
    // Add to cart functionality here
    console.log('Added to cart:', item);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto justify-center items-center">
            {list.map((brand, idx) => (
              <button
                key={idx}
                onClick={() => setVal(idx)}
                className={`py-4 px-2 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  val === idx
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {brand.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {list[val].arr.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-lg  shadow-sm hover:shadow-md transition-shadow border border-gray-200 overflow-hidden group"
            >
              {/* Product Image */}
              <div className="aspect-square bg-gray-50 flex items-center justify-center p-4">
                <img
                  src={item.img || "/api/placeholder/200/200"}
                  alt={item.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Product Details */}
              <div className="p-4">
                {/* Category */}
                <div className="text-xs text-gray-500 mb-1">
                  {item.category}
                </div>

                {/* Product Name */}
                <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                  {item.name}
                </h3>

                {/* Price */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-bold text-gray-900">
                    ${item.price}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(item)}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l1.5-6M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6" />
                  </svg>
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;