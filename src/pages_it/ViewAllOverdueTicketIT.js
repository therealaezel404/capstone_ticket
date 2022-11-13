import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import AllOverdueTicketIT from "../components_it/AllOverdueTicketIT";

const ViewAllOverdueTicketIT = () => {
  return (
    <div className="bodybox">
      <Container>
        <Row>
          <div className="page-title">
            <h1>View Overdue Ticket</h1>
          </div>
        </Row>
        <Row>
          <Link
            to="../pages_it/alltickets/all-overdue-tickets"
            className="back-button-text"
          >
            <h5 className="back-button">
              <i className="bi bi-arrow-left-circle"></i> Back{" "}
            </h5>
          </Link>
        </Row>

        <Row>
          <div className="page-content">
            <AllOverdueTicketIT />
          </div>
        </Row>
      </Container>
      <Outlet />
    </div>
  );
};

export default ViewAllOverdueTicketIT;
