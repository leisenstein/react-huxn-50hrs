import React from 'react';
import { useContext } from 'react';
import { UserContext, UserProvider } from '../Data/UserContext';


const UserProfile = () => {
    const { user } = useContext(UserContext);


    return (
        <UserProvider>
            <h1>User Profile</h1>
            <hr />
            <p>Name: {user.name}</p>

        </UserProvider>
    );
};

export default UserProfile;