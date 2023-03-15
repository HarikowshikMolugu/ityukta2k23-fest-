import React from 'react'
import FOOTER from './FOOTER'
const Sponsors = () => {
  return (
    <div>
   <div className='sp-main'>

    <div className='sp-total' >
       <p id='sp-head'>OUR SPONSORS</p>
      
       <div className='sponsers2'>
        <marquee className="ph-mar" direction="up" scrollamount="10">
          <img id='spons2' src="/images/tm1.jpg"></img>
          <img id='spons2' src="/images/tm2.jpg"></img>
          <img id='spons2' src="/images/tm3.jpg"></img>
        </marquee>
       </div>
       </div>
       
       </div>
       <FOOTER></FOOTER>
      </div>
  )
}

export default Sponsors
