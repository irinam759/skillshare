import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import SearchForm from '../components/SearchForm';


class Teachers extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            resultsByCategory:[],
            resultsByCity:[],
            chosenCity:0,
            chosenCategory:0
            
        }
    }

citySelected = (index) => {
  
    const teachersByCity = this.props.allTeachers.filter((teacher)=>{
        return (String(teacher.city)===index) ? teacher : false
   
});
this.setState({
    resultsByCity: teachersByCity,
    chosenCity:index
  
})

} 

categorySelected = (index) => {
    console.log('category index'+index+typeof(index))
    const filteredTeachers = (index!=='0')?
    this.props.allTeachers.filter((teacher)=>{
        return (String(teacher.categoryId)===index) ? teacher : false
   
}) :this.props.allTeachers ;
   
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
        console.log(this.props.allTeachers);
        return this.props.allTeachers
    }
    else{
       
    return this.props.allTeachers
        .filter((teacher)=>this.state.resultsByCity.includes(teacher) || this.state.resultsByCategory.includes(teacher));
    }
}

    render(){
        const allResults = this.allFilter();
       //Create teachers cards
            const teacherCards =allResults.map((teacher)=>{
            const teacherCategory = this.props.allCategories.find(element =>  (element.id === teacher.categoryId));
            const teacherCity = this.props.allCities.find(element =>  (element.semel_yeshuv === String(teacher.city)));
          
                return (
            <Col key={teacher.id} lg={3} md={6} sm={12}>
                <Card >
                {/* <Card.Header>{teacher.categoryId}</Card.Header> */}
                <Card.Img variant="top" src={`./images/${teacher.image}`} />
                <Card.Body>
                    <Card.Title>{teacher.name}</Card.Title>
                    <Card.Subtitle>{teacherCategory.title}, {teacher.desc}</Card.Subtitle>
                    <Card.Text>עיר: {teacherCity.name}</Card.Text> 
                    <Card.Text>
                {teacher.about}

                
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>

                    
                    
                    </Card>
                    </Col>
            )
        });


        return(
            <div className = "p-teachers">
                <h6>חפש בעל מיומנות/מורה/מאמן</h6>
             
                <SearchForm 
                allCategories={this.props.allCategories}
                allCities={this.props.allCities}
                onCitySelected = {this.citySelected}
                onCategorySelected = {this.categorySelected}
                ></SearchForm>
                <Row>
               {teacherCards}
               </Row>
            </div>
        )
    }
}

export default Teachers;