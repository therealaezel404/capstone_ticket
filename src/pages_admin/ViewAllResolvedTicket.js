import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import AllResolvedTicket from "../components_admin/AllResolvedTicket";

const ViewAllResolvedTicket = () => {
  return (
    <div className="bodybox">
      <Container>
        <Row>
          <div className="page-title">
            <h1>View Resolved Ticket</h1>
          </div>
        </Row>
        <Row>
          <Link
            to="../pages_admin/alltickets/all-resolved-tickets"
            className="back-button-text"
          >
            <h5 className="back-button">
              <i className="bi bi-arrow-left-circle"></i> Back{" "}
            </h5>
          </Link>
        </Row>

        <Row>
          <div className="page-content">
            <AllResolvedTicket />
          </div>
        </Row>
      </Container>
      <Outlet />
    </div>
  );
};

export default ViewAllResolvedTicket;
