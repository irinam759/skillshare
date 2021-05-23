import React from 'react';
import { Card, Col, Row, Button} from 'react-bootstrap';
import CardSubtitles from '../components/CardSubtitles';
import SearchForm from '../components/SearchForm';
import './Teachers.css';


class Teachers extends React.Component{
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
    const teachersByCity = this.props.allTeachers.filter((teacher)=>{
        return (String(teacher.city)===index) ? teacher : false
   
});
this.setState({
    resultsByCity: teachersByCity,
    chosenCity:index
  
})

} 
//Function update state and returns teachers filtered by category 
categorySelected = (index) => {
    const filteredTeachers = (index!=='0')?
    this.props.allTeachers.filter((teacher)=>{
        return (String(teacher.categoryId)===index) ? teacher : false}) :this.props.allTeachers ;
   
    this.setState({
         resultsByCategory: filteredTeachers,
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
        return this.props.allTeachers
        .filter((teacher)=>this.state.resultsByCity.includes(teacher) && this.state.resultsByCategory.includes(teacher));

    }
    if(!chosenCity && !chosenCategory){
        // console.log(this.props.allTeachers);
        return this.props.allTeachers
    }
    else{
       
    return this.props.allTeachers
        .filter((teacher)=>this.state.resultsByCity.includes(teacher) || this.state.resultsByCategory.includes(teacher));
    }
}

//Function join teacher group
joinTeacherGroup=(teacherId)=>{
    this.props.joinTeacher(teacherId);
    
}

//Function count users in teacher group
// countUsersInGroup=()=>{
//     this.props.allGroups(teacherId);
// }

    render(){
       
        const allResults = this.allFilter();
       //Create teachers cards
            const teacherCards =allResults.map((teacher)=>{
            const teacherCategory = this.props.allCategories.find(element =>  (element.id === teacher.categoryId));
            const teacherCity = this.props.allCities.find(element =>  (element.semel_yeshuv === String(teacher.city)));
            const countUsersInGroup =  this.props.allGroups.map(group =>  {
                console.log('group '+group);
                console.log('teacherId '+teacher.id);
                if(group.createdBy === teacher.id) {return group.usersList}  
            });
            console.log(countUsersInGroup);
       
                return (
                    //lg={3} md={6} sm={12}
                    // xs={12} md={4} className="px-0 my-3 
            <Col key={teacher.id} xs={12} sm={12} md={6} lg={3} >
                <Card className="mb-2" className="teacher-card">
                <Card.Img variant="top" src={`./images/img-profile/${teacher.image}`} className="card-img"/>
                <Card.Body>
                    <Card.Title>{teacher.name}</Card.Title>
                  
                    <div className="details">
                     <CardSubtitles text="עיר:" desc={teacherCity.name}></CardSubtitles>
                     <CardSubtitles text="תחום:" desc={teacherCategory.title}></CardSubtitles>
                     <CardSubtitles text="התמחות:" desc={teacher.desc}></CardSubtitles>
                    </div>
                   
                  
                    <Card.Text text-truncate>
                {teacher.about}              
                    </Card.Text>
                    <div className="d-flex">
                     
                     <Button className="ml-auto" size="sm" variant="outline-primary" value={teacher.id} onClick={()=>this.joinTeacherGroup(teacher.id)}>+הצטרף לקבוצה</Button>
                     <Button className="mr-auto" size="sm" variant="outline-primary">פרטים</Button>
                     </div>
                    
                </Card.Body> 
                <Card.Footer>
                <Card.Text text-muted>
                   <small>סה"כ אנשים בקבוצה </small> 
                    </Card.Text>
                </Card.Footer>
                    
                    
                    </Card>
                    </Col>
            )
        });


        return(
            <div className = "p-teachers">
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
               {teacherCards}
               </Row>
            </div>
        )
    }
}

export default Teachers;