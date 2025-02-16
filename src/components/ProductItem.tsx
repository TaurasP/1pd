import React from 'react';

interface ProductItemProps {
  product: { id: number, name: string };
  addToCart: (product: { id: number, name: string }) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, addToCart }) => {
  return (
    <div className="product-item d-flex justify-content-between align-items-center mb-2">
      <span>{product.name}</span>
      <button className="btn btn-primary" onClick={() => addToCart(product)}>Pridėti į krepšelį</button>
    </div>
  );
};

export default ProductItem;