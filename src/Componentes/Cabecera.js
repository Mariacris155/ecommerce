import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Cabecera() {
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
            <Nav.Link as ={Link} to="/" >Home</Nav.Link>
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item as ={Link} to="/electronica">
                Electronica
                </NavDropdown.Item>
              <NavDropdown.Item as ={Link} to="/joyeria" >
                Joyeria
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as ={Link}  to="/ropaHombre">
                Ropa Hombre
              </NavDropdown.Item>
              <NavDropdown.Item as ={Link} to="/ropaMujer">
                Ropa Mujer
              </NavDropdown.Item>                        
            </NavDropdown>
            <Nav.Link as ={Link} to="/carrito">Carrito</Nav.Link>
          </Nav>
          <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Busca tu producto"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Buscar</Button>
                </Form>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Cabecera;