import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './SkillNavbar.css';

class SkillNavbar extends React.Component{
    render() {
        return(
            <Navbar bg="light" expand="lg">
            <Navbar.Brand className='skill-nav-brand' href="/#/">SkillShare</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/#/">דף בית</Nav.Link>
                <Nav.Link href="/#/teachers">מורים</Nav.Link>
                <Nav.Link href="/#/groups">קבוצות</Nav.Link>
                </Nav>
                <Nav className="mr-auto">
                <Nav.Link href="/#/login">התחבר</Nav.Link>
                <Nav.Link href="/#/signup">הירשם</Nav.Link>
                
              </Nav>
              
            </Navbar.Collapse>
          </Navbar>  
        )
    }
}

export default SkillNavbar;