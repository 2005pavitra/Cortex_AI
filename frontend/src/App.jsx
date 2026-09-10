import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { googleProvider } from '../utils/firebase'
import {auth} from "../utils/firebase"

function App() {
  const googleLogin = async() =>{
    const data = await signInWithPopup(auth, googleProvider)
    console.log(data)
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