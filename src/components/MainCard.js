import React from 'react';
// import imgCard3 from '../images/Power-of-knowledge.png';
// import imgCard1 from '../images/Questions-and-answers.png';
// import imgCard2 from '../images/Community.png';
import { Card, Col } from 'react-bootstrap';

class MainCard extends React.Component{
    constructor(props){
        super(props);
      }
render(){
    return(
        <Col xs={12} md={4} className="px-0 my-3 " >
                <Card className="h-100 border-0">
                    <Card.Img className=" smaller-img mx-auto "  variant="top" src={this.props.image} />
                   
                    <Card.Text className="text-center">
                    {this.props.text} 
                    </Card.Text>
                 
                </Card>
                </Col>
   
    )
}
}

export default MainCard;