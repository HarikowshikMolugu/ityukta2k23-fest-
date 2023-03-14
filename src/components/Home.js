import React from "react";
import "animate.css";
import { useState, useEffect, useRef } from "react";

import FOOTER from "./FOOTER";

function Home() {
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

  return (
    <div>
      <div className="total">
        <div className="background">
          <img id="bk" src="/images/bkf.jpg"></img> {/*"/images/bk.jpg" */}
          <p
            style={{ position: "relative" }}
            id="title"
            ref={target1}
            className={`animate__animated ${
              isVisible1 ? "animate__zoomInDown" : ""
            }`}
            onAnimationEnd={onAnimationEnd}
          >
            ITYUKTA 2K23
          </p>
        </div>
        <div className="pow-total">
          <div id="pow">
            <div id="pow-head">
              <p> Powered By</p>
            </div>
            <div id="pow-name">
              <p>acm</p>
            </div>
          </div>
        </div>
        <div className="a-total">
          <div className="about">
            <p id="about-head">ABOUT FEST</p>
            <hr id="line1"></hr>
            <p id="about-content">
              The Ninth National Level Technical Symposium is going to be
              conducted at a grand level which includes several most advanced
              technical workshops and events to enhance their skills also there
              are some dazzling performances by our youngsters at this event. We
              are going to embrace the present technological advancement. So we
              the youngsters of the new technical era promise you, that this two
              day technical event is worth your time as you are going to enhance
              your technical skill, test your knowledge resources and can have a
              blast during the culturals. Our IT YUKTA is a mix of knowledge and
              entertainment. So Please do join us on{" "}
              <b id="dates"> 17th & 18th of March 2023.</b>
            </p>
          </div>
        </div>
       
       <div className="cg-total">
       <p id="cg-head">OUR CHEIFGUESTS</p>
        <hr id="cg-line"></hr>
       <div id="e-head0">
          <div id="cg1"  >
            <div id="cg1-logo">
               <img src={cg1}></img>
            </div>
            <div id="c-p-content" style={{borderLeft:"3px solid #FF9900"}}>
            <p id="c-p-h"><u>CHEIFGUEST</u></p>
            <p id="c-p-p" style={{marginBottom:"10px"}}>for Inaugration</p>
            <p id="c-p-n">Prof.J.V.R.Murthy</p>
            <p id="c-p-p">Advisor, Incubation Center JNTUK University</p>
            {/* <p id="c-p-d">Phd in MACHINE LEARNING</p> */}
            </div>
            
          </div>
          <div id="cg2"   >
          <div id="cg2-logo">
          <img src={cg2}></img>
          </div>
          <div id="fa-co-content" style={{borderLeft:"3px solid #FF9900"}}>
          <p id="fa-co-h"><u>CHEIFGUEST</u></p>
          <p id="c-p-p"style={{marginBottom:"10px"}}>for Valedictory</p>
          <p id="fa-co-n">Josyula Srinivas</p>
          <p id="c-p-p">Associate Professor of Practice Information Systems</p>
          {/* <p id="fa-co-d">Phd in MACHINE LEARNING</p> */}
          </div>

          </div>

        </div>
       </div>
        
        <div id="e-total">
        
          <div id="e-head1">
            <div id="c-p">
              <div id="c-p-logo">
                <img src="/images/male-user.png"></img>
              </div>
              <div id="c-p-content">
                <p id="c-p-h">
                  <u>CHAIRPERSON</u>
                </p>
                <p id="c-p-n">Dr.B.Tirimula Rao</p>
                <p id="c-p-p">Head of the Department</p>
                {/* <p id="c-p-d">Phd in MACHINE LEARNING</p> */}
              </div>
            </div>
            <div id="fa-co">
              <div id="fa-co-logo">
                <img src="/images/female-profile.png"></img>
              </div>
              <div id="fa-co-content">
                <p id="fa-co-h">
                  <u>FACULTY COORDINATOR</u>
                </p>
                <p id="fa-co-n">Dr.Ch.Bindu Madhuri</p>
                <p id="c-p-p">Assistant Professor</p>
                {/* <p id="fa-co-d">Phd in MACHINE LEARNING</p> */}
              </div>
            </div>
          </div>
          <div id="e-head2">
            <div id="m-co">
              <div id="m-co-logo">
                <img src="/images/male-user.png"></img>
              </div>
              <div id="m-co-content">
                <p id="m-co-h">
                  <u>
                    <b>STUDENT COORDINATOR</b>
                  </u>
                </p>
                <p id="m-co-n">K. VENKATA RAMANA</p>
                <p id="m-co-d">
                  Contact no 1:
                  <a style={{ textDecoration: "none" }} href="tel:9381690958">
                    9381690958
                  </a>
                </p>
                <p id="m-co-d">
                  Contact no 2:
                  <a style={{ textDecoration: "none" }} href="tel:9553599478">
                    9553599478
                  </a>
                </p>
              </div>
            </div>
            <div id="fe-co">
              <div id="fe-co-logo">
                <img src="/images/female-profile.png"></img>
              </div>
              <div id="fe-co-content">
                <p id="fe-co-h">
                  <u>
                    <b>STUDENT COORDINATOR</b>
                  </u>
                </p>
                <p id="fe-co-n">N. PRAMEELA</p>

              </div>
            </div>
          </div>
        </div>

        <div className="dance">
          <div id="dance-e">
            <div id="cul">
              <div id="cul-logo">
                <img src="/images/FBL.jpg"></img>
              </div>
              <div id="cul-content">
                <p id="e-head">Cultural Night</p>
                <br />
                <p id="e-matter">
                  Cultural events provide an opportunity for people to come
                  together and learn more about the traditions, customs, and
                  beliefs of a particular culture.It is conducted on{" "}
                  <b style={{ color: "#FF9900" }}>17-03-2023</b>
                </p>
              </div>
            </div>
            <div id="fb">
              <div id="fb-content">
                <p id="e-head" style={{ textAlign: "right" }}>
                  Flash Mob
                </p>
                <br />
                <p id="e-matter">
                  A flashmob is a type of performance where a group of
                  people suddenly come together in a public space to perform a
                  coordinated action, such as a dance or a musical
                  performance.It is conducted on{" "}
                  <b style={{ color: "#FF9900" }}>18-03-2023</b>
                </p>
              </div>
              <div id="fb-logo">
                <img src="/images/CULL.jpg"></img>
              </div>
            </div>
          </div>
        </div>
        <div id="g-reg">
          <p id="g-reg-head">GENERAL REGISTRATION</p>
          <hr id="line4"></hr>
          <p id="g-reg-content">
            <div
              ref={target2}
              className={`animate__animated ${
                isVisible2 ? "animate__zoomIn" : ""
              }`}
              onAnimationEnd={onAnimationEnd}
            >
              This General Registration gives the allowance to participate and register in any
              WORKSHOP or EVENT.
              <br />
              This Registration Fee acts as an entry fee to the fest.
              <br />
              <br />
              <p>
                <b style={{ color: "#A4C636" }}>
                  GENERAL REGISTRATION FEE (per person including lunch) :
                </b>{" "}
                <b style={{ color: "whitesmoke", fontWeight: "500" }}>200/-</b>
              </p>
              <br />
              <p>
                <b style={{ color: "#A4C636" }}>PAY USING MOBILE NUMBER :</b>
                <b style={{ color: "whitesmoke", fontWeight: "500" }}>
                  9985228800
                </b>
              </p>
              <br />
              <p>
                <b style={{ color: "#A4C636" }}>PAY WITH QR CODE :</b>
              </p>
              <div className="qr-div">
                <img src="/images/QRCode_200Rs.jpg" className="qr"></img>
              </div>
              <div id="reg-1">
                <a
                  id="reg-btn-1"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdX-5eQ-vvKMrq8rOoI28vAnCMKo1WLdbGuBUXzNkW3Fnr23w/viewform?usp=sf_link"
                >
                  Register
                </a>
              </div>
              <br />
              {/* <p><u style={{color:"#FF9900"}}>WITHOUT ACCOMODATION</u></p>
        <p>Single day Special lunch fee + Entry fee : <b style={{color:"white"}}>200 Rs</b></p>
        <p>Two days Special lunch fee + Entry fee : <b style={{color:"white"}}>400 Rs</b></p><br/>
        <p><u style={{color:"#FF9900"}}>WITH ACCOMODATION</u></p>
        <p>Single day fee  : <b style={{color:"white"}}>200 Rs</b></p>
        <p>Two days fee : <b style={{color:"white"}}>400 Rs</b></p><br/> */}
            </div>
          </p>
        </div>
        <p style={{color:"white"}} className="clg">To know more about Information Technology branch in JNTU-GV <a style={{textDecoration:"none" ,color:"red"}} href="https://jntukucev.ac.in/department/information-technology/hods-desk/">Click here</a>.</p>
      </div>
      <FOOTER></FOOTER>
    </div>
  );
}

export default Home;
