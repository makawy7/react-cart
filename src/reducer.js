export const reducer = (state, action) => {
  switch (action.name) {
    case "ADD_MORE":
      return {
        ...state,
        data: state.data.map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount + 1 };
          }
          return item;
        }),
      };
    case "DELETE_ONE":
      return {
        ...state,
        data: state.data.map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        }),
      };
    case "REMOVE":
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    case "CLEAR":
      return {
        ...state,
        data: [],
      };
    case "FETCH":
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case "CAL_AMOUNT":
      return {
        ...state,
        totalAmount: action.payload,
      };
    case "CAL_PRICE":
      return {
        ...state,
        totalPrice: action.payload,
      };
    default:
      return state;
  }
};
