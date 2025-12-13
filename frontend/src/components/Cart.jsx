import React from 'react'

export default function Cart({cart,setcart}) {

   const removeItem=(id)=>{
    setcart(cart.filter(item=>item.id===id));

   };
  

  return (
    <div >Cart
     <br></br>
     <br></br>
    <h2>Your Cart</h2>
    {cart.length===0 && <p>Your cart is empty</p>}
    {cart.map(item=>(
        <div key={item.id} style={{marginBottom: 20}}>
            <p>{item.name}</p>
            <p>${item.price}</p>
            <button onClick={()=>deleteProduct(item._id)}>Remove</button>
        </div>
    ))}


    </div>

  )
}
