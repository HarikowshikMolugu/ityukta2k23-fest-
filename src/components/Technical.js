import React from "react";
import 'animate.css';

import  { useState, useEffect, useRef } from 'react';
import FOOTER from "./FOOTER";
function Technical(){
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
      observer3.observe(target2.current);
      observer4.observe(target2.current);
      observer5.observe(target2.current);
      observer6.observe(target2.current);
  
      return () => {
        observer1.unobserve(target1.current);
        observer2.unobserve(target2.current);
        observer3.unobserve(target2.current);
        observer4.unobserve(target2.current);
        observer5.unobserve(target2.current);
        observer6.unobserve(target2.current);
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
            <a href="/cdr" id="link1" style={{textDecoration:"none",color:"black"}}>
                <div id="te1" ref={target1} className={`animate__animated ${isVisible1 ? 'animate__zoomIn' : ''}`} onAnimationEnd={onAnimationEnd}>
                    <div id="te-logo">
                    <img src="/images/CDRL.jpg"></img>
                    </div>
                    <div id="te-content">
                        <div style={{backgroundColor:"#013158",borderLeft:"5px solid #A4C639",borderRight:"5px solid #A4C639",width:"100%"}}><p id="te-head">Debugging</p></div>
                        <div id="sub-line"><p>It involves participants in trying to code according to the given output . The participant must be able to fix the errors in a given  time.</p></div>
                        {/* <div id="reg"><a href="/cdr"><p id="reg-bt">Register</p></a></div> */}
                    </div>
                </div>
            </a>
            <a href="/wdr" id="link2" style={{textDecoration:"none",color:"black"}}>
                <div id="te2" ref={target2} className={`animate__animated ${isVisible2 ? 'animate__zoomIn' : ''}`} onAnimationEnd={onAnimationEnd}>
                    <div id="te-logo">
                    <img src="/images/WDRL.jpg"></img>
                    </div>
                    <div id="te-content">
                    <div style={{backgroundColor:"#013158",borderLeft:"5px solid #A4C639",borderRight:"5px solid #A4C639",width:"100%"}}><p id="te-head">Web Designing</p></div>
                    <div id="sub-line"><p>A web design competition is an event or contest where web designers and developers compete against each other by creating websites.</p></div>
                    {/* <div id="reg"><a href="/wdr"><p id="reg-bt">Register</p></a></div> */}
                    </div> 
                </div>
            </a>
            <a href="/per" id="link3" style={{textDecoration:"none",color:"black"}}>
                <div id="te3"ref={target3} className={`animate__animated ${isVisible3 ? 'animate__zoomIn' : ''}`} onAnimationEnd={onAnimationEnd}>
                    <div id="te-logo">
                      <img src="/images/PERL.jpg"></img>
                    </div>
                    <div id="te-content">
                      <div style={{backgroundColor:"#013158",borderLeft:"5px solid #A4C639",borderRight:"5px solid #A4C639",width:"100%"}}><p id="te-head">Project Expo</p></div>
                      <div id="sub-line"><p>Project Expo competition is an event where students show their projects in a competition format.The best project will be declared as winner</p></div>
                      {/* <div id="reg"><a href="/per"><p id="reg-bt">Register</p></a></div> */}
                      </div>
                </div>
              </a>
            </div>
            <div className="te-line2">
            <a href="/tqr" id="link4" style={{textDecoration:"none",color:"black"}}>
                <div id="te4"ref={target4} className={`animate__animated ${isVisible4 ? 'animate__zoomIn' : ''}`} onAnimationEnd={onAnimationEnd}>
                    <div id="te-logo">
                    <img src="/images/TQRL.png"></img>
                    </div>
                    <div id="te-content">
                      <div style={{backgroundColor:"#013158",borderLeft:"5px solid #A4C639",borderRight:"5px solid #A4C639",width:"100%"}}><p id="te-head">Tech Quiz</p></div>
                      <div id="sub-line"><p>A Tech Quiz competition involves a series of questions that cover a range of areas in computer science programming languages.</p></div>
                      {/* <div id="reg"><a href="/tqr"><p id="reg-bt">Register</p></a></div> */}
                      </div>
                </div>
              </a>
              <a href="/cor" id="link5" style={{textDecoration:"none",color:"black"}}>
                <div id="te5"ref={target5} className={`animate__animated ${isVisible5 ? 'animate__zoomIn' : ''}`} onAnimationEnd={onAnimationEnd}>
                    <div id="te-logo">
                    <img src="/images/CORL.jpg"></img>
                    </div>
                    <div id="te-content">
                      <div style={{backgroundColor:"#013158",borderLeft:"5px solid #A4C639",borderRight:"5px solid #A4C639",width:"100%"}}><p id="te-head">CodeAthon</p></div>
                      <div id="sub-line"><p>A Codathon competition is a programming contest that challenges participants to solve coding problems in a limited amount of time.</p></div>
                      {/* <div id="reg"><a href="/cor"><p id="reg-bt">Register</p></a></div> */}
                      </div>
                </div>
              </a>
              <a href="/pptr" id="link6" style={{textDecoration:"none",color:"black"}}>
                <div id="te6"ref={target6} className={`animate__animated ${isVisible6 ? 'animate__zoomIn' : ''}`} onAnimationEnd={onAnimationEnd}>
                    <div id="te-logo">
                    <img src="/images/PPTRL.png"></img>
                    </div>
                    <div id="te-content">
                      <div style={{backgroundColor:"#013158",borderLeft:"5px solid #A4C639",borderRight:"5px solid #A4C639",width:"100%"}}><p id="te-head">Power point presentation</p></div>
                      <div id="sub-line"><p>A Power Point Presentation is a digital slide show created using Microsoft PowerPoint software.The best presentation will declared as winner</p></div>
                      {/* <div id="reg"><a href="/pptr"><p id="reg-bt">Register</p></a></div> */}
                      </div>
                </div>
              </a>
            </div>
        </div>
        <FOOTER></FOOTER>
        </div>
    )
}

export default Technical;
