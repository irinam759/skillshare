import React from 'react';
import { Card, CardDeck, CardGroup, Col, Row } from 'react-bootstrap';
import './HomePage.css'

class HomePage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className = "p-homepage">
                <Row><h2>מערכת מציאת בעלי מיומנות, מורים, מאמנים ויצירת קבוצות לימוד. </h2></Row>
                <Row>
                   
                <CardGroup>
                <Col xs={12} md={4}>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer. fsfsfs asf dsgsgds.f dgsgs sgsdgsd
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col xs={12} md={4}>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.
                    </Card.Text>
                    </Card.Body>
                
                </Card>
                </Col>
                <Col xs={12} md={4}>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. 
                    </Card.Text>
                    </Card.Body>
                
                </Card>
                </Col>
                </CardGroup>
                </Row>
                </div>
        )
    }
}

export default HomePage;