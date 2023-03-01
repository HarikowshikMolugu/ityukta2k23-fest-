import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import FOOTER from './FOOTER';


export const Meetus = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_htnpnyb', 'template_k6gw5c4', form.current, 'TZLoviTPEU2w4trTi')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
    return(
      <div>
        <div  className='me-total'>
           <div id="feedback-form">
                <form action="" autocomplete="on" ref={form} onSubmit={sendEmail}>
                    
                      <p id="legend3"><b >Fill the form:</b></p>
                      <div id='form1'>
                       <input type="text"  id="fe-name" name="fename" placeholder="Name*" required></input><br></br>
                       <input type="email"  id="fe-email" name="feemail" placeholder="Email Address*" required></input><br></br>
                       <input type="tel"  id="fe-ph" name="feph" placeholder="Contact Telephone*" required></input><br></br>
                       <input type="text"  id="fe-company" name="fecompany" placeholder="College Name*" required></input><br></br>
                       <input type="textarea" id="fe-msg" name="femsg" placeholder="Enter your query*" required></input><br></br>
                       <input type="submit"  id="fe-button" ></input>
                       </div>
                </form>      
            </div> 
            <div id="map-det">
            <div><p id="legend3"><b >OUR LOCATION :</b></p></div>
            <div id='map'>
           <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.2780196649674!2d83.37348461468248!3d18.15110228762525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bef0baf9f2a11%3A0xdb0b518115b27e07!2sJNTU-GV%20COLLEGE%20OF%20ENGINEERING%20VIZIANAGARAM!5e0!3m2!1sen!2sin!4v1677429966801!5m2!1sen!2sin"
           
            allowfullscreen=""
            loading="lazy"
          ></iframe>
          </div>
            
        
        {/* <div id="map-content">
          <div id="map-content-1">Meet us at</div>
          <div id="map-content-2">
            <div><img src="/images/location.png" alt="logo" id="icon"></img></div>
            <div><p id="address">J</p></div>

          </div>
         
        </div> */}
        </div>
        </div>
        <FOOTER></FOOTER>
        </div>
    )
}

export default Meetus;       