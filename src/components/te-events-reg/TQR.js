import React from 'react'
import FOOTER from '../FOOTER'
const TQR = () => {
  return (
    <div>
    <div id='r-total'>
      <div id='r-main'>
        
        <p id='r-head'>About Event</p><br/>

        <p id='r-content'>A Tech Quiz competition is a competitive event that tests participants' knowledge of various technology-related topics. It typically involves a series of questions that cover a range of areas such as computer science programming languages, cybersecurity etc
        </p>
        <div id='r-coordinator'>
         <table>
          <tr>
            <td id='co-name'> Student Coordinator name</td>
            <td>Contact no</td>
          </tr>
          <tr>
            <td id='co-name'>G.SUSHEEL </td>
            <td><a href='tel:8555925318'>8555925318</a></td>
          </tr>
          <tr>
            <td id='co-name'>G.RADHA NAGA DEVI</td>
            <td><a href='tel:6309142530'>6309142530</a></td>
          </tr>
         </table><br/>
         <div id="r-sec">
         <div id='r-sec1'>
         
         
         <p><b style={{color:"#A4C636"}}>Venue</b> : <b id="r-venue"style={{color:"whitesmoke",fontWeight:"500"}}>AB-II BLOCK- 2ND FLOOR- COMPUTER LAB</b></p><br/>
         <p><b style={{color:"#A4C636"}}>Event Registration Fee (per batch of 2 members) :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>100/-</b></p><br/>
         <p><b style={{color:"#A4C636"}}>Event Registration Fee (per batch of 3 members) :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>150/-</b></p><br/>
         <p><b style={{color:"#A4C636"}}>Event Registration Fee (per batch of 4 members) :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>200/-</b></p><br/>
         <p><b style={{color:"#A4C636"}}>Winner gets :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>APPRECIATION CERTIFICATE</b></p><br/>
         <p><b style={{color:"#A4C636"}}>Others get :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>PARTICIPATION CERTIFICATE</b></p><br/>
         </div>
         <div className='qr-div' >
         <p><b style={{color:"#A4C636"}}>PAY USING MOBILE NUMBER :</b><b style={{color:"whitesmoke",fontWeight:"500"}}>9985228800</b></p><br/>
         <p><b style={{color:"#A4C636"}}>PAY WITH QR CODE :</b></p><br/>
          <img src='/images/QRCode.jpg' className='qr'></img></div>
         </div>
         <div id='reg'><a id='reg-btn' href='https://docs.google.com/forms/d/e/1FAIpQLSfwFJ-mvJNqY8SltKhcACY5bKbw3beWhPF82pKVtOkk0WRJpg/viewform?usp=sf_link'>Register</a></div>
        </div>
        <div id='poster'>
        <img src="/images/TQRL.png"></img>
        </div>
      </div>
    </div>
    <FOOTER></FOOTER>
    </div>
  )
}

export default TQR