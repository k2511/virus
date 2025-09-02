import React from 'react'

const Payment = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg my-10">
    <h2 className="text-2xl font-bold mb-4 text-center">Payment Details</h2>
    <form>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="cardName">
          Cardholder Name
        </label>
        <input
          type="text"
          id="cardName"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="John Doe"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="cardNumber">
          Card Number
        </label>
        <input
          type="text"
          id="cardNumber"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="1234 5678 9012 3456"
        />
      </div>
      <div className="flex gap-4 mb-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium mb-2" htmlFor="expiry">
            Expiry Date
          </label>
          <input
            type="text"
            id="expiry"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="MM/YY"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-sm font-medium mb-2" htmlFor="cvv">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="123"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Pay Now
      </button>
    </form>
  </div>
  )
}

export default Payment