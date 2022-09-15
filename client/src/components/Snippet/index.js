import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useAppContext } from "../../utils/GlobalState";

function Snippet (snippet){
    const{
        title,
        _id,
        desc,
        text,
        author,
        // language,
        // tags,
    } = snippet;

    return (<div>
        <section className="snippetdisplay">
            <Link to={`/snippets/${_id}`}>
                <h3 className="snippettitle">{title}</h3>
            </Link>
        <p className="snippetdesc">{desc}</p>
            <div className="snippetbody">
            <code>{text}
     </code>
    </div>
    <div className="snippetdata">
        <h4 className="snippetlang">{language}</h4>
        <ul className="snippettags">
            <li className="tag">tag</li>
            
        </ul>
    </div>
        </section>
        <section className="commentsection">
            <div>
                <div className="commentcard">
                    <div className="commenthead"></div>
                  
                  <div className="comment">
                    <p className="commentcontent">
                      comment body
                    </p>
                    <p className="commentdata">
                      -
                      <a href="/profile/{{user.id}}">username
                      </a>
                      date created
                    </p>
                  </div>
                  </div>
            </div>
        </section>
    </div>
    );
}

export default Snippet