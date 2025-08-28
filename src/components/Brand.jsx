// import React, { useState } from "react";

// const Brands = () => {
//   const [val, setVal] = useState(0);
//   const list = [
//     {
//       name: "kasperky",
//       arr: [
//         {
//           img: "https://dantivirus.com/admin/model/pics/kas_standard.png",
//           name: "kasperky antivirus 1 pc 1 year",
//           price: "249.00",
//         },
//         {
//           img: "https://dantivirus.com/admin/model/pics/kas_plus.png",

//           name: "kasperky antivirus 1 pc 1 year",
//           price: "349.00",
//         },
//         {
//           img: "https://dantivirus.com/admin/model/pics/kas_premium.png",
//           name: "kasperky total security 1 user 1 years",
//           price: "409.00",
//         },
//         {
//           img: "https://dantivirus.com/admin/model/pics/kas_premium.png",
//           name: "kasperky total security 1 user 3 years",
//           price: "1399.00",
//         },
//         ,
//         {
//           img: "https://dantivirus.com/admin/model/pics/kas_premium.png",
//           name: "kasperky total security 3 user 3 years",
//           price: "1899.00",
//         },
//       ],
//     },
//     {
//       name: "Net Protector",
//       arr: [
//         {
//           img: "https://dantivirus.com/admin/model/pics/net-protector-total-security08_17_11_33_41.png",
//           name: "net protector total security  1 user 1 year",
//           price: "428.00",
//         },
//         ,
//         {
//           img: "https://dantivirus.com/admin/model/pics/net-protector-total-security08_17_11_33_41.png",
//           name: "renew net protector total security 1 pc-1 year",
//           price: "438.00",
//         },
//         ,
//         {
//           img: "https://dantivirus.com/admin/model/pics/net-protector-total-security08_17_11_30_17.png",
//           name: "net protector total security 1 user  year",
//           price: "998.00",
//         },
//         {
//           img: "https://dantivirus.com/admin/model/pics/net-protector-antivirus-pro.png",
//           name: "net protector antivirus 1 user 1 year",
//           price: "350.00",
//         },
//         {
//           img: "https://dantivirus.com/admin/model/pics/net-protector-total-security.png",
//           name: "upgrade net protector total security  1 user 3 year",
//           price: "998.00",
//         },
//       ],
//     },
//     {
//       name: "K7",
//       arr: [
//         {
//           img: "https://dantivirus.com/admin/model/pics/k7-antivirus-premuim.png",
//           name: "k7 antivirus premium  1 pc 1 year",
//           price: "205.00",
//         },
//         ,
//         {
//           img: "https://dantivirus.com/admin/model/pics/k7-total-security.png",
//           name: "k7 total security 1 pc  1 year",
//           price: "295.00",
//         },
//         ,
//         {
//           img: "https://dantivirus.com/admin/model/pics/k7-total-security.png",
//           name: "renew k7 total security 1 pc 1 year",
//           price: "379.00",
//         },
//         {
//           img: "https://dantivirus.com/admin/model/pics/k7-antivirus-premuim08_17_11_35_40.png",
//           name: "upgrade k7 antivirus premium 1 user 1 year",
//           price: "350.00",
//         },
//         {
//           img: "https://dantivirus.com/admin/model/pics/K7-Mobile-Security08_08_11_05_34.jpg",
//           name: "k7 total security 10 pc 1 year",
//           price: "1900.00",
//         },
//         {
//           img: "https://dantivirus.com/admin/model/pics/K7-Mobile-Security08_08_11_05_34.jpg",
//           name: "k7 total security 10 pc 1 year",
//           price: "29.00",
//         },
//       ],
//     },
//     {
//       name: "Mcafee",
//       arr: [
//         {
//           img: "https://dantivirus.com/admin/model/pics/mcafee-antivirus08_14_16_59_00.png",
//           name: "mcafee antivirus 1 user 1 year",
//           price: "238.00",
//         },
//         {
//           img: "https://dantivirus.com/admin/model/pics/mcafee-antivirus08_17_11_39_37.png",
//           name: "renew mcafee antivirus 1 user 1 year",
//           price: "249.00",
//         },
//         {
//           img: "https://dantivirus.com/admin/model/pics/mcafee-total-protection-security08_17_13_57_10.png",
//           name: "mcafee total protection 1 user 1 year",
//           price: "298.00",
//         },
//         {
//           img: "https://dantivirus.com/admin/model/pics/mcafee-antivirus08_17_11_40_25.png",
//           name: "mcafee antivirus 1 user 3 year",
//           price: "669.00",
//         },
//         {
//           img: "https://dantivirus.com/admin/model/pics/mcafee-total-protection-security08_17_13_57_52.png",
//           name: "mcafee total protection 1 user 3 year",
//           price: "1200.00",
//         },
//       ],
//     },
//     {
//       name: "Guardian",
//       arr: [
//         {
//           img: "https://dantivirus.com/admin/model/pics/guardian-total-security08_15_08_36_52.png",
//           name: "guardian total security 1 user 1 year",
//           price: "435.00",
//         },
//         {
//           img: "https://dantivirus.com/admin/model/pics/guardian-net-secure08_15_08_23_02.png",
//           name: "Renew guardian netsecure 1 pc 1 year",
//           price: "299.00",
//         },
//         {
//           img: "https://dantivirus.com/admin/model/pics/guardian-net-secure08_15_08_23_02.png",
//           name: "guardian net secure 1 user 1 year",
//           price: "299.00",
//         },
//       ],
//     },
//     {
//       name: "Mac secure",
//       arr: [{ img: "" }],
//     },
//     {
//       name: "Eset",
//       arr: [
//         {
//           img: "https://dantivirus.com/admin/model/pics/eset-node-antivirus08_15_08_44_11.png",
//           name: "eset node 32 antivirus 1 user 1 year",
//           price: "280.00",
//         },
//       ],
//     },
//     {
//       name: "EScan",
//       arr: [
//         {
//           img: "",
//         },
//       ],
//     },
//     {
//       name: "Bitdefender",
//       arr: [
//         {
//           img: "",
//         },
//       ],
//     },
//   ];

