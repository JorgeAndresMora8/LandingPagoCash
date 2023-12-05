import './Style/css/index.css'
import './App.css'
import { Footer } from './Components/Footer/Footer'
// import Navbar from './Components/Navbar/Navbar'
import { NuestraApp } from './Screen/NuestraApp/NuestraApp'
import { Home } from './Screen/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'


function App() {
  return (
    <>
    <NuestraApp/>
    <Home />
    <Footer />
    </>
  )
}

export default App
