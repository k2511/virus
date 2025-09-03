import { createContext, useState, useContext } from "react";
import { MdCategory } from "react-icons/md";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  let obj = [{name:'kaspersky', image:'https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg', price:'₹456.00', category:'' }, {name:'Quick Heal Total Security 1 PC 1 Year', image:'https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg', price:'₹456.00', category:'' },]

  const [cart, setCart] = useState(obj);

  const addToCart = (item) => {
    // console.log("item", item)
    setCart((prevCart) => [...prevCart, item]); 
  };

  return (
    <MyContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </MyContext.Provider>
  );
};
