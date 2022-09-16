import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../../utils/mutations';
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const AddComment = () => {
  const { snippetId } = useParams();

  const [formState, setFormState] = useState({commentText: ''});
  const [addComment, {error}] = useMutation(ADD_COMMENT);
const user= Auth.getProfile().data._id;
console.log(user)
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try{ const {data} = addComment({
      variables: {
        commentText: formState.commentText,
        commentAuthor: Auth.getProfile().data.email,
        snippetId: formState.snippetId,
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

    if (Auth.loggedIn()){
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
                      <input 
                      name='snippetId'
                      value={snippetId}
                      onChange={handleChange}></input>
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