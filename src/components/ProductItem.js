import React from "react";

const ProductItem = ({ product, addToCart }) => {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Thêm vào giỏ hàng</button>
    </div>
  );
};

export default ProductItem;
