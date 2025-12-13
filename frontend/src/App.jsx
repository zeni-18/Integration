import About from "./components/About"
import {useState} from 'react'
import Contact from "./components/Contact"
import Product from "./components/product"
import Home from "./components/Home"
import Products from "./components/Products"
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import "./App.css"
import { useEffect } from "react"
import Cart from "./components/Cart"
import BuyNow from "./components/BuyNow"
import Login from "./components/Login"
import ProtectedRoute from "./pages/protectedRoute"
import AddProduct from "./components/Addproducts"


function App() {

  const [cart,setcart]=useState([]);
  useEffect(()=>{
    const storedCart=localStorage.setItem("cart",JSON.stringify(cart));
   
  },[cart])
  const lagout=()=>{
    localStorage.removeItem("email");
    window.location.reload();
  
  };
  
  return (
    <>
    <div style={{ width:"100%"}} >
         <header style={{ width:"100%"}}>
          <h1 className="i" >My App </h1>
          <nav className='l' style={{ width:"100%"}}>
              <Link to="/" className="o"> Home  |{" "} </Link>
              <Link to="/about" className="o">About Us | {" "} </Link>
              <Link to="/contact" className="o"> Contact us |{" "}   </Link>
              <Link to="/products"className="o">Products | {" "}</Link>
              <Link to="/cart"className="o" >cart{cart.length} | {" "}</Link>
              <Link to="/addproduct" className="o">Add Product | {" "}</Link>
              {localStorage.getItem("email") ? (
                 <button onClick={lagout} className="o">Logout</button>
              ) : ( 
            <Link to="/login" className="o">Login</Link>
              ) 
              }
              <hr></hr>

          </nav>

         </header>
         
         <main >
         <Routes>
          <Route path="/" element={<Home/>}>Home</Route>
          <Route path="/About" element={<About/>}>About</Route>
          <Route path="/Contact" element={<Contact/>}>Contact</Route>
          <Route path="/Products" element={<Products cart={cart}setcart={setcart}/>}>Products</Route>
          <Route path="/product/:id" element={<Product/>}></Route>
          <Route path="/cart" element={
          <ProtectedRoute>
            <Cart cart={cart} setcart={setcart}/>
           </ProtectedRoute>
          }>

          </Route>
         <Route path="/buynow/:id" element={<BuyNow/>}></Route>
         <Route path="/login" element={<Login/>}></Route>
          <Route path="/addproduct" element={<AddProduct/>}></Route>
         </Routes>
        
         </main>
         
         </div>
      </>
  )
}

export default App
