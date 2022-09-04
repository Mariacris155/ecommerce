import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'

function Cabecera(setId) {
  let [busqueda, setBusqueda] = useState([])
  let [data, setData] = useState('')
  let [loading, setLoading] = useState()

  // hacer fetch con productos para compararlos con lo que hay en productos y entonces 
  /* useEffect(() => {
    setLoading(true)
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(datos => { setBusqueda(datos) })
    setLoading(false)
  }, [])
 */
  /* useEffect(() => {
    if (busqueda !== "") {
      busqueda.map((setId))
    
      
    }
  }, [busqueda]) */
  


  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}ChimueloCompany</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/electronica">
                Electronica
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/joyeria" >
                Joyeria
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/ropaHombre">
                Ropa Hombre
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ropaMujer">
                Ropa Mujer
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/carrito">Carrito</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Busca tu producto"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" value={busqueda}
              onClick={(e) => {
               
              }}>Buscar</Button>
          </Form>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Cabecera;