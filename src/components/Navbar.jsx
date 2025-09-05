import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGoogle, FaUser, FaLock } from "react-icons/fa";
import axios from 'axios'
import toast from "react-hot-toast";
export default function Navbar({ activePanel, setActivePanel }) {


  const [val, setVal] = useState({email:'', password:''});
  const [data, setData] = useState({email:'', password:'', confirmPassword:''});
  const [password, setPassword] = useState('');

  const handleSubmitLogin = async(e) => {
    e.preventDefault();
    console.log("Login", val);
    if(val.password.length < 6){
      toast.error("Your password length should greater than 6 character")
    }else{
      toast.success("Login");
    }
    try{
          //  const res = await axios.get("http://localhost:5000/api/login");
          //  const data = await res.json();
          
         
    }catch(err){
        console.log("err", err)
        toast.error("Error");
    }
     
  }

  
  const handleSubmitSignup = async(e) => {
    e.preventDefault();
    if(data.password.length < 6){
      toast.error("Your password length should greater than 6 character")
    }else{
        
      toast.success("Signup");
    }
    console.log("signup", data);
    try{
          //  const res = await axios.get("http://localhost:5000/api/signup");
          //  const data = await res.json();
        
    }catch(err){
        console.log("err", err)
        toast.error("Error");
    }
     
  }

  const forgetPassword = async(e) => {
    e.preventDefault();
     console.log("forget password", password)
     if(password.length < 6){
      toast.error("Your password length should greater than 6 character")
    }
    try{
          //  const res = await axios.get("http://localhost:5000/api/forget-password");
          //  const data = await res.json();
         
          toast.success("Forget password");
    }catch(err){
        console.log("err", err)
        toast.error("Error");
    }
     
  }
  return (
    <>
      {/* Drawer */}
      {activePanel && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Background overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setActivePanel(null)}
          ></div>

          {/* Drawer content */}
          <div className="relative w-full max-w-md bg-white shadow-lg p-8 overflow-y-auto animate-slide-in-right">
            {/* Close button */}
            <button
              onClick={() => setActivePanel(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              ✕
            </button>

            {/* Login Panel */}
            {activePanel === "login" && (
              <>
                <h2 className="text-2xl font-bold text-center mb-2">
                  Welcome Back!
                </h2>
                <p className="text-gray-500 text-center mb-6">
                  Login to manage your account.
                </p>

                <form className="space-y-4" onSubmit={handleSubmitLogin}>
                  {/* Email */}
                  <div className="flex items-center border rounded-full px-3 py-2">
                    <FaUser className="text-gray-400 mr-2" />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full outline-none"
                      value={val.email} 
                      onChange={(e) => {setVal({...val, email: e.target.value})}}
                    />
                  </div>

                  {/* Password */}
                  <div className="flex items-center border rounded-full px-3 py-2">
                    <FaLock className="text-gray-400 mr-2" />
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full outline-none"
                      value={val.password} 
                      onChange={(e) => {setVal({...val, password: e.target.value})}}
                    />
                  </div>

                  <div className="flex justify-end">
                    {/* <Link
                      to="/forgot-password"
                      className="text-sm text-gray-500 hover:text-black"
                    >
                      Forgot Password?
                    </Link> */}
                       <button
                      onClick={() => setActivePanel("forgetPassword")}
                      className="text-sm text-gray-500 hover:text-black" 
                    >
                      Forgot Password?
                    </button>
                  </div>

                  {/* Login Button */}
                  <button
                    // type="submit"
                    className="w-full bg-yellow-400 text-black font-bold py-3 rounded-full hover:bg-yellow-500 transition"
                  >
                    Login
                  </button>
                </form>

                {/* Signup link */}
                <p className="text-center text-sm text-gray-500 mt-4">
                  Do not have an account?{" "}
                  <button
                    className="text-black font-medium"
                    onClick={() => setActivePanel("register")}
                  >
                    Signup
                  </button>
                </p>

                {/* OR Divider */}
                <div className="flex items-center my-6">
                  <hr className="flex-grow border-gray-300" />
                  <span className="mx-2 text-gray-400">OR</span>
                  <hr className="flex-grow border-gray-300" />
                </div>

                {/* Social Buttons */}
                <div className="flex space-x-4">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-gray-100 py-3 rounded-full hover:bg-gray-200">
                    <FaFacebookF className="text-blue-600" />
                    <span className="font-medium">Facebook</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 bg-red-50 py-3 rounded-full hover:bg-red-100">
                    <FaGoogle className="text-red-500" />
                    <span className="font-medium">Google</span>
                  </button>
                </div>
              </>
            )}

            {/* Register Panel */}
            {activePanel === "register" && (
              <>
                <h2 className="text-2xl font-bold text-center mb-2">
                Welcome to Antivirus E.Store
                </h2>
                <p className="text-gray-500 text-center mb-6">
                    Fill out the form to get started.
                </p>

                <form className="space-y-4" onSubmit={handleSubmitSignup}>
                  {/* Email */}
                  <div className="flex items-center border rounded-full px-3 py-2">
                    <FaUser className="text-gray-400 mr-2" />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full outline-none"
                      value={data.email} 
                      onChange={(e) => {setData({...data, email: e.target.value})}}
                    />
                  </div>

                  {/* Password */}
                  <div className="flex items-center border rounded-full px-3 py-2">
                    <FaLock className="text-gray-400 mr-2" />
                    <input
                      type="password"
                      placeholder="Password"
                      value={data.password} 
                      onChange={(e) => {setData({...data, password: e.target.value})}}
                      className="w-full outline-none"
                    />
                  </div>

                  <div className="flex items-center border rounded-full px-3 py-2">
                    <FaLock className="text-gray-400 mr-2" />
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="w-full outline-none"
                      value={data.confirmPassword} 
                      onChange={(e) => {setData({...data, confirmPassword: e.target.value})}}
                    />
                  </div>
                 
                  <div className="flex justify-end">
                     <button
                      onClick={() => setActivePanel("forgetPassword")}
                      className="text-sm text-gray-500 hover:text-black" 
                    >
                      Forgot Password?
                    </button>
                  </div>

                  {/* Login Button */}
                  <button
                    type="submit"
                    className="w-full bg-yellow-400 text-black font-bold py-3 rounded-full hover:bg-yellow-500 transition"
                  >
                   Register
                  </button>
                </form>
                <p className="text-center text-sm text-gray-500 mt-4">
                  Already have an account?{" "}
                  <button
                    className="text-black font-medium"
                    onClick={() => setActivePanel("login")}
                  >
                    Login
                  </button>
                </p>
                {/* OR Divider */}
                <div className="flex items-center my-6">
                  <hr className="flex-grow border-gray-300" />
                  <span className="mx-2 text-gray-400">OR</span>
                  <hr className="flex-grow border-gray-300" />
                </div>
                {/* Social Buttons */}
                <div className="flex space-x-4">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-gray-100 py-3 rounded-full hover:bg-gray-200">
                    <FaFacebookF className="text-blue-600" />
                    <span className="font-medium">Facebook</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 bg-red-50 py-3 rounded-full hover:bg-red-100">
                    <FaGoogle className="text-red-500" />
                    <span className="font-medium">Google</span>
                  </button>
                </div>
              </>
            )}

            {activePanel === "forgetPassword" && (
              <>
                <h2 className="text-2xl font-bold text-center mt-10">
                  Recover Password
                </h2>
                <p className="text-gray-500 text-center mb-6">
                Enter your email address and an email with instructions will be sent to you.
                </p>

                <form className="space-y-4" onSubmit={forgetPassword}>
                  {/* Email */}
                  <div className="flex items-center border rounded-full px-3 py-2">
                    <FaUser className="text-gray-400 mr-2" />
                    <input
                      type="email"
                      placeholder="Email"
                      value={password}
                      onChange={(e) => {setPassword(e.target.value)}}
                      className="w-full outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-yellow-400 text-black font-bold py-3 rounded-full hover:bg-yellow-500 transition"
                  >
                   Recover Password
                  </button>
                </form>

                <p className="text-center text-sm text-gray-500 mt-4">
                  Remember your password?{" "}
                  <button
                    className="text-black font-medium"
                    onClick={() => setActivePanel("login")}
                  >
                    Login
                  </button>
                </p>
              </>
            )}

          </div>
        </div>
      )}
    </>
  );
}



