import React from "react";
import Contact from "../components/Contact";
import SnippetList from "../components/SnippetList"

const Home = () => {
  return (

    <div>
    <div>
        <h3 id="searchparams" className="title">All Snippets</h3>
    </div>
        <SnippetList />
    <footer>
        <h5>Created by: Ivy Lovegood and Adeline Aguspranoto</h5>
        <Contact />
    </footer>

</div>
  );
}

export default Home;
