
import About from "./components/About"
import {useState} from 'react'
import Contact from "./components/Contact"
import Product from "./components/product"
import Home from "./components/Home"
import Products from "./components/Products"
import Cart from "./components/cart"
import Login from "./components/Login"
import {Routes,Route,Link} from 'react-router-dom'
import "./App.css"
import { useEffect } from "react"


function App() {

  const [cart,setcart]=useState(()=>{
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart));
  },[cart])
  
  return (
    <>
    <div className="w-full h-screen flex flex-col">
         <header className="bg-gradient-to-r from-orange-100 to-pink-100 shadow-md">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-orange-600 py-4">My Store</h1>
            <nav className='flex flex-wrap gap-4 items-center pb-4 border-b border-orange-200'>
              <Link to="/" className="text-gray-600 hover:text-orange-600 font-medium transition"> Home </Link>
              <span className="text-gray-300">|</span>
              <Link to="/about" className="text-gray-600 hover:text-orange-600 font-medium transition">About Us</Link>
              <span className="text-gray-300">|</span>
              <Link to="/contact" className="text-gray-600 hover:text-orange-600 font-medium transition"> Contact us</Link>
              <span className="text-gray-300">|</span>
              <Link to="/products" className="text-gray-600 hover:text-orange-600 font-medium transition">Products</Link>
              <span className="text-gray-300">|</span>
              <Link to="/cart" className="ml-auto px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-medium">Cart ({cart.length})</Link>
            </nav>
          </div>
         </header>
         
         <main className="flex-1 w-full bg-gradient-to-b from-white to-orange-50 overflow-y-auto">
         <div className="container mx-auto px-4 py-8">
         <Routes>
          <Route path="/" element={<Home/>}>Home</Route>
          <Route path="/About" element={<About/>}>About</Route>
          <Route path="/Contact" element={<Contact/>}>Contact</Route>
          <Route path="/login" element={<Login/>}>Login</Route>
          <Route path="/Products" element={<Products cart={cart} setcart={setcart}/>}>Products</Route>
          <Route path="/cart" element={<Cart cart={cart} setcart={setcart}/>}>Cart</Route>
          <Route path="/product/:id" element={<Product setcart={setcart}/>}></Route>
         </Routes>
         </div>
         </main>
    </div>
      </>
  )
}

export default App
