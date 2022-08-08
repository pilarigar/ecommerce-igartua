
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import CartWidget from './CartWidget'
import {Link, NavLink} from "react-router-dom"

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
            <NavLink to="/category/semillas/" style={{textDecoration:"none", color: "black"}}> Semillas </NavLink>
            <NavLink to="/category/frutossecos/" style={{textDecoration:"none", color: "black" }} > Frutos secos </NavLink>
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