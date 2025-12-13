import React from 'react'
import {useParams} from "react-router-dom"
import {useState,useEffect} from "react"  
import {API} from "../utils/api"
export default function 
() {
  const {id} = useParams(); 
  
      const [products, setproducts] =useState(null);
         useEffect(()=>{
               fetch(`${API}/api/Product`)
               .then(res=>res.json())
               .then(data=>{
               const k=data.find(p=>p._id===id);
               setproducts(k);
               })
         });
  
   const p=products;
  
  
  if(!p) return <div>Product not found</div>
  return (
    <div   key={p.id}>product
     <br></br>
     <br></br>
     <br></br>
     <br></br>
      <img src={p.image} alt={p.name} width={400} height={400}/>
      <br></br>
     <br></br>
     <br></br>
      <p>{p.name}</p>
      <p>{p.price}</p>
      <p>{p.description}</p>
        <p>🎆Order palced!.......</p>
    </div>
  )
}
