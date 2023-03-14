import React from "react";
import FOOTER from "../FOOTER";
function wbd(){
    return(
      <div>
        <div id='r-total'>
        <div id='r-main'>
          
          <p id='r-head'>About Workshop</p><br/>
  
          <p id='r-content'>Full Stack development typically begins with a planning phase where the goals and requirements of the website or web application are defined. This is followed by a design phase where the look and feel of the website is created. The programming phase involves the actual creation of the website using a combination of languages such as HTML, CSS, and JavaScript. Database management is also an important aspect of web development, as it involves the storage and retrieval of data used by the website or application.<br/>

Website maintenance is an ongoing task that involves updating the website to ensure it remains up-to-date and functioning properly. This may include updating content, fixing bugs, and implementing security measures to protect against cyber threats.<br/>

Web development can be done by individuals or teams of developers, and can range from simple static websites to complex web applications that require advanced programming and database management skills.
          </p>
          <div id='r-coordinator'>
           <table>
            <tr>
              <td id='co-name'> Student Coordinator name</td>
              <td>Contact no</td>
            </tr>
            <tr>
              <td id='co-name'>T.MUKUND</td>
              <td><a href='tel:8523030292'>8523030292</a></td>
            </tr>
            <tr>
              <td id='co-name'>P.DEEKSHITHA</td>
              <td></td>
            </tr>
           </table><br/>
           <p><b style={{color:"#A4C636"}}>Event Date :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>17th and 18th</b></p><br/>
           <p><b style={{color:"#A4C636"}}>Event Time :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>Full Day</b></p><br/>
           
           <p><b style={{color:"#A4C636"}}>Workshop Fee (per person) :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>600/-</b></p><br/>
           <p><b style={{color:"#A4C636"}}>PAY USING MOBILE NUMBER :</b><b style={{color:"whitesmoke",fontWeight:"500"}}>9985228800</b></p><br/>
           <p><b style={{color:"#A4C636"}}>PAY WITH QR CODE :</b></p>
           <div className='qr-div'><img src='/images/QRCode_600Rs.jpg' className='qr'></img></div>
          <p><b style={{color:"red"}}>NOTE* :</b><br/><br/>  <b style={{color:"whitesmoke",fontWeight:"500"}}>1.Top 15 participants from the Workshop will be provided with a 2 months free summer internship.<br/><br/>2.For better experience carry your own laptops.</b></p><br/>
           <div id='reg'><a id='reg-btn' href='https://docs.google.com/forms/d/e/1FAIpQLSeOxSPdLy6UpDJd5Hh8D94ynBFTVlHfyojPdz_fh1feG3qQTw/viewform?usp=sf_link'>Register</a></div>
          </div>
          <div id='poster'>
        <img src="/images/WBDRL.jpg"></img>
        </div>
        </div>


      </div>
      <FOOTER></FOOTER>
      </div>
    )
}

export default wbd;
