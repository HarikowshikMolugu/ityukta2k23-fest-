import React from "react";
import FOOTER from "../FOOTER";
function wbd(){
    return(
      <div>
        <div id='r-total'>
        <div id='r-main'>
          
          <p id='r-head'>About Workshop</p><br/>
  
          <p id='r-content'>This 2-day Interactive workshop aims to Inspire Engineering students to explore Emerging Technologies and creation of Social Innovations that have the potential to make a positive impact on the world.

Through team-based interactions, participants will discover their teamwork, communication, problem-solving, and innovation skills while discussing about technologies such as AI, IoT, AR/VR etc., 

By the end of the workshop, participants will have gained knowledge about Emerging Technologies, acquire practical skills that will be useful to crack campus interviews, and tune themselves towards better careers.
          </p>
          <div id='r-coordinator'>
           <table>
            <tr>
              <td id='co-name'> Student Coordinator name</td>
              <td>Contact no</td>
            </tr>
            <tr>
              <td id='co-name'>B.YASWANTH </td>
              <td><a href='tel:9100546341'>9100546341</a></td>
            </tr>
            <tr>
              <td id='co-name'>T.SULOCHANA</td>
              <td></td>
            </tr>
           
           </table><br/>
           <p><b style={{color:"#A4C636"}}>Event Date :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>17th and 18th</b></p><br/>
           <p><b style={{color:"#A4C636"}}>Event Time :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>Full Day</b></p><br/>
           
           <p><b style={{color:"#A4C636"}}>Workshop Fee (per person) :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>200/-</b></p><br/>
           <p><b style={{color:"#A4C636"}}>PAY USING UPI ID :</b><b style={{color:"whitesmoke",fontWeight:"500"}}>9985228800@boi</b></p><br/>
           <p><b style={{color:"#A4C636"}}>PAY WITH QR CODE :</b></p>
           <div className='qr-div'><img src='/images/QRCode_200Rs.jpg' className='qr'></img></div>
           <p><b style={{color:"red"}}>NOTE* :</b>  <b style={{color:"whitesmoke",fontWeight:"500"}}>For better experience carry your own laptops</b></p><br/>
           <div id='reg'><a id='reg-btn' href='https://docs.google.com/forms/d/e/1FAIpQLSeOxSPdLy6UpDJd5Hh8D94ynBFTVlHfyojPdz_fh1feG3qQTw/viewform?usp=sf_link'>Register</a></div>
          </div>
          <div id='poster'>
        <img src="/images/WOR3RL.png"></img>
        </div>
        </div>


      </div>
      <FOOTER></FOOTER>
      </div>
    )
}

export default wbd;
