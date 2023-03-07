import CartItem from "./CartItem";
import { useCartContext } from "./AppContext";

function CartContainer() {
  const { state, dispatch } = useCartContext();
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
        {state.data.length === 0 && (
          <h4 className="empty-cart">is currently empty</h4>
        )}
      </header>
      <div>
        {state.data.map((c, idx) => (
          <CartItem key={idx} {...c} />
        ))}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${state.totalPrice.toFixed(2)}</span>
          </h4>
        </div>
        <button
          onClick={() => dispatch({ name: "CLEAR" })}
          className="btn clear-btn"
        >
          clear cart
        </button>
      </footer>
    </section>
  );
}

export default CartContainer;
