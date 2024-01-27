// App.js
import React from 'react';
import './SignUpLogIn.css';

const App = () => {
  return (
    <div className="app-container">
      <div className="video-background">
        <video autoPlay muted loop>
          <source src="path_to_your_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="auth-form">
        <h2>Login / Sign Up Form</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>
    </div>
  );
};

export default App;
