import React from 'react'
import FOOTER from '../FOOTER'
const THR = () => {
  return (
    <div>
    <div id='r-total'>
    <div id='r-main'>
      
      <p id='r-head'>About Event</p><br/>
     
      <p id='r-content'>Treasure Hunt is a game or activity in which participants solve clues and riddles to find hidden objects or locations. The objective of the game is to uncover a hidden treasure.

      </p>
      <div id='r-coordinator'>
       <table>
        <tr>
          <td id='co-name'> Student Coordinator name</td>
          <td>Contact no</td>
        </tr>
        <tr>
          <td id='co-name'>M.PRADEEP</td>
          <td><a href='tel:8008191153'>8008191153</a></td>
        </tr>
        <tr>
          <td id='co-name'>P.KRISHNA PRIYA</td>
          <td><a href='tel:9573711360'>9573711360</a></td>
        </tr>
       </table><br/>
      
         <p><b style={{color:"#A4C636"}}>Venue :</b>  <b id="r-venue"style={{color:"whitesmoke",fontWeight:"500"}}>AB-II BLOCK</b></p><br/>
         <p><b style={{color:"#A4C636"}}>Event Registration Fee (per Batch with four members) :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>200/-</b></p><br/>
         <p><b style={{color:"#A4C636"}}>Prize money :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>500 Rs</b></p><br/>
         <p><b style={{color:"#A4C636"}}>PAY USING MOBILE NUMBER :</b><b style={{color:"whitesmoke",fontWeight:"500"}}>9985228800</b></p><br/>
         <p><b style={{color:"#A4C636"}}>PAY WITH QR CODE :</b></p>
         <div className='qr-div'><img src='/images/QRCode_200Rs.jpg' className='qr'></img></div>
         
         <div id='reg'><a id='reg-btn' href='https://docs.google.com/forms/d/e/1FAIpQLSdYlDVQiL-qL_tm88X85sRmDDOPjsYo0hD4CT8qqeh6vMz4Dg/viewform?usp=sf_link'>Register</a></div>
      </div>
      <div id='poster'>
        <img src="/images/THRL.png"></img>
        </div>
    </div>
   </div>
   <FOOTER></FOOTER>
   </div>
  )
}

export default THR