import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";

const SignIn = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [showPassword, setShowPassword] = useState(false);
   const [error, setError] = useState("");
   const navigate = useNavigate();

   const handleSignIn = async (e) => {
      e.preventDefault();
      try {
         await signInWithEmailAndPassword(auth, email, password);
         navigate("/");
      } catch (error) {
         setError(error.message);
      }
   };

   const togglePassword = () => setShowPassword(!showPassword);

   return (
      <div className="min-h-screen bg-[#fff7f0] flex items-center justify-center relative px-4 overflow-hidden">
         {/* Animated Gradient Blobs */}
         <div className="absolute w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob top-[-5rem] left-[-5rem] z-0"></div>
         <div className="absolute w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 top-[20%] right-[-5rem] z-0"></div>
         <div className="absolute w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 bottom-[-5rem] left-[30%] z-0"></div>

         {/* Login Card */}
         <div className="z-10 bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm text-center space-y-5">
            {/* Logo */}
            <div className="flex justify-center items-center space-x-2">
               <img
                  src="https://cdn-icons-png.flaticon.com/128/3132/3132693.png"
                  alt="pizza logo"
                  className="w-10 h-10"
               />
               <h1 className="text-xl font-bold text-grey-900">
               Food <span className="text-green-500">Zone</span>
               </h1>
            </div>

            {/* Header */}
            <div>
               <h2 className="text-2xl font-bold text-gray-800">Hello</h2>
               <p className="text-sm text-gray-500">Sign into your Account</p>
            </div>

            {/* Error */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Form */}
            <form onSubmit={handleSignIn} className="space-y-4 text-left">
               <div className="relative">
                  <input
                     type="email"
                     placeholder="Email ID"
                     className="w-full border border-gray-300 rounded-md px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-green-500"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     required
                  />
                  <HiOutlineMail className="absolute left-3 top-2.5 text-gray-400 text-xl" />
               </div>

               <div className="relative">
                  <input
                     type={showPassword ? "text" : "password"}
                     placeholder="Password"
                     className="w-full border border-gray-300 rounded-md px-4 py-2 pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     required
                  />
                  <RiLockPasswordLine className="absolute left-3 top-2.5 text-gray-400 text-xl" />
                  <button
                     type="button"
                     onClick={togglePassword}
                     className="absolute right-3 top-2.5 text-xl text-gray-500"
                  >
                     {showPassword ? <IoEyeOff /> : <IoEye />}
                  </button>
               </div>

               <div className="text-right text-sm">
                  <a href="#" className="text-red-500 hover:underline">
                     Forgot your Password?
                  </a>
               </div>

               <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition"
               >
                  Login
               </button>
            </form>

            <div className="text-sm text-gray-500">Or Login using Social Media</div>

            <div className="flex justify-center space-x-4">
               <button
                  onClick={() => signInWithPopup(auth, facebookProvider)}
                  className="bg-blue-600 text-white p-2 rounded-full hover:scale-105 transition"
               >
                  <FaFacebookF />
               </button>
               <button
                  onClick={() => signInWithPopup(auth, googleProvider)}
                  className="bg-red-500 text-white p-2 rounded-full hover:scale-105 transition"
               >
                  <FaGoogle />
               </button>
            </div>

            <p className="text-sm text-gray-600">
               Don’t have an account?{" "}
               <a href="/signUp" className="text-red-500 font-semibold hover:underline">
                  Register Now
               </a>
            </p>
         </div>
      </div>
   );
};

export default SignIn;