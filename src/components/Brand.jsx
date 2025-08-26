import React, { useState } from "react";
import { ShoppingCart, BarChart3, Heart } from "lucide-react";

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
          originalPrice: "299.00",
          category: "Antivirus"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/kas_plus.png",
          name: "Kaspersky Plus 1 PC 1 Year",
          price: "349.00",
          originalPrice: "399.00",
          category: "Antivirus"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/kas_premium.png",
          name: "Kaspersky Total Security 1 User 1 Year",
          price: "409.00",
          originalPrice: "459.00",
          category: "Security Suite"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/kas_premium.png",
          name: "Kaspersky Total Security 1 User 3 Years",
          price: "1399.00",
          originalPrice: "1499.00",
          category: "Security Suite"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/kas_premium.png",
          name: "Kaspersky Total Security 3 User 3 Years",
          price: "1899.00",
          originalPrice: "1999.00",
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
          originalPrice: "478.00",
          category: "Security Suite"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/net-protector-total-security08_17_11_33_41.png",
          name: "Renew Net Protector Total Security 1 PC-1 Year",
          price: "438.00",
          originalPrice: "488.00",
          category: "Security Suite"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/net-protector-total-security08_17_11_30_17.png",
          name: "Net Protector Total Security 1 User 3 Years",
          price: "998.00",
          originalPrice: "1098.00",
          category: "Security Suite"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/net-protector-antivirus-pro.png",
          name: "Net Protector Antivirus 1 User 1 Year",
          price: "350.00",
          originalPrice: "400.00",
          category: "Antivirus"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/net-protector-total-security.png",
          name: "Upgrade Net Protector Total Security 1 User 3 Year",
          price: "998.00",
          originalPrice: "1098.00",
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
          originalPrice: "255.00",
          category: "Antivirus"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/k7-total-security.png",
          name: "K7 Total Security 1 PC 1 Year",
          price: "295.00",
          originalPrice: "345.00",
          category: "Security Suite"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/k7-total-security.png",
          name: "Renew K7 Total Security 1 PC 1 Year",
          price: "379.00",
          originalPrice: "429.00",
          category: "Security Suite"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/k7-antivirus-premuim08_17_11_35_40.png",
          name: "Upgrade K7 Antivirus Premium 1 User 1 Year",
          price: "350.00",
          originalPrice: "400.00",
          category: "Antivirus"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/K7-Mobile-Security08_08_11_05_34.jpg",
          name: "K7 Total Security 10 PC 1 Year",
          price: "1900.00",
          originalPrice: "2000.00",
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
          originalPrice: "288.00",
          category: "Antivirus"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/mcafee-antivirus08_17_11_39_37.png",
          name: "Renew McAfee Antivirus 1 User 1 Year",
          price: "249.00",
          originalPrice: "299.00",
          category: "Antivirus"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/mcafee-total-protection-security08_17_13_57_10.png",
          name: "McAfee Total Protection 1 User 1 Year",
          price: "298.00",
          originalPrice: "348.00",
          category: "Security Suite"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/mcafee-antivirus08_17_11_40_25.png",
          name: "McAfee Antivirus 1 User 3 Year",
          price: "669.00",
          originalPrice: "719.00",
          category: "Antivirus"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/mcafee-total-protection-security08_17_13_57_52.png",
          name: "McAfee Total Protection 1 User 3 Year",
          price: "1200.00",
          originalPrice: "1300.00",
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
          originalPrice: "485.00",
          category: "Security Suite"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/guardian-net-secure08_15_08_23_02.png",
          name: "Renew Guardian NetSecure 1 PC 1 Year",
          price: "299.00",
          originalPrice: "349.00",
          category: "Security Suite"
        },
        {
          img: "https://dantivirus.com/admin/model/pics/guardian-net-secure08_15_08_23_02.png",
          name: "Guardian Net Secure 1 User 1 Year",
          price: "299.00",
          originalPrice: "349.00",
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
          originalPrice: "330.00",
          category: "Antivirus"
        },
      ],
    },
    {
      name: "EScan",
      arr: [
        {
          img: "https://escanav.com/en/images/internet-security-suite.png",
          name: "EScan Internet Security Suite 1 User 1 Year",
          price: "428.00",
          originalPrice: "478.00",
          category: "Security Suite"
        },
        {
          img: "https://escanav.com/en/images/antivirus-for-windows.png",
          name: "EScan Antivirus 1 PC 1 Year",
          price: "438.00",
          originalPrice: "488.00",
          category: "Antivirus"
        },
      ],
    },
    {
      name: "Bitdefender",
      arr: [
        {
          img: "https://avatars.mds.yandex.net/i?id=76241a5a6443bd147e99a104e0ed089f0cab4562-10702479-images-thumbs&n=13",
          name: "Bitdefender Total Security 1 User 1 Year",
          price: "428.00",
          originalPrice: "478.00",
          category: "Security Suite"
        },
      ],
    },
  ];

  const handleAddToCart = (item) => {
    console.log("Added to cart:", item);
  };

  return (
    <div className="min-h-screen bg-white p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-1 mb-8 bg-gray-100 rounded-lg p-1 w-full justify-center">
          {list.map((brand, idx) => (
            <button
              key={idx}
              onClick={() => setVal(idx)}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                val === idx
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {brand.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {list[val].arr.map((item, i) => (
            <div key={i} className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                <div className="text-xs text-gray-500 mb-2">{item.category}</div>
                <h3 className="text-blue-600 font-medium text-sm mb-3 line-clamp-2 hover:underline cursor-pointer">
                  {item.name}
                </h3>
                <div className="mb-4 bg-gray-50 rounded-lg p-4 h-32 flex items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/200/200/ffffff/000000?text=Image+Not+Found";
                    }}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    {item.originalPrice && (
                      <span className="text-xs text-gray-500 line-through">
                        ${item.originalPrice}
                      </span>
                    )}
                    <span className="text-lg font-semibold text-gray-900">
                      ${item.price}
                    </span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded-full transition-colors"
                  >
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
      </div>
    </div>
  );
};

export default Brands;





