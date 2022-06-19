import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Menu from './Pages/Menu/Menu';
import Reservaciones from './Pages/Reservaciones/Reservaciones';
import Footer from './Components/Footer/Footer';
import Eventos from './Pages/Eventos/Eventos';
import Platillos from './Components/Platillos/Platillos';
import Bebidas from './Components/Bebidas/Bebidas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path='/' element = { <Home />} />
        <Route path='/Menu/*' element = { <Menu />} >
          <Route path='Platillos' element = { <Platillos /> } />
          <Route path='Bebidas' element = { <Bebidas /> } />
        </Route>
        <Route path='/Reservaciones' element = { <Reservaciones />} />
        <Route path='/Eventos' element = { <Eventos />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
