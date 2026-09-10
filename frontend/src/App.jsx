import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { googleProvider, auth } from '../utils/firebase'
import api from '../utils/axios.js';

function App() {

  const handleLogin = async (token) => {
    try {
      const { data } = await api.post("/auth/login", { token })
      console.log("backend user details:", data)
    } catch (error) {
      console.error("Error in communicating with backend", error)
    }
  }

  const googleLogin = async () => {
    try {
      const data = await signInWithPopup(auth, googleProvider)
      const token = await data.user.getIdToken()
      console.log("Firebase token", token)
      await handleLogin(token);
      console.log("Login sequence finished: ", data)
    } catch (error) {
      console.log("Firebase login error: ", error)
    }

  }
  return (
    <div>
      <button className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
         bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded 
         flex items-center justify-center "
        onClick={googleLogin}>
        Sign up with Google
      </button>
    </div>
  )
}

export default App