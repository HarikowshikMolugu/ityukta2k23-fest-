import React from 'react'
import FOOTER from '../FOOTER'
const RTR = () => {
  return (
    <div>
    <div id='r-total'>
    <div id='r-main'>
      
      <p id='r-head'>About Event</p><br/>
  
      <p id='r-content'>A Rapid Typing competition is a typing competition where participants compete to see who can type the fastest and most accurately. The competition typically involves a series of timed typing tests, where participants are given a passage to type, and their typing speed and accuracy are measured.
      </p>
      <div id='r-coordinator'>
       <table>
        <tr>
          <td id='co-name'> Student Coordinator name</td>
          <td>Contact no</td>
        </tr>
        <tr>
          <td id='co-name'>M.JAGAN</td>
          <td><a href='tel:7729950505'>7729950505</a></td>
        </tr>
        <tr>
          <td id='co-name'>B.YATEESHA</td>
          <td><a href='tel:8106105986'>8106105986</a></td>
        </tr>
       </table><br/>
       
         <p><b style={{color:"#A4C636"}}>Venue</b> : <b id="r-venue"style={{color:"whitesmoke",fontWeight:"500"}}>AB-II BLOCK</b></p><br/>
         
         <p><b style={{color:"#A4C636"}}>Event Registration Fee (per person) :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>70/-</b></p><br/>
         <p><b style={{color:"#A4C636"}}>Prize money :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>200 Rs + APPRECIATION CERTIFICATE</b></p><br/>
         <p><b style={{color:"#A4C636"}}>PAY USING MOBILE NUMBER :</b><b style={{color:"whitesmoke",fontWeight:"500"}}>9985228800</b></p><br/>
         <p><b style={{color:"#A4C636"}}>PAY WITH QR CODE :</b></p>
         <div className='qr-div'><img src='/images/QRCode_70Rs.jpg' className='qr'></img></div>
         <div id='reg'><a id='reg-btn' href='https://docs.google.com/forms/d/e/1FAIpQLSdYlDVQiL-qL_tm88X85sRmDDOPjsYo0hD4CT8qqeh6vMz4Dg/viewform?usp=sf_link'>Register</a></div>
      </div>
      <div id='poster'>
        <img src="/images/RTRL.png"></img>
        </div>
    </div>
  </div>
  <FOOTER></FOOTER>
  </div>
  )
}

export default RTR