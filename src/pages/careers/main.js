import React, { useState, useEffect } from "react";
import Check from "./checkbox";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card, Spinner, Pagination, Modal } from "react-bootstrap"; // Added Modal
import JobModal from "./jobmodal";
import Mainlogo from "../../assets/logo/MainLogo.svg";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import Swal from 'sweetalert2';

const Main = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDescriptionModal, setShowDescriptionModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [hasFetchedJobs, setHasFetchedJobs] = useState(false); 
  const [selectedFilters, setSelectedFilters] = useState({
    jobType: "All",
    department: "All",
  });
  const [searchQuery, setSearchQuery] = useState(""); // State to store search query
  const [jobCards, setJobCards] = useState([]); // State to store fetched job data
  const [filteredJobs, setFilteredJobs] = useState([]); // State to store filtered jobs
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5; // Number of jobs to display per page

  const handleShow = (job) => {
    setSelectedJob(job); // Set the selected job
    setShowModal(true); // Show the modal
  };

  const handleClose = () => setShowModal(false);
  const handleShowDescription = (job) => {
    setSelectedJob(job);
    setShowDescriptionModal(true);
  };
  const handleCloseDescription = () => setShowDescriptionModal(false);

  // Fetch dummy job data
  useEffect(() => {
    const fetchJobData = async () => {
      console.log("Search Query:", searchQuery);
      console.log("Selected Filters:", selectedFilters);
      
      // Start loading before API call
      setIsLoading(true);
      
      try {
        const response = await axios.get(
          "https://gigbackend.pythonanywhere.com/carrers/jobs/"
        );
        const data = response.data;
  
        // Process the data after the response is fetched
        const jobs = data.map((item) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          description2: item.short_description,
          date: item.date,
          location: item.location,
          type: item.job_type,
          department: item.job_type, // Map department to job_type
        }));
        
        console.log("Processed jobs data:", jobs);
        
        // Set job data after processing
        setJobCards(jobs);
        setFilteredJobs(jobs); // Initially, show all jobs
        setHasFetchedJobs(true); // Mark jobs as fetched

        console.log("tst", filteredJobs)
        setIsLoading(false);
  
      } catch (error) {
        console.error("Error fetching job data:", error);
        
        // Handle the error state
        setJobCards([]);
        setFilteredJobs([]);
        setHasFetchedJobs(true); // Mark jobs as fetched even in case of error
      }
    };
    
    fetchJobData();
  }, []); // Ensure effect runs on dependency changes
  

  const handleCheckboxChange = (selectedValues) => {
    setSelectedFilters(selectedValues);
    setCurrentPage(1); // Reset to first page when filters change
    console.log("Job Type Filter:", selectedValues.jobType);
    console.log("Department Filter:", selectedValues.department);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page when search changes
  };

  // Apply filters and search
  useEffect(() => {
    const applyFilters = () => {
  
      const filtered = jobCards.filter((job) => {
        const matchesSearchQuery =
          job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchQuery.toLowerCase());
        
        const matchesJobType =
          selectedFilters.jobType === "All" ||
          job.type.toLowerCase() === selectedFilters.jobType.toLowerCase();
        
        const matchesDepartment =
          selectedFilters.department === "All" ||
          job.department.toLowerCase() === selectedFilters.department.toLowerCase();
  
        return matchesSearchQuery && matchesJobType && matchesDepartment;
      });
  
      setFilteredJobs(filtered)
    };
  
    applyFilters();
  }, [searchQuery, selectedFilters, jobCards]);

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on submit
  };

  // Calculate pagination values
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <ul className="top_section_carerrs">
        <li>
          <h1 className="first_heading_careers">
            Be a part of Gigmasters{" "}
            <span style={{ fontWeight: "bold", color: " #0dc270" }}>
              Growing Team
            </span>
          </h1>
        </li>
        <li>
          <p>
            Make an impact doing what you love and inspire others to pursue
            their passions.
          </p>
        </li>
      </ul>
      <Card
        className="mb-4 custom_1250style"
        style={{
          border: "none",
          backgroundColor: "#f9fafa",
          padding: "0.5rem",
          marginLeft: "5%",
          marginRight: "5%",
          marginTop: "1%",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="search_bar">
          <Row className="align-items-center ">
            <Col xs={12} lg="10">
              <Form.Control
                type="text"
                placeholder="Search by Job, Title, Keyword or Phrase"
                className="mr-sm-2 w-100"
                style={{ height: "2rem", fontSize: "1rem" }}
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </Col>
            <Col xs={12} lg="2">
              <Button
                type="submit"
                className="w-100 button_creers_section"
                style={{
                  height: "2rem",
                  fontSize: "1rem",
                  backgroundColor: "#0dc270",
                  border: "none",
                }}
                onClick={handleSearchSubmit}
              >
                Search Jobs
              </Button>
            </Col>
          </Row>
        </div>
      </Card>

      <div className="careers_main_page">
        <div>
          <Check onCheckboxChange={handleCheckboxChange} />
        </div>

        <div>
        <div className="above_card_div">
  {(isLoading) ? (
    <div className="loader-container">
      <ul className="skeleton-list">
        <li>
          <Skeleton
            height={30}
            width={200}
            style={{ marginBottom: "10px" }}
          />
        </li>
        <li>
          <Skeleton height={20} width={300} />
        </li>
      </ul>
    </div>
  ) : (
    <ul className="above_card_part_1">
      <li>
        <p className="above_heading_cards">
          {filteredJobs.length} Jobs found
        </p>
      </li>
      {/* Uncomment if you need the display range */}
      {/* <li>
        <p className="above_heading_cards_2">
          Displayed Here: {indexOfFirstJob + 1}-
          {Math.min(indexOfLastJob, filteredJobs.length)} Jobs
        </p>
      </li> */}
    </ul>
  )}
</div>

{isLoading ? (
      <div
        className="loader-container"
        style={{ textAlign: "center", marginTop: "60px" }}
      >
        <Spinner
          animation="border"
          role="status"
          style={{ width: "4rem", height: "4rem" }}
        />
      </div>
    ) : filteredJobs.length === 0 ? (
      <Card
        className="text-center mt-5"
        style={{
          width: "80%",
          margin: "0 auto",
          padding: "1.5rem",
          backgroundColor: "#f9fafa",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Card.Body>
          <Card.Title style={{ fontSize: "1.5rem", color: "#0dc270" }}>
            No Jobs Found
          </Card.Title>
          <Card.Text>
            Sorry, we couldn't find any jobs matching your query.
          </Card.Text>
        </Card.Body>
      </Card>
    ) : (
      <>
        <ul className="job_cards_list">
          {currentJobs.map((job) => (
            <li key={job.id}>
              <Card
                className="cards_hover_careers_addition"
                style={{ width: "100%", position: "relative" }}
              >
                <img
                  src={Mainlogo}
                  alt="Logo"
                  className="image_gig_jobs"
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "20px",
                    width: "4vw",
                    height: "4vw",
                    opacity: "50%",
                  }}
                />
                <Card.Body className="cards_decoration">
                  <Card.Title className="mb-5">{job.title}</Card.Title>
                  <Card.Text className="mb-3">
                    {job.description.length > 150
                      ? `${job.description.substring(0, 150)}...`
                      : job.description}
                    <span
                      style={{ color: "#0dc270", cursor: "pointer", fontWeight:"600", paddingLeft:"5px" }}
                      onClick={() => handleShowDescription(job)}
                    >
                      View Description
                    </span>
                  </Card.Text>
                  <ul className="card_text_bottom_list">
                    <li>{job.department}</li>
                    <li>
                      Date:{" "}
                      {new Date(job.date).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </li>
                    <li className="list_icon_styles">
                      <a
                        href={`https://maps.app.goo.gl/9RN5TNKQSs8gdu9w7`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-map-marker-alt"></i> View Location
                      </a>
                    </li>
                    <li className="last_list_showhere">
                      <Button
                        className="modal_button_cards"
                        variant="primary"
                        onClick={() => handleShow(job)} // Pass the job data here
                      >
                        Easy Apply
                      </Button>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </li>
          ))}
        </ul>


              {filteredJobs.length > 0 && (
                <div className="d-flex justify-content-center mt-4 mb-4">
                  <Pagination>
                    <Pagination.First
                      onClick={() => handlePageChange(1)}
                      disabled={currentPage === 1}
                    />
                    <Pagination.Prev
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    />

                    {[...Array(totalPages)].map((_, index) => (
                      <Pagination.Item
                        key={index + 1}
                        active={index + 1 === currentPage}
                        onClick={() => handlePageChange(index + 1)}
                      >
                        {index + 1}
                      </Pagination.Item>
                    ))}

                    <Pagination.Next
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    />
                    <Pagination.Last
                      onClick={() => handlePageChange(totalPages)}
                      disabled={currentPage === totalPages}
                    />
                  </Pagination>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* JobModal component */}
      <JobModal
        showModal={showModal}
        handleClose={handleClose}
        selectedJob={selectedJob}
      />

      {/* Description Modal */}
      <Modal show={showDescriptionModal} onHide={handleCloseDescription}>
        <Modal.Header closeButton>
          <Modal.Title style={{ width: "100%", textAlign: "center" }}>
            {selectedJob?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: "center" }}>
          {selectedJob?.description2}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseDescription}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Main;
