import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Row, Col, Alert } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import { FaUpload, FaFilePdf, FaTimes } from "react-icons/fa"; // Cross icon for file change
import Swal from "sweetalert2";

const JobModal = ({ showModal, handleClose, selectedJob }) => {
  const [fileName, setFileName] = useState(null); // State to store the file name
  const [file, setFile] = useState(null); // State to store the actual file object
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  // State for first name input
  const [lastName, setLastName] = useState(""); // State for last name input
  const [phoneNumber, setPhoneNumber] = useState(""); // State for phone number input
  const [onsiteAvailability, setOnsiteAvailability] = useState("Yes"); // State for onsite availability
  const [errors, setErrors] = useState({}); // State for validation errors
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // File handling with react-dropzone
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'application/pdf': ['.pdf'],
      
    },
    multiple: false, // Allow only one file at a time
    onDrop: (acceptedFiles) => {
      setFileName(acceptedFiles[0].name); // Set the file name when a file is dropped
      setFile(acceptedFiles[0]); // Store the actual file
      console.log("Accepted file: ", acceptedFiles[0]);
      setErrors({...errors, file: ""});
    },
  });

  useEffect(() => {
    const submitApplication = async () => {
      if (isSubmitting) {
        try {
          const formData = new FormData();
          formData.append('job', selectedJob?.id);
          formData.append('first_name', firstName);
          formData.append('last_name', lastName);
          formData.append('email', email);
          formData.append('contact_number', phoneNumber);
          formData.append('resume', file);
  
          const response = await fetch('https://gigbackend.pythonanywhere.com/carrers/apply/', {
            method: 'POST',
            body: formData
          });
  
          if (response.ok) {
            Swal.fire({
              icon: 'success',
              title: 'Application Submitted!',
              text: 'Your application has been successfully submitted.',
              showConfirmButton: false,
              timer: 2000
            });
  
            setTimeout(() => {
              handleClose();
              // Reset form
              setFirstName('');
              setLastName('');
              setPhoneNumber('');
              setOnsiteAvailability('Yes');
              setFile(null);
              setFileName(null);
              setErrors({});
            }, 2000);
          } else {
            throw new Error('Application submission failed');
          }
        } catch (error) {
          console.error('Error submitting application:', error);
          Swal.fire({
            icon: 'error',
            title: 'Submission Failed',
            text: 'Failed to submit application. Please try again.',
          });
  
          setErrors({ ...errors, submit: 'Failed to submit application. Please try again.' });
        }
        setIsSubmitting(false);
      }
    };
  
    submitApplication();
  }, [isSubmitting]);
  

  const handleFileChange = () => {
    setFileName(null); // Reset file name and file when changing
    setFile(null);
  };

  const validateForm = () => {
    const newErrors = {};

    // First Name validation
    if (!firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (!/^[A-Za-z\s]{2,}$/.test(firstName)) {
      newErrors.firstName = "First name must contain at least 2 letters";
    }

    // Last Name validation  
    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (!/^[A-Za-z\s]{2,}$/.test(lastName)) {
      newErrors.lastName = "Last name must contain at least 2 letters";
    }

    // Phone Number validation
    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\+?[\d\s-]{10,}$/.test(phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }

    // CV File validation
    if (!file) {
      newErrors.file = "Please upload your CV";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
  };

  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      size="lg"
      centered
      dialogClassName="custom-modal" // Add custom modal class
    >
      <Modal.Header closeButton>
        <Modal.Title className="custom-modal-title">{selectedJob?.title || 'Job Application'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {showAlert && (
          <Alert variant="success" className="mb-3">
            Application submitted successfully!
          </Alert>
        )}
        <p className="text-center mb-4">
        {selectedJob?.description || 'Job Application'}
        </p>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formFirstName">
              <Form.Label className="form_modal_labels_custom">First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  setErrors({...errors, firstName: ""});
                }}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formLastName">
              <Form.Label className="form_modal_labels_custom" >Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                  setErrors({...errors, lastName: ""});
                }}
                isInvalid={!!errors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="formEmail">
          <Form.Label className="form_modal_labels_custom">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors({...errors, email: ""});
            }}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPhoneNumber">
          <Form.Label className="form_modal_labels_custom" >Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
              setErrors({...errors, phoneNumber: ""});
            }}
            isInvalid={!!errors.phoneNumber}
          />
          <Form.Control.Feedback type="invalid">
            {errors.phoneNumber}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formOnsiteAvailability">
          <Form.Label className="form_modal_labels_custom" >Onsite Availability</Form.Label>
          <Form.Control
            as="select"
            value={onsiteAvailability}
            onChange={(e) => setOnsiteAvailability(e.target.value)}
          >
            <option>Yes</option>
            <option>No</option>
          </Form.Control>
        </Form.Group>

        {/* Dropzone for CV upload */}
        <Form.Group controlId="formCV">
          <Form.Label className="form_modal_labels_custom" >Upload CV</Form.Label>
          <div 
            {...getRootProps()} 
            className={`dropzone-container p-4 border rounded shadow-sm ${errors.file ? 'border-danger' : ''}`}
          >
            <input {...getInputProps()} />
            <div className="d-flex flex-column align-items-center">
              <FaUpload size={30} color="#007bff" />
              <p className="text-muted mt-2">Upload your CV here, or click to select files</p>
            </div>

            {/* Show selected file name and icon inside the dropzone */}
            {fileName && (
  <div
    className="box_file_name"
    
  >
    <FaFilePdf size={30} color="#d9534f" className="mr-2" />
    <p className="text-success m-0 text-align-center" style={{ margin: "0" }}>{fileName}</p>
    <Button variant="link" className="ml-2 p-0" onClick={handleFileChange}>
      <FaTimes size={18} color="#d9534f" /> {/* Cross icon for file change */}
    </Button>
  </div>
)}

          </div>
          {errors.file && (
            <div className="text-danger mt-1 small">
              {errors.file}
            </div>
          )}
        </Form.Group>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button variant="danger" onClick={handleClose} className="mr-2">
          Close
        </Button>
        <Button className="button_modal_custom" variant="primary" onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Apply Now'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default JobModal;
