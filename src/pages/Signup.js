import React, { useState } from 'react';
import './Login.css';
import backroundVideo from '../assets/cinematichome.mp4';
import logo from '../assets/AA-icon.png';
import userIcon from '../assets/user.png'; // Import user icon image
import passwordIcon from '../assets/password.png'; // Import password icon image
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import '../Firebase'; // Corrected path for Firebase initialization
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const handleSignup = async (e) => {
    e.preventDefault();

    const auth = getAuth();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      navigate('/home');;
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
          <img src={logo} alt="" className="aa-logo" /> {/* Added class aa-logo */}
        </div>
        <h2>AAdvantage Member Sign Up</h2>
        <form className="login-form" onSubmit={handleSignup}>
          <div className="form-group">
            <label htmlFor="email">
              <img src={userIcon} alt="User Icon" className="icon" /> {/* User icon */}
            </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <img src={passwordIcon} alt="Password Icon" className="icon" /> {/* Password icon */}
            </label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Password"
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
