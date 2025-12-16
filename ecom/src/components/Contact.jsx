import React, { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 flex flex-col justify-center items-center px-4 py-20">
        <h2 className="text-6xl md:text-7xl font-bold text-orange-600 mb-6 text-center">Get In Touch</h2>
        <p className="text-xl md:text-2xl text-gray-700 text-center max-w-2xl">
          We'd love to hear from you. Send us a message!
        </p>
      </div>

      {/* Contact Info & Form Section */}
      <div className="min-h-screen bg-white px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h3 className="text-4xl font-bold text-orange-600 mb-12">Contact Information</h3>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="text-4xl">📍</div>
                  <div>
                    <h4 className="text-2xl font-bold text-orange-600 mb-2">Address</h4>
                    <p className="text-gray-700 text-lg">
                      123 Shopping Street<br/>
                      Commerce City, CC 12345<br/>
                      Country
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="text-4xl">📞</div>
                  <div>
                    <h4 className="text-2xl font-bold text-orange-600 mb-2">Phone</h4>
                    <p className="text-gray-700 text-lg">
                      +1 (555) 123-4567<br/>
                      +1 (555) 123-4568
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="text-4xl">✉️</div>
                  <div>
                    <h4 className="text-2xl font-bold text-orange-600 mb-2">Email</h4>
                    <p className="text-gray-700 text-lg">
                      support@mystore.com<br/>
                      info@mystore.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="text-4xl">⏰</div>
                  <div>
                    <h4 className="text-2xl font-bold text-orange-600 mb-2">Business Hours</h4>
                    <p className="text-gray-700 text-lg">
                      Monday - Friday: 9:00 AM - 6:00 PM<br/>
                      Saturday: 10:00 AM - 4:00 PM<br/>
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
                <h4 className="text-2xl font-bold text-orange-600 mb-4">Customer Support</h4>
                <p className="text-gray-700 text-lg">
                  Our dedicated support team is available 24/7 to assist you with any questions, concerns, or feedback. We typically respond within 2 hours during business hours.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-4xl font-bold text-orange-600 mb-8">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 bg-gradient-to-br from-orange-50 to-orange-100 p-10 rounded-xl">
                {submitted && (
                  <div className="bg-green-100 border-2 border-green-500 text-green-700 p-4 rounded-lg">
                    ✓ Thank you! Your message has been sent successfully.
                  </div>
                )}
                
                <div>
                  <label className="block text-gray-800 font-bold mb-3 text-lg">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-orange-300 rounded-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-100 text-gray-900 bg-white text-lg"
                    placeholder="Your Full Name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-800 font-bold mb-3 text-lg">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-orange-300 rounded-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-100 text-gray-900 bg-white text-lg"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-800 font-bold mb-3 text-lg">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-orange-300 rounded-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-100 h-48 text-gray-900 bg-white text-lg resize-none"
                    placeholder="Type your message here..."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full px-6 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition font-bold text-lg shadow-lg"
                >
                  Send Message →
                </button>

                <p className="text-gray-600 text-sm text-center mt-4">
                  We respect your privacy. Your information will never be shared with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-bold text-orange-600 mb-16 text-center">Frequently Asked Questions</h3>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h4 className="text-2xl font-bold text-orange-600 mb-4">How do I place an order?</h4>
              <p className="text-gray-700 text-lg">
                Simply browse our products, add items to your cart, and proceed to checkout. You'll need to be logged in to complete your purchase.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h4 className="text-2xl font-bold text-orange-600 mb-4">What are your shipping times?</h4>
              <p className="text-gray-700 text-lg">
                Most orders are processed within 24 hours and shipped the next business day. Delivery typically takes 3-5 business days depending on your location.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h4 className="text-2xl font-bold text-orange-600 mb-4">What is your return policy?</h4>
              <p className="text-gray-700 text-lg">
                We offer a 30-day return policy for most items. Products must be in original condition with packaging intact for a full refund.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h4 className="text-2xl font-bold text-orange-600 mb-4">How can I track my order?</h4>
              <p className="text-gray-700 text-lg">
                Once your order ships, you'll receive an email with a tracking number. You can use this to track your package in real-time.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h4 className="text-2xl font-bold text-orange-600 mb-4">Is my payment secure?</h4>
              <p className="text-gray-700 text-lg">
                Yes! We use industry-standard SSL encryption and secure payment gateways to protect all your personal and financial information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
