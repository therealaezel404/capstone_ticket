import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopLogo from "../assets_admin/toplogo.png";
import { Link } from "react-router-dom";

const SideMenuHelp = () => {
  return (
    <div className="side-menu">
      <div className="top-section">
        <Container fluid>
          <Row>
            <Col>
              <div className="logo">
                <img src={TopLogo} alt="cloudcampus" />
              </div>
            </Col>
            <Container fluid>
              <Col>
                <div className="title">
                  <h3>UST CLOUD CAMPUS</h3>
                  <h1>TECHNICAL SUPPORT TICKETING SYSTEM</h1>
                </div>
              </Col>
            </Container>
          </Row>
        </Container>
      </div>
      <hr></hr>

      <div className="main-menu">
        <div className="header">
          <h6>G E N E R A L</h6>
        </div>
        <ul>
          <li>
            <Link to="pages_desk/dashboard" className="menu-item">
              <div className="menu-icon">
                <i title="Dashboard" className="bi bi-speedometer2"></i>
              </div>
              <span>Dashboard</span>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="pages_desk/servicerequests" className="menu-item">
              <div className="menu-icon">
                <i title="Service Requests" className="bi bi-archive"></i>
              </div>
              <span>Service Requests</span>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="pages_desk/mytickets" className="menu-item">
              <div className="menu-icon">
                <i title="My Tickets" className="bi bi-ticket-perforated"></i>
              </div>
              <span>My Tickets</span>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="pages_desk/alltickets" className="menu-item">
              <div className="menu-icon">
                <i
                  title="All Tickets"
                  className="bi bi-ticket-detailed-fill"
                ></i>
              </div>
              <span>All Tickets</span>
            </Link>
          </li>
        </ul>
        <br></br>
      </div>

      <div className="side-menu-footer">
        <div className="contaniner">
          <div className="row">
            <div className="col-xs">
              <span>
                <Link to="pages_desk/myaccount">
                  <p>My Account</p>
                </Link>
              </span>
            </div>
            <div className="col-xs">
              <Link to="/admin">
                <span>
                  <p>Log Out</p>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenuHelp;
