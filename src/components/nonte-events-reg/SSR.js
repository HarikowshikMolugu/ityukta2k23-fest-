import React from 'react'
import FOOTER from '../FOOTER'
const SSR = () => {
  return (
    <div>
    <div id='r-total'>
    <div id='r-main'>
      
      <p id='r-head'>About Event</p><br/>
    
      <p id='r-content'>This game consists of 2 rounds:<br/>
Round1:clip will be shown and individual is to write few lines on it in 2 minutes
Round2:qualifying participants will play this round.<br/>
short video clips will be shown and based on that questions will be asked.

      </p>
      <div id='r-coordinator'>
       <table>
        <tr>
          <td id='co-name'> Student Coordinator name</td>
          <td>Contact no</td>
        </tr>
        <tr>
          <td id='co-name'>P.SRIRAM</td>
          <td><a href='tel:9177184380'>9177184380</a></td>
        </tr>
        <tr>
          <td id='co-name'>S.SHARMILA</td>
          <td></td>
        </tr>
       </table><br/>
       
         <p><b style={{color:"#A4C636"}}>Venue</b> : <b id="r-venue"style={{color:"whitesmoke",fontWeight:"500"}}>AB-II BLOCK</b></p><br/>
         <p><b style={{color:"#A4C636"}}>Event Fee (per person) :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>50/-</b></p><br/>
         <p><b style={{color:"#A4C636"}}>Prize money :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>200/-</b></p><br/>
         <p><b style={{color:"#A4C636"}}>PAY USING UPI ID :</b><b style={{color:"whitesmoke",fontWeight:"500"}}>9985228800@boi</b></p><br/>
         <p><b style={{color:"#A4C636"}}>PAY WITH QR CODE :</b></p>
         <div className='qr-div'><img src='/images/QRCode_50Rs.jpg' className='qr'></img></div>
         <div id='reg'><a id='reg-btn' href='https://docs.google.com/forms/d/e/1FAIpQLSdYlDVQiL-qL_tm88X85sRmDDOPjsYo0hD4CT8qqeh6vMz4Dg/viewform?usp=sf_link'>Register</a></div>
      </div>
      <div id='poster'>
        <img src="/images/SSRL.png"></img>
        </div>
    </div>
  </div>
  <FOOTER></FOOTER>
  </div>
  )
}

export default SSR
