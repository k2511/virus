import { createContext, useState, useContext } from "react";
import { MdCategory } from "react-icons/md";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  let obj = []

  const [cart, setCart] = useState(obj);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]); 
  };

  return (
    <MyContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </MyContext.Provider>
  );
};
