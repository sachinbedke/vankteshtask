// src/App.js

import React, { useState, useEffect } from 'react';
import { getUsers } from './api';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className="container">
      <h1>User List</h1>
      <UserList users={users} />
      <UserForm onAddUser={handleAddUser} />
    </div>
  );
}

export default App;
