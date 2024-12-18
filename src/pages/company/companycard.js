import React, { useState, useEffect } from "react";
import Companyimage from "../../assets/images/Snapinsta.app_464721287_1063901778659901_3585591654925895388_n_1080.jpg"
import Companyimage1 from "../../assets/images/Snapinsta.app_464749905_18024665882402797_7290063143994563472_n_1080.jpg";
import Companyimage2 from "../../assets/images/Snapinsta.app_464824466_18024665894402797_3243246772788037534_n_1080.jpg";
import Companyimage3 from "../../assets/images/Snapinsta.app_464857683_511585575200573_4802048716960436208_n_1080 (1).jpg";
import Companyimage4 from "../../assets/images/Snapinsta.app_464886824_902608585140861_5610321613573847771_n_1080.jpg";
import Companyimage5 from "../../assets/images/Snapinsta.app_464906414_1535048190483215_8983053605694064727_n_1080.jpg";
import Companyimage6 from "../../assets/images/Snapinsta.app_467480975_18026910113402797_6536859019164085982_n_1080.jpg";

import Ceovision from '../homepage2/blackafter2'

const CompanyCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [Companyimage1, Companyimage, Companyimage2, Companyimage3, Companyimage4, Companyimage5, Companyimage6,];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [images.length]);

  return (
    <div>
      <div className="company_card_1">
        <ul className="list_1_home_top_companycard">
          <li>
            <p className="first_heading">Our Story</p>
          </li>
          <li className="line_company_custom">
            <p className="second_heading new_customization custom_responsive ">
              {" "}
              Our Story Everybody dreams of being a part of something big but
              falls short in investing the time and passion required to build
              it. We have taken this ideology to heart - and it is reflected in
              our work. The harmony flows through us, fuels our ambitions, and
              our very way of life. It lets us break barriers set by others and
              achieve something that is far greater. We work tirelessly not
              because we want to make a name for ourselves but rather to leave a
              positive impact on mankind.
            </p>
          </li>
          <li className="line_design line_company_custom">
            {/* <p className="third_heading">Get a Quote</p>{" "} */}
          </li>
        </ul>
        <ul className="company_card_right">
          <li>
            <img
              className="company_imager_persons"
              src={images[currentIndex]}
              alt={`Image ${currentIndex}`}
              style={{ opacity: 1 }} // Ensure the current image is visible
            />
          </li>
        </ul>
      </div>

      <div>

<Ceovision />

      </div>
    </div>
  );
};

export default CompanyCard;
