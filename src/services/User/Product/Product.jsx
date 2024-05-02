import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserNav from './../../../components/HeaderFooter/Navbar/UserNav';
import Footer from './../../../components/HeaderFooter/Footer/Footer';

import { Link } from 'react-router-dom';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  const addToCart = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <UserNav />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-8">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {products.map((product) => (
            <div key={product.giftId} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-2">{product.giftName}</h2>
                <p className="text-gray-700 mb-4">{product.giftDetails}</p>
                <img src={product.image} alt={product.giftName} className="w-full h-40 object-cover rounded-lg mb-4" />
                <div className="flex justify-between items-center">
                  <p className="text-gray-900 font-semibold">${product.giftPrice}</p>
                  <Link to="/Form" onClick={(e) => e.stopPropagation()}>
                    <button
                      className="bg-orange-950 hover:bg-orange-100 text-white font-bold py-2 px-4 rounded-full"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* {selectedProduct && <CartPage selectedProduct={selectedProduct} />} */}
    </div>
  );
};

export default Product;

