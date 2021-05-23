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
import { Container, Row } from 'react-bootstrap';
import CreateGroup from './pages/CreateGroup';
import usersJson from './data/users.json';
import categoriesJson from './data/categories.json';
import citiesJson from './data/israel-cities.json';
import groupsJson from './data/groups.json';
import Footer from './components/Footer';


//App is a main component for SkillShare app
//State:
//activeUser: Either null, if no user logged in, or a user object if a user is in

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeUser:null,
      allUsers:usersJson,
      allTeachers:usersJson.filter((user)=>{
        if (user.isTeacher){return user}
      }),
      allCategories:categoriesJson,
      allCities:citiesJson,
      allGroups:groupsJson,
      listUsers:[]
    
    }
  }
login = (userObj)=>{
  this.setState({
    activeUser:userObj
  })
}
 logout = () => {
   this.setState({
     activeUser:null
   })
 } 

 joinTeacher = (teacherId) => {
  // console.log(teacherId)
 console.log('active user in app:'+ this.state.activeUser)
  if(!this.state.activeUser){
      alert('התחבר/הרשם כדי להצטרף לקבוצה של המורה')
  }
  else{
      
     
     const teacherGroups = this.state.allGroups.map((group)=> {
      if(group.createdBy !== teacherId) {
        return group;
      }
       else {
          group.usersList.concat(this.state.activeUser)
       }  
         
      })
      this.setState({
        allGroups:teacherGroups
    })
    console.log(this.state.allGroups)
  }    
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
      <Container className="px-md-3 px-lg-5"> 
      <Route exact path='/'>
        <HomePage
        activeUser={this.state.activeUser} />
      </Route>
      <Route exact path='/teachers'>
        <Teachers 
         allTeachers={this.state.allTeachers}
         allCategories={this.state.allCategories}
         allCities={this.state.allCities}
         allGroups={this.state.allGroups}
         header={'חפש בעל מיומנות/מורה/מאמן'}
         activeUser={this.state.activeUser}
         joinTeacher={this.joinTeacher}
         ></Teachers>
      </Route>
      <Route exact path='/groups'>
       <Groups allUsers={this.state.allUsers} allGroups={this.state.allGroups}></Groups>
      </Route>
      <Route exact path='/user'>
         <User></User>
      </Route>
      <Route exact path='/login'>
         <Login 
         allUsers={this.state.allUsers}
         login={this.login}
         ></Login>
      </Route>
      <Route exact path='/signup'>
        <Signup></Signup>
      </Route>
      <Route exact path='/createGroup'>
       <CreateGroup></CreateGroup>
      </Route>
     
     
      {/* <Route exact path={['/','/teachers','/groups','/user','/createGroup']}>
       
        <Footer></Footer>
        
      </Route> */}
      </Container>
      
 </HashRouter>
  );
}
}

export default App;
