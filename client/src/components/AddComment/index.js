import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../../utils/mutations';
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const AddComment = ({ snippetId }) => {
  const [formState, setFormState] = useState({commentText: ''});
  const [addComment, {error}] = useMutation(ADD_COMMENT);
  
  if (Auth.loggedIn()){

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try{ const {data} = addComment({
      variables: {
        snippetId,
        commentText: formState.commentText,
        commentAuthor: Auth.getProfile().data.email,
      },
    });
  } catch (err) {
    console.error(err)
  }
    
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

    
        return(
            <form onSubmit={handleFormSubmit} className="bigcard hidden" id="addcomment">
                <div className="cardinput">
                  <div className="inputdiv">
                  <div className="inputdiv">
                    <label htmlFor="commentText">Comment</label>
                    <textarea
                      id="bodyinput"
                      name="commentText"
                      value={formState.commentText}
                      placeholder="What would you like to say?"
                      onChange={handleChange}
                      >
                      </textarea>
                  </div>
                  <button type="submit" id="submitbtn">Add Comment</button>
                </div>
            </div>
        </form>    
    );} else { 
        return(
            <p className="loginswitch">
            <Link to="/login">
                Login to comment  
            </Link>
            </p>
            )
          }
    };

export default AddComment;