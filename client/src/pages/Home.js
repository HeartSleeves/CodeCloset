import React from "react";
import Snippet from "../components/Snippet";
import SnippetList from "../components/SnippetList"

const Home = () => {
  return (

    <div>
    <div>
        <h3 id="searchparams" className="title">All Snippets</h3>
    </div>
    <section id="searchresults" className="carddisplay">
        <SnippetList />
        {/* <article className="card">
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
                <code className="cardsnippet">.row &lbrace;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                  &rbrace;</code>
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
                <code className="cardsnippet">.row &lbrace;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                  &rbrace;</code>
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
                <code className="cardsnippet">.row &lbrace;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                  &rbrace;</code>
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
                <code className="cardsnippet">.row &lbrace;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                  &rbrace;</code>
            </div>
            <div>
                <p className="cardlang">Language</p>
            </div>
        </article> */}
    </section>
    <footer>
        <h5>Created by: Ivy Lovegood and Adeline Aguspranoto</h5>
    </footer>

</div>
  );
}

export default Home;
