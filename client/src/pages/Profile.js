import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';

// import SnippetForm from '../components/SnippetForm';
// import SnippetList from '../components/SnippetList';
import { QUERY_ME, QUERY_USER } from '../utils/queries';

const Profile = ({snippets}) => {
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
        <div>
        <section className="profileheader">
          <h2>Welcome {email.email} !</h2>
         <h2>{emailParam ? `You've made ${email.snippets.length} Snippets:` : 'Create your first Snippet!'}
          !</h2>
          
          
          
        </section>
        <section id="searchresults" className="carddisplay">
            <article className="card">
                <div className="cardheader">
                    <h4 className="cardtitle">Snippet</h4>
                        <div>
                            <p className="cardemail">Created by:</p>
                            <p className="carddate">Date created</p>
                        </div>
                </div>
                <div>
                    <p className="carddesc">short description of what the code does</p>
                </div>
                <div>
                    <code className="cardsnippet">insert code</code>
                </div>
                <div>
                    <p className="cardlang">Language</p>
                </div>
            </article>
        </section>
</div>
    );
}

export default Profile