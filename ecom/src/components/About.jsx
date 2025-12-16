import React from 'react'

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 flex flex-col justify-center items-center px-4 py-20">
        <h2 className="text-6xl md:text-7xl font-bold text-orange-600 mb-6 text-center">About Us</h2>
        <p className="text-xl md:text-2xl text-gray-700 text-center max-w-2xl">
          Discover the story behind My Store
        </p>
      </div>

      {/* Main About Section */}
      <div className="min-h-screen bg-white px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-bold text-orange-600 mb-8">Our Story</h3>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Welcome to My Store - Your trusted online shopping destination. We started our journey with a simple vision: to provide high-quality products at affordable prices to every customer. What began as a small initiative has grown into a thriving online marketplace serving thousands of satisfied customers.
            </p>
            <p>
              We believe that shopping should be easy, enjoyable, and rewarding. That's why we've built our platform with you in mind - offering a carefully curated selection of products, competitive prices, and exceptional customer service at every step of your journey.
            </p>
            <p>
              Our team works tirelessly to source the best products from reliable suppliers, negotiate the best prices, and ensure that every item meets our stringent quality standards before reaching your doorstep.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold text-orange-600 mb-16 text-center">Our Mission & Vision</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-10">
              <h4 className="text-3xl font-bold text-orange-600 mb-6 flex items-center gap-3">
                <span className="text-4xl">🎯</span> Our Mission
              </h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our mission is to make online shopping convenient, affordable, and enjoyable for everyone. We are committed to:
              </p>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-xl">✓</span>
                  <span>Providing premium quality products at competitive prices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-xl">✓</span>
                  <span>Delivering exceptional customer service and support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-xl">✓</span>
                  <span>Ensuring safe and secure shopping experiences</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-xl">✓</span>
                  <span>Building lasting relationships with our customers</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-10">
              <h4 className="text-3xl font-bold text-orange-600 mb-6 flex items-center gap-3">
                <span className="text-4xl">🌟</span> Our Vision
              </h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                We envision becoming the most trusted and preferred online shopping destination by:
              </p>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-xl">✓</span>
                  <span>Offering a diverse range of quality products</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-xl">✓</span>
                  <span>Continuously innovating our services and platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-xl">✓</span>
                  <span>Empowering customers with choices and transparency</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-xl">✓</span>
                  <span>Contributing positively to society and the environment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="min-h-screen bg-white px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold text-orange-600 mb-16 text-center">Our Core Values</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h4 className="text-2xl font-bold text-orange-600 mb-3">Integrity</h4>
              <p className="text-gray-700">
                We operate with complete honesty and transparency in all our dealings.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">💡</div>
              <h4 className="text-2xl font-bold text-pink-600 mb-3">Innovation</h4>
              <p className="text-gray-700">
                We continuously improve our services to meet evolving customer needs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">❤️</div>
              <h4 className="text-2xl font-bold text-orange-600 mb-3">Customer Care</h4>
              <p className="text-gray-700">
                Your satisfaction and happiness are at the heart of everything we do.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">🌱</div>
              <h4 className="text-2xl font-bold text-pink-600 mb-3">Sustainability</h4>
              <p className="text-gray-700">
                We're committed to operating responsibly for our planet's future.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-bold text-orange-600 mb-12 text-center">Why Choose Us?</h3>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h4 className="text-2xl font-bold text-orange-600 mb-4">🏆 Industry-Leading Quality</h4>
              <p className="text-gray-700 text-lg">
                Every product in our catalog is carefully selected and tested to ensure it meets our high standards for quality and durability.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h4 className="text-2xl font-bold text-orange-600 mb-4">💳 Secure & Easy Payments</h4>
              <p className="text-gray-700 text-lg">
                We offer multiple secure payment options and use advanced encryption to protect your personal and financial information.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h4 className="text-2xl font-bold text-orange-600 mb-4">📞 Dedicated Support Team</h4>
              <p className="text-gray-700 text-lg">
                Our friendly and knowledgeable customer support team is available 24/7 to help you with any questions or concerns.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h4 className="text-2xl font-bold text-orange-600 mb-4">🚚 Fast & Reliable Shipping</h4>
              <p className="text-gray-700 text-lg">
                We partner with trusted logistics providers to ensure your orders are delivered quickly and safely to your doorstep.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h4 className="text-2xl font-bold text-orange-600 mb-4">↩️ Hassle-Free Returns</h4>
              <p className="text-gray-700 text-lg">
                Not satisfied? Our easy return and exchange policy ensures you shop with complete confidence and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
