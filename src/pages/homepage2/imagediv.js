import React from "react";
import image1 from "../../assets/images/New folder/images/left.jpg";
import image2 from "../../assets/images/New folder/images/right.jpg";

const Imagediv = () => {
  return (
    <div >
      <div className="image_div_homepage ">
        <div
          className="image_1_div"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(${image1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "500px", // Adjust height as needed
          }}
        >
          <div className="div_other_set">
            <h1 className="image_div_textr_1">Our Blogs and News</h1>
            <h2 className="image_div_textr_2">
              Stay updated with the latest insights and trends
            </h2>
            <button className="image_div_textr_1_button" onClick={() => window.location.href = '/blogs'}>
              Learn More <i className="fa fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div
          className="image_2_div"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(${image2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "500px",
            zIndex: 9999
          }}
        >
          <div className="div_other_set">
            <h1 className="image_div_textr_1">We're Hiring!</h1>
            <h2 className="image_div_textr_2">
              Join our team and make an impact
            </h2>
            <button className="image_div_textr_1_button" onClick={() => window.location.href = '/careers'}>
              Apply Now <i className="fa fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="div_2_images_below new_custom">
        <h1 className="text-center">
          Unlock cutting-edge software solutions <br /> Crafted by our expert
          team.
        </h1>

        <h3 className="text-center">
          Everything you need to build custom software solutions, from web and
          mobile applications to enterprise systems, tailored to your business
          needs.
        </h3>
        <button style={{fontWeight:'bold'}} onClick={() => window.location.href = '/contact-us'}>
          Contact Us <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Imagediv;
