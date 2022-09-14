import React, { useState } from 'react';
import Header from './Header';
import Homepage from './pages/Homepage'
import Profile from './pages/Profile';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Signup from './pages/Signup';

export default function AppContainer() {
    const [currentPage, setCurrentPage] = useState('Homepage');
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'Homepage') {
        return <Homepage />;
      }
      if (currentPage === 'Profile') {
        return <Profile />
      }
      if (currentPage === 'Login') {
        return <Login />;
      }
      if (currentPage === 'Signup'){
        return <Signup />;
      }
      return <Contact />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <Header
         currentPage={currentPage} handlePageChange={handlePageChange} 
         />
        {renderPage()}
      </div>
    );
  }