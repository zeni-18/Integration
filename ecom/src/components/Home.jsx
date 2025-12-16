import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 flex flex-col justify-center items-center px-4 py-20">
        <h2 className="text-6xl md:text-7xl font-bold text-orange-600 mb-6 text-center">Welcome to My Store</h2>
        <p className="text-xl md:text-2xl text-gray-700 mb-4 text-center max-w-2xl">Discover amazing products at great prices</p>
        <p className="text-lg text-gray-600 mb-10 text-center max-w-3xl leading-relaxed">
          Shop our curated collection of premium products designed to meet all your needs. 
          From quality essentials to unique finds, we bring you the best selection with unbeatable prices.
        </p>
        <Link to="/products" className="inline-block px-12 py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition text-xl font-semibold shadow-lg">
          Shop Now
        </Link>
      </div>

      {/* Features Section */}
      <div className="min-h-screen bg-white px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-5xl font-bold text-orange-600 mb-16 text-center">Why Shop With Us?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-5xl mb-4">🚚</div>
              <h4 className="text-2xl font-bold text-orange-600 mb-3">Fast Delivery</h4>
              <p className="text-gray-700 text-lg">
                Get your orders delivered quickly and safely. We partner with reliable couriers to ensure your products reach you on time, every time.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-5xl mb-4">💰</div>
              <h4 className="text-2xl font-bold text-pink-600 mb-3">Best Prices</h4>
              <p className="text-gray-700 text-lg">
                Enjoy unbeatable prices on all our products. We negotiate directly with manufacturers to bring you the lowest costs without compromising quality.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-5xl mb-4">⭐</div>
              <h4 className="text-2xl font-bold text-orange-600 mb-3">Quality Assured</h4>
              <p className="text-gray-700 text-lg">
                Every product is carefully selected and quality-checked before shipping. We stand behind our products with a satisfaction guarantee.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-5xl font-bold text-orange-600 mb-12 text-center">About Our Store</h3>
          
          <div className="bg-white rounded-xl shadow-lg p-12 mb-12">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Welcome to My Store - Your trusted online shopping destination since 2024. We are committed to providing you with the best shopping experience, offering a carefully curated selection of products across multiple categories.
            </p>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Our mission is to make online shopping convenient, affordable, and enjoyable for everyone. We believe that quality products shouldn't come with premium prices, which is why we work tirelessly to negotiate the best deals for our customers.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              With a dedicated customer service team, secure payment options, and hassle-free returns, we ensure that every shopping experience with us is memorable and satisfying.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h4 className="text-3xl font-bold text-orange-600 mb-4">Our Promise</h4>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li>✓ 100% Original Products</li>
                <li>✓ Secure Payment Gateway</li>
                <li>✓ 24/7 Customer Support</li>
                <li>✓ Easy Returns & Exchanges</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h4 className="text-3xl font-bold text-orange-600 mb-4">Quick Stats</h4>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li>📦 10,000+ Products Available</li>
                <li>👥 50,000+ Happy Customers</li>
                <li>⚡ Same-day Processing</li>
                <li>🌍 Nationwide Delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="min-h-screen bg-gradient-to-r from-orange-500 to-orange-600 flex flex-col justify-center items-center px-4 py-20">
        <h3 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center">Ready to Shop?</h3>
        <p className="text-xl md:text-2xl text-orange-100 mb-10 text-center max-w-2xl">
          Browse our exclusive collection and find everything you need at the best prices!
        </p>
        <Link to="/products" className="inline-block px-12 py-4 bg-white text-orange-600 rounded-lg hover:bg-orange-50 transition text-xl font-semibold shadow-lg">
          Start Shopping →
        </Link>
      </div>
    </div>
  )
}
