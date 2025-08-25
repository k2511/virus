// import React from "react";
// import { FaFacebookF, FaTwitter, FaYoutube, FaGlobe } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300 pt-12">
//       {/* Top Section */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        
//         {/* Brand */}
//         <div>
//           <h2 className="text-2xl font-bold text-white mb-4">
//             Anitvirus<span className="text-[#65A30D]">Guard</span>
//           </h2>
//           <p className="text-sm leading-relaxed">
//             Protecting your devices with next-gen antivirus & cybersecurity
//             solutions. Fast, reliable, and always up to date.
//           </p>
//         </div>

//         {/* Products */}
//         <div>
//           <h3 className="text-white font-semibold mb-4">Products</h3>
//           <ul className="space-y-2 text-sm">
//             <li><a href="#" className="hover:text-[#65A30D]">Antivirus Pro</a></li>
//             <li><a href="#" className="hover:text-[#65A30D]">Internet Security</a></li>
//             <li><a href="#" className="hover:text-[#65A30D]">Total Security Suite</a></li>
//             <li><a href="#" className="hover:text-[#65A30D]">Free Antivirus</a></li>
//           </ul>
//         </div>

//         {/* Company */}
//         <div>
//           <h3 className="text-white font-semibold mb-4">Company</h3>
//           <ul className="space-y-2 text-sm">
//             <li><a href="#" className="hover:text-[#65A30D]">About Us</a></li>
//             <li><a href="#" className="hover:text-[#65A30D]">Careers</a></li>
//             <li><a href="#" className="hover:text-[#65A30D]">Blog</a></li>
//             <li><a href="#" className="hover:text-[#65A30D]">Contact</a></li>
//           </ul>
//         </div>

//         {/* Support */}
//         <div>
//           <h3 className="text-white font-semibold mb-4">Support</h3>
//           <ul className="space-y-2 text-sm">
//             <li><a href="#" className="hover:text-[#65A30D]">Help Center</a></li>
//             <li><a href="#" className="hover:text-[#65A30D]">Downloads</a></li>
//             <li><a href="#" className="hover:text-[#65A30D]">Report an Issue</a></li>
//             <li><a href="#" className="hover:text-[#65A30D]">Privacy Policy</a></li>
//           </ul>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="border-t border-gray-700 mt-10 pt-6">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 text-center md:text-left">
          
//           {/* Copyright */}
//           <p className="text-sm">&copy; {new Date().getFullYear()} Antivirus. All rights reserved.</p>

//           {/* Socials */}
//           <div className="flex space-x-6 mt-4 md:mt-0 text-lg">
//             <a href="#" className="hover:text-[#65A30D]"><FaGlobe /></a>
//             <a href="#" className="hover:text-[#65A30D]"><FaTwitter /></a>
//             <a href="#" className="hover:text-[#65A30D]"><FaFacebookF /></a>
//             <a href="#" className="hover:text-[#65A30D]"><FaYoutube /></a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React,{useState} from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram , FaTwitter, FaGithub} from "react-icons/fa";


const Footer = () => {
  const [openRegion, setOpenRegion] = useState(null);

  const toggleRegion = (region) => {
    setOpenRegion(openRegion === region ? null : region);
  };

  const usefulLinks = [
    "Home", "About Us", "Certifications", "Careers", 
    "Our Presence", "Privacy Policy", "Security Reporting", 
  ];

  const presence =  [
    // "North America",
    // "India" ,
    "Printers & Ink",
    "Middle East",
    "Software",
    "Accesories",
    "Printers & Ink"
];

  const products = ["My Account", "Order Tracking", "Wish List", "Customer Service" ,"Returns / Exchange" , "Product Support"];

  const regionFlags = {
    "North America": "🇺🇸",
    "India": "🇮🇳",
    "Middle East": "🇦🇪"
  };
  return (
    <footer className="bg-header text-header-foreground w-full bg-gray-50 ">
    <div className="mx-auto max-w-6xl  px-4 py-16 ">
      <div className="flex flex-col sm:flex-row justify-between md:gap-8 gap-3">
          <div className="space-y-10 flex flex-col s ">
            <div>
                
                   {/* <img src="https://tse3.mm.bing.net/th/id/OIP.7tPeof3u0gM89FdlRjGBuwHaHZ?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3" alt="antivirus" className="w-12 h-10" /> */}
               <div className="">
                <h1 className="text-5xl text-gray-600 font-semibold">electro.
                    </h1></div>
            </div>
            <div className="flex flex-col">
                <span>Contact info</span>
                <span className="w-40 ">17 Princess Road, London, Greater London NW1 8JR, UK</span>
            </div>
            <div>
                <ul className="flex gap-5 text-2xl">
                    <li>
                    <FaFacebookF />
                    </li>
                    <li><FaInstagram /></li>
                    <li><FaTwitter/></li>
                    <li><FaGithub /></li>
                </ul>
            </div>
          </div>

          
        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Find it Fast</h3>
          <ul className="space-y-3">
            {usefulLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-header-foreground/70 hover:text-primary transition-colors text-sm flex items-center"
                >
                  <span className="mr-2">›</span>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Presence */}
        <div className="">
          <h3 className="text-lg font-semibold mb-6">Our Presence</h3>
          <div className="space-y-4">
            {presence.map((region, idx) => (
              <div key={idx} className="">
               
                   {region}
            
            

              </div>
            ))}
          </div>
        </div>

     
        <div>
          <h3 className="text-lg font-semibold mb-6">Customer Care</h3>
          <ul className="space-y-3">
            {products.map((product) => (
              <li key={product}>
                <a
                  href="#"
                  className="text-header-foreground/70 hover:text-primary transition-colors text-sm flex items-center"
                >
                  <span className="mr-2">›</span>
                  {product}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-header-foreground/20 mt-12 pt-8 text-center">
        <p className="text-header-foreground/60 text-sm">
          Copyright © 2025 antivirus
        </p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;