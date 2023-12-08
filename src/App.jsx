import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Screen from './Screen/Screen';
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import TerminosCondiciones from './Components/TerminosCondiciones/TerminosCondiciones.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Screen/>} />
      <Route path='/terminos-condiciones' element={<TerminosCondiciones />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
