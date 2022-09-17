import React from "react";
import { Link } from "react-router-dom";

function Tag (tag){

    const{
        tagText
    } = tag;

    return(
    <div className="commentcard">
      <div className="commenthead"></div>
        <div className="comment">
          <p className="commentcontent">
            {text}
          </p>
          <Link to={`/profile/${userid}`}>
          <p className="commentdata">- {author}</p>
            <p>{date}</p>
          </Link>
        </div>
      </div>
     );
   }

   export default Tag;