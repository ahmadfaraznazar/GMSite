import React, { useState } from "react";
import axios from "axios";

const Contactnew = () => {
  return (
    <div className="conatact_div">
      <div className="first_div_contact">
        <div className="firstt_row_details">
          <h1 className="contact_first_heading_map">Get in touch with us</h1>
          <p className="contact_first_paragraph_map">
            Have questions or need assistance? We're here to help! Please fill
            out the form, and one of our team members will get back to you as
            soon as possible. Whether you're looking for more information about
            our services, need guidance on your project, or have a specific
            query you'd like to discuss, we’re happy to assist. We value open
            communication and strive to provide prompt and helpful responses to
            ensure your needs are met. Don't hesitate to reach out – we look
            forward to hearing from you and working together to achieve your
            goals!
          </p>
        </div>
        <div className="second_row_contact_1">
          <div>
            <ul style={{ padding: "20px", listStyle: "none" }}>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                  marginBottom: "30px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#0dc270",
                    padding: "12px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i
                    className="fas fa-phone"
                    style={{ fontSize: "24px", color: "#ffffff" }}
                  ></i>
                </div>
                <div>
                  <h1
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      margin: "0 0 8px 0",
                    }}
                  >
                    Phone Number
                  </h1>
                  <p>(+39) 375 911 9255</p>
                </div>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                  marginBottom: "30px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#0dc270",
                    padding: "12px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i
                    className="fas fa-envelope"
                    style={{ fontSize: "24px", color: "#ffffff" }}
                  ></i>
                </div>
                <div>
                  <h1
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      margin: "0 0 8px 0",
                    }}
                  >
                    Email Adress
                  </h1>
                  <p>contact@gigmasters.it</p>
                </div>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#0dc270",
                    padding: "14px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i
                    className="fas fa-map-marker-alt"
                    style={{ fontSize: "28px", color: "#ffffff" }}
                  ></i>
                </div>
                <div>
                  <h1
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      margin: "0 0 8px 0",
                    }}
                  >
                    Our Location
                  </h1>
                  <p> CASSANO MAGNAGO (VA) VIA FORO SAN MARTINO 22 CAP 21012</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="map_column">
            <div
              className="map-container"
              style={{
                width: "90%",
                height: "100%",
                borderRadius: "0px",
                overflow: "hidden",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.257934742569!2d74.2954288122388!3d31.462090074133382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901006a5f8755%3A0xb40fb0cc11cef7c7!2sGig%20Masters!5e0!3m2!1sen!2s!4v1732606737413!5m2!1sen!2s"
                width="100%"
                height="400px"
                style={{
                  border: "none",
                  width: "100%",
                  height: "100%",
                  minHeight: "250px",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="div_2_contact_us"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#ffffff",
          height: "700px",
        }}
      >
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "40px",
            boxShadow: "-4px 4px 15px 0 grey",

            border: "1px solid rgba(13, 194, 112, 0.1)",
            width: "90%",
            maxWidth: "500px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              height: "100%",
              justifyContent: "center",
              paddingTop: "80px",
              paddingBottom: "80px",
            }}
          >
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                color: "#2d2d2d",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              Contact Us
            </h2>

            <div style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="Your Name"
                style={{
                  width: "100%",
                  padding: "15px",
                  borderRadius: "12px",
                  border: "2px solid rgba(128, 128, 128, 0.3)", // Reduced grey opacity
                  background: "#ffffff",
                  fontSize: "16px",
                  color: "#2d2d2d",
                  transition: "all 0.3s ease",
                  boxShadow: "-4px 4px 10px rgba(0, 0, 0, 0.1)", // Shadow on bottom and left
                  "::placeholder": {
                    color: "#000000",
                    opacity: 1,
                  },
                }}
              />
            </div>

            <div style={{ position: "relative" }}>
              <input
                type="email"
                placeholder="Your Email"
                style={{
                  width: "100%",
                  padding: "15px",
                  borderRadius: "12px",
                  border: "2px solid rgba(128, 128, 128, 0.3)",
                  boxShadow: "-4px 4px 10px rgba(0, 0, 0, 0.1)",
                  background: "#ffffff",
                  fontSize: "16px",
                  color: "#2d2d2d",
                  transition: "all 0.3s ease",
                  "::placeholder": {
                    color: "#000000",
                    opacity: 1,
                  },
                }}
              />
            </div>

            <div style={{ position: "relative" }}>
              <input
                type="tel"
                placeholder="Phone Number"
                style={{
                  width: "100%",
                  padding: "15px",
                  borderRadius: "12px",
                  border: "2px solid rgba(128, 128, 128, 0.3)",
                  boxShadow: "-4px 4px 10px rgba(0, 0, 0, 0.1)",
                  background: "#ffffff",
                  fontSize: "16px",
                  color: "#2d2d2d",
                  transition: "all 0.3s ease",
                  "::placeholder": {
                    color: "black",
                    opacity: 1,
                  },
                }}
              />
            </div>

            <div style={{ position: "relative" }}>
              <textarea
                placeholder="Your Message"
                rows="6"
                style={{
                  width: "100%",
                  padding: "15px",
                  borderRadius: "12px",
                  border: "2px solid rgba(128, 128, 128, 0.3)",
                  boxShadow: "-4px 4px 10px rgba(0, 0, 0, 0.1)",
                  background: "#ffffff",
                  fontSize: "16px",
                  color: "#2d2d2d",
                  resize: "none",
                  transition: "all 0.3s ease",
                  "::placeholder": {
                    color: "#000000",
                    opacity: 1,
                  },
                }}
              />
            </div>

            <button className="button_form_class" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactnew;
