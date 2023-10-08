
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { ShopContextProvider } from './context/shop-context';
import Footer from './components/footer/footer';
import Review from './components/Review/Review';
// import YourComponent from './ReviewSlider';
import Checkout from './pages/checkout/Checkout';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
//  import Register from './components/Register';
//  import Login from './components/Login';
function App() {
  return (
  <div className="App">
    <ShopContextProvider>
    <Router>
      <Navbar />

      <Routes>
          {/* <Route path="/login" element={<Login />}/>    */}
         {/* <Route path="/register" element={<Register />}/>  */}
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/Checkout' element = {<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        


      </Routes>
      
      
      
      <Footer />
    </Router>
    </ShopContextProvider>

     </div>
  );
}
      
    
  


export default App;
