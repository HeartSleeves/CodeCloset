import React from "react";

function CreateSnippet (){
    return (
        <form class="bigcard" id="newsnippet">
    <div>
      <h2 class="cardheader">New Snippet</h2>
    </div>
    <div class="cardinput">
      <div class="inputdiv">
        <label for="titleinput">Title</label>
        <input
          id="titleinput"
          type="text"
          name="titleinput"
          placeholder="Title"
        />
      </div>
      <div class="inputdiv">
        <label for="bodyinput">Description</label>
        <textarea
          id="descinput"
          name="descinput"
          placeholder="What does it do?"
        ></textarea>
      </div>
      <div class="inputdiv">
        <label for="bodyinput">Content</label>
        <textarea
          id="bodyinput"
          name="bodyinput"
          placeholder="insert code here"
        ></textarea>
      </div>
      {/* <div class="inputdiv">
        <label for="langinput">Language</label>
        <input
          id="langinput"
          type="text"
          name="langinput"
          placeholder="code language"
        />
      </div>
      <div class="inputdiv">
        <label for="taginput">Tags</label>
        <input
          id="taginput"
          type="text"
          name="taginput"
          placeholder="tags"
        />
      </div> */}
      <button type="submit" id="submitbtn">Submit</button>
    </div>
  </form>
    );
}

export default CreateSnippet;