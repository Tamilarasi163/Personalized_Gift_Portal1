// import React, { useState } from 'react';
// import img from '../../PublicImages/wedding.webp'
// import { Link } from 'react-router-dom';
// const SignUp = () => {
//   const [userType, setUserType] = useState("user");

//   const handleUserTypeChange = (e) => {
//     setUserType(e.target.value);
//   };

//   return (
//     <section className="bg-gray-150 min-h-screen flex items-center justify-center">
//       <div className="bg-gray-50 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
//         <div className="md:w-1/2 px-8 md:px-16">
//           <h2 className="font-bold text-2xl text-[#391710] mb-8">Sign Up</h2>

//           <form className="flex flex-col gap-6">
//             <input className="p-3 rounded-xl border bg-white" type="text" name="name" placeholder="Name" />
//             <input className="p-3 rounded-xl border bg-white" type="email" name="email" placeholder="Email" />
    
//             <div className="relative">
//               <input className="p-3 rounded-xl border w-full bg-white" type="password" name="password" placeholder="Password" />
//               <input className="p-3 rounded-xl border w-full bg-white mt-4" type="password" name="confirmPassword" placeholder="Confirm Password" />
//             </div>

//             <div className="flex gap-4">
//               <label className="flex items-center">
//                 <input type="radio" name="userType" value="user" checked={userType === "user"} onChange={handleUserTypeChange} />
//                 <span className="ml-2">User</span>
//               </label>
//               <label className="flex items-center">
//                 <input type="radio" name="userType" value="admin" checked={userType === "admin"} onChange={handleUserTypeChange} />
//                 <span className="ml-2">Admin</span>
//               </label>
//             </div>
//             <Link to="/">
//             <button className="bg-[#391710] rounded-xl text-white py-3 hover:scale-105 duration-300 mt-6">Sign Up</button>
//             </Link>
            
//           </form>
//         </div>

//         <div className="md:block hidden w-1/2">
//           <img className="rounded-2xl" src={img} alt="Wedding" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SignUp;


import React, { useState } from 'react';
import img from '../../PublicImages/wedding.webp';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    mobile: "",
    userRole: "user" // Default to user
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/user', formData);
      console.log(response.data); // Handle response
      // Redirect or show success message
    } catch (error) {
      console.error('Error:', error); // Handle error
    }
  };

  return (
    <section className="bg-gray-150 min-h-screen flex items-center justify-center">
      <div className="bg-gray-50 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#391710] mb-8">Sign Up</h2>

          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <input className="p-3 rounded-xl border bg-white" type="text" name="userName" value={formData.userName} onChange={handleChange} placeholder="Username" />
            <input className="p-3 rounded-xl border bg-white" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            <input className="p-3 rounded-xl border bg-white" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
            <input className="p-3 rounded-xl border bg-white" type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile" />

            <div className="flex gap-4">
              <label className="flex items-center">
                <input type="radio" name="userRole" value="user" checked={formData.userRole === "user"} onChange={handleChange} />
                <span className="ml-2">User</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="userRole" value="admin" checked={formData.userRole === "admin"} onChange={handleChange} />
                <span className="ml-2">Admin</span>
              </label>
            </div>
            <button type="submit" className="bg-[#391710] rounded-xl text-white py-3 hover:scale-105 duration-300 mt-6">Sign Up</button>
          </form>
        </div>

        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl" src={img} alt="Wedding" />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
