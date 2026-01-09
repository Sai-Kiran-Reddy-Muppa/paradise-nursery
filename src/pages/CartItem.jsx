import { useDispatch, useSelector } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

export default function CartItem() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 && <p>Your cart is empty.</p>}

      {cartItems.map(item => (
        <div
          key={item.id}
          style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}
        >
          <img src={item.img} alt={item.name} />
          <h4>{item.name}</h4>
          <p>Unit Price: ₹{item.price}</p>
          <p>Total: ₹{item.price * item.quantity}</p>
          <p>Quantity: {item.quantity}</p>

          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}

      <h3>Total Cart Amount: ₹{totalAmount}</h3>

      <button onClick={() => alert("Coming Soon")}>Checkout</button>

      <br /><br />

      <Link to="/plants">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}
