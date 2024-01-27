// src/AppRouter.js
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
  
import Home from './pages/Home';
import SignUpLogIn from './pages/SignUpLogIn';

function AppRouter() {
  return (
    <Router>

      <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path ='/signuplogin' element={<SignUpLogIn/>} />
      </Routes>
      </Router>
  );
}

export default AppRouter;
