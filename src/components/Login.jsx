import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

   const [data, setData] = useState({});
   const [error, setError] = useState("");

   const handleInput = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      setError("")

      if (!data.email) {
         setError("Email is required");
         return;
      }

      const passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}:"<>?,./;'\[\]\\|`~-])[A-Za-z\d!@#$%^&*()_+{}:"<>?,./;'\[\]\\|`~-]{8,}$/
      if (!passReg.test(data.password)) {
         setError("Password must be at least 8 characters long and contain at least one lowercase letter, atlease one uppercase letter, and atleast one special character");
         return;
      }

      // API call to login
      alert("Login Successful");
   }

   return (
      <div className="flex h-screen bg-white justify-center lg:justify-between items-center">
         {/* Left Section */}
         <div className="hidden lg:flex w-[50%] justify-center items-center relative overflow-hidden h-full">
            <div className="absolute top-[-50vh] right-0 z-10 w-[200vh] h-[200vh] rounded-r-full bg-gradient-to-b from-blue-700 to-indigo-700"></div>
            <div className="z-20 relative -ml-10">
               <img
                  src="/LoginImg.svg"
                  alt="Login illustration"
                  className="h-96"
               />
            </div>
         </div>

         {/* Right Section */}
         <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8">
            <div className="w-full max-w-md flex flex-col justify-center items-center">
               <h2 className="text-4xl font-extrabold mb-3 text-left w-full">Welcome Back</h2>
               <p className="mb-8 text-left w-full">Sign in to continue your progress</p>

               {/* Form */}
               <form className="w-full max-w-md" onSubmit={handleSubmit}>
                  <div className="mb-4">
                     <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={data.email}
                        onInput={handleInput}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                     />
                  </div>
                  <div className="mb-4">
                     <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={data.password}
                        onInput={handleInput}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                     />
                  </div>

                  <p className="text-sm text-red-600 text-center">{error}</p>

                  {/* Remember me and Forgot Password */}
                  <div className="flex justify-between mb-4">
                     <label className="flex items-center space-x-2">
                        <input type="checkbox" />
                        <span>Remember me</span>
                     </label>
                     <a href="/" className="text-blue-500">Forgot password?</a>
                  </div>

                  {/* Sign In Button */}
                  <div className="mb-4">
                     <button className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors">
                        Sign In
                     </button>
                  </div>
               </form>

               <p className="mb-4">OR LOGIN WITH</p>

               {/* Social Icons */}
               <div className="flex space-x-4 mb-4">
                  <a href="/" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center border-[3px] border-gray-700 hover:bg-gray-800">
                     <i className="fab fa-instagram text-pink-600 text-xl" ></i>
                  </a>
                  <a href="/" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center border-[3px] border-gray-700 hover:bg-gray-800">
                     <i className="fab fa-facebook text-blue-600 text-xl"></i>
                  </a>
                  <a href="/" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center border-[3px] border-gray-700 hover:bg-gray-800">
                     <i className="fab fa-google text-red-500 text-xl"></i>
                  </a>
                  <a href="/" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center border-[3px] border-gray-700 hover:bg-gray-800">
                     <i className="fab fa-twitter text-blue-400 text-xl"></i>
                  </a>
               </div>

               <p>
                  Don't have an account? <Link to="/register" className="text-blue-500">Register Here</Link>
               </p>
            </div>
         </div>
      </div>
   );
};

export default Login;
