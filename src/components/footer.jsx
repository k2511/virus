import React,{useState} from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram , FaTwitter, FaGithub} from "react-icons/fa";
import logo from '../assets/images/logo.png'

const Footer = () => {
  const [openRegion, setOpenRegion] = useState(null);

  const toggleRegion = (region) => {
    setOpenRegion(openRegion === region ? null : region);
  };

  const usefulLinks = [
    "Home", "About Us", "Contact Us", "Certifications", "Careers", 
    "Our Presence", "Privacy Policy", "Security Reporting", 
  ];

  const presence =  [

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
               <div>
               
                <img src={logo} alt="logo" style={{height:"70px", width:"120px"}} />

               </div>
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