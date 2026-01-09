import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import ProductList from "./pages/ProductList";
import CartItem from "./pages/CartItem";
import AboutUs from "./pages/AboutUs";
import "./App.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <h1>Welcome to Paradise Nursery</h1>
      <p>Your one-stop shop for beautiful plants</p>
      <button onClick={() => navigate("/plants")}>Get Started</button>
    </div>
  );
};

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/plants">Plants</Link> |{" "}
        <Link to="/cart">Cart</Link>
      </nav>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
