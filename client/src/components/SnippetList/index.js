import React, { useEffect } from 'react';
import Snippet from '../Snippet';
import { useQuery } from '@apollo/client';
import { QUERY_SNIPPET } from '../../utils/queries';
import spinner from '../../assets/spinner.gif';

function SnippetList() {
  const { loading, data } = useQuery(QUERY_SNIPPET);
  const snippets = data?.snippets || [];

  return (
    <section id="searchresults" className="carddisplay">
      {snippets.length ? (
        <div>
          {snippets.map((snippet) => (
            <Snippet
            key={snippet._id}
            _id={snippet._id}
            title={snippet.snippetTitle}
            desc={snippet.snippetDescription}
            text={snippet.snippetText}
            author={snippet.snippetAuthor}
            date={snippet.createdAt}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any snippets yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </section>
  );
}

export default SnippetList;
