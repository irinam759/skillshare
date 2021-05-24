import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';



class SkillNavbar extends React.Component{
  constructor(props){
    super(props);
    
  }
      render() {
        // Show the user managment links conditionally
        // If activeUser exists,then a user is logged in
        // If activeUser does not exist - Render login+signup
        // If activeUser exists - Render signout
        const loginEl = (! this.props.activeUser) ? <Nav.Link href="/#/login">התחבר</Nav.Link> : null;
        const signupEl = (! this.props.activeUser) ? <Nav.Link href="/#/signup">הירשם</Nav.Link> : null;
        const nameEl = (this.props.activeUser)  ? <Nav.Link disabled >שלום, {this.props.activeUser.name}</Nav.Link> : null;
        const signoutEl = (this.props.activeUser)  ?
         <Nav.Link href="/#/" onClick={() => this.props.logout()}>
           התנתק
           </Nav.Link> : null;
          const userProfile = (this.props.activeUser)  ?
          <Nav.Link href="/#/user">
            החשבון שלי
            </Nav.Link> : null;


        return(
            <Navbar bg="light" expand="lg">
            <Navbar.Brand className='mr-xs-0 mr-sm-0 logo' href="/#/">SkillShare</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto mr-2">
                <Nav.Link href="/#/">דף בית</Nav.Link>
                <Nav.Link href="/#/teachers">מורים </Nav.Link>
                <Nav.Link href="/#/groups"> קבוצות</Nav.Link>
                
                {userProfile}
                </Nav>
                <Nav className="mr-auto">
                {loginEl}
                {signupEl}
                {nameEl}
               {signoutEl}
               
              </Nav>
              
            </Navbar.Collapse>
          </Navbar>  
        )
    }
}

export default SkillNavbar;