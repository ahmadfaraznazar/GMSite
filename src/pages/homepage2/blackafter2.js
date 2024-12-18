import React from 'react'
import { useState, useEffect } from 'react'
import Blackimage from '../../assets/images/ceo_image.jpg'
import { Link } from 'react-router-dom'

const Blackafter = () => {
  const [imageScale, setImageScale] = useState(1);
  const [imageRotate, setImageRotate] = useState(0);

  useEffect(() => {
    const scaleInterval = setInterval(() => {
      setImageScale(prev => prev === 1 ? 1.05 : 1);
    }, 2000);

    const rotateInterval = setInterval(() => {
      setImageRotate(prev => prev === 0 ? 2 : 0);
    }, 3000);

    return () => {
      clearInterval(scaleInterval);
      clearInterval(rotateInterval);
    };
  }, []);

  return (
    <div className='ceo_vision' style={{
      height: '600px',
      background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.95))',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:'8rem',
    }}>
      <div className='landing_page_black_section' style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        width: '80%',
        gap: '40px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <img className='image_mobile_landing_page'
            src={Blackimage} 
            alt="Left column image"
            style={{
              maxWidth: '100%',
              height: '400px',
              borderRadius: '25px',
              
            }}
          />
        </div>
        <div className='ceo_vision_internal' style={{
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent:'center',
        }}>
          <h2 className='heading_black' style={{ marginBottom: '20px' }}>
            Solutions Based on <span>Our Consumers' Needs</span>
          </h2>
          <p style={{ marginBottom: '20px' }}>
  In the fast-evolving tech landscape, we believe in creating software solutions that drive innovation and efficiency. Our platform is crafted with a deep understanding of what businesses and individuals need, blending cutting-edge technology with a user-centric approach. Every feature is built with purpose—streamlining workflows, improving productivity, and ensuring seamless integration. We are committed to providing tools that empower our clients to reach their goals, all while maintaining the highest standards of security and support.
</p>
          <p>- Imran Sajid Gondal, CEO Gig Masters</p>
          {/* <Link to="/company" className='button_custom_black'>
  Explore Our Vision <i className="fas fa-arrow-right"></i>
</Link> */}

        </div>
      </div>
    </div>
  )
}

export default Blackafter
