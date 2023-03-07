import React from "react"
import { useState, useEffect } from "react"
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth"
import { auth } from "../firebaseConfig"
import { useNavigate } from "react-router-dom"
function Welcome() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isRegistering, setIsRegistering] = useState(false)
  const [registerInformation, setRegisterInformation] = useState({
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  })

  const navigate = useNavigate()
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/homepage")
      }
    })
  }, [])
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/homepage")
      })
      .catch((err) => alert(err.message))
  }
  const handleRegister = () => {
    if (registerInformation.email !== registerInformation.confirmEmail) {
      alert("Please Confirm that email are the same")
      return
    } else if (
      registerInformation.password !== registerInformation.confirmPassword
    ) {
      alert("Please confirm that password are the same")
      return
    }

    createUserWithEmailAndPassword(
      auth,
      registerInformation.email,
      registerInformation.password
    )
      .then(() => {
        navigate("/homepage")
      })
      .catch((err) => alert(err.message))
  }

  return (
    <div className='px-4'>
      <div>
        {isRegistering ? (
          <div className=''>
            <h2 className='text-[16px] mt-28'>Welcome Back !</h2>
            <div class='inputbox'>
              <ion-icon name='mail-outline'></ion-icon>
              <input
                type='email'
                required
                value={registerInformation.email}
                onChange={(e) =>
                  setRegisterInformation({
                    ...registerInformation,
                    email: e.target.value,
                  })
                }
              />
              <label for=''>Email</label>
            </div>
            <div class='inputbox'>
              <ion-icon name='mail-outline'></ion-icon>
              <input
                type='email'
                required
                value={registerInformation.confirmEmail}
                onChange={(e) =>
                  setRegisterInformation({
                    ...registerInformation,
                    confirmEmail: e.target.value,
                  })
                }
              />
              <label for=''>Confirm Email</label>
            </div>

            <div class='inputbox'>
              <ion-icon name='lock-open-outline'></ion-icon>
              <input
                required
                type='password'
                value={registerInformation.confirmPassword}
                onChange={(e) =>
                  setRegisterInformation({
                    ...registerInformation,
                    confirmPassword: e.target.value,
                  })
                }
              />
              <label for=''>Confirm Password</label>
            </div>
            <div class='inputbox'>
              <ion-icon name='lock-open-outline'></ion-icon>
              <input
                required
                type='password'
                value={registerInformation.password}
                onChange={(e) =>
                  setRegisterInformation({
                    ...registerInformation,
                    password: e.target.value,
                  })
                }
              />
              <label for=''>Password</label>
            </div>

            <div>
              <button
                className='w-[100%] bg-[#e40fac] p-3 rounded-[8px]'
                onClick={handleRegister}
              >
                Register
              </button>
            </div>
            <h5 className='text-white text-center mt-3 text-[12px]'>
              You an account already ?
              <button onClick={() => setIsRegistering(false)}>Go Back</button>
            </h5>
          </div>
        ) : (
          <div className=''>
            <h2 className='text-[16px] mt-32'>Welcome Back !</h2>
            <div class='inputbox'>
              <ion-icon name='mail-outline'></ion-icon>
              <input
                required
                type='text'
                onChange={handleEmailChange}
                value={email}
              />
              <label for=''>Email</label>
            </div>
            <div class='inputbox'>
              <ion-icon name='lock-open-outline'></ion-icon>
              <input
                required
                type='password'
                onChange={handlePasswordChange}
                value={password}
              />
              <label for=''>Password</label>
            </div>

            <div>
              <button
                className='w-[100%] bg-[#e40fac] p-3 rounded-[8px]'
                onClick={handleSignIn}
              >
                Login
              </button>
            </div>
            <h5 className='text-white text-center mt-3 text-[12px]'>
              Don't have an account ?{" "}
              <button onClick={() => setIsRegistering(true)}>
                Create an account
              </button>
            </h5>
          </div>
        )}
      </div>
    </div>
  )
}

export default Welcome
