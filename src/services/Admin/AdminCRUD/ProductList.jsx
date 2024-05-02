import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ list, onDelete, onEdit }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {list.map(product => (
        <ProductItem key={product.giftid} product={product} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default ProductList;
