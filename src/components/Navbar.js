import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./main.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="Nav">
      <img className="main-icon" src="/images/mainlogo.png" />
      <p id="idol">
        ITYUKTA 2K<b id="idol-1">23</b>
      </p>
      <nav ref={navRef}>
        <a href="*" style={{ color: "#00A1F1" }}>
          Home
        </a>
        <div className="dropdown">
          <a className="dropbtn" href="/Workshop">
            Workshops{" "}
          </a>
          <div className="dropdown-content" style={{ marginTop: "100px" }}>
            <a href="/dv" id="dd">
              Data Analytics and Visualization
            </a>
            <a href="/wbd">Web Development</a>
          </div>
        </div>
        <div className="dropdown">
          <a className="dropbtn" href="/Technical">
            Technical Events{" "}
          </a>
          <div className="dropdown-content" style={{ marginTop: "290px" }}>
            <a href="/cdr" id="dd">
              Code Debugging
            </a>
            <a href="/wdr" id="dd">
              Web Design
            </a>
            <a href="/per" id="dd">
              Project Expo
            </a>
            <a href="/tqr" id="dd">
              Tech Quiz
            </a>
            <a href="/cor" id="dd">
              CodeAthon
            </a>
            <a href="/pptr">Power point presentation</a>
          </div>
        </div>
        <div className="dropdown">
          <a className="dropbtn" href="/NonTechnical">
            NonTechnical Events{" "}
          </a>
          <div className="dropdown-content" style={{ marginTop: "290px" }}>
            <a href="/slr" id="dd">
              Snakes and Ladders
            </a>
            <a href="/mmr" id="dd">
              Movie Minds
            </a>
            <a href="/thr" id="dd">
              Treasure Hunt
            </a>
            <a href="/rtr" id="dd">
              Rapid Typing
            </a>
            <a href="/rcr" id="dd">
              Rubik's Cube
            </a>
            <a href="/ssr">Sight on Sight</a>
          </div>
        </div>
        <a href="/Meetus">Contactus</a>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
        <a href="https://instagram.com/ityukta__2k23?igshid=YmMyMTA2M2Y=">
          <img className="social-icon" src="/images/insta2.svg" />
        </a>
        <a href="mailto:ityukta2k23@gmail.com">
          <img className="social-icon" src="/images/gmail2.svg" />
        </a>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
