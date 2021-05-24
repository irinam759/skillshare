import React from 'react';
import { Form, ListGroup } from 'react-bootstrap';




class LiveSearchBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchText: ''
        }
       
    }
updateText =(event) => {
    
    const val = event.target.value;
 this.setState({
    searchText: val
 });
 this.props.onSearchChanged(val)
}
    
        render(){
           
            
           console.log(this.props.results)
            return(
                <div className='c-live-search-box'>
            <Form.Control value={this.state.searchText} onChange={this.updateText} type="text" placeholder={this.props.placeholder} />
           
                </div>
                )
            }
        }
export default LiveSearchBox;      