import React from 'react'
// import "./main.css"
import FOOTER from './FOOTER'
const Accomadation = () => {
    return (
        <div>
        <div id='r-total'>
        <div id='r-main'>
          
          <p id='r-head'>Accommodation Available</p><br/>
         
          <p id='r-content'>Accommodation refers to a place where a person or group of people can stay temporarily or permanently.We are providing good in facilities for the candidates who registered for accommodation for ITYUKTA 2K23 fest.
    
          </p>
          <div id='r-coordinator'>
           <table>
            <tr>
              <td id='co-name'> Student Coordinator name</td>
              <td>Contact no</td>
            </tr>
            <tr>
              <td id='co-name'>R.DILLESWARA RAO</td>
              <td><a href='tel:6301132862'>6301132862</a></td>
            </tr>
            <tr>
              <td id='co-name'>G.SUSHEEL</td>
              <td><a href='tel:8555925318'>8555925318</a></td>
            </tr>
            <tr>
              <td id='co-name'>M.JAGAN</td>
              <td><a href='tel:7729950505'>7729950505</a></td>
            </tr>
           </table><br/>
          
            
             <p><b style={{color:"#A4C636"}}>One day Accommodation fee (per person) :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>250/-</b></p><br/>
             <p><b style={{color:"#A4C636"}}>Two days Accommodation fee (per person) :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>500/-</b></p><br/>
             <p><b style={{color:"#A4C636"}}>PAY USING MOBILE NUMBER :</b><b style={{color:"whitesmoke",fontWeight:"500"}}>6301132862</b></p><br/>
             <p><b style={{color:"#A4C636"}}>PAY WITH QR CODE :</b></p>
             <div className='qr-div'><img src="/images/QRCodeA.jpg" className='qr'></img></div>
             
             <div id='reg'><a id='reg-btn' href='https://docs.google.com/forms/d/e/1FAIpQLScoeh5mgXOuGA8vAMZtBwzVUqGTJRxA8aqbk3Ojno_HgOqudw/viewform?usp=sf_link'>Register</a></div>
          </div>
          
        </div>
       </div>
       <FOOTER></FOOTER>
       </div>
      )
}

export default Accomadation