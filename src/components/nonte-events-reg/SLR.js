import React from 'react'
import FOOTER from '../FOOTER'
const SLR = () => {
  return (
    <div>
    <div id='r-total'>
    <div id='r-main'>
      
      <p id='r-head'>About Event</p><br/>
     
      <p id='r-content'>Snakes and Ladders is a classic board game that is played by rolling a dice and moving game pieces along a board with a series of numbered squares. landing on a snake means they have to go back to a previous square while landing on a ladder means go further on the board.
      </p>
      <div id='r-coordinator'>
       <table>
        <tr>
          <td id='co-name'> Student Coordinator name</td>
          <td>Contact no</td>
        </tr>
        <tr>
          <td id='co-name'>HANEESH.B</td>
          <td><a href='tel:9133531683'>9133531683</a></td>
        </tr>
        <tr>
          <td id='co-name'>D.VISHNU PRIYA</td>
          <td></td>
        </tr>
       </table><br/>
       
         <p><b style={{color:"#A4C636"}}>Venue :</b>  <b id="r-venue"style={{color:"whitesmoke",fontWeight:"500"}}>AB-II BLOCK</b></p><br/>
         <p><b style={{color:"#A4C636"}}>Event Registration Fee (per person) :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>50/-</b></p><br/>
         <p><b style={{color:"#A4C636"}}>Prize money :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>200 /-</b></p><br/>
         <p><b style={{color:"#A4C636"}}>PAY USING MOBILE NUMBER :</b><b style={{color:"whitesmoke",fontWeight:"500"}}>9985228800</b></p><br/>
         <p><b style={{color:"#A4C636"}}>PAY WITH QR CODE :</b></p>
         <div className='qr-div'><img src='/images/QRCode_50Rs.jpg' className='qr'></img></div>
         <div id='reg'><a id='reg-btn' href='https://docs.google.com/forms/d/e/1FAIpQLSdYlDVQiL-qL_tm88X85sRmDDOPjsYo0hD4CT8qqeh6vMz4Dg/viewform?usp=sf_link'>Register</a></div>
      </div>
      <div id='poster'>
        <img src="/images/SLRL.jpg"></img>
        </div>
    </div>
  </div>
  <FOOTER></FOOTER>
  </div>
  )
}

export default SLR
