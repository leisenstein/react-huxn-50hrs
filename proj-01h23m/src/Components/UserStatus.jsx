import React from 'react'

const UserStatus = ({loggedIn, isAdmin}) => {
    if (loggedIn && isAdmin) {
        return (<div>Welcome Admin!</div>);
    } else if (loggedIn) {
        return (<div>Welcome User</div>);
    } else {
        return (<div>Please Log In</div>);
    }
    
}

export default UserStatus;