//   return (
//     <div>
//       <div className="min-h-screen bg-gray-50 p-4 md:p-10">
//         <div className="max-w-6xl flex items-center justify-center mx-auto">
//           {list.map((val, idx) => (
//             <div
//               key={idx}
//               className="w-fit inline mx-auto px-0 cursor-pointer"
//               onClick={() => setVal(idx)}
//             >
//               <span>{val.name}</span>
//             </div>
//           ))}
//         </div>

//         <div className="gap-6 items-stretch mt-6">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 w-full">
//             {list[val].arr.map((item, i) => (
//               <div
//                 key={i}
//                 className="bg-white border-2 border-black rounded-xl p-4 shadow flex flex-col justify-between items-center text-center h-full"
//               >
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="w-32 object-contain my-3"
//                 />
//                 <p className="text-sm  uppercase text-black">{item.name}</p>

//                 <p className="font-semibold text-blue-700">{item.price}</p>
//                 <div className="flex items-center justify-between w-full">
//                   <button className="bg-yellow-400 p-2 rounded-full text-white"></button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Brands;





import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
const Brands = () => {
  const [val, setVal] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
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

  const controller = {
    category: "Game Consoles",
    name: "Game Console Controller + USB 3.0 Cable",
    price: "$685,00",
    images: [
      "https://via.placeholder.com/400x300",
      "https://via.placeholder.com/400x300",
      "https://via.placeholder.com/400x300",
    ],
  };

  const topSelling = [
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
  ]

  const handleAddToCart = (item) => {
    // Add to cart functionality here
    console.log('Added to cart:', item);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
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
      {/* <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {list[val].arr.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 overflow-hidden group"
            >
      
              <div className="aspect-square bg-gray-50 flex items-center justify-center p-4">
                <img
                  src={item.img || "/api/placeholder/200/200"}
                  alt={item.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <div className="p-4">
             
                <div className="text-xs text-gray-500 mb-1">
                  {item.category}
                </div>

           
                <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                  {item.name}
                </h3>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-bold text-gray-900">
                    ${item.price}
                  </span>
                </div>

             
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
      </div> */}

    <section>

    <div className="min-h-screen bg-gray-50 p-4 md:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {/* Left Column */}
        <div className="grid grid-cols-2 gap-6 h-full">
          {products.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-4 shadow flex flex-col justify-between items-center text-center h-full"
            >
              <p className="text-sm text-gray-500">{item.category}</p>
              <p className="font-semibold text-blue-700">{item.name}</p>
              <img
                src={item.image}
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

        {/* Middle Column */}
        <div className="bg-white rounded-xl p-6 shadow flex flex-col justify-between items-center text-center h-full">
          <div>
            <p className="text-sm text-gray-500">{controller.category}</p>
            <p className="font-semibold text-blue-700 mb-4">
              {controller.name}
            </p>
            <img
              src={controller.images[selectedImage]}
              alt="controller"
              className="w-full max-h-80 object-contain mb-6"
            />
            <div className="flex space-x-4 mb-6 justify-center">
              {controller.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`thumb-${idx}`}
                  onClick={() => setSelectedImage(idx)}
                  className={`h-16 w-16 object-contain cursor-pointer border ${
                    selectedImage === idx
                      ? "border-black"
                      : "border-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between w-full">
              <span className="text-lg font-semibold">{controller.price}</span>
              <button className="bg-yellow-400 px-4 py-2 rounded-full text-white flex items-center gap-2">
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
            <div className="flex gap-6 text-sm text-gray-500 mt-4 justify-center">
              <span>Compare</span>
              <span>Add to Wishlist</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="grid grid-cols-2 gap-6 h-full">
          {products.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-4 shadow flex flex-col justify-between items-center text-center h-full"
            >
              <p className="text-sm text-gray-500">{item.category}</p>
              <p className="font-semibold text-blue-700">{item.name}</p>
              <img
                src={item.image}
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

<div>
         <div className="min-h-screen bg-gray-50 p-4 md:p-10">
  <div className="max-w-6xl flex items-center justify-center mx-auto">
    {list.map((val, idx) => (

<div
        key={idx}
        className="w-fit inline mx-auto px-0 cursor-pointer"
        onClick={() => setVal(idx)}
      >
        <span>{val.name}</span>
      </div>
    ))}
  </div>

  <div className="gap-6 items-stretch mt-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 w-full">
      {list[val].arr.map((item, i) => (
        <div
          key={i}
          className="bg-white border-2 border-black rounded-xl p-4 shadow flex flex-col justify-between items-center text-center h-full"
        >
          <p className="text-sm text-gray-500">{item.name}</p>
          <p className="font-semibold text-blue-700">{item.price}</p>
          <img
            src={item.img}
            alt={item.name}
            className="h-32 object-contain my-3"
          />
          <div className="flex items-center justify-between w-full">
            <button className="bg-yellow-400 p-2 rounded-full text-white">
            
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    </div>

    </div>
  );
};

export default Brands;