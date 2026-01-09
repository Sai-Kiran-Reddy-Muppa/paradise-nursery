import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Snake Plant", price: 300, category: "Indoor", img: "https://via.placeholder.com/120" },
  { id: 2, name: "Peace Lily", price: 400, category: "Indoor", img: "https://via.placeholder.com/120" },

  { id: 3, name: "Aloe Vera", price: 200, category: "Succulent", img: "https://via.placeholder.com/120" },
  { id: 4, name: "Jade Plant", price: 250, category: "Succulent", img: "https://via.placeholder.com/120" },

  { id: 5, name: "Areca Palm", price: 500, category: "Outdoor", img: "https://via.placeholder.com/120" },
  { id: 6, name: "Money Plant", price: 150, category: "Outdoor", img: "https://via.placeholder.com/120" }
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Our Plants</h2>

      {plants.map(plant => (
        <div
          key={plant.id}
          style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}
        >
          <img src={plant.img} alt={plant.name} />
          <h4>{plant.name}</h4>
          <p>Category: {plant.category}</p>
          <p>Price: ₹{plant.price}</p>

          <button
            disabled={cartItems.some(item => item.id === plant.id)}
            onClick={() => dispatch(addToCart(plant))}
          >
            {cartItems.some(item => item.id === plant.id)
              ? "Added to Cart"
              : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
}
