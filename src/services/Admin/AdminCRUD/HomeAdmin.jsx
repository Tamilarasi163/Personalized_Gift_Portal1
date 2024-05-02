import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {

      const response = await axios.get('http://localhost:8080/api/gifts');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleAddProduct = async (newProduct) => {
    const token = sessionStorage.getItem('token')
    try {
      const response = await axios.post('http://localhost:8080/api/gifts', newProduct);
      const addedProduct = response.data;
      setProducts(prevProducts => [...prevProducts, addedProduct]);
    } catch (error) {
      console.error('Error adding product:', error);
    }

  //    const handleAddProduct = (newProduct) => 
  //    {
  //       setProducts(prevProducts => [...prevProducts, newProduct]);
  //    };
   };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:8080/api/gifts/${productId}`);
      setProducts(prevProducts => prevProducts.filter(product => product.giftid !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

const handleEditProduct = async (updatedProduct) => {
  try {
    const token = sessionStorage.getItem('token');

    const headers = {
      'Content-Type': 'application/json' // Specify the content type of the request body
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await axios.put(`http://localhost:8080/api/gifts/${updatedProduct.giftid}`, updatedProduct, { headers });

    const updatedProductData = response.data;

    // Assuming setProducts is a state setter function
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.giftid === updatedProductData.giftid ? updatedProductData : product
      )
    );
  } catch (error) {
    console.error('Error updating product:', error);
  }
};



  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8">List of Products</h1>
      <ProductList list={products} onDelete={handleDeleteProduct} onEdit={handleEditProduct} />
      <AddProductForm handleAddProduct={handleAddProduct} />
    </div>
  );
};

export default Home;
