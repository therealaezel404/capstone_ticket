import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Welc from "../assets_client/welc.jpg";
import Logo from "../assets_client/logo.png";
import Inquire from "../assets_client/inquire.png";
import Check from "../assets_client/check.png";
import { Link, Outlet } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <Container fluid className="banner">
        <Row>
          <Col className="yellow-stripe"></Col>
        </Row>
        <Row>
          <div
            className="welcome"
            style={{
              backgroundImage: `url(${Welc})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
              height: "100%",
            }}
          >
            <Container>
              <Row>
                <Col className="banner-text-left">WELCOME!</Col>
              </Row>
              <Row>
                <Col className="banner-text-right">
                  UST CLOUD CAMPUS<br></br>TECHNICAL SUPPORT TICKETING SYSTEM
                </Col>
              </Row>
            </Container>
          </div>
        </Row>
        <Row>
          <Col className="orange-stripe"></Col>
        </Row>
      </Container>
      <div className="wrapper">
        <Container className="welcome-body">
          <Row className="welcome-info">
            <Col md={5} className="about">
              <img src={Logo} alt="cloud campus logo" />
            </Col>
            <Col className="about">
              <p>
                UST Students, Faculty and Staff may use the ticketing system by
                submiting a "ticket" through this site if they have an issue
                regarding the online services provided by UST EDTECH, which they
                wish for the Center to address.
                <br></br>
                <br></br>A ticket is a formal document which details the issue
                encountered, and it will be reviewed by EDTECH Techinical
                Support Staff, who will then attempt to resolve the issue.{" "}
                <b>See below to follow the ticketing process.</b>
              </p>
            </Col>
          </Row>
        </Container>

        <div className="welcomeCardWrapper">
          <div className="welcomeCard">
            <img src={Inquire} alt="inquire icon" />
            <p>
              If you wish to submit a technical inquiry, click below to proceed
              to the Ticketing form.{" "}
            </p>
            <Link className="action-card-btn" to="createnewticket">
              <h6>CREATE NEW TICKET</h6>
            </Link>
          </div>
          <div className="welcomeCard">
            <img src={Check} alt="check icon" />
            <p>
              If you have previously submitted a ticket and wish to view its
              status, click below.{" "}
            </p>
            <Link className="action-card-btn" to="clientlogin">
              <h6>CHECK TICKET STATUS</h6>
            </Link>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Welcome;
