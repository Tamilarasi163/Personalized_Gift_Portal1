import React from 'react';

const Profile = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">My Profile</h1>
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-1/3">
            <img src="https://via.placeholder.com/150" alt="Profile" className="rounded-lg mb-4" />
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">Personal Information</h2>
              <p className="text-sm text-gray-600 mb-1">Name: John Doe</p>
              <p className="text-sm text-gray-600 mb-1">Email: johndoe@example.com</p>
              <p className="text-sm text-gray-600 mb-1">Address: 123 Main St, City, Country</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">Account Settings</h2>
              <button className="text-white bg-orange-950 border-0 py-2 px-8 focus:outline-none hover:bg-orange-950 rounded text-lg mb-2">Edit Profile</button>
              <button className="text-white bg-orange-950 border-0 py-2 px-8 focus:outline-none hover:bg-orange-950 rounded text-lg">Change Password</button>
            </div>
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Order History</h2>
            <div className="border-t border-gray-200">
              <div className="flex justify-between items-center py-4 border-b border-gray-200">
                <div>
                  <p className="text-gray-700">#123456</p>
                  <p className="text-sm text-gray-600">Date: Jan 1, 2024</p>
                </div>
                <div>
                  <p className="text-gray-700">$99.99</p>
                  <p className="text-sm text-gray-600">Status: Delivered</p>
                </div>
                <button className="text-sm text-indigo-600 hover:text-indigo-700">View Details</button>
              </div>
              {/* More orders can be added here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Profile = () => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   const fetchUserData = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/user');
//       setUserData(response.data);
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto py-12">
//       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
//         <h1 className="text-3xl font-semibold text-gray-800 mb-6">My Profile</h1>
//         {userData ? (
//           <div className="flex flex-col md:flex-row items-start">
//             <div className="md:w-1/3">
//               <img src="https://via.placeholder.com/150" alt="Profile" className="rounded-lg mb-4" />
//               <div className="mb-4">
//                 <h2 className="text-xl font-semibold text-gray-700 mb-2">Personal Information</h2>
//                 <p className="text-sm text-gray-600 mb-1">Name: {userData.userName}</p>
//                 <p className="text-sm text-gray-600 mb-1">Email: {userData.email}</p>
//                 {/* Add more user information here */}
//               </div>
//               <div>
//                 <h2 className="text-xl font-semibold text-gray-700 mb-2">Account Settings</h2>
//                 <button className="text-white bg-orange-950 border-0 py-2 px-8 focus:outline-none hover:bg-orange-950 rounded text-lg mb-2">Edit Profile</button>
//                 <button className="text-white bg-orange-950 border-0 py-2 px-8 focus:outline-none hover:bg-orange-950 rounded text-lg">Change Password</button>
//               </div>
//             </div>
//             <div className="md:w-2/3 md:pl-8">
//               <h2 className="text-xl font-semibold text-gray-700 mb-4">Order History</h2>
//               {/* Add order history here */}
//             </div>
//           </div>
//         ) : (
//           <p>Loading user data...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import React, { Component } from 'react';
// import axios from 'axios';

// class EditProfile extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       editing: false,
//       user: {
//         userId: '',
//         userName: '',
//         email: '',
//         password: '',
//         mobile: '',
//         userRole: '',
//       },
//     };
//   }

//   componentDidMount() {
//     this.fetchUserData();
//   }

//   fetchUserData = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/user/{3}'); // Replace {userId} with the actual user ID
//       this.setState({ user: response.data });
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };

//   handleEditClick = () => {
//     this.setState({ editing: true });
//   };

//   handleCancelClick = () => {
//     this.setState({ editing: false });
//   };

//   handleSubmit = async () => {
//     try {
//       // Send updated user data to the backend
//       await axios.put(`http://localhost:8080/api/user/${this.state.user.userId}`, this.state.user);
//       // After submission, hide the form
//       this.setState({ editing: false });
//     } catch (error) {
//       console.error('Error updating user data:', error);
//     }
//   };

//   handleInputChange = (field, value) => {
//     this.setState((prevState) => ({
//       user: {
//         ...prevState.user,
//         [field]: value,
//       },
//     }));
//   };

//   render() {
//     const { userName, email, password, mobile, userRole, editing } = this.state.user;

//     return (
//       <div className="flex-1 p-0">
//         {/* Edit Profile Button */}
//         <button className="bg-Teal text-white px-4 py-2 rounded-full" onClick={this.handleEditClick}>
//           Edit Profile
//         </button>

//         {/* Edit Profile Form */}
//         {editing && (
//           <div className="mt-4">
//             <table className="border-collapse w-full">
//               <tbody>
//                 <tr>
//                   <td className="p-2">User Name</td>
//                   <td className="p-2">
//                     <input
//                       type="text"
//                       value={userName}
//                       onChange={(e) => this.handleInputChange('userName', e.target.value)}
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="p-2">Email</td>
//                   <td className="p-2">
//                     <input
//                       type="email"
//                       value={email}
//                       onChange={(e) => this.handleInputChange('email', e.target.value)}
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="p-2">Password</td>
//                   <td className="p-2">
//                     <input
//                       type="password"
//                       value={password}
//                       onChange={(e) => this.handleInputChange('password', e.target.value)}
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="p-2">Mobile</td>
//                   <td className="p-2">
//                     <input
//                       type="text"
//                       value={mobile}
//                       onChange={(e) => this.handleInputChange('mobile', e.target.value)}
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="p-2">User Role</td>
//                   <td className="p-2">
//                     <input
//                       type="text"
//                       value={userRole}
//                       onChange={(e) => this.handleInputChange('userRole', e.target.value)}
//                     />
//                   </td>
//                 </tr>
//               </tbody>
//             </table>

//             <div className="mt-4">
//               <button className="bg-Teal text-white px-4 py-2 rounded-full" onClick={this.handleSubmit}>
//                 Submit
//               </button>
//               <button className="ml-2 px-4 py-2 rounded-full" onClick={this.handleCancelClick}>
//                 Cancel
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default EditProfile;


