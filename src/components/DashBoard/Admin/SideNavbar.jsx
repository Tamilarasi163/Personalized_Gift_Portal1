import React from "react";
import {Link} from 'react-router-dom'


const SideNavbar = () => {
  return (
    <div className="bg-orange-950 h-screen w-1/5 fixed  flex-auto">
      <div className="p-4">
        <h2 className="text-white text-lg font-semibold text-center">ADMIN</h2>
        <ul className="mt-10">
          <li className="mb-2">
            <a href="#" className="text-gray-300 text-center hover:text-white block">
              Home
            </a>
          </li>

          <Link to="/HomeAdmin">
          <li className="mb-2">
            <a href="#" className="text-gray-300 text-center hover:text-white block">
              Products
            </a>
          </li>
          </Link>

          <li className="mb-2">
            <a href="#" className="text-gray-300 text-center hover:text-white block">
              Categories
            </a>
          </li>

          <Link to="/UserOrders">
          <li className="mb-2">
            <a href="#" className="text-gray-300 text-center hover:text-white block">
               Orders
            </a>
          </li>
          </Link>
          <li className="mb-2">
            <a href="#" className="text-gray-300 text-center hover:text-white block">
              FeedBack
            </a>
          </li>
        </ul>
      </div>
          
    </div>
  );
};

export default SideNavbar;
