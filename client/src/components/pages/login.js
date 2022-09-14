import React from "react";
import "../styles/Login.css";

function Login (){
    return (
<body>
      <form class="bigcard login-form">
        <div>
          <h2 class="cardheader">Login</h2>
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
          <button type="submit" id="submitbtn">Login</button>
        </div>
        <div class="commentdata">
          <a href="/signup" class="loginswitch">Signup instead?</a></div>
      </form>
</body>
);
 }

 export default Login