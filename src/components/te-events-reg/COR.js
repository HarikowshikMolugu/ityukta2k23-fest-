import React from 'react'
import FOOTER from '../FOOTER'
const COR = () => {
  return (
    <div>
    <div id='r-total'>
      <div id='r-main'>
        
        <p id='r-head'>About Event</p><br/>
       
        <p id='r-content'>A Codathon competition is a programming contest that challenges participants to solve coding problems in a limited amount of time. The problems can  range from simple coding exercises to complex algorithmic challenges, and may require participants to use various programming languages, tools, and frameworks.
        </p>
        <div id='r-coordinator'>
         <table>
          <tr>
            <td id='co-name'> Student Coordinator name</td>
            <td>Contact no</td>
          </tr>
          <tr>
            <td id='co-name'>K.ADITYA </td>
            <td><a href='tel:8555929176'>8555929176</a></td>
          </tr>
          <tr>
            <td id='co-name'>K.JAYANTH</td>
            <td><a href='tel:9154055070'>9154055070</a></td>
          </tr>
         </table><br/>
         <div id="r-sec">
         <div id='r-sec1'>
         
         <p><b style={{color:"#A4C636"}}>Venue :</b> <b id="r-venue"style={{color:"whitesmoke",fontWeight:"500"}}>AB-II BLOCK- 2ND FLOOR- COMPUTER LAB</b></p><br/>
         <p><b style={{color:"#A4C636"}}>Event Registration Fee (per person) :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>100/-</b></p><br/>
         <p><b style={{color:"#A4C636"}}>Winner gets :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>APPRECIATION CERTIFICATE + Exciting Prize</b></p><br/>
         <p><b style={{color:"#A4C636"}}>Others get :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>PARTICIPATION CERTIFICATE</b></p><br/>
         </div>
         <div className='qr-div' >
         <p><b style={{color:"#A4C636"}}>PAY USING UPI ID :</b><b style={{color:"whitesmoke",fontWeight:"500"}}>9985228800@boi</b></p><br/>
         <p><b style={{color:"#A4C636"}}>PAY WITH QR CODE :</b></p><br/>
          <img src='/images/QRCode_100Rs.jpg' className='qr'></img></div>
         </div>
         <div id='reg'><a id='reg-btn' href='https://docs.google.com/forms/d/e/1FAIpQLSfwFJ-mvJNqY8SltKhcACY5bKbw3beWhPF82pKVtOkk0WRJpg/viewform?usp=sf_link'>Register</a></div>
        </div>
        <div id='poster'>
        <img src="/images/CORL.jpg"></img>
        </div>
      </div>
      
    </div>
    <FOOTER></FOOTER>
    </div>
  )
}

export default COR
