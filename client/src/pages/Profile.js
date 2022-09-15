import React from "react";

function Profile (){
    return (
        <body>
        <section className="profileheader">
          <h2>Welcome username!</h2>
          <h2>You've made post.length Posts:</h2>
          <h2>Create your first post!</h2>
        </section>
        <section id="searchresults" className="carddisplay">
            <article className="card">
                <div className="cardheader">
                    <h4 className="cardtitle">Snippet</h4>
                        <div>
                            <p className="carduser">Created by:</p>
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
            <article className="card">
                <div className="cardheader">
                    <h4 className="cardtitle">Snippet</h4>
                        <div>
                            <p className="carduser">Created by:</p>
                            <p className="carddate">Date created</p>
                        </div>
                </div>
                <div>
                    <p className="carddesc">short description of what the code does</p>
                </div>
                <div>
                    <code className="cardsnippet">Insert Code</code>
                </div>
                <div>
                    <p className="cardlang">Language</p>
                </div>
            </article>
            <article className="card">
                <div className="cardheader">
                    <h4 className="cardtitle">Snippet</h4>
                        <div>
                            <p className="carduser">Created by:</p>
                            <p className="carddate">Date created</p>
                        </div>
                </div>
                <div>
                    <p className="carddesc">short description of what the code does</p>
                </div>
                <div>
                    <code className="cardsnippet">Insert Code</code>
                </div>
                <div>
                    <p className="cardlang">Language</p>
                </div>
            </article>
            <article className="card">
                <div className="cardheader">
                    <h4 className="cardtitle">Snippet</h4>
                        <div>
                            <p className="carduser">Created by:</p>
                            <p className="carddate">Date created</p>
                        </div>
                </div>
                <div>
                    <p className="carddesc">short description of what the code does</p>
                </div>
                <div>
                    <code className="cardsnippet">Insert Code</code>
                </div>
                <div>
                    <p className="cardlang">Language</p>
                </div>
            </article>
        </section>
</body>
    );
}

export default Profile