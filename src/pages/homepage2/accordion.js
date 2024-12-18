import React, { useState } from "react";
import { Accordion as BootstrapAccordion } from "react-bootstrap";

const Accordion = () => {
  const [activeKey, setActiveKey] = useState("0");

  return (
    <div className="accordion_bro">
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-9 mx-auto text-center">
            <h1 className="display-4 font-weight-bold custom_desktop_1">
              Frequently Asked Questions
            </h1>
            <p className="lead mb-0 custom_desktop_2">
              Common questions about our tech services and solutions
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9 mx-auto">
            <BootstrapAccordion
              defaultActiveKey="0"
              className="shadow"
              activeKey={activeKey}
              onSelect={(key) => setActiveKey(key)}
            >
              <BootstrapAccordion.Item eventKey="7">
                <BootstrapAccordion.Header
                  className="bg-white shadow-sm border-0"
                  style={{
                    backgroundColor: activeKey === "7" ? "#90EE90" : "white",
                    fontWeight: "bold",
                    color: activeKey === "7" ? "white" : "black",
                  }}
                >
                  <h6 className="mb-0 font-weight-bold text-uppercase">
                    <strong>
                      1. What types of software development services do you
                      offer?
                    </strong>
                  </h6>
                </BootstrapAccordion.Header>
                <BootstrapAccordion.Body className="p-5">
                  <p className="font-weight-light m-0">
                    We offer a range of software development services, including
                    custom application development, web and mobile app
                    development, cloud solutions, enterprise software solutions,
                    and SaaS development. Our team specializes in creating
                    tailored solutions to meet the unique needs of your
                    business.
                  </p>
                </BootstrapAccordion.Body>
              </BootstrapAccordion.Item>

              <BootstrapAccordion.Item eventKey="8">
                <BootstrapAccordion.Header
                  className="bg-white shadow-sm border-0"
                  style={{
                    backgroundColor: activeKey === "8" ? "#90EE90" : "white",
                    fontWeight: "bold",
                    color: activeKey === "8" ? "white" : "black",
                  }}
                >
                  <h6 className="mb-0 font-weight-bold text-uppercase">
                    <strong>
                      2. How long does it take to build custom software?
                    </strong>
                  </h6>
                </BootstrapAccordion.Header>
                <BootstrapAccordion.Body className="p-5">
                  <p className="font-weight-light m-0">
                    The timeline for building custom software varies depending
                    on the scope and complexity of the project. Generally, it
                    can take anywhere from a few weeks to several months. We
                    work closely with our clients to define project milestones
                    and ensure that development is on schedule.
                  </p>
                </BootstrapAccordion.Body>
              </BootstrapAccordion.Item>

              <BootstrapAccordion.Item eventKey="9">
                <BootstrapAccordion.Header
                  className="bg-white shadow-sm border-0"
                  style={{
                    backgroundColor: activeKey === "9" ? "#90EE90" : "white",
                    fontWeight: "bold",
                    color: activeKey === "9" ? "white" : "black",
                  }}
                >
                  <h6 className="mb-0 font-weight-bold text-uppercase">
                    <strong>
                      3. Do you provide ongoing support after the project is
                      completed?
                    </strong>
                  </h6>
                </BootstrapAccordion.Header>
                <BootstrapAccordion.Body className="p-5">
                  <p className="font-weight-light m-0">
                    Yes, we offer ongoing support and maintenance for all of our
                    software projects. This includes bug fixes, updates, and
                    improvements to ensure your software continues to run
                    smoothly as technology and your business evolve.
                  </p>
                </BootstrapAccordion.Body>
              </BootstrapAccordion.Item>

              <BootstrapAccordion.Item eventKey="10">
                <BootstrapAccordion.Header
                  className="bg-white shadow-sm border-0"
                  style={{
                    backgroundColor: activeKey === "10" ? "#90EE90" : "white",
                    fontWeight: "bold",
                    color: activeKey === "10" ? "white" : "black",
                  }}
                >
                  <h6 className="mb-0 font-weight-bold text-uppercase">
                    <strong>
                      4. Can you work with my existing software or legacy
                      systems?
                    </strong>
                  </h6>
                </BootstrapAccordion.Header>
                <BootstrapAccordion.Body className="p-5">
                  <p className="font-weight-light m-0">
                    Yes, we specialize in integrating with existing software and
                    legacy systems. Our team is skilled at migrating data,
                    ensuring compatibility, and enhancing the functionality of
                    older systems to meet modern business requirements.
                  </p>
                </BootstrapAccordion.Body>
              </BootstrapAccordion.Item>

              <BootstrapAccordion.Item eventKey="11">
                <BootstrapAccordion.Header
                  className="bg-white shadow-sm border-0"
                  style={{
                    backgroundColor: activeKey === "11" ? "#90EE90" : "white",
                    fontWeight: "bold",
                    color: activeKey === "11" ? "white" : "black",
                  }}
                >
                  <h6 className="mb-0 font-weight-bold text-uppercase">
                    <strong>
                      5. How do you ensure the quality of the software you
                      develop?
                    </strong>
                  </h6>
                </BootstrapAccordion.Header>
                <BootstrapAccordion.Body className="p-5">
                  <p className="font-weight-light m-0">
                    We follow industry best practices for quality assurance and
                    testing throughout the development lifecycle. Our process
                    includes rigorous code reviews, automated testing, and user
                    acceptance testing to ensure that the final product is
                    reliable, efficient, and meets client specifications.
                  </p>
                </BootstrapAccordion.Body>
              </BootstrapAccordion.Item>

              <BootstrapAccordion.Item eventKey="12">
                <BootstrapAccordion.Header
                  className="bg-white shadow-sm border-0"
                  style={{
                    backgroundColor: activeKey === "12" ? "#90EE90" : "white",
                    fontWeight: "bold",
                    color: activeKey === "12" ? "white" : "black",
                  }}
                >
                  <h6 className="mb-0 font-weight-bold text-uppercase">
                    <strong>
                      6. Do you offer consulting services for software
                      development?
                    </strong>
                  </h6>
                </BootstrapAccordion.Header>
                <BootstrapAccordion.Body className="p-5">
                  <p className="font-weight-light m-0">
                    Yes, we offer software development consulting services. Our
                    experts can help you define your project’s requirements,
                    recommend the right technology stack, and guide you through
                    the software development process to ensure the success of
                    your project.
                  </p>
                </BootstrapAccordion.Body>
              </BootstrapAccordion.Item>
            </BootstrapAccordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
