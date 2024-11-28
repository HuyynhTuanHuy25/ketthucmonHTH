import React, { useState } from "react";
import ProductList from "../components/ProductList";

const HomePage = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Hàm để xử lý thay đổi trong ô tìm kiếm
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <header></header>

      <h2>Sản Phẩm</h2>
      <ProductList addToCart={addToCart} searchTerm={searchTerm} />
    </div>
  );
};

export default HomePage;
