// src/AppRouter.js
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
  
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';

function AppRouter() {
  return (
    <Router>

      <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path ='/signup' element={<Signup/>} />
      <Route path ='/login' element={<Login/>} />
      </Routes>
      </Router>
  );
}

export default AppRouter;
