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
import usersJson from './data/users.json';
import categoriesJson from './data/categories.json';
import citiesJson from './data/israel-cities.json';
import groupsJson from './data/groups.json';
import Footer from './components/Footer';





//App is a main component for SkillShare app
//State:
//activeUser: Eather null, if no user logged in, or a user object if a user is in

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
      //groupsByUsers - show only groups created by users and not by teacher
      groupsByUsers:groupsJson.filter((user)=>{
        let element= usersJson.filter((teacher)=>{
          if ((teacher.id===user.createdBy)&& (teacher.isTeacher===false))
           {
             return true }
        })
        if(element.length>0){return true}
        else{return false}
    }),
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

 //Join Teacher group
 joinTeacher = (teacherId) => {
 
  if(!this.state.activeUser){
    
      alert('התחבר/הרשם כדי להצטרף לקבוצה של המורה')
  }
  else{
  

     const teacherGroups = this.state.allGroups.map((group)=> {
       
      if(group.createdBy !== teacherId) {
        return group;
      }
     
      group.usersList=group.usersList.concat(this.state.activeUser.id);
         return group;
         ;
      
         
     });
     this.setState({
      allGroups:teacherGroups
  })
     
    }
  }

  //Exit Teacher group
 exitTeacher = (teacherId) => {


     const teacherGroups = this.state.allGroups.map((group)=> {
       
      if(group.createdBy !== teacherId) {
        return group;
      }
     
      group.usersList=group.usersList.filter(element => (element !== this.state.activeUser.id))
         return group;

         
     });
     this.setState({
      allGroups:teacherGroups
  })
     
    
  }
  //Check if user in the list
// return 0 if in  the list
// else return -1

changeButton = (groupObj) =>{
    
  if ((typeof groupObj === "object") && (this.state.activeUser)) {
        return groupObj.usersList.findIndex(element => (element === this.state.activeUser.id));       
}
return -1;
}
  
isActiveUser=(user)=>{
  if(this.state.activeUser){
    if (this.state.activeUser.id === user)
     {return true}
  }
  return false;
}
  render() {

console.log(this.state.groupsByUsers)
  return (
    <HashRouter>
    
   
      <Route exact path={['/','/loginModal','/teachers','/groups','/user','/createGroup']}>
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
         exitTeacher={this.exitTeacher}
        changeButton={this.changeButton}
        isActiveUser={this.isActiveUser}
         ></Teachers>
      </Route>
      <Route exact path='/groups'>
       <Groups 
       allUsers={this.state.allUsers}
       groupsByUsers={this.state.groupsByUsers}
        allTeachers={this.state.allTeachers}
         allCategories={this.state.allCategories}
         allCities={this.state.allCities}
         header={'חפש קבוצה'}
         activeUser={this.state.activeUser}
         joinTeacher={this.joinTeacher}
         exitTeacher={this.exitTeacher}
         changeButton={this.changeButton}
         isActiveUser={this.isActiveUser}
        ></Groups>
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
