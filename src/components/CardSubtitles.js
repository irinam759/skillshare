import React from 'react';
import './CardSubtitles.css';

class CardSubtitles extends React.Component{
    constructor(props){
        super(props);
      }
render(){
    return(
      <div className="d-flex " >
          <h6>{this.props.text}&nbsp;</h6>
          <div className="details-text">{this.props.desc}</div>
      </div>
    )
}
}

export default CardSubtitles;