import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
   const [data, setData] = useState({});
   const [error, setError] = useState("");

   const handleInput = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setError("");

      const passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}:"<>?,./;'\[\]\\|`~-])[A-Za-z\d!@#$%^&*()_+{}:"<>?,./;'\[\]\\|`~-]{8,}$/;

      if (!passReg.test(data.password)) {
         setError("Password must be at least 8 characters long and contain at least one lowercase letter, at least one uppercase letter, and at least one special character");
         return;
      }

      if (!data.fullName) {
         setError("Email is required");
         return;
      }

      if (!data.email) {
         setError("Email is required");
         return;
      }

      // API call to register the user
      alert("Registration successful");
 
   };

   return (
      <div className="flex h-screen bg-white justify-center lg:justify-between items-center">
         {/* Left Section */}
         <div className="hidden lg:flex w-[50%] justify-center items-center relative overflow-hidden h-full">
            <div className="absolute top-[-50vh] right-0 z-10 w-[200vh] h-[200vh] rounded-r-full bg-gradient-to-b from-blue-700 to-indigo-700"></div>
            <div className="z-20 relative -ml-10">
               <img
                  src="/RegisterImg.svg"
                  alt="Register illustration"
                  className="h-96"
               />
            </div>
         </div>

         {/* Right Section */}
         <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-5 relative">
            <div className="relative w-full max-w-md flex flex-col justify-center items-center p-6 z-20">
               <div className="w-36 h-36 rounded-full bg-gradient-to-b from-red-500 to-red-400 absolute -z-20 left-[78%] top-[10%]"></div>
               <div className="w-36 h-36 rounded-full bg-gradient-to-b from-blue-700 to-indigo-700 absolute -z-20 left-[-5%] bottom-[10%]"></div>
               <div className="w-full h-full rounded-lg -z-10 absolute top-0 left-0 bg-[#00000010] backdrop-blur-xl"></div>
               <h2 className="text-4xl font-extrabold mb-3 text-left w-full">Create an Account</h2>
               <p className="mb-8 text-left w-full">Sign up to start your journey</p>

               {/* Form */}
               <form className="w-full max-w-md" onSubmit={handleSubmit}>
                  <div className="mb-4">
                     <input
                        type="fullName"
                        name="fullName"
                        placeholder="Full Name"
                        value={data.fullName || ""}
                        onInput={handleInput}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        required
                     />
                  </div>
                  <div className="mb-4">
                     <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={data.email || ""}
                        onInput={handleInput}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        required
                     />
                  </div>
                  <div className="mb-4">
                     <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={data.password || ""}
                        onInput={handleInput}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        required
                     />
                  </div>

                  <p className="text-sm text-red-600 text-center">{error}</p>

                  {/* Terms and Conditions */}
                  <div className="flex items-center mb-4">
                     <label className="flex items-center space-x-2">
                        <input type="checkbox" required />
                        <span>I agree to the Terms and Conditions</span>
                     </label>
                  </div>

                  {/* Sign Up Button */}
                  <div className="mb-4">
                     <button className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors">
                        Sign Up
                     </button>
                  </div>
               </form>

               <p className="mb-4">OR SIGN UP WITH</p>

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
                  Already have an account? <Link to="/login" className="text-blue-500">Login Here</Link>
               </p>
            </div>
         </div>
      </div>
   );
};

export default Register;
