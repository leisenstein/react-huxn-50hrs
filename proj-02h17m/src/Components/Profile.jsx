import React from 'react';
import { useState } from 'react';

const Profile = () => {
    const [profile, setProfile] = useState({ name: "", age: 0 });
    function handleInputChange(e) {
        const { name, value } = e.target;

        setProfile(prev => ({
            ...prev,
            [name]: value
        }));
    }
    
    return (
        <div>
            <h1>Profile</h1>
            <h1>Name: {profile.name}</h1>
            <p>Age: {profile.age}</p>
            <div>
                <label >Name: </label>
                <input value={profile.name} name='name' type='text' onChange={handleInputChange}></input>
                <br />
                <label  >Age: </label>
                <input name='age' value={profile.age} type="text" onChange={handleInputChange} />
            </div>
        </div>
    );
};

export default Profile;