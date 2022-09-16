import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import CommentList from '../components/CommentList';
import AddComment from '../components/AddComment';
import { QUERY_SINGLE_SNIPPET } from '../utils/queries';
import Auth from '../utils/auth';

const SingleSnippet = () => {
  const { snippetId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_SNIPPET, {
    variables: { snippetId: snippetId },
  });

  const snippet = data?.snippet || {};
  console.log(snippet)

  // if (loading) {
  //   return <div>Loading...</div>;
  // } else if (Auth.loggedIn()){
    return (
      <div>
    <article className="card">
            <div className="cardheader">
                <h4 className="cardtitle">{snippet.snippetTitle}</h4>
            <div>
               <p className="carduser">Created by: {snippet.snippetAuthor}</p> 
               <p className="carddate">{snippet.createdAt}</p>
            </div>
        </div>
        <div>
                <p className="carddesc">{snippet.snippetDescription}</p>
            </div>
            <div>
                <code className="cardsnippet">{snippet.snippetText}</code>
            </div>
            {/* <div>
                <p className="cardlang">{snippet.snippetLanguage}</p>
              </div> */}
    </article>
        <CommentList comments={snippet.comments}/> 
        <AddComment snippetId={snippet._id}/>
       </div>
  );
// } else {
//   <h3>Login to view snippets</h3>
// }
};

export default SingleSnippet;
