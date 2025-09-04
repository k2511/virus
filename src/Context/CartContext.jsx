import { createContext, useState, useContext } from "react";
import { MdCategory } from "react-icons/md";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  let obj = []
  
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState(obj);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]); 
  };

  return (
    <MyContext.Provider value={{ cart, setCart, addToCart,total, setTotal }}>
      {children}
    </MyContext.Provider>
  );
};
