import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import { BrowserRouter as Router, Routes,Route  } from 'react-router-dom';
import HomePage from './components/HomePage';
function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/homepage' element={<HomePage/>}/>
        </Routes>
      </Router>
   
      
    </div>
  );
}

export default App;
