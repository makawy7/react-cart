import { useState, createContext, useContext } from "react";
import data from "./data";

const CartContext = createContext();

function AppContext({ children }) {
  const [cart, setCart] = useState(data);
  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
export default AppContext;
