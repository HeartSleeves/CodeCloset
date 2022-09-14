import React from "react";
//TODO Create individual CSS file
import "../../styles/Homepage.css";

const styles = {
  heading: {
    color: "#583a6d",
  },
};

function Homepage(props) {
  return (
    <aside>
      <h2 style={styles.heading}>About Me</h2>
      <hr style={styles.heading} />
        <section class="undeployed">
          <h2>
            Ivy Lovegood
          </h2>
          <figcaption class="page-description">I am a capable developer with comprehensive knowledge of integrated web product development. Meticulous troubleshooter with demonstrated track-record of investigating and solving difficult multi-disciplinary problems both within software and embedded devices. Experienced in performing on-site installation and repair of complex systems. Persistent learner with several certificates including a certificate of completions from the UW Professional & Continuing Education’s Full Stack Development Program.</figcaption>
        </section>
      
      </aside>
  );
}

export default Bio;
