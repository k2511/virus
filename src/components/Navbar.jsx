
// import React from "react";
// import { Link } from "react-router-dom";

// export default function Navbar({ activePanel, setActivePanel }) {
//   return (
//     <>
//       <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white">

//         {/* Buttons */}
//         <div className="flex space-x-4">
//         </div>
//       </header>

//       {/* Drawer */}
//       {activePanel && (
//         <div className="fixed inset-0 z-50 flex justify-end">
//           <div className="absolute inset-0 bg-black/40" onClick={() => setActivePanel(null)}></div>
//           <div className="relative w-full max-w-md bg-white shadow-lg p-6 overflow-y-auto animate-slide-in-right">
//             <button onClick={() => setActivePanel(null)} className="absolute top-4 right-4 text-gray-600 hover:text-black">✕</button>

//             {activePanel === "login" && (
//               <>
//                 <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
//                 <form className="space-y-4">
//                   <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-lime-500"/>
//                   <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-lime-500"/>
//                   <button type="submit" className="w-full bg-yellow-400 text-black font-bold py-2 rounded-lg hover:bg-yellow-500">Login</button>
//                 </form>
//               </>
//             )}

//             {activePanel === "register" && (
//               <>
//                 <h2 className="text-2xl font-bold mb-4">Create Account</h2>
//                 <form className="space-y-4">
//                   <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-lime-500"/>
//                   <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-lime-500"/>
//                   <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-lime-500"/>
//                   <button type="submit" className="w-full bg-lime-500 text-white font-bold py-2 rounded-lg hover:bg-lime-600">Register</button>
//                 </form>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }




import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGoogle, FaUser, FaLock } from "react-icons/fa";

export default function Navbar({ activePanel, setActivePanel }) {
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

                <form className="space-y-4">
                  {/* Email */}
                  <div className="flex items-center border rounded-full px-3 py-2">
                    <FaUser className="text-gray-400 mr-2" />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full outline-none"
                    />
                  </div>

                  {/* Password */}
                  <div className="flex items-center border rounded-full px-3 py-2">
                    <FaLock className="text-gray-400 mr-2" />
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full outline-none"
                    />
                  </div>

                  <div className="flex justify-end">
                    <Link
                      to="/forgot-password"
                      className="text-sm text-gray-500 hover:text-black"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  {/* Login Button */}
                  <button
                    type="submit"
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
                  Welcome Back!
                </h2>
                <p className="text-gray-500 text-center mb-6">
                  Login to manage your account.
                </p>

                <form className="space-y-4">
                  {/* Email */}
                  <div className="flex items-center border rounded-full px-3 py-2">
                    <FaUser className="text-gray-400 mr-2" />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full outline-none"
                    />
                  </div>

                  {/* Password */}
                  <div className="flex items-center border rounded-full px-3 py-2">
                    <FaLock className="text-gray-400 mr-2" />
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full outline-none"
                    />
                  </div>

                  <div className="flex justify-end">
                    <Link
                      to="/forgot-password"
                      className="text-sm text-gray-500 hover:text-black"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  {/* Login Button */}
                  <button
                    type="submit"
                    className="w-full bg-yellow-400 text-black font-bold py-3 rounded-full hover:bg-yellow-500 transition"
                  >
                    Login
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
          </div>
        </div>
      )}
    </>
  );
}