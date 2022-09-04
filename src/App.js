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
import Formulario from "./Componentes/Formulario";
import Busqueda from "./Componentes/Buscar";


function App() {

 let [id, setId] = useState ('')
 let [busqueda, setBusqueda] = useState ([])
 let [total, setTotal] = useState(0)
 




  return (
    <BrowserRouter>
    
  
    <Cabecera/> 
    <Busqueda setId={setId}/>
  <Routes>
  <Route path="/" element={<Productos setId={setId}/>}/>
  <Route path="/joyeria" element={<Categoriasjew setId={setId}/>}/>
  <Route path="/electronica" element={<Categoriastec setId={setId}/>}/>
  <Route path="/ropaMujer" element={<Categoriaswom setId={setId}/>}/>
  <Route path="/ropaHombre" element={<Categoriasmen setId={setId}/>}/>
  {/* <Route path= "/carrito" element= {} /> Carrito estaba aqui dentro pero si lo meto se me rompe la*/}
  <Route path= "/formulario" element={<Formulario /* total={total} */ />}/>
  </Routes>
  
  <Carrito id={id} setId={setId} />
    
    
    <Footer/>
  
  </BrowserRouter>
  );
}

export default App;
