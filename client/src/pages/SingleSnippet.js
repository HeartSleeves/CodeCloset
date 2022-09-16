import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// import CommentList from '../components/CommentList';
// import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_SNIPPET } from '../utils/queries';

const SingleSnippet = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { snippetId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_SNIPPET, {
    // pass URL parameter
    variables: { snippetId: snippetId },
  });

  const snippet = data?.snippet || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
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
  );
};

export default SingleSnippet;
