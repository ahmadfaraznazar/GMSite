import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Checkbox = ({ onCheckboxChange }) => {
  const [selectedValues, setSelectedValues] = useState({
    jobType: "All",
    department: "All", 
    
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  const handleCheckboxChange = (category, value) => {
    const newSelectedValues = { ...selectedValues, [category]: value };
    setSelectedValues(newSelectedValues);
    onCheckboxChange(newSelectedValues);
  };

  if (isMobile) {
    return (
      <div className="chec_box_select">
        <Row className="g-3">
          <Col xs={12}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <p className="job-type-heading" style={{ margin: 0 }}>JOB TYPE</p>
              <Dropdown className="w-100 custom_dropdown_menu">
                <Dropdown.Toggle variant="light" id="jobType-dropdown" className="w-100">
                  {selectedValues.jobType}
                </Dropdown.Toggle>
                <Dropdown.Menu className="w-100">
                  {["All", "Full Time", "Part Time"].map((type) => (
                    <Dropdown.Item 
                      key={type}
                      onClick={() => handleCheckboxChange("jobType", type)}
                      active={selectedValues.jobType === type}
                    >
                      {type}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>

          <Col xs={12}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <p className="job-type-heading" style={{ margin: 0 }}>DEPARTMENT</p>
              <Dropdown className="w-100 custom_dropdown_menu">
                <Dropdown.Toggle variant="light" id="department-dropdown" className="w-100">
                  {selectedValues.department}
                </Dropdown.Toggle>
                <Dropdown.Menu className="w-100">
                  {["All", "Frontend", "Backend", "UI/UX", "Marketing"].map((type) => (
                    <Dropdown.Item
                      key={type}
                      onClick={() => handleCheckboxChange("department", type)}
                      active={selectedValues.department === type}
                    >
                      {type}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>

          {/* Job Shift Dropdown - Commented out
          <Col xs={12}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <p className="job-type-heading" style={{ margin: 0 }}>JOB SHIFT</p>
              <Dropdown className="w-100 custom_dropdown_menu">
                <Dropdown.Toggle variant="light" id="jobShift-dropdown" className="w-100">
                  {selectedValues.jobShift}
                </Dropdown.Toggle>
                <Dropdown.Menu className="w-100">
                  {["All", "Day Shift"].map((type) => (
                    <Dropdown.Item
                      key={type}
                      onClick={() => handleCheckboxChange("jobShift", type)}
                      active={selectedValues.jobShift === type}
                    >
                      {type}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
          */}

          {/* Location Dropdown - Commented out
          <Col xs={12}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <p className="job-type-heading" style={{ margin: 0 }}>LOCATION</p>
              <Dropdown className="w-100 custom_dropdown_menu">
                <Dropdown.Toggle variant="light" id="location-dropdown" className="w-100">
                  {selectedValues.location}
                </Dropdown.Toggle>
                <Dropdown.Menu className="w-100">
                  {["All", "Italy", "Dhaka"].map((type) => (
                    <Dropdown.Item
                      key={type}
                      onClick={() => handleCheckboxChange("location", type)}
                      active={selectedValues.location === type}
                    >
                      {type}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
          */}
        </Row>
      </div>
    );
  }

  return (
    <div>
      <div className="chec_box_select">
        <ul className="chec_box_text_lis">
          <li className="job-type-item">
            <p className="job-type-heading">JOB TYPE</p>
            <span className="job-type-dash">-</span>
          </li>
          {["All", "Full Time", "Part Time"].map((type) => (
            <li key={type} className="job_type_1">
              <Form>
                <div className="mb-3">
                  <Form.Check
                    type="radio"
                    id={`jobType-${type}`}
                    label={type}
                    checked={selectedValues.jobType === type}
                    onChange={() => handleCheckboxChange("jobType", type)}
                  />
                </div>
              </Form>
            </li>
          ))}
        </ul>
        
        <ul className="chec_box_text_lis">
          <li className="job-type-item">
            <p className="job-type-heading">DEPARTMENT</p>
            <span className="job-type-dash">-</span>
          </li>
          {["All", "Frontend", "Backend", "UI/UX", "Marketing"].map((type) => (
            <li key={type}>
              <Form>
                <div className="mb-3">
                  <Form.Check
                    type="radio"
                    id={`department-${type}`}
                    label={type}
                    checked={selectedValues.department === type}
                    onChange={() => handleCheckboxChange("department", type)}
                  />
                </div>
              </Form>
            </li>
          ))}
        </ul>

        {/* Job Shift Radio Buttons - Commented out
        <ul className="chec_box_text_lis">
          <li className="job-type-item">
            <p className="job-type-heading">JOB SHIFT</p>
            <span className="job-type-dash">-</span>
          </li>
          {["All", "Day Shift"].map((type) => (
            <li key={type}>
              <Form>
                <div className="mb-3">
                  <Form.Check
                    type="radio"
                    id={`jobShift-${type}`}
                    label={type}
                    checked={selectedValues.jobShift === type}
                    onChange={() => handleCheckboxChange("jobShift", type)}
                  />
                </div>
              </Form>
            </li>
          ))}
        </ul>
        */}

        {/* Location Radio Buttons - Commented out
        <ul className="chec_box_text_lis">
          <li className="job-type-item">
            <p className="job-type-heading">LOCATION</p>
            <span className="job-type-dash">-</span>
          </li>
          {["All", "Italy", "Dhaka"].map((type) => (
            <li key={type}>
              <Form>
                <div className="mb-3">
                  <Form.Check
                    type="radio"
                    id={`location-${type}`}
                    label={type}
                    checked={selectedValues.location === type}
                    onChange={() => handleCheckboxChange("location", type)}
                  />
                </div>
              </Form>
            </li>
          ))}
        </ul>
        */}
      </div>
    </div>
  );
};

export default Checkbox;
