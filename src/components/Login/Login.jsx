import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import abc from '../../PublicImages/wedding.webp';
import { login } from '../../services/auth';
import { jwtDecode } from 'jwt-decode';
import { setAuthentication, setToken } from '../../redux/authSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const res = await login(formData);
      const decodeToken = jwtDecode(res?.data);
      console.log(decodeToken.role);
      
      dispatch(setAuthentication(true));
      dispatch(setToken(res?.data?.accessToken));

      // Check the user's role or login type
      if (decodeToken.role === 'admin') {
        // Redirect admin to the admin dashboard
        window.location = '/SideNavbar';
      } else {
        // Redirect user to the user home page
        window.location = '/UserHome';
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white flex rounded-2xl shadow-lg max-w-3xl p-8 md:p-12 items-center">
        <div className="md:w-1/2 md:pr-8">
          <Link to="/">
            <h2 className="font-bold text-2xl text-[#391710]">Login</h2>
          </Link>
          <form className="flex flex-col gap-4 mt-6" onSubmit={handleLogin}>
            <input 
              className="p-3 rounded-xl border" 
              type="text" 
              name="username" 
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              placeholder="Username"
            />
            <div className="relative">
              <input 
                className="p-3 rounded-xl border w-full" 
                type="password" 
                name="password" 
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Password"
              />
            </div>
           
            <button type="submit" className="bg-[#391710] rounded-xl text-white py-3 hover:scale-105 duration-300 mt-6">Login</button>
          
          </form>

          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400"/>
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400"/>
          </div>

          <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
            <a href="#">Forgot your password?</a>
          </div>

          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <p>Don't have an account?</p>
            <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300 hover:text-white"><Link to="/SignUp">Register</Link></button>
          </div>
        </div>

        <div className="md:w-1/2 hidden md:block">
          <img className="rounded-2xl" src={abc} alt="Wedding"/>
        </div>
      </div>
    </section>
  );
};

export default Login;
