import React from 'react'
import Person1 from '../../assets/images/HR PFP.png'
import Person2 from '../../assets/images/Abdullah PFP.png'
import Person3 from '../../assets/images/abdullah23.png'
import Person4 from '../../assets/images/Asad PFP.png'
import Person5 from '../../assets/images/Imran PFP.png'
import Person6 from '../../assets/images/Fahad PFP.png'
import Person7 from '../../assets/images/Hamza PFP.png'
import Person8 from '../../assets/images/Ahmed PFP.png'


const Personscard = () => {
  return (
    
    <div className='card_person_information'>   
    
    
{/* <div><p className='text_teams'>LeaderShip Team <br/> Meet the superhumans behind the scenes</p></div> */}
<div><h2 style={{ fontSize: '50px', fontWeight: 'bold', textAlign: 'center', marginTop:'1' }}>Our Team</h2>
</div>
<div className='person_images_main'>
    
<ul className='first_row'>
<li>
    <img className='person_image_style' src={Person1} alt="Person 1" />
    <p className="image_text_1">
  <strong>Khadija Bilal</strong>
  <br />
  HR Manager
</p>
  </li>
  <li>
    <img className='person_image_style' src={Person2} alt="Person 2" />
    <p className="image_text_1">
  <strong>Muhammad Abdullah</strong>
  <br />
  Manager
</p>
  </li>
  <li>
    <img className='person_image_style' src={Person3} alt="Person 3" />
    <p className="image_text_1">
  <strong>Muhammad Abdullah</strong>
  <br />
  Senior Developer
</p>
  </li>
  <li>
    <img className='person_image_style' src={Person4} alt="Person 4" />
    <p className="image_text_1">
  <strong>Syed Asad Abass</strong>
  <br />
  Project Manager
</p>
</li>
</ul>
<ul className="first_row" >
<li>
    <img className='person_image_style' src={Person5} alt="Person 1" />
    <p className="image_text_1">
  <strong>Imran Akbar</strong>
  <br />
  Sr. Frontend Developer
</p>
  </li>
  <li>
    <img className='person_image_style' src={Person6} alt="Person 2" />
    <p className="image_text_1">
  <strong>Fahad Nawaz</strong>
  <br />
  Backend Developer
</p>
  </li>
  <li>
    <img className='person_image_style' src={Person7} alt="Person 3" />
    <p className="image_text_1">
  <strong>Hamza Ahmad Nizami</strong>
  <br />
  Junior Frontend Developer
</p>
  </li>
  <li>
    <img className='person_image_style' src={Person8} alt="Person 4" />
    <p className="image_text_1">
  <strong>Ahmad Nazar</strong>
  <br />
  Junior Frontend Developer
</p>
</li>
</ul>
</div>

    </div>
  )
}

export default Personscard
