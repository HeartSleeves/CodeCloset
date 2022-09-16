import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(){
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        ...formState
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
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
          <h2 className="cardheader">Signup</h2>
        </div>
        <div className="cardinput">
          <div className="inputdiv">
            <label htmlFor="username">Email</label>
            <input 
            id="user-login" 
            type="email" 
            name="email"
            placeholder="Email"
            onChange={handleChange} />
          </div>
          <div className="inputdiv">
            <label htmlFor="password">Password</label>
            <input 
            id="password-login" 
            type="password" 
            name="password"
            placeholder="Password"
            onChange={handleChange} />
          </div>
          <button type="submit" id="submitbtn">Signup</button>
        </div>
        <div className="commentdata">
        <Link to="/login">Login instead?</Link></div>
      </form>
</div>
    );
}

export default Signup;
