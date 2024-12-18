import React from 'react'
import Top from '../../assets/images/Vectors/Services-Vector.svg'
import { Button } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'


const hometop = () => {
  return (
    <div className='landing_page_adjustment'>
    <div className='home_top custom_hometop2'>
      <ul className='list_1_home_top_landing' >
<li><h1 className='first_headingl custom_mobile_landing' >Reliable and Cutting-Edge Services for the Modern Digital Era<br/><span> Innovative Services</span></h1></li>
<li><p className='second_heading landing_page_fonty' > We deliver cutting-edge and dependable software services that foster digital transformation, helping businesses globally achieve seamless operations with scalable, effective, and secure solutions.






</p></li>
<li className='line_design'> </li>
{/* <li className='buttons_list_landing'><Button className='get_button'>Get Started Now<BsArrowRight style={{marginLeft: '5px'}} /></Button> </li> */}
      </ul>
      <ul className='list_top_2'>
<li>
  <img className='top_image2 fade-in' src={Top} />  
</li>

      </ul>
    </div>
    <div className='div_2_services'>
    <h1 >Our Services</h1>
    </div>
    </div>
  )
}

export default hometop
