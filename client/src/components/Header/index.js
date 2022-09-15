import React from 'react';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Header() {

  function showNavigation() {
    if (Auth.loggedIn()) {
    return (
        <div id="navbar">
          <h2 className="navbtn" id="profile">
          <Link to="/profile">
          Profile
          </Link>
         </h2>
              <h2 className="navbtn" id="logout">
              <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a></h2>                         
        </div>
    ); } else {
      return (
        <div id="navbar">
        <h2 className="navbtn" id="signup">
        <Link to="/signup">
              Signup
              </Link>
            </h2>
            <h2 className="navbtn" id="login">
            <Link to="/login">
              Login
              </Link>
            </h2>
                  </div>
      );
    }
  }
  return (
    <header>
    <h1 id="apptitle" className="title">
      <Link to="/">
          Code Closet
          </Link>
          </h1>
          <nav id="navbar">
        {showNavigation()}
        <div id="search">
                <label htmlFor="searchbar">Search</label>
                <input type="search" className="searchbar" id="searchbar" name="searchbar">
                  </input>
            </div>
                <button id="newsnippetbtn">
                <Link to="/createsnippet">
                  Create New Snippet
                  </Link>
                  </button>
                  </nav>
    </header>
  )
}

export default Header;
