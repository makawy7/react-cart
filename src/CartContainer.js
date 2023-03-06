import CartItem from "./CartItem";
import { useCartContext } from "./AppContext";

function CartContainer() {
  const { cart } = useCartContext();
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
        {cart.length === 0 && <h4 className="empty-cart">is currently empty</h4>}
      </header>
      <div>
        {cart.map((c, idx) => (
          <CartItem key={idx} {...c} />
        ))}
      </div>
    </section>
  );
}

export default CartContainer;
