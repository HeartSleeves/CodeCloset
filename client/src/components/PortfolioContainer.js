import React, { useState } from 'react';
import Header from './Header';
import Bio from './pages/Bio';
import Deployed from './pages/Deployed';
import Resume from './pages/Resume';
import Contact from './pages/Contact';



export default function DeployedContainer() {
  const [currentPage, setCurrentPage] = useState('Portfolio');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Bio') {
      return <Bio />;
    }
    if (currentPage === 'Portfolio') {
      return <Deployed deployments={deployments} undeployed={undeployed}/>
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}