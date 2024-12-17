import React from 'react'
import './App.css'
import Login from './componets/Login';
import Signup from './componets/Signup';
import Dashboard from './componets/Dashboard';
import {BrowserRouter as Router,Routes,Route}from'react-router-dom';
import Sarees from './componets/Modules/Sarees';
import Dresses from './componets/Modules/Dresses';
import Jeans from './componets/Modules/jeans';
import Sareesdetails from './componets/Modules/Details/Sareesdetails';
import Dressesdetails from './componets/Modules/Details/Dressesdetails';
import Jeansdetails from './componets/Modules/Details/Jeansdetails';
import { CartProvider } from './componets/context/Cartcontext';
import CartPage from './componets/Modules/cart';

function App() {
  return (
    <div>
    <Router>
    <CartProvider>
      <Routes>
     
        <Route path='/' element={ <Login />}></Route> 
        <Route path='/signup' element={ <Signup />}></Route>  
        <Route path='/dashboard' element={ <Dashboard />}></Route>
        <Route path='/sarees' element={ <Sarees />}></Route>
        <Route path='/sarees/:id' element={ <Sareesdetails />}></Route>
        <Route path='/dresses' element={ <Dresses />}></Route>
        <Route path='/dresses/:id' element={ <Dressesdetails/>}></Route>
        <Route path='/jeans' element={ <Jeans/>}></Route>
        <Route path='/jeans/:id' element={ <Jeansdetails/>}></Route>
        <Route path="/cart" element={<CartPage />} />
        
       
       
      </Routes>
      </CartProvider>
      </Router>
    </div>
  )      
}

export default App










