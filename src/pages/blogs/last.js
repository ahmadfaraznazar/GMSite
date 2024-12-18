import React from 'react'

const last = () => {
  return (
    <div className='green_section_forall'>
      
      <div className="div_2_images_below">
        <h1 className="text-center">
          Unlock cutting-edge software solutions <br /> Crafted by our expert
          team.
        </h1>

        <h3 className="text-center">
          Everything you need to build custom software solutions, from web and
          mobile applications to enterprise systems, tailored to your business
          needs.
        </h3>
        <button className='green_button' onClick={() => window.location.href = '/contact-us'}>
          Get in touch with us 
        </button>
      </div>
    </div>

  )
}

export default last


