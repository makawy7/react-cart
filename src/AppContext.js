import {
  useEffect,
  createContext,
  useContext,
  useReducer,
  useCallback,
} from "react";
import { reducer } from "./reducer";
const url = "https://course-api.com/react-useReducer-cart-project";
const CartContext = createContext();

function AppContext({ children }) {
  const initialState = {
    isLoading: true,
    data: [],
    totalAmount: 0,
    totalPrice: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const loadData = useCallback(async () => {
    console.log("fetching!!");
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ name: "FETCH", payload: data });
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    const total_amount = state.data.reduce((acc, { amount }) => {
      return acc + amount;
    }, 0);

    const total_price = state.data.reduce((acc, { amount, price }) => {
      return acc + price * amount;
    }, 0);
    dispatch({ name: "CAL_AMOUNT", payload: total_amount });
    dispatch({ name: "CAL_PRICE", payload: total_price });
  }, [state.data]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
export default AppContext;
