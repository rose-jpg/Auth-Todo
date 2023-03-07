import logo from "./logo.svg"
import "./App.css"
import Welcome from "./components/Welcome"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage"
import Loader from "./components/Loader"
import {useState,useEffect} from 'react'
function App() {
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 1000)
  }, [])
  return loader ? (
    <Loader />
  ) : (
    <div className=''>
      <Router>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/homepage' element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
