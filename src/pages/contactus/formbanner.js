import React from 'react'
import Top from '../../assets/images/Vectors/Contact-Us-Vector.svg'
import { Button } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'


const formbanner = () => {
  return (
    <div className='landing_page_adjustment custom_checking_heading '>
    <div className='home_top custom_hometop custom_contact_settings'>
      <ul className='list_1_home_top_landing' >
<li><h1 className='first_headingl custom_mobile_landing' >Get in Touch for Tailored Solutions in the <br/><span>Digital Era</span></h1></li>
<li><p className='second_heading landing_page_fonty' > Reach Out for Advanced Software Solutions that Propel Digital Growth and Secure Your Business’s Future.</p></li>
<li className='line_design'> </li>
<li className='buttons_list_landing'> </li>
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

export default formbanner
