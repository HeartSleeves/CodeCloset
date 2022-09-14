import React from 'react';
import "./styles/Header.css"

function Header({ currentPage, handlePageChange }) {
  return (
    <header>
    <h1 id="apptitle" class="title">
      <a href="#home"
          onClick={() => handlePageChange('Homepage')}
          className={currentPage === 'Homepage' ? 'nav-link active' : 'nav-link'}
        >
          Code Closet
        </a>
          </h1>
        <nav id="navbar">
          <h2 class="navbtn" id="profile">
        <a
          href="#profile"
          onClick={() => handlePageChange('Profile')}
          className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'}
        >
          Profile
        </a>
         </h2>
        <h2 class="navbtn" id="signup">
        <a href="#signup"
          onClick={() => handlePageChange('Signup')}
          className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}
        >
              Signup
            </a>
            </h2>
            <h2 class="navbtn" id="login">
            <a href="#login"
          onClick={() => handlePageChange('Login')}
          className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
        >
              Login
            </a>
            </h2>
            <h2 class="navbtn" id="logout">
            <a href="#logout"
          // onClick={() => Logout}
        >
              Logout
            </a></h2>
            <div id="search">
                <label for="searchbar">Search</label>
                <input type="search" class="searchbar" id="searchbar" name="searchbar">
                  </input>
            </div>
                <button id="newsnippetbtn">Create New Snippet</button>
            
        </nav>
      </header>
  );
}

export default Header;
