import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Footer extends React.Component{
    constructor(props){
        super(props);
      }
render(){
    return(
     <footer class="text-center text-lg-start bg-light text-muted footer-down">
       <div class="text-center p-3" style={{"background-color": "rgba(0, 0, 0, 0.05)"}}>
    © 2021 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
     </footer>
    )
}
}

export default Footer;