
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ activePanel, setActivePanel }) {
  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white">

        {/* Buttons */}
        <div className="flex space-x-4">
        </div>
      </header>

      {/* Drawer */}
      {activePanel && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/40" onClick={() => setActivePanel(null)}></div>
          <div className="relative w-full max-w-md bg-white shadow-lg p-6 overflow-y-auto animate-slide-in-right">
            <button onClick={() => setActivePanel(null)} className="absolute top-4 right-4 text-gray-600 hover:text-black">✕</button>

            {activePanel === "login" && (
              <>
                <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
                <form className="space-y-4">
                  <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-lime-500"/>
                  <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-lime-500"/>
                  <button type="submit" className="w-full bg-yellow-400 text-black font-bold py-2 rounded-lg hover:bg-yellow-500">Login</button>
                </form>
              </>
            )}

            {activePanel === "register" && (
              <>
                <h2 className="text-2xl font-bold mb-4">Create Account</h2>
                <form className="space-y-4">
                  <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-lime-500"/>
                  <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-lime-500"/>
                  <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-lime-500"/>
                  <button type="submit" className="w-full bg-lime-500 text-white font-bold py-2 rounded-lg hover:bg-lime-600">Register</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
