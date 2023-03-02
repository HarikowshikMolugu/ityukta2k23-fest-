import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Workshop from "./components/Workshop";
import Technical from "./components/Technical";
import Nontechnical from "./components/Nontechnical";
import Meetus from "./components/Meetus";
import WDR from "./components/te-events-reg/WDR";
import CDR from "./components/te-events-reg/CDR";
import PER from "./components/te-events-reg/PER";
import TQR from "./components/te-events-reg/TQR";
import COR from "./components/te-events-reg/COR";
import PPTR from "./components/te-events-reg/PPTR";
import SLR from "./components/nonte-events-reg/SLR";
import MMR from "./components/nonte-events-reg/MMR";
import THR from "./components/nonte-events-reg/THR";
import RTR from "./components/nonte-events-reg/RTR";
import RCR from "./components/nonte-events-reg/RCR";
import SSR from "./components/nonte-events-reg/SSR";
import DV from "./components/workshops/dv";
import WBD from "./components/workshops/wbd";
import Pagenotfound from "./components/Pagenotfound";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* TECHNICAL EVENTS */}
        <Route path="/cdr" element={<CDR />} />
        <Route path="/wdr" element={<WDR />} />
        <Route path="/per" element={<PER />} />
        <Route path="/tqr" element={<TQR />} />
        <Route path="/cor" element={<COR />} />
        <Route path="/pptr" element={<PPTR />} />
        {/* NON TECHNICAL EVENTS */}
        <Route path="/slr" element={<SLR />} />
        <Route path="/mmr" element={<MMR />} />
        <Route path="/thr" element={<THR />} />
        <Route path="/rtr" element={<RTR />} />
        <Route path="/rcr" element={<RCR />} />
        <Route path="/ssr" element={<SSR />} />
        {/* WORKSHOPS */}
        <Route path="/dv" element={<DV />} />
        <Route path="/wbd" element={<WBD />} />

        {/* NAVBAR */}

        <Route path="/Workshop" element={<Workshop />} />
        <Route path="/Technical" element={<Technical />} />
        <Route path="/Nontechnical" element={<Nontechnical />} />
        <Route path="/Meetus" element={<Meetus />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </div>
  );
}

export default App;
