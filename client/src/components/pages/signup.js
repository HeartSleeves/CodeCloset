import React from "react";
import "../styles/Signup.css";

function Signup(){
    return (
        <body>
      <form class="bigcard login-form">
        <div>
          <h2 class="cardheader">Signup</h2>
        </div>
        <div class="cardinput">
          <div class="inputdiv">
            <label for="username">Username</label>
            <input id="user-login" type="text" placeholder="Username" />
          </div>
          <div class="inputdiv">
            <label for="password">Password</label>
            <input id="password-login" type="password" placeholder="Password" />
          </div>
          <button type="submit" id="submitbtn">Signup</button>
        </div>
        <div class="commentdata">
          <a href="/login" class="loginswitch">Login instead?</a></div>
      </form>
</body>
    );
}

export default Signup
