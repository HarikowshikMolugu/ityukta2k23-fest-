import React from 'react'
import FOOTER from '../FOOTER'
const MMR = () => {
  return (
    <div>
    <div id='r-total'>
      <div id='r-main'>
        
        <p id='r-head'>About Event</p><br/>
       
        <p id='r-content'>Movie Minds is a guessing game in which players try to identify the title of a movie based on clues provided by their teammates.
        </p>
        <div id='r-coordinator'>
         <table>
          <tr>
            <td id='co-name'> Student Coordinator name</td>
            <td>Contact no</td>
          </tr>
          <tr>
            <td id='co-name'>M.ANURAG</td>
            <td><a href='tel:9121761764'>9121761764</a></td>
          </tr>
          <tr>
            <td id='co-name'>A.VENKATA HARI PRAGNA</td>
            <td><a href='tel:7396670451'>7396670451</a></td>
          </tr>
         </table><br/>
         
         <p><b style={{color:"#A4C636"}}>Venue :</b>  <b id="r-venue"style={{color:"whitesmoke",fontWeight:"500"}}>AB-II BLOCK</b></p><br/>
         <p><b style={{color:"#A4C636"}}>Event Registration Fee (per Batch with two members) :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>100 Rs</b></p><br/>
         <p><b style={{color:"#A4C636"}}>Prize money :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>MOVIE TICKETS</b></p><br/>
         <p><b style={{color:"#A4C636"}}>PAY USING MOBILE NUMBER :</b><b style={{color:"whitesmoke",fontWeight:"500"}}>9985228800</b></p><br/>
         <p><b style={{color:"#A4C636"}}>PAY WITH QR CODE :</b></p>
         <div className='qr-div'><img src='/images/QRCode_100Rs.jpg' className='qr'></img></div>
         <div id='reg'><a id='reg-btn' href='https://docs.google.com/forms/d/e/1FAIpQLSdYlDVQiL-qL_tm88X85sRmDDOPjsYo0hD4CT8qqeh6vMz4Dg/viewform?usp=sf_link'>Register</a></div>
        </div>
        <div id='poster'>
        <img src="/images/MMRL.png"></img>
        </div>
      </div>
    </div>
    <FOOTER></FOOTER>
    </div>
  )
}

export default MMR