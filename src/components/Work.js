import React from "react";
import "../stylesheets/Work.scss";
import { motion} from "framer-motion";
import wrihanshi from "../Media/wrihanshi-capture.png"
const Work = () => {
  return (
    <section className="Work">
      <div className="mywork-wrapper">
        <h2 className="mywork-heading">
          My <span>Works</span>
        </h2>
        <div className="card-container">
          <div className="card-outline">
            <motion.img src={wrihanshi} className="wrihanshi" alt="wrihanshi"
            animate={{translateY:
              [1, -500, -1000, -1495, 1]}}
              transition={{
                duration: 10,
                ease: "easeInOut",
               // times: [0, 0.2, 0.5, 0.8, 1],
                loop: Infinity,
                //repeatDelay: 1
              }}
            ></motion.img>
          </div>
          <h4>The Wrihanshi Foundation</h4>
        </div>
        <div className="description-container">
          <p>I gave this Site to an N.G.O in my town.
          </p>
          <p>Technologies used :</p>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Bootstrap</li>
          </ul>
          <button><a href="http://thewrihanshifoundation.com/" target="#">Visit Page</a>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Work;
