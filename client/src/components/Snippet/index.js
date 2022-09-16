import React from "react";
import { Link } from "react-router-dom";

function Snippet (snippet){
    const{
        title,
        _id,
        desc,
        text,
        author,
        date,
        // language,
        // tags,
    } = snippet;

    return (
        <article className="card">
            <div className="cardheader">
            <Link to={`/snippets/${_id}`}>
                <h4 className="cardtitle">{title}</h4>
            </Link>
            <div>
               <p className="carduser">Created by: {author}</p> 
               <p className="carddate">{date}</p>
            </div>
        </div>
        <div>
                <p className="carddesc">{desc}</p>
            </div>
            <div>
                <code className="cardsnippet">{text}</code>
            </div>
            {/* <div>
                <p className="cardlang">Language</p>
            </div> */}
    </article>        
    );
}

export default Snippet;