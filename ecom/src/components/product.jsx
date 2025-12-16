import React from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import {products} from "../utils/api"

export default function Product({ setcart }) {
  const {id} = useParams();
  const navigate = useNavigate();
  const location = useLocation()
  const p = products.find((item)=>item.id===parseInt(id, 10));

  if(!p) return <div className="text-center py-16 text-red-500 text-lg font-semibold">Product not found</div>

  const handleAddToCart = (product) => {
    const user = localStorage.getItem('user')
    if (!user) {
      navigate('/login', { state: { itemToAdd: product, from: location.pathname } })
      return
    }
    
    const item = { id: product.id, name: product.name, price: product.price, image: product.image };
    setcart(prevCart => [...prevCart, item]);
    alert('Added to cart!');
  }

  const handleBuyNow = () => {
    const user = localStorage.getItem('user')
    if (!user) {
      navigate('/login', { state: { itemToAdd: p, from: '/cart' } })
      return
    }
    
    const item = { id: p.id, name: p.name, price: p.price, image: p.image };
    setcart(prevCart => [...prevCart, item]);
    navigate('/cart');
  };

  return (
    <div className="py-12">
      <button onClick={() => navigate('/products')} className="mb-6 px-4 py-2 bg-orange-100 text-orange-600 rounded-lg hover:bg-orange-200 transition font-medium">&larr; Back to Products</button>
      <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl border border-orange-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src={p.image} alt={p.name} className="w-full rounded-lg shadow-md"/>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-orange-600 mb-4">{p.name}</h2>
            <p className="text-3xl font-bold text-orange-500 mb-6">${p.price}</p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">{p.description}</p>
            <div className="flex gap-4">
              <button onClick={handleBuyNow} className="flex-1 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition font-bold text-lg">Buy Now</button>
              <button onClick={() => handleAddToCart(p)} className="flex-1 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-bold text-lg">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
