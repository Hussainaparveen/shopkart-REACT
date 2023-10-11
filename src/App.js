import './App.css';
import React from 'react';
import Page1 from './Components/Page1';
import ProdDesc from './Components/ProdDesc';
import { Route, Routes } from 'react-router-dom';
import AddToCart from './Components/AddToCart';
import NoPage from './Components/NoPage';

function App() {
  return(
   <Routes>
    <Route path='/' element={<Page1/>}/>
    <Route path='/ProdDesc/:id' element={<ProdDesc/>}/>
    <Route path='/AddToCart' element={<AddToCart/>}/>
    <Route path='*' element={<NoPage/>}/>
   </Routes>
  )
}
      
  
export default App;
