import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";

const App = () => {
  const [cart, setCart] = useState([]);

  // Thêm sản phẩm vào giỏ hàng
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Header cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<HomePage addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={<CartPage cart={cart} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </div>
  );
};

export default App;
