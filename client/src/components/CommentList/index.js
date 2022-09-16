import React, { useEffect } from 'react';
// import Comment from '../Comment';
// import { useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { QUERY_SINGLE_SNIPPET, QUERY_COMMENTS } from '../../utils/queries';
import spinner from '../../assets/spinner.gif';

const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }
  return(

          <section className="comments">
            <div className="commentcard">
                {comments &&
                comments.map((comment) => (
                  <div key={comment._id} className="commentcard">
                  <div className="commenthead"></div>
                    <div className="comment">
                      <p className="commentcontent">
                        {comment.commentText}
                      </p>
                      {/* <Link to={`/profile/${userid}`}> */}
                      <p className="commentdata">- {comment.commentAuthor}</p>
                        <p>{comment.createdAt}</p>
                      {/* </Link> */}
                    </div>
                  </div>
                ))}
                </div>
    
    {/* <div className="bigcard hidden" id="addcomment">
    <div className="cardinput">
      <div className="inputdiv">
      <div className="inputdiv">
        <label for="bodyinput">Comment</label>
        <textarea
          id="bodyinput"
          name="bodyinput"
          placeholder="What would you like to say?"
          ></textarea>
      </div>
      <button type="submit" id="submitbtn">Submit</button>
    </div>
    </div>
  </div> */}
  </section>
          );
        }
                        
  

  export default CommentList;