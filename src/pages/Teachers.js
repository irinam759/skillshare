import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';


class Teachers extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className = "p-teachers">
                <p>חפש בעל מיומנות/מורה/מאמן</p>
                <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formFreeSearch">
                    <Row>
                        <Form.Label column sm={2} >חפש</Form.Label>
                        <Col sm={10}>
                        <Form.Control type="text" placeholder="חיפוש חופשי" />
                        </Col>
                    </Row>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formStudyCategory">
                    <Row>
                        <Form.Label column sm={2} >תחום</Form.Label>
                        <Col sm={10}>
                        <Form.Control as="select" >
                        <option>בחר תחום</option>
                        </Form.Control>
                        </Col>
                    </Row>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formArea">
                    <Row>
                        <Form.Label column sm={2} >איזור</Form.Label>
                        <Col sm={10}>
                        <Form.Control as ="select" >
                        <option>בחר איזור</option>
                        </Form.Control>
                        </Col>
                    </Row>
                    </Form.Group>
                
                </Form.Row>
                </Form>
            </div>
        )
    }
}

export default Teachers;