import React, { useState } from 'react';
import axios from 'axios';

const ProductItem = ({ product, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState(product);

  const handleSaveEdit = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/api/gifts/${editedProduct.giftid}`, editedProduct);
      const updatedProduct = response.data;
      onEdit(updatedProduct);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className="bg-white rounded shadow-md p-4 relative">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedProduct.giftName}
            onChange={(e) => setEditedProduct({ ...editedProduct, giftName: e.target.value })}
            className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
          />
        
          <textarea
            value={editedProduct.giftDetails}
            onChange={(e) => setEditedProduct({ ...editedProduct, giftDetails: e.target.value })}
            className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
          ></textarea>
          <input
            type="number"
            value={editedProduct.giftPrice}
            onChange={(e) => setEditedProduct({ ...editedProduct, giftPrice: e.target.value })}
            className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
          />
          <button onClick={handleSaveEdit} className="px-2 py-1 bg-orange-950 text-white rounded mr-2">Save</button>
        </>
      ) : (
        <>
          <button onClick={() => onDelete(product.giftid)} className="absolute top-0 right-0 px-2 py-1 bg-orange-950 text-white rounded">Delete</button>
          <button onClick={() => setIsEditing(true)} className="absolute top-0 left-0 px-2 py-1 bg-gray-500 text-white rounded">Edit</button>
      
          <h3 className="text-xl font-bold mb-2">Name: {product.giftName}</h3>
          <p className="text-gray-700 mb-2">Price: ${product.giftPrice}</p>
          <p className="text-gray-700 mb-2">Details: {product.giftDetails}</p>
          {product.image && <img src={product.image} alt="Product" className="mb-2" />}
        </>
      )}
    </div>
  );
};

export default ProductItem;

