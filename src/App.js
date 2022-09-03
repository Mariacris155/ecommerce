import Producto from "./Componentes/Producto"
import './App.css';
import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecera from "./Componentes/Cabecera";
import Footer from "./Componentes/Footer";
import React, {useEffect, useState} from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Productos from "./Componentes/Producto";
import Categoriasjew from "./Componentes/Categoriasjew";
import Categoriastec from "./Componentes/Categoriastec";
import Categoriasmen from "./Componentes/Categoriasmen";
import Categoriaswom from "./Componentes/Categoriaswom";
import Carrito from "./Componentes/Carrito"


function App() {

 let [id, setId] = useState ('')




  return (
    <BrowserRouter>
    
  
    <Cabecera/> 
  
  <Routes>
  <Route path="/" element={<Productos setId={setId}/>}/>
  <Route path="/joyeria" element={<Categoriasjew/>}/>
  <Route path="/electronica" element={<Categoriastec/>}/>
  <Route path="/ropaMujer" element={<Categoriaswom/>}/>
  <Route path="/ropaHombre" element={<Categoriasmen/>}/>
  </Routes>
    
    <Carrito id={id}/>

    <Footer/>
  
  </BrowserRouter>
  );
}

export default App;
