import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import "./login.css";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://65738a61f941bda3f2aef3ad.mockapi.io/api/v1/users', { email, password, name });
      navigate('/');
    } catch (error) {
      console.error('Error registering user:', error);
      setRegistrationError('Error while registering');
    }
  };

  return (
    <div className="container">
      <div className="login-box"> 
        <h2>Register</h2>
        <form id='registerForm' onSubmit={handleSubmit}>
          {registrationError && <p style={{ color: 'red' }}>{registrationError}</p>}
          <div className="input-box">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <label>Email</label>
          </div>
          <div className="input-box">
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <label>Password</label>
          </div>
          <div className="input-box">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            <label>Name</label>
          </div>
          <button type="submit" className="btn">
            Register
          </button>
          <div className="signup-link">
            <Link to="/">Login Page</Link>
          </div>
        </form>
      </div>
      {[...Array(50)].map((_, index) => (
        <span key={index} style={{ '--i': index }}></span>
      ))}
    </div>
  );
};

export default Register;
