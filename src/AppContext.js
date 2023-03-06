import {
  useEffect,
  createContext,
  useContext,
  useReducer,
  useCallback,
} from "react";

const url = "https://course-api.com/react-useReducer-cart-project";
const CartContext = createContext();

function AppContext({ children }) {
  const initialState = {
    isLoading: true,
    data: [],
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
      case "clear":
        return {
          ...state,
          data: [],
        };
      case "fetching":
        return {
          ...state,
          isLoading: false,
          data: action.data,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const loadData = useCallback(async () => {
    console.log("fetching!!");
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ name: "fetching", data: data });
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
export default AppContext;
