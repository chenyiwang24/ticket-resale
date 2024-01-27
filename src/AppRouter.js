// src/AppRouter.js
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
  
import Home from './pages/Home';

function AppRouter() {
  return (
    <Router>

      <Routes>
      <Route path='/home' element={<Home/>} />
    
      </Routes>
      </Router>
  );
}

export default AppRouter;
