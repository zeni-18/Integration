import React from 'react'
import { useParams } from 'react-router-dom'  
import { useEffect, useState } from 'react'
import {API} from "../utils/api"
import { Link } from 'react-router-dom'


export default function product() {
 const {id} = useParams(); 
    const [products, setproducts] =useState(null);
       useEffect(()=>{
             fetch(`${API}/api/Product`)
             .then(res=>res.json())
             .then(data=>{
             const p=data.find(p=>p._id===id);
             setproducts(p);
             })
       });

 const p=products;

  if(!products) return <div>Product not found</div>
  return (
    <div  key={p._id}>product
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
      <Link to={`/buynow/${p._id}`}>
      <button >Buy now</button>
      </Link>
    </div>
  )
}
