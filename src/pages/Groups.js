import React from 'react';

class Groups extends React.Component{
    constructor(props){
        super(props);
    }
    getUserById = function(id){
        return this.props.allUsers.find(user =>  (user.id === id))
    }
    render(){
               const allGroups= this.props.allGroups.map((group) => {
            
                let countUsers=0;
            const users = group.usersList.map((id) => {
                countUsers++;
                const userObj = this.getUserById(id)
                return <div>{userObj.name} {userObj.email}</div>
            })
            return <div key={group.id}>
                <h1>{group.title}</h1>
                <div>{group.usersList}
                {users}
                {countUsers}
                </div>
            </div>
        })
        return(
            <div className = "p-groups">
               {allGroups}
            </div>
        )
    }
}

export default Groups;