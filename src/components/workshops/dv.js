import React from "react";
import FOOTER from "../FOOTER";
function dv(){
    return(
      <div>
        <div id='r-total'>
      <div id='r-main'>
        
        <p id='r-head'>About Workshop</p><br/>

        <p id='r-content'>Data analytics is the process of examining, processing, and interpreting data in order to derive insights and make informed decisions. It involves the use of various statistical and computational techniques to analyze data and identify patterns, trends, and relationships.<br/>

Visualization, on the other hand, is the graphical representation of data and information. It is a powerful tool for communicating complex ideas and insights in an easy-to-understand way. Data visualization can help users to identify patterns, trends, and outliers in data, and can also facilitate the identification of relationships between different variables.<br/>

Together, data analytics and visualization can help organizations and individuals make data-driven decisions based on insights derived from data. By using data analytics to analyze data and identify trends, and then visualizing that data in a way that is easily understandable, data analytics and visualization can help businesses and individuals to identify areas of opportunity and make informed decisions that are grounded in data.</p>
        <div id='r-coordinator'>
         <table>
          <tr>
            <td id='co-name'> Student Coordinator name</td>
            <td>Contact no</td>
          </tr>
          <tr>
            <td id='co-name'>G.RAHUL </td>
            <td><a href='tel:8331016250'>8331016250</a></td>
          </tr>
          <tr>
            <td id='co-name'>M.AMRUTHA</td>
            <td></td>
          </tr>
          <tr>
            <td id='co-name'>B.KAVYA SRI</td>
            <td></td>
          </tr>
         </table><br/>
         <p><b style={{color:"#A4C636"}}>Event Date :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>17th and 18th</b></p><br/>
         <p><b style={{color:"#A4C636"}}>Event Time :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>Full Day</b></p><br/>
         
         <p><b style={{color:"#A4C636"}}>Workshop Fee (per person) :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>800/-</b></p><br/>
         
         <p><b style={{color:"#A4C636"}}>PAY USING MOBILE NUMBER :</b><b style={{color:"whitesmoke",fontWeight:"500"}}>9985228800</b></p><br/>
         <p><b style={{color:"#A4C636"}}>PAY WITH QR CODE :</b></p>
         <div className='qr-div'><img src='/images/QRCode_800Rs.jpg' className='qr'></img></div>
         <p><b style={{color:"red"}}>NOTE* :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>For better experience carry your own laptops.</b></p><br/>
         <div id='reg'><a id='reg-btn' href='https://docs.google.com/forms/d/e/1FAIpQLSeOxSPdLy6UpDJd5Hh8D94ynBFTVlHfyojPdz_fh1feG3qQTw/viewform?usp=sf_link'>Register</a></div>
         
        </div>
        <div id='poster'>
        <img src="/images/DVRL.jpg"></img>
        </div>
      </div>
    </div>
    <FOOTER></FOOTER>
    </div>
    )
}

export default dv;
