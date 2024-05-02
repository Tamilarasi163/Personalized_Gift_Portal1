import React from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  const submitHandler = e => {
    e.preventDefault();
    navigate("/new-app/user/home");
  }
  return (
    <div className="flex h-screen items-center justify-center" style={{backgroundImage: "url('../images/background.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
      <div className="bg-white bg-opacity-80 p-12 rounded shadow-md w-96"> {/* Increased padding and set width to 96 */}
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
            <input type="email" id="email" className="form-input mt-1 block w-full" placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
            <input type="password" id="password" className="form-input mt-1 block w-full" placeholder="Enter your password" />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200">Login</button>
          <div className="signup-link">
            <p>Not registered? <Link to="/new-app/register">Sign Up</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
