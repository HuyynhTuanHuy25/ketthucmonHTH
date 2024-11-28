import React, { useState } from "react";

const CheckoutForm = ({ cart }) => {
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed! Shipping to: ${address}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Shipping Address:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </label>
      <button type="submit">Place Order</button>
    </form>
  );
};

export default CheckoutForm;
