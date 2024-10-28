// src/components/UserList.js

import React from 'react';

function UserList({ users }) {
    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    <span>{user.name}</span>
                    <span>{user.email}</span>
                </li>
            ))}
        </ul>
    );
}

export default UserList;
