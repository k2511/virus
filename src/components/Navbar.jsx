
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [activePanel, setActivePanel] = useState(null); 
  // null | "register" | "login"

  return (
    <>
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold tracking-wide">
            ANTIVIRUS <span className="text-gray-600">E-STORE</span>
          </h1>
        </div>

        {/* Navbar links */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-lime-600">HOME</Link>
          <Link to="/software" className="hover:text-lime-600">SOFTWARE</Link>
          <Link to="/brands" className="hover:text-lime-600">BRANDS</Link>
          <Link to="/about" className="hover:text-lime-600">ABOUT US</Link>
          <Link to="/contact" className="hover:text-lime-600">CONTACT US</Link>
        </nav>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button 
            onClick={() => setActivePanel("register")} 
            className="text-gray-700 hover:text-lime-600"
          >
            REGISTER
          </button>
          <button 
            onClick={() => setActivePanel("login")} 
            className="text-gray-700 hover:text-lime-600"
          >
            LOGIN
          </button>
        </div>
      </header>

      {/* Sliding Drawer */}
      {activePanel && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Background overlay */}
          <div 
            className="absolute inset-0 bg-black/40" 
            onClick={() => setActivePanel(null)} 
          ></div>

          {/* Drawer Content */}
          <div className="relative w-full max-w-md bg-white shadow-lg p-6 overflow-y-auto animate-slide-in-right">
            <button 
              onClick={() => setActivePanel(null)} 
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              ✕
            </button>

            {activePanel === "login" && (
              <>
                <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
                <p className="mb-6 text-gray-600">Login to manage your account.</p>

                <form className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                  />
                  <input 
                    type="password" 
                    placeholder="Password" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                  />
                  <div className="text-right">
                    <a href="#" className="text-sm text-gray-500 hover:underline">
                      Forgot Password?
                    </a>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-yellow-400 text-black font-bold py-2 rounded-lg hover:bg-yellow-500 transition"
                  >
                    Login
                  </button>
                </form>

                <p className="text-center mt-4 text-sm text-gray-500">
                  Don’t have an account?{" "}
                  <a href="#" className="text-lime-600 hover:underline">Signup</a>
                </p>

                <div className="mt-6 flex items-center">
                  <hr className="flex-grow border-gray-300" />
                  <span className="px-2 text-sm text-gray-400">OR</span>
                  <hr className="flex-grow border-gray-300" />
                </div>

                <div className="mt-4 flex gap-4">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-blue-100 py-2 rounded-lg hover:bg-blue-200 transition">
                    <span className="text-blue-600">f</span> Facebook
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 bg-red-100 py-2 rounded-lg hover:bg-red-200 transition">
                    <span className="text-red-600">G</span> Google
                  </button>
                </div>
              </>
            )}

            {activePanel === "register" && (
              <>
                <h2 className="text-2xl font-bold mb-4">Create Account</h2>
                <p className="mb-6 text-gray-600">Sign up to get started.</p>

                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                  />
                  <input 
                    type="password" 
                    placeholder="Password" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                  />
                  <button 
                    type="submit" 
                    className="w-full bg-lime-500 text-white font-bold py-2 rounded-lg hover:bg-lime-600 transition"
                  >
                    Register
                  </button>
                </form>

                <p className="text-center mt-4 text-sm text-gray-500">
                  Already have an account?{" "}
                  <span 
                    onClick={() => setActivePanel("login")} 
                    className="text-lime-600 hover:underline cursor-pointer"
                  >
                    Login
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
