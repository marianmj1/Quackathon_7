import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import '../App.css';



const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('fakeUser'));

    if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
      alert('Invalid credentials. Try again!');
      return;
    }

    localStorage.setItem('isLoggedIn', 'true');
    alert('Login successful! Redirecting...');
    navigate('/dashboard');
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



