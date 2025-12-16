import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogin = (e) => {
    e.preventDefault()
    if (email && password) {
      // Store login info in localStorage
      localStorage.setItem('user', JSON.stringify({ email, loggedIn: true }))
      
      // Get the item to add to cart from state
      const itemToAdd = location.state?.itemToAdd
      if (itemToAdd) {
        const storedCart = localStorage.getItem('cart')
        const cart = storedCart ? JSON.parse(storedCart) : []
        cart.push(itemToAdd)
        localStorage.setItem('cart', JSON.stringify(cart))
      }

      // Redirect to the previous page or home
      const returnTo = location.state?.from || '/'
      navigate(returnTo)
    } else {
      alert('Please fill in all fields')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 flex items-center justify-center py-12 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg border border-orange-100 max-w-md w-full">
        <h2 className="text-4xl font-bold text-orange-600 mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-800 font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-100 text-gray-900 bg-white"
              required
            />
          </div>
          <div>
            <label className="block text-gray-800 font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-100 text-gray-900 bg-white"
              required
            />
          </div>
          <button type="submit" className="w-full px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition font-bold text-lg">
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">Demo: Use any email and password</p>
      </div>
    </div>
  )
}
