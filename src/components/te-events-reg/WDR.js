import React from 'react'
import FOOTER from '../FOOTER';

const WDR = () => {
  return (
    <div>
    <div id='r-total'>
      <div id='r-main'>
        
        <p id='r-head'>About Event</p><br/>

        <p id='r-content'>A web design competition is an event or contest where web designers and developers compete against each other by creating websites or web applications based on a given criteria or set of requiements.
        </p>
        <div id='r-coordinator'>
         <table>
          <tr>
            <td id='co-name'> Student Coordinator name</td>
            <td>Contact no</td>
          </tr>
          <tr>
            <td id='co-name'>B.SUMASRI </td>
            <td><a href='tel:8639466717'>8639466717</a></td>
          </tr>
          <tr>
            <td id='co-name'>P.INDHUMATI</td>
            <td><a href='tel:94414513850'>9441451385</a></td>
          </tr>
         </table><br/>
         <div id="r-sec">
         <div id='r-sec1'>

         
         <p><b style={{color:"#A4C636"}}>Venue</b> : <b id="r-venue"style={{color:"whitesmoke",fontWeight:"500"}}>AB-II BLOCK- 2ND FLOOR- COMPUTER LAB</b></p><br/>
         <p><b style={{color:"#A4C636"}}>Event Registration Fee (per person) :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>70/-</b></p><br/>
         <p><b style={{color:"#A4C636"}}>Winner gets :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>APPRECIATION CERTIFICATE + 200/- Prize money</b></p><br/>
         <p><b style={{color:"#A4C636"}}>Runner gets :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>APPRECIATION CERTIFICATE + 100/- Prize money</b></p><br/>
         <p><b style={{color:"#A4C636"}}>Others gets :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>PARTICIPATION CERTIFICATE</b></p><br/>
         </div>
         <div className='qr-div' >
         <p><b style={{color:"#A4C636"}}>PAY USING MOBILE NUMBER :</b><b style={{color:"whitesmoke",fontWeight:"500"}}>9985228800</b></p><br/>
         <p><b style={{color:"#A4C636"}}>PAY WITH QR CODE :</b></p><br/>
          <img src='/images/QRCode_70Rs.jpg' className='qr'></img></div>
         </div>
         <div id='reg'><a id='reg-btn' href='https://docs.google.com/forms/d/e/1FAIpQLSfwFJ-mvJNqY8SltKhcACY5bKbw3beWhPF82pKVtOkk0WRJpg/viewform?usp=sf_link'>Register</a></div>
        </div>
        <div id='poster'>
        <img src="/images/WDRL.jpg"></img>
        </div>
      </div>
    </div>
    <FOOTER></FOOTER>
    </div>
  )
}

export default WDR;