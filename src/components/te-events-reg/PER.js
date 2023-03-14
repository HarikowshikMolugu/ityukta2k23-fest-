import React from 'react'
import FOOTER from '../FOOTER'
const PER = () => {

  return (
    <div>
    <div id='r-total'>
      <div id='r-main'>
        
        <p id='r-head'>About Event</p><br></br>
 
        <p id='r-content'>Project Expo competition is an event where students showcase their projects in a competition format. it provides a platform for students to present their research projects, innovative ideas, or practical solutions to real-world problems.
        </p>
        <div id='r-coordinator'>
         <table>
          <tr>
            <td id='co-name'> Student Coordinator name</td>
            <td>Contact no</td>
          </tr>
          <tr>
            <td id='co-name'>P.PRAVEEN </td>
            <td><a href='tel:7993724737'>7993724737</a></td>
          </tr>
          <tr>
            <td id='co-name'>B.GAYATRI</td>
            <td></td>
          </tr>
         </table><br/>
         <div id="r-sec">
         <div id='r-sec1'>
         
         <p><b style={{color:"#A4C636"}}>Event Time</b> : <b style={{color:"whitesmoke",fontWeight:"500"}}></b></p><br/>
         <p><b style={{color:"#A4C636"}}>Venue</b> : <b id="r-venue"style={{color:"whitesmoke",fontWeight:"500"}}>AB-II BLOCK- 2ND FLOOR- COMPUTER LAB</b></p><br/>
         <p><b style={{color:"#A4C636"}}>Event Registration Fee (per person) :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>200/-</b></p><br/>
         <p><b style={{color:"#A4C636"}}>Winner gets :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>APPRECIATION CERTIFICATE + Exciting prize</b></p><br/>
         
         <p><b style={{color:"#A4C636"}}>Others gets :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>PARTICIPATION CERTIFICATE</b></p><br/>
         
         </div>
         <div className='qr-div' >
         <p><b style={{color:"#A4C636"}}>PAY USING MOBILE NUMBER :</b><b style={{color:"whitesmoke",fontWeight:"500"}}>9985228800</b></p><br/>
         <p><b style={{color:"#A4C636"}}>PAY WITH QR CODE :</b></p><br/>
          <img src='/images/QRCode_200Rs.jpg' className='qr'></img></div>
         </div>
         <div id='reg'><a id='reg-btn' href='https://docs.google.com/forms/d/e/1FAIpQLSfwFJ-mvJNqY8SltKhcACY5bKbw3beWhPF82pKVtOkk0WRJpg/viewform?usp=sf_link'>Register</a></div>
        </div>
        <div id='poster'>
        <img src="/images/PERL.jpg"></img>
        </div>
      </div>
    </div>
    <FOOTER></FOOTER>
    </div>
  )
}

export default PER
