import React from "react";
import 'animate.css';
import  { useState, useEffect, useRef } from 'react';

import FOOTER from "./FOOTER";
function Nontechnical(){
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);
    const [isVisible5, setIsVisible5] = useState(false);
    const [isVisible6, setIsVisible6] = useState(false);
    
    const target1 = useRef();
    const target2 = useRef();
    const target3 = useRef();
    const target4 = useRef();
    const target5 = useRef();
    const target6 = useRef();
    
  
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
      const observer3 = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible3(true);
          } else {
            setIsVisible3(false);
          }
        },
        { threshold: 0.6 }
      );
      const observer4 = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible4(true);
          } else {
            setIsVisible4(false);
          }
        },
        { threshold: 0.6 }
      );
      const observer5 = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible5(true);
          } else {
            setIsVisible5(false);
          }
        },
        { threshold: 0.6 }
      );
      const observer6 = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible6(true);
          } else {
            setIsVisible6(false);
          }
        },
        { threshold: 0.6 }
      );
      
      observer1.observe(target1.current);
      observer2.observe(target2.current);
      observer3.observe(target3.current);
      observer4.observe(target4.current);
      observer5.observe(target5.current);
      observer6.observe(target6.current);
      
  
      return () => {
        observer1.unobserve(target1.current);
        observer2.unobserve(target2.current);
        observer3.unobserve(target3.current);
        observer4.unobserve(target4.current);
        observer5.unobserve(target5.current);
        observer6.unobserve(target6.current);
       
      };
    }, []);
  
    const onAnimationEnd = () => {
      setIsVisible1(false);
      setIsVisible2(false);
      setIsVisible3(false);
      setIsVisible4(false);
      setIsVisible5(false);
      setIsVisible6(false);
    
    };
    return(
      <div>
        <div className="te-total">
            <div className="te-line1">
              <a id="link1" style={{textDecoration:"none",color:"black"}} href="/slr">
                <div id="te1" ref={target1} className={`animate__animated ${isVisible1 ? 'animate__zoomIn' : ''}`} onAnimationEnd={onAnimationEnd}>
                    <div id="te-logo">
                    <img src="/images/SLRL.jpg"></img>
                    </div>
                    <div id="te-content">
                    <div style={{backgroundColor:"#013158",borderLeft:"5px solid #A4C639",borderRight:"5px solid #A4C639",width:"100%"}}><p id="te-head">Snakes and Ladders</p></div>
                    <div id="sub-line"><p>Snakes and Ladders is a classic board game that is played by rolling a dice .The Candidate has to play as an avatar in the game</p></div>
                    {/* <div id="reg"><a href="/slr"><p id="reg-bt">Register</p></a></div> */}
                    </div>
                </div>
              </a>
              <a href="/mmr" id="link2"style={{textDecoration:"none",color:"black"}}>
                <div id="te2" ref={target2} className={`animate__animated ${isVisible2 ? 'animate__zoomIn' : ''}`} onAnimationEnd={onAnimationEnd}>
                    <div id="te-logo">
                    <img src="/images/MMRL.png"></img>
                    </div>
                    <div id="te-content">
                    <div style={{backgroundColor:"#013158",borderLeft:"5px solid #A4C639",borderRight:"5px solid #A4C639",width:"100%"}}><p id="te-head">Movie minds</p></div>
                    <div id="sub-line"><p>Movie Minds is a guessing game in which players try to identify the title of a movie based on clues The movie names has to be guessed correctly.</p></div>
                    {/* <div id="reg"><a href="/mmr"><p id="reg-bt">Register</p></a></div> */}
                    </div> 
                </div>
              </a>
              <a href="/thr"id="link3" style={{textDecoration:"none",color:"black"}}>
                <div id="te3"ref={target3} className={`animate__animated ${isVisible3 ? 'animate__zoomIn' : ''}`} onAnimationEnd={onAnimationEnd}>
                    <div id="te-logo">
                    <img src="/images/THRL.png"></img>
                    </div>
                    <div id="te-content">
                    <div style={{backgroundColor:"#013158",borderLeft:"5px solid #A4C639",borderRight:"5px solid #A4C639",width:"100%"}}><p id="te-head">Treasure Hunt</p></div>
                    <div id="sub-line"><p>Treasure Hunt is a game or activity in which participants solve clues and riddles to find hidden objects or locations.</p></div>
                    {/* <div id="reg"><a href="/thr"><p id="reg-bt">Register</p></a></div> */}
                      </div>
                </div>
              </a>
            </div>
            
              <div className="te-line2">
              <a href="/rtr" id="link4" style={{textDecoration:"none",color:"black"}}>
                <div id="te4"ref={target4} className={`animate__animated ${isVisible4 ? 'animate__zoomIn' : ''}`} onAnimationEnd={onAnimationEnd}>
                  <div id="te-logo">
                  <img src="/images/RTRL.jpg"></img>
                  </div>
                  <div id="te-content">
                  <div style={{backgroundColor:"#013158",borderLeft:"5px solid #A4C639",borderRight:"5px solid #A4C639",width:"100%"}}><p id="te-head">Rapid Typing</p></div>
                  <div id="sub-line"><p>The Rapid Typing competition is a typing competition where participants compete to see who can type the fastest and most accurately.</p></div> 
                    {/* <div id="reg"><a href="/rtr"><p id="reg-bt">Register</p></a></div> */}
                  </div>
                </div>
              
              </a>
              <a href="/rcr" id="link5"style={{textDecoration:"none",color:"black"}}>
                <div id="te5"ref={target5} className={`animate__animated ${isVisible5 ? 'animate__zoomIn' : ''}`} onAnimationEnd={onAnimationEnd}>
                    <div id="te-logo">
                    <img src="/images/RCRL.png"></img>
                    </div>
                    <div id="te-content">
                     <div style={{backgroundColor:"#013158",borderLeft:"5px solid #A4C639",borderRight:"5px solid #A4C639",width:"100%"}}><p id="te-head">Rubik's cube</p></div>
                     <div id="sub-line"><p>It is a puzzle game that challenges players to solve a 3D combination puzzle and change the cube to  single color.</p></div>
                     {/* <div id="reg"><a href="/rcr"><p id="reg-bt">Register</p></a></div> */}
                    </div>
                </div>
              </a>
              <a href="/ssr" id="link6" style={{textDecoration:"none",color:"black"}}>
                <div id="te6"ref={target6} className={`animate__animated ${isVisible6 ? 'animate__zoomIn' : ''}`} onAnimationEnd={onAnimationEnd}>
                    <div id="te-logo">
                    <img src="/images/SSRL.png"></img>
                    </div>
                    <div id="te-content">
                    <div style={{backgroundColor:"#013158",borderLeft:"5px solid #A4C639",borderRight:"5px solid #A4C639",width:"100%"}}><p id="te-head">Sight on Site</p></div>
                    <div id="sub-line"><p>Clip will be shown and individual has to write few lines on it in 2 minutes and 
short video clips will be shown and based on that questions will be asked.</p></div>
                    {/* <div id="reg"><a href="/ssr"><p id="reg-bt">Register</p></a></div> */}
                    </div>
                </div>
              </a>
            </div>
           
        </div>
        <FOOTER></FOOTER>
        </div>
    )
}


export default Nontechnical;
