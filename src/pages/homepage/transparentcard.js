import React from "react";

const Transparentcard = () => {
  return (
    <div className="card_section_1_transparent">
      <ul className="card_list_1">
        <li>
          <ul>
            <li>
              <p className="heading_card_1">Web Development</p>
            </li>
            <li>
            <p className="heading_card_2">
            Web Development is all about creating impactful online experiences. 
            We build scalable and responsive websites that are tailored to your 
            business needs.<br/> Our solutions will help you establish a strong 
            online presence and engage your audience effectively.
          </p>
            </li>
            <li className="line_design_card">
              {/* <p className="third_heading">Get a Quote</p>{" "} */}
            </li>
          </ul>
        </li>
        <li>
<ul className="list_cards_second">
<li>
<i className="fas fa-laptop-code"></i> Full-Stack Development
  </li>
  <li>
  <i className="fas fa-box"></i> Front-End Development
  </li>

</ul>


        </li>
        <li><ul className="list_cards_second">
<li>
<i className="fas fa-database"></i> Database Integration
  </li>
  <li>
  <i className="fas fa-lock"></i> Secure Coding Practices
  </li>

</ul>
</li>
      </ul>
    </div>
  );
};

export default Transparentcard;
