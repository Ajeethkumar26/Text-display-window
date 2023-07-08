import React, { useState } from 'react';
import axios from 'axios';
import useNavigate from 'react-router-dom'
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate =useNavigate();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ username, password });
  };
  const handleLogin = async () => {
  let  formData = {
    username,
    password
  }
    try {
      // Make a POST request to your backend API with the login credentials
      const response = await axios.post('http://localhost:8000/users/login/', formData); // Replace with your backend URL
  
      // Check if the login was successful based on the response from the server
      if (response.data.success) {
        // Once authenticated, set `isLoggedIn` to true
      // setIsLoggedIn(true);
           console.log('Login sucesss:', response.data.message);
      localStorage.setItem('isauth','true');
      navigate('/TextDisplayPanel', { replace: true });
      } else {
        // Handle unsuccessful login (e.g., display error message)
        console.log('Login failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
    }
  };
  
  const handleLogout = async () => {
    try {
      // Make a POST request to your backend API to perform the logout
      const response = await axios.post('http://localhost:8000/users/logout/'); // Replace with your backend URL
  
      // Check if the logout was successful based on the response from the server
      if (response.data.success) {
        // Once logged out, set `isLoggedIn` to false
        // setIsLoggedIn(false);
      } else {
        // Handle unsuccessful logout (e.g., display error message)
        console.log('Logout failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error occurred during logout:', error);
    }
  };
  

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button onClick={handleLogin}>Login</button>
    </form>
  );
};

export default Login;
