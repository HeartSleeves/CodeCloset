import React from "react";
import "../styles/Snippet.css";

function Snippet (){
    return (<body>
        <section class="snippetdisplay">
                <h3 class="snippettitle"> Title of Snippet</h3>
        <p class="snippetdesc">This is a description of what the code does</p>
            <div class="snippetbody">
            <code>function Bio(props) codecodecode
                code
                code code
     </code>
    </div>
    <div class="snippetdata">
        <h4 class="snippetlang">Javascript</h4>
        <ul class="snippettags">
            <li class="tag">tag</li>
            <li class="tag">also tag</li>
            <li class="tag">another tag</li>
            <li class="tag">look! tag</li>
        </ul>
    </div>
        </section>
        <section class="commentsection">
            <div>
                <div class="commentcard">
                    <div class="commenthead"></div>
                  
                  <div class="comment">
                    <p class="commentcontent">
                      comment body
                    </p>
                    <p class="commentdata">
                      -
                      <a href="/profile/{{user.id}}">username
                      </a>
                      date created
                    </p>
                  </div>
                  </div>
            </div>
        </section>
    </body>
    );
}

export default Snippet