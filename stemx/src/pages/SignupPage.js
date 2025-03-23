import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';


const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const navigate = useNavigate();


  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirm) {
      alert('Passwords do not match!');
      return;
    }

    const newUser = { email, password };
    localStorage.setItem('fakeUser', JSON.stringify(newUser));
    alert('Sign up successful! Now go login.');
    navigate('/login')
  };

  return (
    <div className="auth-container">
      <h1 className="main-logo-text" style={{ fontSize: '3rem' }}>STEMx</h1>
      <p className="tagline">EXPLORE • EXCHANGE • EXPAND</p>

      <h2>Sign Up</h2>
      <form onSubmit={handleSignup} className="auth-form">
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;




