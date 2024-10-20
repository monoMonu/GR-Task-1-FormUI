import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { logout } from '../firebase/utils';

const Home = () => {
   const [user, setUser] = useState(null);
   const navigate = useNavigate();
   const auth = getAuth();

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
         if (user) {
            setUser(user);
            console.log(user);
         } else {
            setUser(null);
            navigate('/login');
         }
      });

      return () => unsubscribe();
   }, [auth, navigate]);

   const handleLogout = async () => {
      try {
         await logout(auth);
         navigate('/login'); // Redirect to login after logout
      } catch (error) {
         alert("Failed to log out, please try again...")
         console.error("Error signing out: ", error);
      }
   };

   return (
      user ? (
         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-sm w-full bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
               <div className="text-center">
                  <h2 className="text-2xl font-semibold text-gray-800">{user.displayName || "User"}</h2>
                  <p className="mt-2 text-gray-600">{user.email}</p>
               </div>
               <button 
                  onClick={handleLogout}
                  className="mt-4 w-full bg-red-500 text-white font-semibold py-2 rounded hover:bg-red-600 transition duration-200"
               >
                  Logout
               </button>
            </div>
         </div>
      ) : <></>
   );
};

export default Home;
