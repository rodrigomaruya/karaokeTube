import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Rock from './pages/Rock'
import Sertanejo from './pages/Sertanejo'
import Home from './pages/Home'
import MPB from './pages/MPB'
import MaisPedidas from './pages/MaisPedidas'


function App() {
  

  return (
    <>
      <Router> 
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/rock" element={<Rock/>} />
          <Route path="/sertanejo" element={<Sertanejo/>} />
          <Route path="/mpb" element={<MPB/>} />
          <Route path="/maisPedidas" element={<MaisPedidas/>} />
            
        </Routes>
        
      </Router>
    </>
  )
}

export default App
