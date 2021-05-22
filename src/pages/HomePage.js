import React from 'react';
import { Button, Col, Jumbotron, Row } from 'react-bootstrap';
import './HomePage.css';
import MainCard from '../components/MainCard';


class HomePage extends React.Component{
    constructor(props){
        super(props);
    }

// Function checking if 
checkLogin=()=>{

}

    render(){
       //If user does not exists show Signup text and button
        const loginEl = (! this.props.activeUser) ? 
        <div className="site-desc">   
        <p className="text-center mx-auto px-sm-0  mb-1">רוצה ליצור או להצטרף לקבוצה קיימת?<br /> בעל מיומנות/מורה/מאמן?</p>
        <Button type="button" onClick={()=>{}} variant="outline-primary " block >   צור פרופיל</Button>
         </div> : null;

        return(
            <div className = "p-homepage">
                <Jumbotron className="justify-content-center text-center mx-0 my-0 py-4 bg-white">
                    <h2 className="display-5 text-center">SkillShare</h2>
                    <p className="text-center mx-auto px-sm-0 d-block site-desc">המקום שמחבר אותך לבעלי מיומנויות, מורים או מאמנים כדי ללמוד כל דבר לבד או בקבוצה באיזור שלך.  </p>
                </Jumbotron>
                
                <Row className="justify-content-center text-center mx-lg-5 mx-md-4 mx-sm-3 mx-xs-0" >
                {/* */}
                    <MainCard image="./images/Questions-and-answers.png" text="חפש בעל מיומנות/מורה/מאמן" page="./Teachers"></MainCard>
                    <MainCard image="./images/Community.png" text=" חפש קבוצה" page="./Groups"></MainCard>
                    <MainCard image="./images/Power-of-knowledge.png" text=" צור קבוצה" page="./CreateGroup"></MainCard>       
                </Row>

                <Row className="justify-content-center text-center mx-0 mt-4 px-0 px-sm-5 " >
                  {loginEl}
                </Row>
                

                </div>
        )
    }
}

export default HomePage;