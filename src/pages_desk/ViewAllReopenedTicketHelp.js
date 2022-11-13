import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import AllReopenedTicketHelp from "../components_desk/AllReopenedTicketHelp";

const ViewAllReopenedTicketHelp = () => {
  return (
    <div className="bodybox">
      <Container>
        <Row>
          <div className="page-title">
            <h1>View Reopened Ticket</h1>
          </div>
        </Row>
        <Row>
          <Link
            to="../pages_desk/alltickets/all-reopened-tickets"
            className="back-button-text"
          >
            <h5 className="back-button">
              <i className="bi bi-arrow-left-circle"></i> Back{" "}
            </h5>
          </Link>
        </Row>

        <Row>
          <div className="page-content">
            <AllReopenedTicketHelp />
          </div>
        </Row>
      </Container>
      <Outlet />
    </div>
  );
};

export default ViewAllReopenedTicketHelp;
