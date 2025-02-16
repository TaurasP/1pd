import React from "react";
import ProductItem from "./ProductItem";

interface ProductListProps {
  products: { id: number; name: string }[];
  addToCart: (product: { id: number; name: string }) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      <h2>Prekės</h2>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
