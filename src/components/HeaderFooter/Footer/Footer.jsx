import React from 'react';
import abc from '../../../PublicImages/lo.jpg'


function Footer() {
  return (
    <footer className="text-gray-600 body-font bg-orange-950">
      <div className="container mx-auto px-5 py-12 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col md:justify-between">
        <div className="w-full md:w-1/3">
          <div className="flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-50" href="/">
              <img src={abc} alt="Logo" className="w-10 h-10 rounded-full" />
              <span className="ml-3 text-xl">Gift Wonders</span>
            </a>
    
          </div>
        </div>
        <div className="w-full md:w-1/3 mt-8 md:mt-0">
          <div className="text-center md:text-left">
            <h2 className="text-gray-100 mb-4">Quick Links</h2>
            <ul className="flex justify-center md:justify-start">
              <li className="mr-6">
                <a href="#" className="text-gray-400 hover:text-gray-200">Home</a>
              </li>
              <li className="mr-6">
                <a href="#" className="text-gray-400 hover:text-gray-200">About</a>
              </li>
              <li className="mr-6">
                <a href="#" className="text-gray-400 hover:text-gray-200">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/3 mt-8 md:mt-0">
          <div className="text-center md:text-left">
            <h2 className="text-gray-100 mb-4">Follow Us</h2>
            <div className="flex justify-center md:justify-start">
              <a href="https://www.instagram.com/giftwonders" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 mr-4">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
