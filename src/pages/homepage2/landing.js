import React from 'react'
import Top from '../../assets/images/svghomepage/2q7e52UxcWG1edGFZscT0s5U4Wf.svg'
import P1 from '../../assets/images/p1.png'
import P2 from '../../assets/images/p2.png'
import P3 from '../../assets/images/p3.png'
import P4 from '../../assets/images/p4.png'
import P5 from '../../assets/images/p5.png'
import { Button } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { Link } from 'react-router-dom'


const landing = () => {
  return (
    <div className='landing_page_adjustment'>
    <div className='home_top custom_hometop4'>
      <ul className='list_1_home_top_landing' >
<li><h1 className='first_headingl custom_mobile_landing' >Innovative and Trustworthy Solutions for the<br/><span> Digital Age</span></h1></li>
<li><p className='second_heading landing_page_fonty' > We deliver cutting-edge software solutions that drive digital transformation, empowering businesses worldwide with seamless, scalable, and secure technology.</p></li>
<li className='line_design'> </li>
<li className='buttons_list_landing'>
  <h3 style={{marginBottom: '15px', textAlign: 'center', fontSize: '36px', fontWeight: 'bold'}}>Want to get Hired?</h3>
  <Button className="get_button">
  <Link to="/careers" style={{ color: 'inherit', textDecoration: 'none', fontWeight:'bold' }}>
    Apply Now!
  </Link>
</Button>
</li>
      </ul>
      <ul className='list_top_2'>
<li>
  <img className='top_image2 fade-in' src={Top} />  
</li>

      </ul>
    </div>
    
    <div className='icon_formobile' style={{
      position: 'fixed',
      bottom: '80px',
      right: '40px',
      backgroundColor: '#25D366',
      borderRadius: '50%',
      padding: '37px',
      cursor: 'pointer',
      boxShadow: '2px 2px 6px rgba(0,0,0,0.4)',
      zIndex: 99999999999999, // Increased z-index to ensure it stays on top
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '50px',
      height: '50px',
      transition: 'all 0.3s ease',
      mixBlendMode: 'normal', // Ensures normal blending with background
      isolation: 'isolate' // Creates a new stacking context
    }}>
      <a 
        href="https://wa.me/+393759119255" 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp_icon_link"
      >
        <BsWhatsapp size={50} color="white" className="whatsapp_icon2" />
      </a>
    </div>
    </div>
  )
}

export default landing
