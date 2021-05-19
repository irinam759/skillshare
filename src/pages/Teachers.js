import React from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import SearchForm from '../components/SearchForm';


class Teachers extends React.Component{
    constructor(props){
        super(props);
    }

    
    

    render(){
        
        //Create teachers cards
        const teacherCards = this.props.allTeachers.map((teacher)=>{
           return (<Card key={teacher.id}>
               {teacher.name}
           </Card>
           )
        });


         //Map all cities   
        //  const cities = this.props.allCities.map((city)=>(
        //     <option value={city.semel_yeshuv} key={city.semel_yeshuv}>{city.name}</option>
        // )).sort(this.props.allCities);


        return(
            <div className = "p-teachers">
                <h4>חפש בעל מיומנות/מורה/מאמן</h4>
             
                <SearchForm 
                allCategories={this.props.allCategories}
                allCities={this.props.allCities}
                ></SearchForm>
               {teacherCards}
            </div>
        )
    }
}

export default Teachers;