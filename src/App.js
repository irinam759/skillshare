import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Teachers from './pages/Teachers';
import Groups from './pages/Groups';
import SkillNavbar from './components/SkillNavbar';
import React from 'react';
import User from './pages/User';
import { Container } from 'react-bootstrap';
import CreateGroup from './pages/CreateGroup';

//App is a main component for SkillShare app
//State:
//activeUser: Either null, if no user logged in, or a user object if a user is in

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeUser:{
        //activeUser:null
        id:1,
        name:'ira',
        email:'katsirka@gmail.com',
        pwd:'ira'
      }
    }
  }

 logout = () => {
   this.setState({
     activeUser:null
   })
 } 
  render() {

 
  return (
    <HashRouter>
     
      <Route exact path={['/','/teachers','/groups','/user','/createGroup']}>
        <SkillNavbar
         activeUser={this.state.activeUser} 
        logout={this.logout}
        />
      </Route>
      <Container>
      <Route exact path='/'>
        <HomePage></HomePage>
      </Route>
      <Route exact path='/teachers'>
        <Teachers></Teachers>
      </Route>
      <Route exact path='/groups'>
       <Groups></Groups>
      </Route>
      <Route exact path='/user'>
         <User></User>
      </Route>
      <Route exact path='/login'>
         <Login></Login>
      </Route>
      <Route exact path='/signup'>
        <Signup></Signup>
      </Route>
      <Route exact path='/createGroup'>
       <CreateGroup></CreateGroup>
      </Route>
      </Container>
 </HashRouter>
  );
}
}

export default App;
