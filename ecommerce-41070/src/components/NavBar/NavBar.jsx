
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import CartWidget from './CartWidget';

function Menu () {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">HEALTHY-EAT</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Productos</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
          </Nav>
          <Nav>
           <CartWidget />
          </Nav>
        </Container>
      </Navbar>
      
    </>
    
  );
}

export default Menu;