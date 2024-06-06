
import './App.css'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import About from './components/About';
import Product from './components/Product';
import Blog from './components/Blog';
import Newsletter from './components/Newsletter';
import MyFooter from './components/MyFooter';


function App() {

  return (
    <>      
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
      <Product/>
      <Blog/>
      <Newsletter/>
      <MyFooter/>
    </>
  )
}

export default App
