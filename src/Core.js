// Libraries
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { NavProvider } from './core/context/NavProvider';
// Layouts
import Navbar from './components/global/navbar/Index';
import Sidebar from './components/global/sidebar/Index';
// Routes
import  WebRoute  from './core/router/Routing';
const Core = () => {
  return (
    <>
      <Router>
          <Navbar />
          <NavProvider>
            <Sidebar />
            <WebRoute />
          </NavProvider>          
      </Router>
    </>
  )
}

export default Core
