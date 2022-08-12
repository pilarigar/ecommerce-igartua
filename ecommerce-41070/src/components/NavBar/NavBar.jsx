
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import CartWidget from './CartWidget'
import {Link, NavLink} from "react-router-dom"

import { useCartContex } from "../../Context/CartContext"

function Menu () {
  const {TotalQuantity} = useCartContex ()

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          
          <Link to="/" style={{textDecoration:"none", color: "black", fontWeight: "bold",}}>
            <Navbar.Brand>HEALTHY-EAT</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <NavLink to="/" href= "#home" style={{textDecoration:"none", color: "black", fontWeight: "bold", margin: "5px"}}>Home</NavLink>
            <NavLink to="/category/semillas/" style={{textDecoration:"none", color: "black", margin: "5px"}}> Semillas </NavLink>
            <NavLink to="/category/frutossecos/" style={{textDecoration:"none", color: "black", margin: "5px"}} > Frutos secos </NavLink>
          </Nav>
          <Nav>
            <Link to='/cart' style={{textDecoration:"none", color: "black", fontWeight: "bold",}}>
              <CartWidget/> {TotalQuantity()}
            </Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
    
  );
}

export default Menu;