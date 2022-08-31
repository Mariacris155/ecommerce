import Producto from "./Componentes/Producto"
import './App.css';
import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecera from "./Componentes/Cabecera";
import Footer from "./Componentes/Footer";
import {useEffect, useState} from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Productos from "./Componentes/Producto";
import Categoriasjew from "./Componentes/Categoriasjew";




function App() {

 

  return (
    <BrowserRouter>
    
  
    <Cabecera/> 
  
  <Routes>
  <Route path="/" element={<Productos/>}/>
  <Route path="/joyeria" element={<Categoriasjew/>}/>
  </Routes>
  
    <Footer/>
  
  </BrowserRouter>
  );
}

export default App;
