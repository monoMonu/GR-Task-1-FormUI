import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "./config";

// Sign up function with additional data
export const signUp = async (fullname, email, password) => {
   try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      await updateProfile(user, {
         displayName: fullname
      })

      return {
         status: 1,
         message: "User created successfully",
      };
   } catch (error) {
      return {
         status: 0,
         message: error.message,
      };
   }
};

// Sign in function
export const signIn = async (email, password) => {
   try {
      // Sign in user with email and password
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      return {
         status: 1,
         message: "User logged in successfully",
      };
   } catch (error) {
      return {
         status: 0,
         message: error.message,
      };
   }
};

export const logout = async () => {
   try {
      await signOut(auth);
      alert("User signed out successfully");
   } catch (error) {
      console.error("Error signing out: ", error);
      throw new Error(error.message); // Handle error appropriately
   }
};


