import React from 'react';

const UserList = () => {
    const users = [
        {id: 1, name: "Alice", age: 25},
        {id: 2, name: "Bob", age: 30},
        {id: 3, name: "Charlie", age: 22}
    ];
    
    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map(({ id, name, age }) => (
                    <li key={id}>{name} - {age}</li>
                ))}
            </ul>
        </div>
    
    )
};

export default UserList;