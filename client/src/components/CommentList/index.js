import React, { useEffect } from 'react';
import Comment from '../Comment';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_SNIPPET, QUERY_COMMENTS } from '../../utils/queries';
import spinner from '../../assets/spinner.gif';

function CommentList() {
  const { snippetId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_SNIPPET, {
    variables: { snippetId: snippetId },
  });
  const comments = data?.snippet.comments || [];
  console.log(comments)


  return(

          <section className="comments">
    {comments.length ? (
            <div className="commentcard">
                {comments.map((comment) => (
                        <Comment
                        key={comment._id}
                        _id={comment._id}
                        text={comment.commentText}
                        author={comment.commentAuthor}
                        // userid={commentAuthor}
                        />
                ))}
                </div>
    ) : (
        <div></div>
    )}
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
  {loading ? <img src={spinner} alt="loading" /> : null}
  </section>
          );
        }
                        
  

  export default CommentList;