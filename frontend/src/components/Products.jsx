import React from 'react'

import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import {API} from "../utils/api"

export default function Products({setcart,cart}) {
const [products, setproducts] =useState([]);
  useEffect(()=>{
        fetch(`${API}/api/Product`)
        .then(res=>res.json())
        .then(data=>setproducts(data))
  },[]);
  const addTocart=(product)=>{
     const item = {
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image
  };

    setcart([...cart,item]);
  }

 const deleteProduct = async (id) => {
  const confirm = window.confirm("Are you sure you want to delete this product?");
  if (!confirm) return;

  const res = await fetch(`http://localhost:2796/api/deleteProduct/${id}`, {
    method: "DELETE",
  });

  if (res.status === 200) {
    alert("Product deleted successfully");
    setproducts(products.filter(product => product._id !== id));
  } else {
    alert("Something went wrong");
  }
};



  return (
    <div ><br></br><br></br>Products<br></br><br></br>
      {products.map(p=>(
        <div key={p._id || p.id}>
         <img src={p.image} alt={p.name} width={400} height={400}/>
           <p>{p.name}</p>
           <p>{p.price}</p>
           <p>{p.description}</p>
           <button onClick={()=>addTocart(p)}>Add to Cart</button> 
           <button onClick={()=>deleteProduct(p._id)}>REMOVE</button>
           
           <Link to={`/product/${p._id}`} >View</Link>
           <hr></hr>
           <br></br>
        </div>))}

    </div>

  )
}
