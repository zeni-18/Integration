import React from 'react'
import {products} from '../utils/api'
import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function Products({setcart,cart}) {
  const navigate = useNavigate()
  const location = useLocation()

  const addTocart=(product)=>{
    const user = localStorage.getItem('user')
    if (!user) {
      // Redirect to login with the item and current location
      navigate('/login', { state: { itemToAdd: product, from: location.pathname } })
      return
    }

    const item={
      id:product.id,
      name:product.name,
      price:product.price,
      image:product.image
    };
    setcart(prevCart => [...prevCart,item]);
    alert('Added to cart!')
  }

  return (
    <div className="py-8">
      <h2 className="text-4xl font-bold text-orange-600 mb-8">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(p=>(
          <div key={p.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden border border-orange-100">
            <img src={p.image} alt={p.name} className="w-full h-64 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{p.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{p.description}</p>
              <p className="text-2xl font-bold text-orange-600 mb-4">${p.price}</p>
              <div className="flex gap-2">
                <button onClick={() => addTocart(p)} className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-medium">Add to Cart</button>
                <Link to={`/product/${p.id}`} className="flex-1 px-4 py-2 bg-orange-100 text-orange-600 rounded-lg hover:bg-orange-200 transition font-medium text-center">View</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
