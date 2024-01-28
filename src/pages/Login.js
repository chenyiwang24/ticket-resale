import React, { useState } from 'react';
import './Login.css';
import backroundVideo from '../assets/cinematichome.mp4';
import logo from '../assets/AA-icon.png';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import '../Firebase'; // Corrected path for Firebase initialization

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    const auth = getAuth();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // Signed in successfully, you can redirect or perform any other action here
      console.log("Logged in successfully!");
    } catch (error) {
      setError(error.message);
      console.error("Error during login:", error.message);
    }
  };

  return (
    <div className="container">
      <video className="video-bg" autoPlay muted loop>
        <source src={backroundVideo} type="video/mp4" />
      </video>
      <div className="login-container">
        <div className="logoAA">
          <img src={logo} alt="" />
        </div>
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;