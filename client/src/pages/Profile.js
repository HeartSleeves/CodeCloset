import React from "react";

function Profile (){
    return (
        <body>
        <section class="profileheader">
          <h2>Welcome username!</h2>
          <h2>You've made post.length Posts:</h2>
          <h2>Create your first post!</h2>
        </section>
        <section id="searchresults" class="carddisplay">
            <article class="card">
                <div class="cardheader">
                    <h4 class="cardtitle">Snippet</h4>
                        <div>
                            <p class="carduser">Created by:</p>
                            <p class="carddate">Date created</p>
                        </div>
                </div>
                <div>
                    <p class="carddesc">short description of what the code does</p>
                </div>
                <div>
                    <code class="cardsnippet">insert code</code>
                </div>
                <div>
                    <p class="cardlang">Language</p>
                </div>
            </article>
            <article class="card">
                <div class="cardheader">
                    <h4 class="cardtitle">Snippet</h4>
                        <div>
                            <p class="carduser">Created by:</p>
                            <p class="carddate">Date created</p>
                        </div>
                </div>
                <div>
                    <p class="carddesc">short description of what the code does</p>
                </div>
                <div>
                    <code class="cardsnippet">Insert Code</code>
                </div>
                <div>
                    <p class="cardlang">Language</p>
                </div>
            </article>
            <article class="card">
                <div class="cardheader">
                    <h4 class="cardtitle">Snippet</h4>
                        <div>
                            <p class="carduser">Created by:</p>
                            <p class="carddate">Date created</p>
                        </div>
                </div>
                <div>
                    <p class="carddesc">short description of what the code does</p>
                </div>
                <div>
                    <code class="cardsnippet">Insert Code</code>
                </div>
                <div>
                    <p class="cardlang">Language</p>
                </div>
            </article>
            <article class="card">
                <div class="cardheader">
                    <h4 class="cardtitle">Snippet</h4>
                        <div>
                            <p class="carduser">Created by:</p>
                            <p class="carddate">Date created</p>
                        </div>
                </div>
                <div>
                    <p class="carddesc">short description of what the code does</p>
                </div>
                <div>
                    <code class="cardsnippet">Insert Code</code>
                </div>
                <div>
                    <p class="cardlang">Language</p>
                </div>
            </article>
        </section>
</body>
    );
}

export default Profile