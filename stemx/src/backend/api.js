import '../App.css';
//import React, { useState, useEffect } from 'react';//figure out how this fits into puzzle later
import axios from "axios";

const API_URL = "http://10.138.240.15:5000/api/users";//might need to change based on what it looks like on the pi

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => setUsers(response.data))
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;//"home" currently returns API functionality testing :)