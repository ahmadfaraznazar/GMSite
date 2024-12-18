import React from "react";

const homecard = () => {
  return (
    <div className="card_section_1 custom_style">
      <ul className="card_list_1">
        <li>
          <ul>
            <li>
              <p className="heading_card_1">UI / UX Designs</p>
            </li>
            <li>
            <p className="heading_card_2">
            UI/UX Design is all about creating engaging and intuitive experiences. 
            We focus on user-centric designs that enhance usability and boost customer satisfaction.<br/> 
            Our goal is to craft designs that not only look great but also work seamlessly across devices.
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
    <i class="fas fa-box"></i> Product Design
  </li>
  <li>
    <i class="fas fa-paint-brush"></i> Creative Design
  </li>

</ul>


        </li>
        <li><ul className="list_cards_second">
<li>
    <i class="fas fa-box"></i> Visual Design
  </li>
  <li>
    <i class="fas fa-paint-brush"></i> Interactive Design
  </li>

</ul>
</li>
      </ul>
    </div>
  );
};

export default homecard;
