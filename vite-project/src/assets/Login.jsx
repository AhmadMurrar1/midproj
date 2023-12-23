
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import "./login.css";
const Login = ({ setIsLoggedIn ,setUser  }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        'https://65738a61f941bda3f2aef3ad.mockapi.io/api/v1/users'
      );
      const users = response.data;
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        setIsLoggedIn(true);
        setUser(user)
        navigate('/home');
      } else {
        setLoginError('Please enter a valid email and password');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoginError('Error while logging in');
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2 style={{marginLeft:"-2rem"}}>Login</h2>
        <form id='loginForm' onSubmit={handleSubmit}>
          {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
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
          <button type="submit" className="btn">
            Login
          </button>
          <div className="signup-link">
            <Link to="/register">Signup</Link>
          </div>
        </form>
      </div>
      {[...Array(50)].map((_, index) => (
        <span key={index} style={{ '--i': index }}></span>
      ))}
    </div>
  );
};

export default Login;
