import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EdTech from "../assets_client/edtech.png";
import Ust from "../assets_client/ust.jpg";

const Footer = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="footer-motto">
          <h1>
            <b>WE ARE HAPPY TO ASSIST YOU!</b>
          </h1>
        </Col>
      </Row>

      <Row>
        <Col className="bot-yellow"></Col>
        <Col className="bot-blue"></Col>
        <Col className="bot-red"></Col>
      </Row>
      <Container fluid className="footer">
        <Row>
          <Col className="footer-logos">
            <span className="footer-ust">
              <img src={Ust} alt="ust logo" />
            </span>
            <span className="footer-edtech">
              <img src={EdTech} alt="edtech logo" />
            </span>
          </Col>
          <Col className="footer-head">
            <h5>Contact Us</h5>
          </Col>
        </Row>
        <Row>
          <Col className="footer-txt">
            <p>
              The University of Santo Tomas - Educational Technology Center is
              the pioneer and leader in massive-wide elearning adoption in the
              Philippines. Its Innovative Learning and Technology Unit is
              composed of a team of elearning specialists which provides
              professional development training programs, mentoring and
              consultation sessions to educators in the area of digital
              instruction from face-to-face to fully online learning
              environments.{" "}
            </p>
          </Col>
          <Col className="footer-contact">
            <Container>
              <Row className="footer-contact-text">
                <p>
                  <span>
                    <i className="bi bi-geo-alt"></i>
                  </span>{" "}
                  12/F Buenaventura G. Paredes, OP Building University of Santo
                  Tomas, España, Manila, Philippines
                </p>
              </Row>
              <Row className="footer-contact-text">
                <p>
                  <span>
                    <i className="bi bi-clock"></i>
                  </span>{" "}
                  Monday – Saturdays 7:00 AM – 12:00 MN
                </p>
              </Row>
              <Row className="footer-contact-text">
                <p>
                  <span>
                    <i className="bi bi-envelope"></i>
                  </span>{" "}
                  edtech.center@ust.edu.ph{" "}
                </p>
              </Row>
              <Row className="footer-contact-text">
                <a
                  className="externalLink"
                  href="https://www.elearningust.info/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    <i className="bi bi-globe2"></i>
                  </span>{" "}
                  www.elearningust.info
                </a>
              </Row>
            </Container>
            <Container>
              <Row xs="auto">
                <Col className="facebook">
                  <a
                    className="externalLink"
                    href="https://www.facebook.com/ustedtechcenter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* <FiFacebook className="footerIcon" size={40} /> */}
                    <p>
                      <i className="bi bi-facebook"></i>
                    </p>
                  </a>
                </Col>
                <Col className="twitter">
                  <a
                    className="externalLink"
                    href="https://twitter.com/UST_Edtech"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* <FiTwitter className="footerIcon" size={40} /> */}
                    <p>
                      <i className="bi bi-twitter "></i>
                    </p>
                  </a>
                </Col>
                <Col className="instagram">
                  <a
                    className="externalLink"
                    href="https://www.instagram.com/ust_edtech/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* <FiInstagram className="footerIcon" size={40} /> */}
                    <p>
                      <i className="bi bi-instagram"></i>
                    </p>
                  </a>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
