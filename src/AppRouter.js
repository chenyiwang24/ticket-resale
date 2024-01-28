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
import PlaneTicketList from './pages/PlaneTicketList';

import HomeAfter from './pages/HomeAfter';

function AppRouter() {
  return (
    <Router>

      <Routes>
      
      <Route path ='/signup' element={<Signup/>} />
      <Route path ='/login' element={<Login/>} />
      <Route path='/tickets' element={<PlaneTicketList/>} />
      <Route path='/home' element={<HomeAfter/>} />
      <Route path='/' element={<Home/>} />
      
      </Routes>
      </Router>
  );
}

export default AppRouter;
