import React from 'react';
import { Col, Form, ListGroup } from 'react-bootstrap';
import './SearchForm.css';

class SearchForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchCity:'',
            cityResults:[],
            chosenCity:'', 
            selectedCategory:''
        }
    }   

    sortByName =(a,b) =>{
       
        if(a.title < b.title) {return -1;}
        if(a.title > b.title) {return 1;}
        return 0; 
    }   

    //Function of searching city by typing
    searchCity=(event)=>{
        this.setState({
            searchCity:event.target.value,
            cityResults: this.props.allCities.filter((city)=>{
                if (event.target.value.length>0){return city.name.includes(event.target.value)}
                else {return false}
            })
        });
    }

    // Function update input value and state when city is selected 
    onCitySelected = (index,name)=>{
    this.setState({
        chosenCity:index,
        cityResults:[],
        searchCity:name
    })
}    

    // Function - select study category
    selectCategory=(event)=>{
        this.setState({
            selectCategory:event.target.value
        })
  
    }


    render(){
       
        // Map all study categories
        // Sort by title
        const studyCategories = this.props.allCategories
        .sort(this.sortByName)
        .map((option)=>(
            <option value={option.id} key={option.id} >{option.title}</option>
        ));
        
        //Map all cities  
         const listCities = this.state.cityResults.map((city)=>{
                return <ListGroup.Item action
                onClick={()=>{this.onCitySelected(city.semel_yeshuv,city.name)}}
                 key={city.semel_yeshuv}  >{city.name}</ListGroup.Item>
         });
         
        


        return(
            <Form>
            <Form.Row>
            <Form.Group as={Col} md={6} sm={12} xs={12} controlId="formFreeSearch">
                <Form.Control type="text" placeholder="חיפוש חופשי" />
            </Form.Group>
            <Form.Group as={Col} md={3} sm={6} xs={12} controlId="formStudyCategory">
                    <Form.Control as="select" onChange={this.selectCategory}>
                    <option>בחר תחום</option>
                    {studyCategories}
                    </Form.Control>
            </Form.Group>
            <Form.Group as={Col} md={3} sm={6} xs={12} >
                  
                    <Form.Control
                    value={this.state.searchCity}
                    onChange={this.searchCity}
                    autoComplete="off"
                     type="text" 
                     placeholder="חפש עיר" 
                     name="search-city" 
                     id="search-city"  />
                       <div className = "wrap-overlay">
                     <ListGroup variant="flush" className="search-overlay" >
                         {listCities}
                     </ListGroup>
                     </div>
                </Form.Group>
             </Form.Row>
            </Form>
        )
    }
}

export default SearchForm;