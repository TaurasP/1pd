import React from "react";

interface CartProps {
  cartItems: { id: number; name: string }[];
  removeFromCart: (product: { id: number; name: string }) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart" style={{ paddingTop: "30px" }}>
      <h2>Krepšelis</h2>
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
