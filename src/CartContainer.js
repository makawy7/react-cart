import CartItem from "./CartItem";
import { useCartContext } from "./AppContext";

function CartContainer() {
  const { state, dispatch } = useCartContext();
  const cart = state.data;
  const totalPrice = cart.reduce((acc, { price, amount }) => {
    return acc + amount * price;
  }, 0);
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
        {cart.length === 0 && (
          <h4 className="empty-cart">is currently empty</h4>
        )}
      </header>
      <div>
        {cart.map((c, idx) => (
          <CartItem key={idx} {...c} />
        ))}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${totalPrice.toFixed(2)}</span>
          </h4>
        </div>
        <button
          onClick={() => dispatch({ name: "clear" })}
          className="btn clear-btn"
        >
          clear cart
        </button>
      </footer>
    </section>
  );
}

export default CartContainer;
