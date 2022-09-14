import React from 'react';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
    <h1 id="apptitle" class="title">
      <Link to="/">
          Code Closet
          </Link>
          </h1>
        <nav id="navbar">
          <h2 class="navbtn" id="profile">
          <Link to="/profile">
          Profile
          </Link>
         </h2>
        <h2 class="navbtn" id="signup">
        <Link to="/signup">
              Signup
              </Link>
            </h2>
            <h2 class="navbtn" id="login">
            <Link to="/login">
              Login
              </Link>
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
                <button id="newsnippetbtn">
                <Link to="/createsnippet">
                  Create New Snippet
                  </Link>
                  </button>
            
        </nav>
      </header>
  );
}

export default Header;
