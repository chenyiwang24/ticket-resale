import React from 'react';
import './SignUpLogIn.css';
import backroundVideo from '../assets/cinematichome.mp4';

const SignUpLogIn = () => {
  return (
    <div className="container">
      <video className="video-bg" autoPlay muted loop>
        <source src={backroundVideo} type="video/mp4" />
      </video>
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpLogIn;
