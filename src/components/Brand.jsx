import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
const Brands = () => {
  const [val, setVal] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const topSelling =  {
    img: "https://dantivirus.com/admin/model/pics/kas_standard.png",
    name: "Kaspersky Antivirus 1 PC 1 Year",
    price: "249.00",
    category: "Antivirus"
}

  const [sale, setSale] = useState(topSelling);

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

  const products = [
    {
      category: "Speakers",
      name: "Wireless Audio System Multiroom 360 degree Full...",
      price: "$685,00",
      image: "https://via.placeholder.com/200x250",
    },
    {
      category: "Speakers",
      name: "Tablet White EliteBook Revolve 810 G2",
      price: "$685,00",
      image: "https://via.placeholder.com/250x200",
    },
    {
      category: "Speakers",
      name: "Wireless Audio System Multiroom 360 degree Full...",
      price: "$685,00",
      image: "https://via.placeholder.com/200x250",
    },
    {
      category: "Speakers",
      name: "GameConsole Destiny Special Edition",
      price: "$685,00",
      image: "https://via.placeholder.com/250x200",
    },
  ];

 



  const handleAddToCart = (item) => {
    // Add to cart functionality here
    console.log('Added to cart:', item);
  };

  return (
    <div className="min-h-screen bg-gray-50  ">
      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm  border-b flex justify-center ">
        <div className="max-w-7xl mx-auto px-4  ">
          <div className="flex space-x-8 overflow-x-auto mx-auto items-center ">
            {list.map((brand, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setVal(idx);
                  console.log(brand.arr[0])
                  setSale(brand.arr[0]);
                }}
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

   

    <section>

    <div className="min-h-screen m-auto max-w-[1400px] bg-gray-50 p-4 md:p-10 ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-stretch ">

      <div
  className={`grid grid-cols-2 gap-2 h-full  mx-auto 
    ${list[val].arr.length === 1 ? "justify-end grid-cols-1" : ""}`}
>
  {list[val].arr.map((item, i) => (
    <div
      key={i}
      className="bg-white rounded-sm p-4 shadow flex flex-col justify-between items-center text-center h-full hover:shadow-xl"
    >
      <p className="text-sm text-gray-500">{item.category}</p>
      <p className="font-semibold text-blue-700">{item.name}</p>
      <img
        src={item.img}
        alt={item.name}
        className="h-32 object-contain my-3"
      />
      <div className="flex items-center justify-between w-full">
        <span className="text-lg font-semibold">{item.price}</span>
        <button className="bg-yellow-400 p-2 rounded-full text-white">
          <FaShoppingCart />
        </button>
      </div>
    </div>
  ))}
</div>

        <div className="bg-white rounded-sm p-6 shadow flex flex-col justify-between items-center text-center h-fit hover:shadow-xl ">
          <div className="w-full">
            <p className="text-sm text-gray-500">{sale.category}</p>
            <p className="font-semibold text-blue-700 mb-4">
              {sale.name}
            </p>
            <img
              src={sale.img}
              alt="controller"
              className="w-full max-h-80 object-contain mb-6"
            />
        
             <div className="w-full">
            <div className="flex items-center justify-between w-full">
              <span className="text-lg font-semibold">{sale.price}</span>
              <button className="bg-yellow-400 px-4 py-2 rounded-full text-white flex items-center gap-2">
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
            <div className="flex gap-2 text-sm text-gray-500 mt-4  w-full justify-between   ">
              <span>Compare</span>
              <span>Add to Wishlist</span>
            </div>
          </div>
          </div>
         
        </div>

      
        <div className="grid grid-cols-2 gap-2 h-full">
          {list[val].arr.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-sm p-4 shadow flex flex-col justify-between items-center text-center h-full hover:shadow-xl"
            >
              <p className="text-sm text-gray-500">{item.category}</p>
              <p className="font-semibold text-blue-700">{item.name}</p>
              <img
                src={item.img}
                alt={item.name}
                className="h-32 object-contain my-3"
              />
              <div className="flex items-center justify-between w-full">
                <span className="text-lg font-semibold">{item.price}</span>
                <button className="bg-yellow-400 p-2 rounded-full text-white">
                  <FaShoppingCart />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>

    </div>
  );
};

export default Brands;



