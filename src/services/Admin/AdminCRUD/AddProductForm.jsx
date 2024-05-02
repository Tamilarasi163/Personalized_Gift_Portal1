import React, { useState } from 'react';
import axios from 'axios';

const AddProductForm = ({ handleAddProduct }) => {
  const [newProduct, setNewProduct] = useState({ giftName: '', giftDetails: '', giftPrice: '', image: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prevProduct => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/gifts', newProduct);
      const addedGift = response.data;
      handleAddProduct(addedGift);
      setNewProduct({ giftName: '', giftDetails: '', giftPrice: '', image: '' });
    } catch (error) {
      console.error('Error adding gift:', error);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Add New Gift</h2> 
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="giftName"
          value={newProduct.giftName}
          onChange={handleChange}
          placeholder="Name"
          className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
        />
      
        <input
          type="text"
          name="giftDetails"
          value={newProduct.giftDetails}
          onChange={handleChange}
          placeholder="Details"
          className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
        />
        <input
          type="number"
          name="giftPrice"
          value={newProduct.giftPrice}
          onChange={handleChange}
          placeholder="Price"
          className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="image" 
          value={newProduct.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
        />
        <button type="submit" className="px-2 py-1 bg-orange-950 text-white rounded">Add Gift</button>
      </form>
    </div>
  );
};

export default AddProductForm;
