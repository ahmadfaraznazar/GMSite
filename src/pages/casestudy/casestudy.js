import React from 'react'
import Top from '../../assets/images/backgroundremovedlandingpage.png'
import P1 from '../../assets/images/p1.png'
import P2 from '../../assets/images/p2.png'
import P3 from '../../assets/images/p3.png'
import P4 from '../../assets/images/p4.png'
import P5 from '../../assets/images/p5.png'
import { Button } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'


const casestudy = () => {
  return (
    <div className='landing_page_adjustment'>
    <div className='home_top custom_hometop'>
      <ul className='list_1_home_top_landing' >
<li><h1 className='first_headingl custom_mobile_landing' >Innovative and Trustworthy Solutions for the<br/><span> Digital Age</span></h1></li>
<li><p className='second_heading landing_page_fonty' > We deliver cutting-edge software solutions that drive digital transformation, empowering businesses worldwide with seamless, scalable, and secure technology.</p></li>
<li className='line_design'> </li>
<li className='buttons_list_landing'><Button className='get_button' >Get Started Now<BsArrowRight style={{marginLeft: '5px'}} /></Button> </li>
      </ul>
      <ul className='list_top_2'>
<li>
  <img className='top_image2 fade-in' src={Top} />  
</li>

      </ul>
    </div>
    
    </div>
  )
}

export default casestudy
