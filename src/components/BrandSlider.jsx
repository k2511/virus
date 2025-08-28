// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// // Import your brand logos
// import quickheal from "../assets/brands/OIP.webp";
// import kaspersky from "../assets/brands/ks.jpeg";
// import netprotector from "../assets/brands/ne1.webp";
// import k7 from "../assets/brands/k7.webp";
// import mcafee from "../assets/brands/mac.webp";
// import guardian from "../assets/brands/gua.webp";
// import maxsecure from "../assets/brands/max.webp";
// import eset from "../assets/brands/eset.webp";
// import escan from "../assets/brands/escan.webp";
// import bitdefender from "../assets/brands/bitdefender.webp";

// const brands = [
//   { name: "Quick Heal", logo: quickheal },
//   { name: "Kaspersky", logo: kaspersky },
//   { name: "Net Protector", logo: netprotector },
//   { name: "K7", logo: k7 },
//   { name: "Mcafee", logo: mcafee },
//   { name: "Guardian", logo: guardian },
//   { name: "Max Secure", logo: maxsecure },
//   { name: "Eset", logo: eset },
//   { name: "EScan", logo: escan },
//   { name: "Bitdefender", logo: bitdefender },
// ];

// export default function BrandSlider() {
//   return (
//     <div className="w-full py-6 relative">
//       <Swiper
//         modules={[Navigation]}
//         spaceBetween={20}
//         slidesPerView={5}
//         navigation
//         loop
//         breakpoints={{
//           320: { slidesPerView: 2 },
//           640: { slidesPerView: 3 },
//           1024: { slidesPerView: 5 },
//         }}
//       >
//         {brands.map((brand, index) => (
//           <SwiperSlide key={index}>
//             <div className="flex items-center justify-center gap-2 group cursor-pointer">
//               <img
//                 src={brand.logo}
//                 alt={brand.name}
//                 className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
//               />
//               <span className="text-sm text-gray-700 group-hover:text-black whitespace-nowrap">
//                 {brand.name}
//               </span>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Make navigation arrows smaller */}
//       <style>
//         {`
//           .swiper-button-prev, .swiper-button-next {
//             color: #333 !important;
//             width: 25px !important;
//             height: 25px !important;
//           }
//           .swiper-button-prev::after, .swiper-button-next::after {
//             font-size: 16px !important;
//             font-weight: bold;
//           }
//         `}
//       </style>
//     </div>
//   );
// }




import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Import your brand logos
import quickheal from "../assets/brands/OIP.webp";
import kaspersky from "../assets/brands/ks.jpeg";
import netprotector from "../assets/brands/ne1.webp";
import k7 from "../assets/brands/k7.webp";
import mcafee from "../assets/brands/mac.webp";
import guardian from "../assets/brands/gua.webp";
import maxsecure from "../assets/brands/max.webp";
import eset from "../assets/brands/eset.webp";
import escan from "../assets/brands/escan.webp";
import bitdefender from "../assets/brands/bitdefender.webp";

const brands = [
  { name: "Quick Heal", logo: quickheal },
  { name: "Kaspersky", logo: kaspersky },
  { name: "Net Protector", logo: netprotector },
  { name: "K7", logo: k7 },
  { name: "Mcafee", logo: mcafee },
  { name: "Guardian", logo: guardian },
  { name: "Max Secure", logo: maxsecure },
  { name: "Eset", logo: eset },
  { name: "EScan", logo: escan },
  { name: "Bitdefender", logo: bitdefender },
];

export default function BrandSlider() {
  return (
    <div className="w-full py-6 flex justify-center">
      <div className="w-full max-w-6xl relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={5}
          navigation
          loop
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center gap-2 group cursor-pointer">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                />
                <span className="text-sm text-gray-700 group-hover:text-black whitespace-nowrap">
                  {brand.name}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Make navigation arrows smaller */}
        <style>
          {`
            .swiper-button-prev, .swiper-button-next {
              color: #333 !important;
              width: 25px !important;
              height: 25px !important;
            }
            .swiper-button-prev::after, .swiper-button-next::after {
              font-size: 16px !important;
              font-weight: bold;
            }
          `}
        </style>
      </div>
    </div>
  );
}
