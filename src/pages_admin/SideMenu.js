import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopLogo from "../assets_admin/toplogo.png";
import { Link, NavLink } from "react-router-dom";

const SideMenu = () => {
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
          <li className="link-wrapper">
            <NavLink
              to="pages_admin/dashboard"
              className="menu-item"
              // activeclassname="active"
            >
              <div className="menu-icon">
                <i title="Dashboard" className="bi bi-speedometer2"></i>
              </div>
              <span>Dashboard</span>
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="pages_admin/servicerequests" className="menu-item">
              <div className="menu-icon">
                <i title="Service Requests" className="bi bi-archive"></i>
              </div>
              <span>Service Requests</span>
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="pages_admin/mytickets" className="menu-item">
              <div className="menu-icon">
                <i title="My Tickets" className="bi bi-ticket-perforated"></i>
              </div>
              <span>My Tickets</span>
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="pages_admin/alltickets" className="menu-item">
              <div className="menu-icon">
                <i
                  title="All Tickets"
                  className="bi bi-ticket-detailed-fill"
                ></i>
              </div>
              <span>All Tickets</span>
            </NavLink>
          </li>
        </ul>
        <br></br>
        <div className="header">
          <h6>A D M I N I S T R A T I O N</h6>
        </div>
        <ul>
          <li>
            <NavLink to="pages_admin/categories" className="menu-item">
              <div className="menu-icon">
                <i title="Categories" className="bi bi-card-list"></i>
              </div>
              <span>Categories</span>
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="pages_admin/users" className="menu-item">
              <div className="menu-icon">
                <i title="Users" className="bi bi-people"></i>
              </div>
              <span>Users</span>
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="pages_admin/userroles" className="menu-item">
              <div className="menu-icon">
                <i title="User Roles" className="bi bi-person-lines-fill"></i>
              </div>
              <span>User Roles</span>
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="pages_admin/templates" className="menu-item">
              <div className="menu-icon">
                <i title="Templates" className="bi bi-card-heading"></i>
              </div>
              <span>Templates</span>
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="pages_admin/feedback" className="menu-item">
              <div className="menu-icon">
                <i title="Feedback" className="bi bi-rss"></i>
              </div>
              <span>Feedback</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="side-menu-footer">
        <div className="contaniner">
          <div className="row">
            <div className="col-xs">
              <li>
                <NavLink
                  style={{ textDecoration: "none" }}
                  to="pages_admin/myaccount"
                  // activeclassname="active"
                  className="menu-item-footer"
                >
                  <span>My Account</span>
                </NavLink>
              </li>
            </div>
            <div className="col-xs">
              <Link
                style={{ textDecoration: "none" }}
                to="/admin"
                className="menu-item-footer"
              >
                <span>
                  <span>Log Out</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
