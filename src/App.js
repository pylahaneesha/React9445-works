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





function App() {
  return (
    <div>
    <Router>
      <Routes>
     
        <Route path='/' element={ <Login />}></Route> 
        <Route path='/signup' element={ <Signup />}></Route>  
        <Route path='/dashboard' element={ <Dashboard />}></Route>
        <Route path='/sarees' element={ <Sarees />}></Route>
        <Route path='/sarees/:id' element={ <Sareesdetails />}></Route>
        <Route path='/dresses' element={ <Dresses />}></Route>
        <Route path='/jeans' element={ <Jeans/>}></Route>
        
        
       
       
      </Routes>
      </Router>
    </div>
  )      
}

export default App
