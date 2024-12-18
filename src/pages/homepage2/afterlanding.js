import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Cardimage1 from '../../assets/images/cards/123.jpg';
import Cardimage2 from '../../assets/images/cards/uiux23-min.jpg';
import Cardimage3 from '../../assets/images/cards/card_3_new.avif';
import { Link } from 'react-router-dom';


const Afterlanding = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setImageLoaded(true);
    }, );
  }, []);

  return (
    <div className='after_landing_cards_div' style={{ marginTop:'5rem'}}>
      <h2 className='after_landing_cards'>A Unified Platform for All Your Digital Needs</h2>
      <h2 className='after_landing_cards2' >A Solution for Every Business, Big or Small</h2>

      <ul className="blogs_cards">
  
  <li className="card_area">
  <Link to="/services">
    <Card className='mobile_response_pages' style={{ width: 'auto', maxWidth: '22rem' , minHeight: '30rem', backgroundColor:'#e4ebf0', transition: 'transform 0.3s ease', cursor: 'pointer' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>

      {imageLoaded ? (
        <Card.Img
          className="card_image_cars2"
          variant="top"
          src={Cardimage1}
          alt="Card"
          style={{padding: '1rem', borderRadius: '25px'}}
        />
      ) : (
        <Skeleton height={180} />
      )}

      <Card.Body>
        <Card.Title className="card_title_custom">Web Development</Card.Title>
        <Card.Text className="card_description">
          Our web development services create dynamic, user-friendly websites tailored to your business needs. We specialize in responsive design, seamless navigation, and powerful backend solutions.
        </Card.Text>
        {/* <p className="description_2">Read More</p> */}
      </Card.Body>
    </Card>
    </Link>
  </li>

  <li className="card_area">
  <Link to="/services">
    <Card className='mobile_response_pages' style={{ width: 'auto', maxWidth: '22rem' , minHeight: '30rem', backgroundColor:'#e0d9d5', transition: 'transform 0.3s ease', cursor: 'pointer' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>

      {imageLoaded ? (
        <Card.Img
          className="card_image_cars2"
          variant="top"
          src={Cardimage2}
          alt="Card"
          style={{padding: '1rem', borderRadius: '25px'}}
        />
      ) : (
        <Skeleton height={180} />
      )}

      <Card.Body>
        <Card.Title className="card_title_custom">UI / UX Designing</Card.Title>
        <Card.Text className="card_description">
          We design intuitive and visually stunning user interfaces with a focus on user experience. Our designs enhance usability, ensuring your digital products are both beautiful and functional.
        </Card.Text>
        {/* <p className="description_2">Read More</p> */}
      </Card.Body>
    </Card>
    </Link>
  </li>

  <li className="card_area">
  <Link to="/services">
    <Card className='mobile_response_pages' style={{ width: 'auto', maxWidth: '22rem' , minHeight: '30rem',  backgroundColor:'#f4f2eb', transition: 'transform 0.3s ease', cursor: 'pointer' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>

      {imageLoaded ? (
        <Card.Img
          className="card_image_cars2 "
          variant="top"
          src={Cardimage3}
          alt="Card"
          style={{padding: '1rem', borderRadius: '25px'}}
        />
      ) : (
        <Skeleton height={180} />
      )}

      <Card.Body>
        <Card.Title className="card_title_custom">ERP Systems</Card.Title>
        <Card.Text className="card_description">
          Our ERP solutions help businesses streamline operations by integrating key processes in a unified platform. From inventory management to financial reporting, we provide efficient and scalable systems.
        </Card.Text>
        {/* <p className="description_2">Read More</p> */}
      </Card.Body>
    </Card>
    </Link>
  </li>
</ul>

    </div>
  );
};

export default Afterlanding;