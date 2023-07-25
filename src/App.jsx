import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import FeaturedProducts from './components/FeaturedProducts'
import Footer from './components/Footer'


function App() {
  
  const greetings = "Hello people! The number 1 clothing brand over the world."
  // const showcase = "Here will the showcase of products."
  // const info = "We are a new clothing brand specialized in hoodies and pants in order to make yours aesthetics better."

  return (
    <main className='main'>
      <Navbar/>
      <ItemListContainer greeting={greetings}/>
      <FeaturedProducts/>
      <Footer/>
    </main>
  );
}

export default App
