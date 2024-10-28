// src/components/UserForm.js

import React, { useState } from 'react';
import { addUser } from '../api';

function UserForm({ onAddUser }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = await addUser({ name, email });
        onAddUser(newUser);
        setName('');
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Add User</button>
        </form>
    );
}

export default UserForm;
