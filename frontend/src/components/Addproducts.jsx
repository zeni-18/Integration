import React from 'react'
import { useState } from 'react'
import { use } from 'react'
import {API} from "../utils/api";

export default function Addproducts() {
    const [form,setform]=useState({
        name:"",
        price:"",
        image:"",
        description:""
    });
      const handleChange=(e)=>{
        setform({...form,[e.target.name]:e.target.value})
      }
     const handleSubmit=async (e)=>{
        e.preventDefault();
        const product={name:form.name,price:form.price,img:form.image,description:form.description};
        try {
            const res=await fetch(`${API}/api/postProduct`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(product)
            });
            if(res.ok){
                alert("product added successfully");
                setform({
                    name:"",
                    price:"",
                    image:"",
                    description:""
                });
            }
            else{
                alert("failed to add product");
            }
        } catch (error) {
            console.log(error);
            alert("failed to add product");
            
        }
        
     }




  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>NAME:&nbsp;</label> &nbsp;<input  name="name" type="text" placeholder="name" value={form.name} onChange={handleChange} />
        <br></br><br></br>
         <label>PRICE:&nbsp;</label>&nbsp;
         <input name="price" type="text" placeholder="price" value={form.price}  onChange={handleChange}/>
         <br></br><br></br>
           <label>IMAGE:&nbsp;</label>&nbsp;
         <input name="image" type="text" placeholder="image" value={form.image} onChange={handleChange}/>
             <br></br><br></br>
         <label>DESCRIPTION:&nbsp;</label>&nbsp;
         <input name="description" type="text" placeholder="description"value={form.description} onChange={handleChange} />
         <br></br><br></br>
       
     
         <button type="submit">ADD</button>
         
      </form>

    </div>
  )
}
