import React from 'react'

export default function Cart({ cart, setcart }) {
  if (!cart || cart.length === 0) {
    return <div className="text-center py-16 text-gray-600 text-lg">Your cart is empty.</div>
  }

  const total = cart.reduce((sum, item) => sum + Number(item.price || 0), 0);

  const handleRemove = (removeIndex) => {
    setcart(prevCart => prevCart.filter((_, index) => index !== removeIndex));
  };

  return (
    <div className="py-8">
      <h2 className="text-4xl font-bold text-orange-600 mb-8">Shopping Cart</h2>
      <div className="grid gap-4 mb-8">
        {cart.map((item, index) => (
          <div key={`${item.id}-${index}`} className="bg-white p-4 rounded-lg shadow-md flex gap-4 items-center border border-orange-100">
            {item.image && (
              <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-lg"/>
            )}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-2xl font-bold text-orange-600">${item.price}</p>
            </div>
            <button onClick={() => handleRemove(index)} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition font-medium">Remove</button>
          </div>
        ))}
      </div>
      <div className="bg-orange-100 p-6 rounded-lg">
        <p className="text-2xl font-bold text-orange-600">Total: ${total.toFixed(2)}</p>
        <button className="mt-4 w-full px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition font-bold text-lg">Checkout</button>
      </div>
    </div>
  )
}
