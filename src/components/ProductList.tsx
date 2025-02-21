import React from "react";
import { Product } from "../interfaces/Product";

interface ProductListProps {
  products: Product[];
  cartItems: Product[];
  addToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  cartItems,
  addToCart,
}) => {
  return (
    <div>
      <h2>Produktų sąrašas</h2>
      <ul className="list-group">
        {products.map((product) => (
          <li
            key={product.id}
            className="cart-item d-flex justify-content-between align-items-center mb-2"
          >
            {product.name}
            <button
              onClick={() => addToCart(product)}
              disabled={cartItems.some((item) => item.id === product.id)}
              className="btn btn-primary"
            >
              Pridėti į krepšelį
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
