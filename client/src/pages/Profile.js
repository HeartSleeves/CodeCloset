import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';

import Snippet from '../components/Snippet';
import { QUERY_ME, QUERY_USER } from '../utils/queries';
import spinner from '../assets/spinner.gif'

const Profile = ({snippet}) => {
    const { email: emailParam } = useParams();

    const { loading, data} = useQuery(emailParam ? QUERY_USER : QUERY_ME, {
      variables:  {email: emailParam},
    })
    const email = data?.me || data?.email || {};
    
    if (Auth.loggedIn() && Auth.getProfile().data.email === emailParam) {
        return <Navigate to="/me" />;
    }

    const user = Auth.getProfile().data.email;

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!email?.email) {
        return (
            <h3>
                You must be logged in!
            </h3>
        );
    }
    
    return (
      <div>
      <section className="profileheader">
        <h2>Welcome {user}!</h2>
      </section>
      <section id="searchresults" className="carddisplay">
          {email.snippets.length ? (
            <div><h2>You've made {email.snippets.length} Posts:</h2>
              {email.snippets.map((snippet) => (
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
            <Link to={'/createsnippet'}>
          <h2>Create your first Snippet!</h2>
            </Link>
          )}
          {loading ? <img src={spinner} alt="loading" /> : null}
        </section>
          </div>
      );
}

export default Profile