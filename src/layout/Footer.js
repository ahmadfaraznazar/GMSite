import { FC, ReactNode } from "react";
import React from "react";
import BigLogo from "../assets/images/BigLogo.svg";
import { ReactComponent as IconRegister } from "../assets/images/IconRegister.svg";
import { ReactComponent as IconBuilding } from "../assets/images/IconBuilding.svg";
// import { ReactComponent as IconInsta } from "../assets/images/IconInsta.svg"
import { Link, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-20 dark:bg-dark lg:pt-[100px]">
        <div className="container custom_footer_text_check">
          <div className="-mx- flex flex-wrap justify-between">
            <div className="w-full px-3 sm:w-2/3 lg:w-3/12">
              <div className="mb-10 w-full text-center">
                <Link
                  to="/#"
                  className="mb-6 inline-block max-w-[400px] mx-auto"
                >
                  <img
                    src={BigLogo}
                    alt="logo"
                    height={200}
                    width={400}
                    className="mx-auto"
                  />
                </Link>
                <p className="mb-5 text-[24px] font-bold text-body-color dark:text-dark-6 text-left">
                  At Gig Masters, we specialize in online services designed to
                  transform your digital presence.
                </p>

                {/* <h4 className="text-[19px] font-semibold text-dark dark:text-white">
                  Headquarter
                </h4> */}

                <p className="mt-3 text-[17px] font-medium text-dark dark:text-white flex items-center">
                  <span className="text-[#0dc270] icons_custom_application new_custom_1 w-[30px] mr-4 flex justify-center">
                    <IconBuilding />
                  </span>
                  CASSANO MAGNAGO (VA) VIA FORO SAN MARTINO 22 CAP 21012
                </p>

                <p className="mt-3 text-[17px] font-medium text-dark dark:text-white flex items-center">
                  <span className="text-[#0dc270] icons_custom_application w-[30px] mr-4 flex justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_941_15626)">
                        <path
                          d="M15.1875 19.4688C14.3438 19.4688 13.375 19.25 12.3125 18.8438C10.1875 18 7.84377 16.375 5.75002 14.2813C3.65627 12.1875 2.03127 9.84377 1.18752 7.68752C0.250019 5.37502 0.343769 3.46877 1.43752 2.40627C1.46877 2.37502 1.53127 2.34377 1.56252 2.31252L4.18752 0.750025C4.84377 0.375025 5.68752 0.562525 6.12502 1.18752L7.96877 3.93753C8.40627 4.59378 8.21877 5.46877 7.59377 5.90627L6.46877 6.68752C7.28127 8.00002 9.59377 11.2188 13.2813 13.5313L13.9688 12.5313C14.5 11.7813 15.3438 11.5625 16.0313 12.0313L18.7813 13.875C19.4063 14.3125 19.5938 15.1563 19.2188 15.8125L17.6563 18.4375C17.625 18.5 17.5938 18.5313 17.5625 18.5625C17 19.1563 16.1875 19.4688 15.1875 19.4688ZM2.37502 3.46878C1.78127 4.12503 1.81252 5.46877 2.50002 7.18752C3.28127 9.15627 4.78127 11.3125 6.75002 13.2813C8.68752 15.2188 10.875 16.7188 12.8125 17.5C14.5 18.1875 15.8438 18.2188 16.5313 17.625L18.0313 15.0625C18.0313 15.0313 18.0313 15.0313 18.0313 15L15.2813 13.1563C15.2813 13.1563 15.2188 13.1875 15.1563 13.2813L14.4688 14.2813C14.0313 14.9063 13.1875 15.0938 12.5625 14.6875C8.62502 12.25 6.18752 8.84377 5.31252 7.46877C4.90627 6.81252 5.06252 5.96878 5.68752 5.53128L6.81252 4.75002V4.71878L4.96877 1.96877C4.96877 1.93752 4.93752 1.93752 4.90627 1.96877L2.37502 3.46878Z"
                          fill="currentColor"
                        />
                        <path
                          d="M18.3125 8.90633C17.9375 8.90633 17.6563 8.62508 17.625 8.25008C17.375 5.09383 14.7813 2.56258 11.5938 2.34383C11.2188 2.31258 10.9063 2.00008 10.9375 1.59383C10.9688 1.21883 11.2813 0.906333 11.6875 0.937583C15.5625 1.18758 18.7188 4.25008 19.0313 8.12508C19.0625 8.50008 18.7813 8.84383 18.375 8.87508C18.375 8.90633 18.3438 8.90633 18.3125 8.90633Z"
                          fill="currentColor"
                        />
                        <path
                          d="M15.2187 9.18755C14.875 9.18755 14.5625 8.93755 14.5312 8.56255C14.3437 6.87505 13.0312 5.56255 11.3437 5.3438C10.9687 5.31255 10.6875 4.93755 10.7187 4.56255C10.75 4.18755 11.125 3.9063 11.5 3.93755C13.8437 4.2188 15.6562 6.0313 15.9375 8.37505C15.9687 8.75005 15.7187 9.0938 15.3125 9.1563C15.25 9.18755 15.2187 9.18755 15.2187 9.18755Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_941_15626">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  (+39) 375 911 9255
                </p>
              </div>
            </div>

            <LinkGroup header="Quick Links">
              <FooterLink link="/" label="Home" />
              <FooterLink link="/services" label="Services" />
              <FooterLink link="/company" label="Company" />
              <FooterLink link="/careers" label="Careers" />
              <FooterLink link="/blogs" label="Blogs" />
              <FooterLink link="/contact-us" label="Contact Us" />
            </LinkGroup>

            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <div className="mb-10 w-full flex flex-col items-start justify-start">
                <h4 className="mb-9 text-[30px] font-bold text-dark dark:text-white uppercase">
                  FOLLOW US ON
                </h4>
                <div className="mb-6 flex items-start justify-start space-x-4">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/company/gig-masters/posts/?feedView=all"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke text-[#0dc270] "
                  >
                    <i className="fab fa-linkedin-in text-xl"></i>
                  </a>
                  {/* <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/GigMaasters"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke text-[#0dc270] dark:border-dark-3 dark:text-white"
                  >
                   <i className="fab fa-x-twitter text-xl"></i>

                  </a> */}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/Gigmasaters.it"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke text-[#0dc270] "
                  >
                    <i className="fab fa-facebook text-xl"></i>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/gigmasters_it"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke text-[#0dc270] "
                  >
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="absolute bottom-0 left-0 z-[-1]">
            <svg
              width={217}
              height={229}
              viewBox="0 0 217 229"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                fill="url(#paint0_linear_1179_5)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_5"
                  x1="76.5"
                  y1={281}
                  x2="76.5"
                  y2="1.22829e-05"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3056D3" stopOpacity="0.08" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-10 top-10 z-[-1] icon_ghaib ">
            <svg
              width={75}
              height={75}
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                fill="url(#paint0_linear_1179_4)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_4"
                  x1="-1.63917e-06"
                  y1="37.5"
                  x2={75}
                  y2="37.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#13C296" stopOpacity="0.31" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
        <div className="mt-3">
          <p className="py-4 border-t border-gray-4 text-center text-sm text-body-color dark:text-dark-6">
            © 2024 Gig Masters. All Rights Reserverd
          </p>
        </div>
      </footer>
    </>
  );
};

const LinkGroup = ({
  children,
  header,
}) => {
  return (
    <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
      <div className="mb-10 w-ful testing_footer_123">
        <h4 className="mb-9 text-[30px] font-semibold text-dark dark:text-white text-uppercase text-left">
          {header.toUpperCase()}
        </h4>
        <ul className="space-y-2 cursor-pointer text-[24px] font-bold text-left">
          {children}
        </ul>
      </div>
    </div>
  );
};

const FooterScrollLink = ({
  section,
  label,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Scroll to top immediately
    window.scrollTo(0, 0);

    // Navigate to the specified route ("/")
    navigate("/", { replace: true });

    // If you need to do a scroll to a specific section after navigating
    setTimeout(() => {
      scroller.scrollTo(section, {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }, 100);
  };

  return (
    <li>
      <div
        onClick={handleClick}
        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
      >
        {label}
      </div>
    </li>
  );
};

const FooterLink = ({ link, label }) => {
  const handleClick = () => {
    // Scroll to top immediately when the link is clicked
    window.scrollTo(0, 0);
  };

  return (
    <li>
      <Link
        to={link}
        onClick={handleClick} // Add onClick to scroll to top
        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
      >
        {label}
      </Link>
    </li>
  );
};

export default Footer;
