import React from 'react'
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function NavBar() {
  return (  
    <Navbar collapseOnSelect expand="lg" bg="light" variant="white">
      <Container>
        <img src='./images/logo.png' className="logo" alt='logo'/>
        <Navbar.Brand className='NavBrand'>B.V Reddy School</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
            <NavDropdown title="About Us" class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
              <NavDropdown.Item href="#action/3.1" class="dropdown-menu fade-up">Overview</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" class="dropdown-menu fade-up"> why BV Reddy school</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" class="dropdown-menu fade-up">Ou Heritage</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" class="dropdown-menu fade-up">Vision and Mission</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" class="dropdown-menu fade-up">rom Directors Desk</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" class="dropdown-menu fade-up">Careers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" class="dropdown-menu fade-up">Compliance</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown title="Academics" class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
              <NavDropdown.Item href="#action/3.1" class="dropdown-menu fade-up">CBSE Cirriculum</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" class="dropdown-menu fade-up">Teaching Methodology</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" class="dropdown-menu fade-up">Early Childhood Program</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" class="dropdown-menu fade-up">Teacher Manuals</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" class="dropdown-menu fade-up">Teaching Methodology</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" class="dropdown-menu fade-up">Parents corner</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" class="dropdown-menu fade-up">Experienced Teachers</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown title="Admissions" class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
              <NavDropdown.Item href="#action/3.1" class="dropdown-menu fade-up">Admissions Checklist</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" class="dropdown-menu fade-up">AQ</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" class="dropdown-menu fade-up">Admission Process</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown title="Student Life" class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
              <NavDropdown.Item href="#action/3.1" class="dropdown-menu fade-up">Public Lie</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" class="dropdown-menu fade-up">Clubs and commities </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" class="dropdown-menu fade-up">Events and competitions</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" class="dropdown-menu fade-up">Lie Skills</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" class="dropdown-menu fade-up">House Systems</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Link href="#link">Inrastructure</Nav.Link>
          <Nav>
            <NavDropdown title="Hostel" class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
              <NavDropdown.Item href="#action/3.1" class="dropdown-menu fade-up">Hostel Lie</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" class="dropdown-menu fade-up">ood</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Link href="#link">ReachUs</Nav.Link>
              {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Another action </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4"> Separated link</NavDropdown.Item> */}
        </Navbar.Collapse>
        <span></span>
        <Button variant="primary" size="lg">Login</Button>
      </Container>
    </Navbar>
  )
}

export default NavBar