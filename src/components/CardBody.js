import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MainCard.css';

class CardBody extends React.Component{
    constructor(props){
        super(props);
      }
render(){
    return(
        <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    {/* <div className="details sm" size="sm">
                     <CardSubtitles text="עיר:" desc={teacherCity.name}></CardSubtitles>
                     <CardSubtitles text="תחום:" desc={teacherCategory.title}></CardSubtitles>
                     <CardSubtitles text="התמחות:" desc={teacher.desc}></CardSubtitles>
                    </div>                   */}
                    <Card.Text >
                       {this.props.desc}              
                    </Card.Text>
                    <div className="d-flex">
                        {/* <Button className={(findUserInList<0)? 'ml-auto show' : 'ml-auto hide'} size="sm" variant="outline-primary" value={teacher.id} onClick={()=>this.joinTeacherGroup(teacher.id)}>+הצטרף לקבוצה</Button>
                        <Button className={(findUserInList<0)? 'ml-auto hide' : 'ml-auto show'} size="sm" variant="outline-primary" value={teacher.id} onClick={()=>this.exitTeacherGroup(teacher.id)}>-לצאת מקבוצה</Button>
                        <Button className="mr-auto" size="sm" variant="outline-primary">פרטים</Button> */}
                     </div>
                </Card.Body> 
               
   
    )
}
}

export default CardBody;