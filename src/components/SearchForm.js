import React from 'react';
import { Col, Form, ListGroup } from 'react-bootstrap';
import LiveSearchBox from './LiveSearchBox';
import './SearchForm.css';

class SearchForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchCity:'',
            cityResults:[],
            newString: ''
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
        if(event.target.value===''){
            this.props.onCitySelected(0);
        }
      
    }

    // Function update input value and state when city is selected 
    onCitySelected = (index,name)=>{
    this.setState({
       
        cityResults:[],
        searchCity:name
    })
  
    this.props.onCitySelected(index);
    
}    

    // Function - select study category
    selectCategory=(event)=>{
        this.setState({
            selectCategory:event.target.value
        })
        this.props.onCategorySelected(event.target.value);
       
    }

    searchTextChanged =(newText) => {
        console.log('new string: '+ newText)
        let filterFreeSearch = this.props.allTeachers;
        // this.props.allResults.filter  
     if(newText){
         filterFreeSearch =  this.props.allTeachers.filter((user)=>user.about.includes(newText));
        
        //     .filter((user)=>user.desc.includes(newText) || user.name.includes(newText))
         
        }             
        
        this.setState({
            newString:newText
        })
        
         this.props.freeSearch(filterFreeSearch);  
    }

    render(){
        console.log('all teachers: '+  this.props.allTeachers)
        console.log('new results : '+  this.state.results)
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
            
            <Form className="mb-2">
            <Form.Row>
            <Form.Group as={Col} lg={4} md={6} sm={6} xs={12} controlId="formFreeSearch">
                {/* <Form.Control type="text" placeholder="?????????? ??????????" /> */}
                <LiveSearchBox 
                results={this.state.results}
                placeholder='?????? ?????? ???? ???? ????????????'
                onSearchChanged={this.searchTextChanged}
                onResultSelected='{}'
                   
                />
            </Form.Group>
            <Form.Group as={Col} lg={4} md={6} sm={6} xs={12} controlId="formStudyCategory">
                    <Form.Control as="select" onChange={this.selectCategory}>
                    <option value="0" id="0">?????? ????????</option>
                    {studyCategories}
                    </Form.Control>
            </Form.Group>
            <Form.Group as={Col}  lg={4} md={12} sm={12} xs={12} >
                  
                    <Form.Control
                    value={this.state.searchCity}
                    onChange={this.searchCity}
                    autoComplete="off"
                     type="text" 
                     placeholder="?????? ??????" 
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