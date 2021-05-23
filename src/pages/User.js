
import React from 'react';


class User extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
      
        // if(!this.props.activeUser){
        //     window.location.href='/#/login';
        //     return null;
        // }
        return(
            <div className = "p-user">
               חשבון משתמש
                {/* <Link to ='/signup'>התחבר</Link> */}
            </div>
        )
    }
}

export default User;