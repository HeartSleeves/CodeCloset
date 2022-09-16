import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
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

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!email?.email) {
        return (
            <h3>
                You must be logged in to view your Profile!
            </h3>
        );
    }
    

    return (
        <section id="searchresults" className="carddisplay">
          {email.snippets.length ? (
            <div>
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
            <h3>You haven't added any snippets yet!</h3>
          )}
          {loading ? <img src={spinner} alt="loading" /> : null}
        </section>
      );
}

export default Profile