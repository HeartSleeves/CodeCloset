import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_SNIPPET } from '../utils/mutations';

const CreateSnippet = () => {

  const [formState, setFormState] = useState({ snippetTitle: '', snippetDescription: '' , snippetText: ''});
  const [addSnippet, {error}] = useMutation(ADD_SNIPPET);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try{ const {data} = addSnippet({
      variables: {
        ...formState
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
    return (
        <form onSubmit={handleFormSubmit} className="bigcard" id="newsnippet">
    <div>
      <h2 className="cardheader">New Snippet</h2>
    </div>
    <div className="cardinput">
      <div className="inputdiv">
        <label htmlFor="snippetTitle">Title</label>
        <input
          id="titleinput"
          type="text"
          name="snippetTitle"
          value={formState.snippetTitle}
          placeholder="Title"
          onChange={handleChange}
        />
      </div>
      <div className="inputdiv">
        <label htmlFor="snippetDescription">Description</label>
        <textarea
          id="descinput"
          name="snippetDescription"
          value={formState.snippetDescription}
          placeholder="What does it do?"
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="inputdiv">
        <label htmlFor="snippetText">Content</label>
        <textarea
          id="bodyinput"
          name="snippetText"
          value={formState.snippetText}
          placeholder="insert code here"
          onChange={handleChange}
        ></textarea>
      </div>
      {/* <div className="inputdiv">
        <label htmlFor="langinput">Language</label>
        <input
          id="langinput"
          type="text"
          name="snippetlanginput"
          placeholder="code language"
          onChange={handleChange}
        />
      </div>
      <div className="inputdiv">
        <label htmlFor="taginput">Tags</label>
        <input
          id="taginput"
          type="text"
          name="snippettaginput"
          placeholder="tags"
          onChange={handleChange}
        />
      </div> */}
      <button type="submit" id="submitbtn">Submit</button>
    </div>
  </form>
    );
}

export default CreateSnippet;