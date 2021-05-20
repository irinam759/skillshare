import React from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import SearchForm from '../components/SearchForm';


class Teachers extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // resultsByCategory:this.props.allTeachers,
            resultsByCategory:[],
            resultsByCity:[]
            
        }
    }

citySelected = (index) => {
    console.log('city: '+index);
    const teachersByCity = this.props.allTeachers.filter((teacher)=>{
        return (teacher.city==index) ? teacher : false
   
});
this.setState({
    resultsByCity: teachersByCity
  
})
console.log(teachersByCity)
} 

categorySelected = (index) => {
    
    const filteredTeachers = this.props.allTeachers.filter((teacher)=>{
            return (String(teacher.categoryId)===index) ? teacher : false
       
    });
   
    this.setState({
         resultsByCategory: filteredTeachers
       
    })
    
} 
    

    render(){

        const allResults =this.props.allTeachers.filter((teacher)=>this.state.resultsByCity.includes(teacher) || this.state.resultsByCategory.includes(teacher));


        //Create teachers cards
          const teacherCards = this.state.resultsByCategory.map((teacher)=>{
            const teacherCategory = this.props.allCategories.find(element =>  (element.id === teacher.categoryId));
            const teacherCity = this.props.allCities.find(element =>  (element.semel_yeshuv == teacher.city));
          
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