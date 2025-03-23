import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignupPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirm) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('http://10.138.240.15:5000/api/signup', {
        email: email.trim(),
        password: password.trim(),
        name: `${firstName.trim()} ${lastName.trim()}`,
      });

      if (response.status === 201) {
        alert('Sign up successful! Now go login.');
        navigate('/login');
      } else {
        alert('Signup failed. Try again.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert(error.response?.data?.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <h1 className="main-logo-text" style={{ fontSize: '3rem' }}>STEMx</h1>
      <p className="tagline">EXPLORE • EXCHANGE • EXPAND</p>

      <h2>Sign Up</h2>
      <form onSubmit={handleSignup} className="auth-form">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
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
