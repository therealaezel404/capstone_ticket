import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import VERejectingReason from "../components_admin/VERejectingReason";

const ViewRejectingReason = () => {
  return (
    <div className="bodybox">
      <Container>
        <Row>
          <div className="page-title">
            <h1>View and Edit Rejecting Reason</h1>
          </div>
        </Row>

        <Row>
          <Link
            to="../pages_admin/templates/rejecting-requests-reasons"
            className="back-button-text"
          >
            <h5 className="back-button">
              <i className="bi bi-arrow-left-circle"></i> Back{" "}
            </h5>
          </Link>
        </Row>
        <Row>
          <div className="page-content">
            <VERejectingReason />
          </div>
        </Row>
      </Container>
      <Outlet />
    </div>
  );
};

export default ViewRejectingReason;
