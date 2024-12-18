import React from "react";

const homecard3 = () => {
  return (
<div className="card_section_3 custom_class_last_card">
  <ul className="card_list_1">
    <li>
      <ul>
        <li>
          <p className="heading_card_1">ERP Systems</p>
        </li>
        <li>
          <p className="heading_card_2">
            ERP Systems are designed to streamline and automate your business operations. 
            We provide end-to-end ERP solutions that help integrate various departments, 
            improve efficiency, and enhance data visibility.<br/> Our systems are customizable 
            to fit your unique business requirements, driving growth and optimizing resources.
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
          <i className="fas fa-cogs"></i> ERP Customization
        </li>
        <li>
          <i className="fas fa-users-cog"></i> Cloud Services
        </li>
      </ul>
    </li>
    <li>
      <ul className="list_cards_second">
        <li>
          <i className="fas fa-chart-line"></i> Business Intelligence
        </li>
        <li>
          <i className="fas fa-truck"></i> Logistic Control
        </li>
      </ul>
    </li>
  </ul>
</div>

  );
};

export default homecard3;
