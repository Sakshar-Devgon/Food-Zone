import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";

const SignUp = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [error, setError] = useState("");
   const navigate = useNavigate();

   const handleSignUp = async (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
         setError("Passwords do not match!");
         return;
      }
      try {
         await createUserWithEmailAndPassword(auth, email, password);
         alert("Account created successfully!");
         navigate("/");
      } catch (error) {
         setError(error.message);
      }
   };

   const handleGoogleSignUp = async () => {
      try {
         await signInWithPopup(auth, googleProvider);
         alert("Signed up with Google!");
         navigate("/");
      } catch (error) {
         setError(error.message);
      }
   };

   const handleFacebookSignUp = async () => {
      try {
         await signInWithPopup(auth, facebookProvider);
         alert("Signed up with Facebook!");
         navigate("/");
      } catch (error) {
         setError(error.message);
      }
   };

   return (
      <div className="min-h-screen bg-[#fff7f0] flex items-center justify-center relative px-4 overflow-hidden">
         {/* Animated Gradient Blobs */}
         <div className="absolute w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob top-[-5rem] left-[-5rem] z-0"></div>
         <div className="absolute w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 top-[20%] right-[-5rem] z-0"></div>
         <div className="absolute w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 bottom-[-5rem] left-[30%] z-0"></div>

         {/* SignUp Card */}
         <div className="z-10 bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm text-center space-y-5">
            <div className="flex justify-center items-center space-x-2">
               <img src="https://cdn-icons-png.flaticon.com/128/3132/3132693.png" alt="pizza logo" className="w-10 h-10" />
               <h1 className="text-xl font-bold">Food <span className="text-green-500">Zone</span></h1>
            </div>

            <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
            <p className="text-sm text-gray-500">Join the Food Zone family</p>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <form onSubmit={handleSignUp} className="space-y-4 text-left">
               <div className="relative">
                  <input
                     type="email"
                     placeholder="Email ID"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     required
                     className="w-full border border-gray-300 rounded-md px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <HiOutlineMail className="absolute left-3 top-2.5 text-gray-400 text-xl" />
               </div>

               <div className="relative">
                  <input
                     type="password"
                     placeholder="Password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     required
                     className="w-full border border-gray-300 rounded-md px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <RiLockPasswordLine className="absolute left-3 top-2.5 text-gray-400 text-xl" />
               </div>

               <div className="relative">
                  <input
                     type="password"
                     placeholder="Confirm Password"
                     value={confirmPassword}
                     onChange={(e) => setConfirmPassword(e.target.value)}
                     required
                     className="w-full border border-gray-300 rounded-md px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <RiLockPasswordLine className="absolute left-3 top-2.5 text-gray-400 text-xl" />
               </div>

               <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition"
               >
                  Sign Up
               </button>
            </form>

            <div className="text-sm text-gray-500">Or Sign Up using</div>

            <div className="flex justify-center space-x-4">
               <button
                  onClick={handleFacebookSignUp}
                  className="bg-blue-600 text-white p-2 rounded-full hover:scale-105 transition"
               >
                  <FaFacebookF />
               </button>
               <button
                  onClick={handleGoogleSignUp}
                  className="bg-red-500 text-white p-2 rounded-full hover:scale-105 transition"
               >
                  <FaGoogle />
               </button>
            </div>

            <p className="text-sm text-gray-600">
               Already have an account?{" "}
               <Link to="/signin" className="text-red-500 font-semibold hover:underline">
                  Sign In
               </Link>
            </p>
         </div>
      </div>
   );
};

export default SignUp;
