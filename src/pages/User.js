import React from 'react';

class User extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        // console.log(this.props.activeUser);
        // if(!this.props.activeUser){
        //     window.location.href='/#/login';
        //     return null;
        // }
        return(
            <div className = "p-user">
                I am user account
            </div>
        )
    }
}

export default User;