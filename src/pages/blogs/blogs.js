import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton"; // Import Skeleton component
import "react-loading-skeleton/dist/skeleton.css"; // Import skeleton styles
import Cardimage from "../../assets/images/linkedinpost1.jpeg";
import Cardimage2 from "../../assets/logo/MainLogo.svg";
import Cardimage3 from "../../assets/images/New folder/images/clay-banks-LjqARJaJotc-unsplash.jpg";
import Cardimage4 from "../../assets/images/New folder/images/dowhat.jpg";
import Facebook2 from '../../assets/images/growingourteam.jpg'
import Facebook1 from '../../assets/images/arshadnadeem.jpg'
import Facebook3 from '../../assets/images/aryan-ghauri-5F98r2fRgJE-unsplash.jpg'
import Instagram1 from '../../assets/images/New folder/images/icecream.jpg'
import Team from '../../assets/images/New folder/images/team.jpg'
import Cat from '../../assets/images/catlover.jpg'


const Blogs = () => {
  // State to track if images are loaded
  const [imageLoaded, setImageLoaded] = useState(false);

  // Simulate image loading delay (you can adjust this)
  useEffect(() => {
    setTimeout(() => {
      setImageLoaded(true); // Image loaded after 3 seconds
    },);
  }, []);

  return (
    <div>
      <ul>
        <li className="blogs_text_1">
          <p>Blogs and Posts</p>
        </li>
        <li className="blogs_text">
        <p style={{paddingLeft: '20%', paddingRight: '20%'}}>
            Explore the latest updates, insights, and content shared directly
            from our company's LinkedIn, Instagram, and Facebook pages. Stay
            connected with our latest posts, news, and more.
          </p>
        </li>
      </ul>

      <div className="blogs_main">
        <h1 className="blogs_heading-top">Linkedin Posts</h1>

        <ul className="blogs_cards">
          <li className="card_area">
            <Card style={{ width: "auto", maxWidth: "18rem" }}>
              {imageLoaded ? (
                <Card.Img
                  className={`card_image_cars`}
                  variant="top"
                  src={Cardimage}
                />
              ) : (
                <Skeleton height={180} />
              )}
              <Card.Body>
                <Card.Title className="card_title_custom">
                  Coffee & Code
                </Card.Title>
                <Card.Text className="card_description">
                  Join us for a day with developers at a cozy coffee shop!
                  Connect, share ideas, and enjoy coffee. Follow us on LinkedIn
                  for updates.
                </Card.Text>

                <a style={{fontSize:"16px"}}
                  href="https://www.linkedin.com/posts/gig-masters_syed-asad-abbas-muhammad-abdullah-muhammad-activity-7257852573431255041-jRnv?utm_source=share&utm_medium=member_desktop"
                  className="description_2"
                >
                  Read More
                </a>
              </Card.Body>
            </Card>
          </li>

          <li className="card_area">
            <Card style={{ width: "auto", maxWidth: "18rem" }}>
              {imageLoaded ? (
                <Card.Img
                  className={`card_image_cars`}
                  variant="top"
                  src={Cardimage3}
                />
              ) : (
                <Skeleton height={180} />
              )}
              <Card.Body>
                <Card.Title className="card_title_custom">
                  Meet Our Team
                </Card.Title>
                <Card.Text className="card_description">
                  Meet the talented individuals driving our success! Get to know
                  our team and the passion behind everything we do.
                </Card.Text>

                <a style={{fontSize:"16px"}}
                  href="https://www.linkedin.com/company/gig-masters/posts/?feedView=all"
                  className="description_2"
                >
                  Read More
                </a>
              </Card.Body>
            </Card>
          </li>
          <li className="card_area">
            <Card style={{ width: "auto", maxWidth: "18rem" }}>
              {imageLoaded ? (
                <Card.Img
                  className={`card_image_cars`}
                  variant="top"
                  src={Cardimage4}
                />
              ) : (
                <Skeleton height={180} />
              )}
              <Card.Body>
                <Card.Title className="card_title_custom">
                  Hiring Alert
                </Card.Title>
                <Card.Text className="card_description">
                  Explore job market trends and career advancement opportunities
                  through our LinkedIn insights.
                </Card.Text>
                <a style={{fontSize:"16px"}} href="https://www.linkedin.com/posts/gig-masters_frontend-developer-html-css-javascript-activity-7255605216283127808-HreU?utm_source=share&utm_medium=member_desktop" className="description_2">Read More</a>
              </Card.Body>
            </Card>
          </li>
          <li className="card_area">
            <Card style={{ width: "auto", maxWidth: "18rem" }}>
              {imageLoaded ? (
                <Card.Img
                  className={`card_image_cars`}
                  variant="top"
                  src={Cardimage2}
                />
              ) : (
                <Skeleton height={180} />
              )}
              <Card.Body>
                <Card.Title className="card_title_custom">
                  Follow on LinkedIn
                </Card.Title>
                <Card.Text className="card_description">
                  Our logo represents excellence. It’s a symbol of our mission
                  to empower professionals. Follow us to learn more about our
                  journey!
                </Card.Text>

                <a style={{fontSize:"16px"}}
                  href="https://www.linkedin.com/company/gig-masters/posts/?feedView=all"
                  className="description_2"
                >
                  Read More
                </a>
              </Card.Body>
            </Card>
          </li>
        </ul>
      </div>
      <div className="blogs_main">
        <h1 className="blogs_heading-top">Facebook Posts</h1>

        <ul className="blogs_cards">
          <li className="card_area">
            <Card style={{ width: "auto", maxWidth: "18rem" }}>
              {imageLoaded ? (
                <Card.Img
                  className={`card_image_cars`}
                  variant="top"
                  src={Cat}
                />
              ) : (
                <Skeleton height={180} />
              )}
              <Card.Body>
              <Card.Title className="card_title_custom">Cat Lovers</Card.Title>
<Card.Text className="card_description">
  Celebrate your love for cats with fun, inspiring content and adorable moments shared by fellow cat enthusiasts.
</Card.Text>


                <a style={{fontSize:"16px"}} href="https://www.facebook.com/share/r/128oJpXiNgu/" className="description_2">Read More</a>
              </Card.Body>
            </Card>
          </li>

          <li className="card_area">
            <Card style={{ width: "auto", maxWidth: "18rem" }}>
              {imageLoaded ? (
                <Card.Img
                  className={`card_image_cars`}
                  variant="top"
                  src={Facebook2}
                />
              ) : (
                <Skeleton height={180} />
              )}
              <Card.Body>
              <Card.Title className="card_title_custom">Growing Our Team</Card.Title>
<Card.Text className="card_description">
  Discover opportunities to join our expanding team and be part of a dynamic group that’s driving innovation and success.
</Card.Text>

                <a style={{fontSize:"16px"}} href="https://www.facebook.com/share/p/1Dg3wT3m85/" className="description_2">Read More</a>
              </Card.Body>
            </Card>
          </li>

          <li className="card_area">
            <Card style={{ width: "auto", maxWidth: "18rem" }}>
              {imageLoaded ? (
                <Card.Img
                  className={`card_image_cars`}
                  variant="top"
                  src={Facebook3}
                />
              ) : (
                <Skeleton height={180} />
              )}
              <Card.Body>
              <Card.Title className="card_title_custom">Androon Lahore</Card.Title>
<Card.Text className="card_description">
  Explore the rich history, culture, and vibrant life of Androon Lahore. Stay connected for updates on community highlights.
</Card.Text>

                <a style={{fontSize:"16px"}} href="https://www.facebook.com/share/r/1Qp3FAjQxf/" className="description_2">Read More</a>
              </Card.Body>
            </Card>
          </li>
          <li className="card_area">
            <Card style={{ width: "auto", maxWidth: "18rem" }}>
              {imageLoaded ? (
                <Card.Img
                  className={`card_image_cars`}
                  variant="top"
                  src={Cardimage2}
                />
              ) : (
                <Skeleton height={180} />
              )}
              <Card.Body>
              <Card.Title className="card_title_custom">Follow on Facebook</Card.Title>
<Card.Text className="card_description">
  Connect with us on Facebook and discover the latest updates, success stories, and marketing insights.
</Card.Text>

                <a style={{fontSize:"16px"}} href="https://www.facebook.com/Gigmasaters.it?mibextid=kFxxJD" className="description_2">Read More</a>
              </Card.Body>
            </Card>
          </li>
        </ul>
      </div>
      <div className="blogs_main">
        <h1 className="blogs_heading-top">Instagram Posts</h1>

        <ul className="blogs_cards">
          <li className="card_area">
            <Card style={{ width: "auto", maxWidth: "18rem" }}>
              {imageLoaded ? (
                <Card.Img
                  className={`card_image_cars`}
                  variant="top"
                  src={Instagram1}
                />
              ) : (
                <Skeleton height={180} />
              )}
              <Card.Body>
              <Card.Title className="card_title_custom">Ice Cream & Devs</Card.Title>
<Card.Text className="card_description">
  Enjoyed a coding, Ice cream with cool vibes as we explore the sweet side of development with developers and in Lahore's cold night.
</Card.Text>

                <a style={{fontSize:"16px"}} href="https://www.instagram.com/reel/C95liMJueab/?igsh=aTZuOHZkNWcxZTk5" className="description_2">Read More</a>
              </Card.Body>
            </Card>
          </li>

          <li className="card_area">
            <Card style={{ width: "auto", maxWidth: "18rem" }}>
              {imageLoaded ? (
                <Card.Img
                  className={`card_image_cars`}
                  variant="top"
                  src={Team}
                />
              ) : (
                <Skeleton height={180} />
              )}
              <Card.Body>
              <Card.Title className="card_title_custom">Team Work</Card.Title>
<Card.Text className="card_description">
  Discover how collaboration, creativity, and unity drive our team's success. Get a glimpse behind the scenes of our journey together.
</Card.Text>

                <a style={{fontSize:"16px"}} href="https://www.instagram.com/p/DCjPIMAOW4w/?igsh=MXFzbG8xcTRkb2V5Zg==" className="description_2">Read More</a>
              </Card.Body>
            </Card>
          </li>

          <li className="card_area">
            <Card style={{ width: "auto", maxWidth: "18rem" }}>
              {imageLoaded ? (
                <Card.Img
                  className={`card_image_cars`}
                  variant="top"
                  src={Facebook1}
                />
              ) : (
                <Skeleton height={180} />
              )}
              <Card.Body>
                <Card.Title className="card_title_custom">Pride of Nation</Card.Title>
<Card.Text className="card_description">
  Celebrate our achievements, values, and commitment to excellence as we showcase the pride that unites us all.
</Card.Text>

                <a style={{fontSize:"16px"}} href="https://www.instagram.com/p/C-fq4O9IaDN/?igsh=MXFueXZwdXQzYmozcw==" className="description_2">Read More</a>
              </Card.Body>
            </Card>
          </li>

          <li className="card_area">
            <Card style={{ width: "auto", maxWidth: "18rem" }}>
              {imageLoaded ? (
                <Card.Img
                  className={`card_image_cars`}
                  variant="top"
                  src={Cardimage2}
                />
              ) : (
                <Skeleton height={180} />
              )}
              <Card.Body>
              <Card.Title className="card_title_custom">Follow on Instagram</Card.Title>
<Card.Text className="card_description">
  Explore the latest updates directly from our Instagram page. Stay connected with our creative journey.
</Card.Text>

                <a style={{fontSize:"16px"}} href="https://www.instagram.com/gigmasters_it?igsh=djFzaHZpN2VuMDZ3" className="description_2">Read More</a>
              </Card.Body>
            </Card>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blogs;
