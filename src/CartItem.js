import { useCartContext } from "./AppContext";

function CartItem({ id, title, price, img, amount }) {
  const { dispatch } = useCartContext();
  const incrementItem = () => {
    dispatch({ name: "ADD_MORE", payload: id });
  };
  const decrementItem = () => {
    if (amount === 1) {
      removeItem();
    } else {
      dispatch({ name: "DELETE_ONE", payload: id });
    }
  };
  const removeItem = () => {
    dispatch({ name: "REMOVE", payload: id });
  };
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button onClick={() => removeItem(id)} className="remove-btn">
          remove
        </button>
      </div>
      <div>
        <button onClick={() => incrementItem(id)} className="amount-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"></path>
          </svg>
        </button>
        <p className="amount">{amount}</p>
        <button onClick={() => decrementItem(id)} className="amount-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
          </svg>
        </button>
      </div>
    </article>
  );
}

export default CartItem;
