import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import CardSubtitles from '../components/CardSubtitles';
import SearchForm from '../components/SearchForm';

class Groups extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            resultsByCategory:[],
            resultsByCity:[],
            chosenCity:0,
            chosenCategory:0,

            
        }
    }
//Function update state and returns teachers filtered by city 
citySelected = (index) => {
    const groupsByCity = this.props.groupsByUsers.filter((group)=>{
        return (String(group.city)===index) ? group : false
   
});
this.setState({
    resultsByCity: groupsByCity,
    chosenCity:index
  
})

} 
//Function update state and returns teachers filtered by category 
categorySelected = (index) => {

    const filteredGroups = (index!=='0')?
    this.props.groupsByUsers.filter((group)=>{
        return (String(group.category)===index) ? group : false}) :this.props.groupsByUsers ;
   
    this.setState({
         resultsByCategory: filteredGroups,
         chosenCategory:index
    })
} 

// Function that compares both category and city arrays
// If both selected returns array that includes category and city chosen
// If none selected  returns all the teachers
// Else if city or category selected, returns the selected results
allFilter=()=>{
    const chosenCity = this.state.chosenCity;
    const chosenCategory = this.state.chosenCategory;
   
    if(chosenCity && chosenCategory){
        return this.props.groupsByUsers
        .filter((group)=>this.state.resultsByCity.includes(group) && this.state.resultsByCategory.includes(group));

    }
    if(!chosenCity && !chosenCategory){
       
        return this.props.groupsByUsers
    }
    else{
       
    return this.props.groupsByUsers
        .filter((group)=>this.state.resultsByCity.includes(group) || this.state.resultsByCategory.includes(group));
    }
}    
    getUserById = function(id){
        return this.props.allUsers.find(user =>  (user.id === id))
    }

    //Function join teacher group
joinTeacherGroup=(teacherId)=>{
    this.props.joinTeacher(teacherId);

    
}
//Count user in teachers groups
countUsers = (groupObj) =>{
    let count = 0;
   if (typeof groupObj === "object"){
    for(let i=0;i<groupObj.usersList.length;i++){
        count++;
    }
    
    return count;
}
return 0;
}
//Check if user in the list
// return 0 if in  the list
// else return -1

changeButton = (groupObj) =>{
    
    if ((typeof groupObj === "object") && (this.props.activeUser)) {
          return groupObj.usersList.findIndex(element => (element === this.props.activeUser.id));       
}
return -1;
}

exitTeacherGroup=(teacherId)=>{
    this.props.exitTeacher(teacherId);

    
}
    render(){
        
        const allResults = this.allFilter();
               const groupsByUsers= allResults.map((group) => {
                const groupCategory = this.props.allCategories.find(element =>  (element.id === group.category));
                const groupCity = this.props.allCities.find(element =>  (element.semel_yeshuv === String(group.city)));
               const createdBy = this.props.allUsers.find(element =>  (element.id === group.createdBy))
               let isActive= this.props.isActiveUser(group.createdBy);

               let findUserInList = this.props.changeButton(group);
                let countUsers=0;
                const users = group.usersList.map((id) => {
                countUsers++;
                const userObj = this.getUserById(id)
                return <div>{userObj.name} {userObj.email}</div>
            })
            
            
            return (
                
                <Col className="mb-4" key={group.id} xs={12} sm={12} md={6} lg={3} >
                    <Card  className="teacher-card">
                    <Card.Body>
                     <Card.Title>{group.title}</Card.Title>
                      <div className="details sm" size="sm">
                       <CardSubtitles text="עיר:" desc={groupCity.name}></CardSubtitles>
                     <CardSubtitles text="תחום:" desc={groupCategory.title}></CardSubtitles>
                       
                      </div>                  
                    <Card.Text >
                    {group.desc}              
                    </Card.Text>
                      <div className="d-flex">
                          <Button className={(findUserInList<0)? 'ml-auto show' : 'ml-auto hide'} disabled={isActive} size="sm" variant="outline-primary" value={group.createdBy} onClick={()=>this.joinTeacherGroup(group.createdBy)}>+הצטרף לקבוצה</Button>
                          <Button className={(findUserInList<0)? 'ml-auto hide' : 'ml-auto show'} size="sm" variant="outline-primary" value={group.createdBy} onClick={()=>this.exitTeacherGroup(group.createdBy)}>-לצאת מקבוצה</Button>
                          <Button className="mr-auto" size="sm" variant="outline-primary">פרטים</Button>
                       </div> 
                  </Card.Body> 
                  <Card.Footer>
                <Card.Text className="text-muted">
                   <small>{countUsers} אנשים בקבוצה</small> <br />
                   <small>יוזם הקבוצה: {createdBy.name} </small> 
                    </Card.Text>
                </Card.Footer>
                
                    </Card>
            </Col>
            )
        })
        //////////////////////////////////////////
        return(

            <div className = "p-groups">
                 <Row className="pt-3 mb-3 mx-0">
                <h5>{this.props.header}</h5>
                </Row>
               
              
                <SearchForm 
               allCategories={this.props.allCategories}
               allCities={this.props.allCities}
               onCitySelected = {this.citySelected}
               onCategorySelected = {this.categorySelected}
              
               
                ></SearchForm> 
             
                <Row className="">
                
                {groupsByUsers}
              
               </Row>
           
               
            </div>
        )
    }
}

export default Groups;