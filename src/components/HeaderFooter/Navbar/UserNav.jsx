import React from 'react'
import { Link } from 'react-router-dom'
import abc from '../../../PublicImages/lo.jpg'


const UserNav = () => {
  return (
    <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-600 mb-4 md:mb-0">
    <img src={abc} alt="Logo" className="w-10 h-10 rounded-full" />

      <span class="ml-3 text-xl">Gift Wonders</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
     
      <Link to="/Profile">
      <a class="mr-5 hover:text-gray-900">Profile</a>
      </Link>
      <Link to="/Product">
      <a class="mr-5 hover:text-gray-900">Products</a>
      </Link>
      <a class="mr-5 hover:text-gray-900">Orders</a>
      <Link to="/CartPage">
      <a class="mr-5 hover:text-gray-900">Cart</a>
      </Link>

    </nav>
    <Link to="/">
    <button class="inline-flex items-center bg-orange-950 border-0 py-1 px-3 focus:outline-none hover:bg-orange-100 rounded text-gray-50 text-base mt-4 md:mt-0">LOG OUT
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    </Link>
  </div>
</header>

  )
}

export default UserNav