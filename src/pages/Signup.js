import React, { useState } from 'react';
import './Signup.css';
import backroundVideo from '../assets/cinematichome.mp4';
import logo from '../assets/AA-icon.png'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import '../Firebase.js'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();

    const auth = getAuth();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // Signed up successfully, you can redirect or perform any other action here
    } catch (error) {
      setError(error.message);
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
        <h2>Sign Up</h2>
        <form className="login-form" onSubmit={handleSignup}>
          <div className="form-group">
            <label htmlFor="username">Email</label>
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
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
