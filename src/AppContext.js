import { createContext, useContext, useReducer } from "react";
import { data } from "./data";

const CartContext = createContext();

function AppContext({ children }) {
  const initialState = {
    data: data,
  };

  const reducer = (state, action) => {
    switch (action.name) {
      case "increment":
        return {
          ...state,
          data: state.data.map((item) => {
            if (item.id === action.id) {
              return { ...item, amount: item.amount + 1 };
            }
            return item;
          }),
        };
      case "decrement":
        return {
          ...state,
          data: state.data.map((item) => {
            if (item.id === action.id) {
              return { ...item, amount: item.amount - 1 };
            }
            return item;
          }),
        };
      case "remove":
        return {
          ...state,
          data: state.data.filter((item) => item.id !== action.id),
        };
      default:
        break;
    }
    return state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ cart: state.data, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
export default AppContext;
