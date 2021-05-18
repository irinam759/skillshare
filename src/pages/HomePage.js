import React from 'react';
import { Jumbotron, Row } from 'react-bootstrap';
import './HomePage.css';


import MainCard from '../components/MainCard';

class HomePage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className = "p-homepage">
                <Jumbotron className="justify-content-center text-center mx-0 my-0 py-4 bg-white">
                <h2 class="display-5 text-center">Skill share</h2>
                    <p class="text-center mx-auto px-sm-0 site-desc">המקום שמחבר אותך לבעלי מיומנויות, מורים או מאמנים כדי ללמוד כל דבר לבד או בקבוצה באיזור שלך.  </p>
                    
              
                </Jumbotron>
                
                   <Row className="justify-content-center text-center mx-0 mx-sm-5 px-0 px-sm-5 " >
                    <MainCard image="./images/Power-of-knowledge.png" text="חפש בעל מיומנות/מורה/מאמן"></MainCard>
                    <MainCard image="./images/Questions-and-answers.png" text=" חפש קבוצה"></MainCard>
                    <MainCard image="./images/Community.png" text=" צור קבוצה"></MainCard>       
                   
                </Row>
                </div>
        )
    }
}

export default HomePage;