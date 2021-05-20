import React from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import SearchForm from '../components/SearchForm';


class Teachers extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            resultsByCategory:this.props.allTeachers
        }
    }

citySelected = () => {
    console.log('city')
} 

categorySelected = (index) => {
    
    const filteredTeachers = this.props.allTeachers.filter((teacher)=>{
            return (teacher.categoryId==index) ? teacher : false
       
    });
   
    this.setState({
         resultsByCategory: filteredTeachers
       
    })
    
} 
    

    render(){
        
        //Create teachers cards
        const teacherCards = this.state.resultsByCategory.map((teacher)=>{
           
            return (
        //    <Card key={teacher.id}>
        //        {teacher.name}
        //    </Card>
        <Col lg={3} md={6} sm={12}>
            <Card key={teacher.id}>
            {/* <Card.Header>{teacher.categoryId}</Card.Header> */}
             <Card.Img variant="top" src={`./images/${teacher.image}`} />
             <Card.Body>
                <Card.Title>{teacher.name}</Card.Title>
                <Card.Subtitle>{teacher.desc}</Card.Subtitle>
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