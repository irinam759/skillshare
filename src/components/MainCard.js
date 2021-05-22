import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class MainCard extends React.Component{
    constructor(props){
        super(props);
      }
render(){
    return(
        <Col xs={12} sm={6} md={4} className="px-xs-0 px-sm-0 px-md-3 px-lg-4 my-3 " >
                <Card className="h-100 border-0" stretched-link>
                  
                   <Card.Img className="p-0 mx-auto " style={{"width":"80%"}} variant="top" src={this.props.image} />
                   <Link to={this.props.page} className="text-center stretched-link"> 
                    <Card.Text className="text-center">
                    {this.props.text} 
                    </Card.Text>
                    </Link>
                </Card>
                </Col>
   
    )
}
}

export default MainCard;