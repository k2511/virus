import React, { useState } from 'react';

const CheckOut = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showCoupon, setShowCoupon] = useState(false);
    const [agreedToTerms, setAgreedToTerms] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50 p-4">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold text-center mb-8 text-gray-800">Checkout</h1>
      
      {/* Login Section */}
      <div className="mb-6">
        <div 
          className="bg-yellow-400 p-4 cursor-pointer hover:bg-yellow-500 transition-colors"
          onClick={() => setShowLogin(!showLogin)}
        >
          <span className="text-gray-800 font-medium">
            Returning customer? <span className="underline">Click here to login</span>
          </span>
        </div>
        
        {showLogin && (
          <div className="bg-white p-6 border border-gray-200">
            <p className="text-gray-700 mb-4">Welcome back! Sign in to your account.</p>
            <p className="text-gray-600 mb-6">If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing & Shipping section.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input 
                  type="email"
                  placeholder="Email address"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Password</label>
                <input 
                  type="password"
                  placeholder="********"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>
            
            <div className="flex items-center mt-4 mb-6">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-gray-700">Remember Me</label>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <button className="bg-yellow-400 hover:bg-yellow-500 px-8 py-3 rounded font-medium text-gray-800 transition-colors">
                Login
              </button>
              <a href="#" className="text-blue-600 hover:underline mt-2 sm:mt-3">Lost your password?</a>
            </div>
          </div>
        )}
      </div>

      {/* Coupon Section */}
      <div className="mb-8">
        <div 
          className="bg-yellow-400 p-4 cursor-pointer hover:bg-yellow-500 transition-colors"
          onClick={() => setShowCoupon(!showCoupon)}
        >
          <span className="text-gray-800 font-medium">
            Have a coupon? <span className="underline">Click here to enter your code</span>
          </span>
        </div>
        
        {showCoupon && (
          <div className="bg-white p-6 border border-gray-200">
            <p className="text-gray-700 mb-6">If you have a coupon code, please apply it below.</p>
            <div className="flex gap-0 max-w-md">
              <input 
                type="text"
                placeholder="Coupon code"
                className="flex-1 p-3 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-r transition-colors">
                Apply coupon
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Billing Details */}
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">Billing details</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text"
                  defaultValue="Jack"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text"
                  defaultValue="Wayne"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>
            
            <div className="mt-6">
              <label className="block text-gray-700 font-medium mb-2">Company Name (Optional)</label>
              <input 
                type="text"
                placeholder="Company Name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            
            <div className="mt-6">
              <label className="block text-gray-700 font-medium mb-2">
                Country <span className="text-red-500">*</span>
              </label>
              <select className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <option>Select country</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                <option>Australia</option>
              </select>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Street Address <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text"
                  defaultValue="470 Lucy Ford"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Apt, Suite, Etc.</label>
                <input 
                  type="text"
                  defaultValue="YCTB 2LF"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  City <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text"
                  defaultValue="London"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Postcode/Zip <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text"
                  defaultValue="99999"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>
            
            <div className="mt-6">
              <label className="block text-gray-700 font-medium mb-2">
                State <span className="text-red-500">*</span>
              </label>
              <select className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <option>Select state</option>
                <option>California</option>
                <option>New York</option>
                <option>Texas</option>
                <option>Florida</option>
              </select>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email"
                  defaultValue="jackwayne@gmail.com"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone</label>
                <input 
                  type="tel"
                  defaultValue="+1 (562) 110-3222"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>
            
            <div className="mt-6">
              <label className="flex items-center">
                <input type="checkbox" className="mr-3" />
                <span className="text-gray-700">Create An Account?</span>
              </label>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm mt-8">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">Shipping Details details</h2>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-[#e4e8ec] p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">Your order</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b">
                <span className="font-medium text-gray-700">Product</span>
                <span className="font-medium text-gray-700">Total</span>
              </div>
              
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="text-sm text-gray-600">Ultra Wireless SSD Headphones SSD with Bluetooth × 1</p>
                </div>
                <span className="text-gray-800 ml-4">$1,100.00</span>
              </div>
              
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="text-sm text-gray-600">Widescreen NX Mini F1 SMART NX × 1</p>
                </div>
                <span className="text-gray-800 ml-4">$685.00</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-t">
                <span className="font-medium">Subtotal</span>
                <span className="font-medium">$1,785.00</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="font-medium">Shipping</span>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Flat rate</p>
                  <p className="font-medium">$300.00</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center py-3 border-t border-b font-semibold text-lg">
                <span>Total</span>
                <span>$2,085.00</span>
              </div>
            </div>
            
            <div className="mt-6 space-y-4">
              <div className="p-4 bg-gray-50 rounded">
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="font-medium">Direct Bank Transfer</span>
                </div>
                <p className="text-sm text-gray-600 ml-7">
                  Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                </p>
              </div>
              
              <div className="space-y-2 text-sm text-gray-600">
                <p>Bank Transfer</p>
                <p>Razorpay</p>
                <p>Cash On Delivery</p>
                <p>Check Payments</p>
               

                <p>PayPal <span className="text-blue-600">What Is PayPal?</span></p>

              </div>
              
              <div className="mt-6">
                <label className="flex items-start">
                  <input 
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="mt-1 mr-3"
                  />
                  <span className="text-sm text-gray-600">
                    I Have Read And Agree To The Website <a href="#" className="text-blue-600 hover:underline">Terms And Conditions</a> <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>
              
              <button 
                className={`w-full py-4 rounded font-medium text-white transition-colors ${
                  agreedToTerms 
                    ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-800' 
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
                disabled={!agreedToTerms}
              >
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CheckOut