import React from 'react'
import { Container, Dropdown, DropdownButton, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
//import Voz from './Voz';
const Layout = () => {
  return (
    <Navbar id="navbar" bg="secondary" expand="lg" variant="dark">
      <Container>
        <ul>
          <li>
            <Navbar.Brand className="navbar-brand-custom">
              <Link to="/" className="edit-link">
                Inicio
              </Link>
            </Navbar.Brand>
          </li>
          <li>
            <Link to="/clientes" className="nav-link">
              Clientes
            </Link>
          </li>
          <li>
            <Link to="/prestamos" className="nav-link">
              Prestamos
            </Link>
          </li>
        </ul>
        
        <DropdownButton id="dropdown-basic-button" title="Usuario">
        <Dropdown.Item href="/inicio">Inicio Sesion</Dropdown.Item>
        
        </DropdownButton>
      </Container>
    </Navbar>
  )
}

export default Layout
  