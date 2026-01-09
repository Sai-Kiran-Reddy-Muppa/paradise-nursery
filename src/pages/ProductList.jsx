import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plantData = {
  Indoor: [
    { id: 1, name: "Snake Plant", price: 250 },
    { id: 2, name: "Peace Lily", price: 300 }
  ],
  Outdoor: [
    { id: 3, name: "Rose Plant", price: 200 },
    { id: 4, name: "Hibiscus", price: 220 }
  ],
  Succulents: [
    { id: 5, name: "Aloe Vera", price: 180 },
    { id: 6, name: "Cactus", price: 150 }
  ]
};

const ProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const isInCart = (id) => cart.some(item => item.id === id);

  return (
    <div>
      <h1>Plant Categories</h1>

      {Object.keys(plantData).map(category => (
        <div key={category}>
          <h2>{category}</h2>

          {plantData[category].map(plant => (
            <div key={plant.id}>
              <p>{plant.name} - ₹{plant.price}</p>
              <button
                disabled={isInCart(plant.id)}
                onClick={() => dispatch(addItem(plant))}
              >
                {isInCart(plant.id) ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
