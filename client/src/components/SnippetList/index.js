import React, { useEffect } from 'react';
import Snippet from '../Snippet';
import { useAppContext } from '../../utils/GlobalState';
import { UPDATE_SNIPPET } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_SNIPPET } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

function SnippetList() {
  const [state, dispatch] = useAppContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_SNIPPET);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_SNIPPET,
        snippets: data.snippets,
      });
      data.snippets.forEach((snippet) => {
        idbPromise('snippets', 'put', snippet);
      });
    } else if (!loading) {
      idbPromise('snippets', 'get').then((snippets) => {
        dispatch({
          type: UPDATE_SNIPPET,
          snippets: snippets,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterSnippets() {
    if (!currentCategory) {
      return state.snippets;
    }

    return state.snippets.filter(
      (snippet) => snippet.category._id === currentCategory
    );
  }

  return (
    <div className="my-2">
      <h2>Our Snippets:</h2>
      {state.snippets.length ? (
        <div className="flex-row">
          {filterSnippets().map((snippet) => (
            <Snippet
            key={snippet._id}
            _id={snippet._id}
            title={snippet.snippetTitle}
            desc={snippet.snippetDescription}
            text={snippet.snippetText}
            author={snippet.snippetAuthor}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any snippets yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default SnippetList;
