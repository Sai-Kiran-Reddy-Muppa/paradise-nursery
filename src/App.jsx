import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ProductList from "./pages/ProductList";
import CartItem from "./pages/CartItem";
import { useSelector } from "react-redux";
import "./App.css";

export default function App() {
  const cartCount = useSelector(state =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/plants">Plants</Link> |{" "}
        <Link to="/cart">Cart ({cartCount})</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div className="landing">
              <AboutUs />
              <Link to="/plants">
                <button>Get Started</button>
              </Link>
            </div>
          }
        />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </BrowserRouter>
  );
}
