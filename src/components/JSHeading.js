import React, { useEffect } from "react";
import "../stylesheets/JSHeading.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const JSHeading=() =>{
    useEffect(()=>{
        const tl=gsap.timeline({
            scrollTrigger:{
                trigger: ".heading",
                start: "-=100",
                end: "bottom bottom",
               // markers:{startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20},
                scrub: 8,
                pin: true,
                //toggleActions: "play pause reverse reverse",
              } 
        })
        tl.fromTo(".textAnimate",{translateX:1500},{translateX:0, duration: 10})
    })
    return(
        <div className="heading">
            <h5 className="textAnimate">JAVASCRIPT PROJECTS</h5>
        </div>
    );
};
 export default JSHeading; 