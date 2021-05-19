import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

class SearchForm extends React.Component{
    constructor(props){
        super(props);
    }   

    sortByName =(a,b) =>{
       
        if(a.title < b.title) {return -1;}
        if(a.title > b.title) {return 1;}
        return 0; 
    }   
    //Function of searching city by typing
    findCity =() =>{

    }

    render(){
       
        // Map all study categories
        // Sort by title
        const studyCategories = this.props.allCategories
        .sort(this.sortByName)
        .map((option)=>(
            <option value={option.id} key={option.id}>{option.title}</option>
        ));


        return(
            
            <Form>
            <Form.Row>
            <Form.Group as={Col} md={6} sm={12} xs={12} controlId="formFreeSearch">
                <Form.Control type="text" placeholder="חיפוש חופשי" />
            </Form.Group>
            <Form.Group as={Col} md={3} sm={6} xs={12} controlId="formStudyCategory">
                    <Form.Control as="select" >
                    <option>בחר תחום</option>
                    {studyCategories}
                    </Form.Control>
            </Form.Group>
            <Form.Group as={Col} md={3} sm={6} xs={12} controlId="formLocation">
                    {/* <Form.Control as ="select" >
                    <option>בחר איזור</option>
                    </Form.Control> */}
                    <Form.Control 
                    onChange={this.findCity}
                     type="text" 
                     placeholder="חפש עיר" 
                     name="search-city" 
                     id="search-city"  />
                </Form.Group>
             </Form.Row>
            </Form>
        )
    }
}

export default SearchForm;