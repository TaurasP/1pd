import React from "react";
import { Product } from "../interfaces/Product";

interface CartProps {
  cartItems: Product[];
  removeFromCart: (product: Product) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart" style={{ paddingTop: "30px" }}>
      <h2>Prekių krepšelis</h2>
      {cartItems.length === 0 ? (
        <p>Krepšelis tuščias</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="cart-item d-flex justify-content-between align-items-center mb-2"
          >
            <span>{item.name}</span>
            <button
              className="btn btn-danger"
              onClick={() => removeFromCart(item)}
            >
              Pašalinti iš krepšelio
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
