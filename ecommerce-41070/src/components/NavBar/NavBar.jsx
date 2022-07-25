
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import CartWidget from './CartWidget'
import {Link} from "react-router-dom"

function Menu () {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          
          <Link to="/">
            <Navbar.Brand href="#home">HEALTHY-EAT</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Link to="/">
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Nav.Link href="#nosotros">Quienes somos</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
          <Nav>
            <Link to='/cart'>
              <CartWidget />
            </Link>
          </Nav>

        </Container>
      </Navbar>
      
    </>
    
  );
}

export default Menu;