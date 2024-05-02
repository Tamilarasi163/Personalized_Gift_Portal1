// import { lazy } from "react"
// import LazyLayout from "./components/LazyLayout"
// import UserLayout from "./pages/user/UserLayout"
// // import Navbar from "./components/ui/Navbar"
// const LazyLogin=lazy(()=>import("./pages/auth/login"))
// const LazyReg=lazy(()=>import("./pages/auth/register"))
// const LazyHome=lazy(()=>import("./components/Home/Home"))
// //const LazyAbout=lazy(()=>import("./pages/user/About"))

// const Userroutes=()=>{
  //   return(
    //     <UserLayout>
    //     <Routes>
//     <Route path="/home" element={<LazyLayout component={LazyHome}/>}/>
//     {/* <Route path="/about" element={<LazyLayout component={LazyAbout}/>}/> */}
//     </Routes>
//     </UserLayout>
//   )
// }
// function App() {
  //   return (
    //     <div>
    //     {/* <Navbar/> */}
    //     <Routes>
    //       <Route exact path="/" element={<Navigate to="/new-app/login"/>}/>
    //       <Route path="/new-app/login" element={<LazyLayout component={LazyLogin}/>}/>
    //       <Route path="/new-app/register" element={<LazyLayout component={LazyReg}/>}/>
    //       <Route path="/new-app/user/*" element={<Userroutes/>}/>
    //     </Routes>
    
    //     </div>
    //   )
    // }
    
    // export default App
    
    
    //import React from 'react'
    //import Login from './components/Login/Login'
    //import HeroSection from './components/Home/HomeComponents/Hero/Hero'
    
    
    // const App = () => {
      //   return (
        //     <div>
        //      <HeroSection/>
//     </div>
//   )
// }

// export default App

//import React from 'react'

// import Navbar from './components/HeaderFooter/Navbar/Navbar'
// import Footer from './components/HeaderFooter/Footer/Footer'
// import Form from './services/User/Product/Form'
// //import Login from './components/Login/Login'
// // //import Profile from './components/Profile/Profile'

// // import SignUp from './components/Sign Up/SignUp'


// function App() {
//   return (
  //     <div>
//       <Navbar/>
//       <Form/>
//       <Footer/>
//     </div>
//   )
// }

// export default App

import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/Sign Up/SignUp'
import Product from './services/User/Product/Product'
import Profile from './services/User/Profile/Profile';
import UserHome from './components/Home/UserHome/UserHome';
import SideNavbar from './components/DashBoard/Admin/SideNavbar';
import HomeAdmin from './services/Admin/AdminCRUD/HomeAdmin';
import Form from './services/User/Product/Form';


const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/UserHome" element={<UserHome/>} />
        <Route path="/SideNavbar" element={<SideNavbar/>} />
        <Route path='/HomeAdmin' element={<HomeAdmin/>}/>
        <Route path="/Form" element={<Form/>} />
      </Routes>
   
  );
};

export default App;


// import React from 'react'
// import CartPage from './services/User/Product/CartPage'

// const App = () => {
//   return (
//     <div>
//       <CartPage/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import {Routes,Route} from 'react-router-dom'
// import Home from './services/Admin/AdminCRUD/HomeAdmin'
// import Create from './services/Admin/AdminCRUD/AddProductForm'
// import Update from './services/Admin/AdminCRUD/ProductItem'
// import Read from './services/Admin/AdminCRUD/ProductList'


// const App = () => {
//   return (
//     <Routes>
//         <Route path='/HomeAdmin' element={<HomeAdmin/>}></Route>
//         <Route path='/Create' element={<Create/>}></Route>
//         <Route path='Update/:id' element={<Update/>}></Route>
//         <Route path='/Read/:id' element={<Read/>}></Route>
//     </Routes>
//   )
// }

// export default App

// import React from 'react'
// import UserOrders from './services/Admin/UserOrders'

// const App = () => {
//   return (
//     <div>
//       <UserOrders/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Cart from './services/User/Product/Cart'


// const App = () => {
//   return (
//     <div>
//       <Cart/>
//     </div>
//   )
// }

// export default App
