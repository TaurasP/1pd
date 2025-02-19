import React from "react";
import { Product } from "../interfaces/Product";

interface ProductItemProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, addToCart }) => {
  return (
    <div className="product-item d-flex justify-content-between align-items-center mb-2">
      <span>{product.name}</span>
      <button className="btn btn-primary" onClick={() => addToCart(product)}>
        Pridėti į krepšelį
      </button>
    </div>
  );
};

export default ProductItem;
