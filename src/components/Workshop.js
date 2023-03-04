import React from "react";
import 'animate.css';
import  { useState, useEffect, useRef } from 'react';
import FOOTER from "./FOOTER";

function Workshop(){
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const target1 = useRef();
    const target2 = useRef();
  
    useEffect(() => {
      const observer1 = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible1(true);
          } else {
            setIsVisible1(false);
          }
        },
        { threshold: 0.6 }
      );
  
      const observer2 = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible2(true);
          } else {
            setIsVisible2(false);
          }
        },
        { threshold: 0.6 }
      );
  
      observer1.observe(target1.current);
      observer2.observe(target2.current);
  
      return () => {
        observer1.unobserve(target1.current);
        observer2.unobserve(target2.current);
      };
    }, []);
  
    const onAnimationEnd = () => {
      setIsVisible1(false);
      setIsVisible2(false);
    };
    return(
       <div  >
        <div className="w-total">
        <div className="ws">
          <a href="/dv" id="w-link1" style={{textDecoration:"none",color:"black"}}>
            <div id="workshop1" ref={target1} className={`animate__animated ${isVisible1 ? 'animate__zoomIn' : ''}`} onAnimationEnd={onAnimationEnd}>
            <div id="workshop1-logo">
            <img src="/images/DVRL.png"></img>
            </div>
            <div id="head-div"><p id="head">Data Analytics and Visualization</p></div>
            <div id="workshop1-content">
              <div id="w1-icon">
              <img src="/images/female-profile.png"></img>
              </div>
               <div>
               <p id="name">By Dr.Ch.Bindu Madhuri</p>
               <p id="degree">Phd in Machine learning</p></div>
               </div>
            </div>
          </a>
          <a href="/wbd" id="w-link2" style={{textDecoration:"none",color:"black"}}>
            <div id="workshop2" ref={target2} className={`animate__animated ${isVisible2 ? 'animate__zoomIn' : ''}`} onAnimationEnd={onAnimationEnd}>
            <div id="workshop2-logo">
            <img src="/images/WBDRL.png"></img>
            </div>
            <div id="head-div"><p id="head">Full Stack Development</p></div>
            <div id="workshop2-content">
            <div id="w2-icon">
            <img src="/images/male-user.png"></img>
            </div>
              <div>
               <p id="name">By ACM Web Masters </p>
               <p id="degree">Experienced in Web Technologies</p></div>
               </div>
            
           
            </div>
          </a>  
        </div>
          
        </div>
        <FOOTER></FOOTER>
        </div>
    )
}

export default Workshop;
