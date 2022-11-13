import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import AllOverdueTicketHelp from "../components_desk/AllOverdueTicketHelp";

const ViewAllOverdueTicketHelp = () => {
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
            to="../pages_desk/alltickets/all-overdue-tickets"
            className="back-button-text"
          >
            <h5 className="back-button">
              <i className="bi bi-arrow-left-circle"></i> Back{" "}
            </h5>
          </Link>
        </Row>

        <Row>
          <div className="page-content">
            <AllOverdueTicketHelp />
          </div>
        </Row>
      </Container>
      <Outlet />
    </div>
  );
};

export default ViewAllOverdueTicketHelp;
