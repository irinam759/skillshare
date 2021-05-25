import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            pw:''
        }
    
    }

    updatePass = (event) => {
        this.setState({
            pw:event.target.value
        })
    }
    updateEmail = (event) => {
        this.setState({
            email:event.target.value
        })
    }
    handleLogin=()=>{
        //Checks the typed username and pw from the controlled components
        //Check if user exists in this.props.allUsers, and if the password is correct
        //If true return the user object
        //If false - show alert- password / user not found
        const foundUser = this.props.allUsers.find((user)=> {
            if(user.email === this.state.email && user.pw === this.state.pw){
                return true
            }
        });
        
        if(foundUser){
            this.props.login(foundUser);
            console.log('in login page ' + foundUser)
            window.location.href = '#/';
        }
       
        else{
            alert("Incorrect Email or Password ")
        }
    }
    render(){
        return(
            <div className = "p-login">
                <h1> התחבר: </h1>
               <Form>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    אימייל
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="email" name="email" placeholder="Email" onChange={this.updateEmail} value={this.state.email} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    ססמא
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="password" name="password" placeholder="Password" onChange={this.updatePass} value={this.state.pw}/>
                    </Col>
                </Form.Group>
                
                {/* <Form.Group as={Row} controlId="formHorizontalCheck">
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Form.Check label="Remember me" />
                    </Col>
                </Form.Group> */}

                <Form.Group as={Row}> 
                <Form.Label column sm={2}>
                    
                    </Form.Label>
                    <Col className = "m-auto" sm={10}>
                    <Button type="button" onClick={this.handleLogin} variant="outline-primary">התחבר</Button>
                    </Col>
                </Form.Group>
                <Link to ='#/signup'>הרשם</Link>
            </Form>
            </div>
        )
    }
}

export default Login;