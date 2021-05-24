import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MainCard.css';

class MainCard extends React.Component{
    constructor(props){
        super(props);
      }
render(){
    return(
        <Col xs={12} sm={6} md={4} className="px-xs-0 px-sm-3 px-md-3 px-lg-4 my-3 " >
                <Card className="h-100 border-0 main-card" stretched-link="true">
                  <div className={`p-0 mx-auto rounded-circle circle ${this.props.color}`} > 
                   <Card.Img className={`p-4 p-xs-4 mx-auto `}  variant="top" src={this.props.image} />
                   </div>
                    <Card.Text className="text-center">
                    <Link to={this.props.page} className="text-center stretched-link "> 
                    {this.props.text} 
                    </Link>
                    </Card.Text>
                   
                </Card>
                </Col>
   
    )
}
}

export default MainCard;