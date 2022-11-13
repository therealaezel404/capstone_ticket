import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import AllVoidedTicketIT from "../components_it/AllVoidedTicketIT";

const ViewAllVoidedTicketIT = () => {
  return (
    <div className="bodybox">
      <Container>
        <Row>
          <div className="page-title">
            <h1>View Voided Ticket</h1>
          </div>
        </Row>
        <Row>
          <Link
            to="../pages_it/alltickets/all-voided-tickets"
            className="back-button-text"
          >
            <h5 className="back-button">
              <i className="bi bi-arrow-left-circle"></i> Back{" "}
            </h5>
          </Link>
        </Row>

        <Row>
          <div className="page-content">
            <AllVoidedTicketIT />
          </div>
        </Row>
      </Container>
      <Outlet />
    </div>
  );
};

export default ViewAllVoidedTicketIT;
