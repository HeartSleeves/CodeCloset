import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login (props){
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

    return (
<div>
      <form onSubmit={handleFormSubmit} className="bigcard login-form">
        <div>
          <h2 className="cardheader">Login</h2>
        </div>
        <div className="cardinput">
          <div className="inputdiv">
            <label htmlFor="username">Email</label>
            <input 
            id="user-login" 
            name="email"
            type="email" 
            placeholder="Email"
            onChange={handleChange} />
          </div>
          <div className="inputdiv">
            <label htmlFor="password">Password</label>
            <input 
            id="password-login" 
            name="password"
            type="password" 
            placeholder="Password"
            onChange={handleChange} />
          </div>
          {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
          <button type="submit" id="submitbtn">Login</button>
        </div>
        <div className="commentdata">
          <Link to="/signup">Signup instead?</Link></div>
      </form>
</div>
);
 }

 export default Login