import { signOut, onAuthStateChanged } from "firebase/auth"
import React from "react"
import { auth } from "../firebaseConfig"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

function HomePage() {
  const navigate = useNavigate()
  
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/")
      }
    })
  }, [])
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/")
      })
      .catch((err) => {
        alert(err.message)
      })
  }
 
  return (
    <div>
      <button className='bg-[red] p-2 text-white' onClick={handleSignOut}>
        SignOut
      </button>
    </div>
  )
}

export default HomePage
