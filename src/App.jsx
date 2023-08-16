import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// COMPONENTS
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

// PAGES
import Home from './pages/HomePage/Home'
import Products from './pages/ProductsPage/Products'
import Detail from './pages/DetailPage/Detail'

// STYLE
import "./styles/main.scss"

function App() {

  return (
    <Router>
      <header>
        <Navbar/>
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route/>
        <Route path="/detail/:name" element={<Detail/>}/>
        <Route path="*" element={"error"}/>
      </Routes>
        <Footer/>
    </Router>
  );
}

export default App
