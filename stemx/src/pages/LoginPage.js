import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://10.138.240.15:5000/api/user', {
        email,
        password
      });

      if (response.data.message === "Login successful!") {
        localStorage.setItem('isLoggedIn', 'true');
        alert('Login successful! Redirecting...');
        navigate('/dashboard');
      } else {
        alert('Invalid credentials. Try again!');
      }
    } catch (error) {
      alert('An error occurred, please try again later');
    }
  };


  return (
    <div className="auth-container">
      <h1 className="main-logo-text" style={{ fontSize: '3rem' }}>STEMx</h1>
      <p className="tagline">EXPLORE • EXCHANGE • EXPAND</p>

      <h2>Login</h2>
      <form onSubmit={handleLogin} className="auth-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;



