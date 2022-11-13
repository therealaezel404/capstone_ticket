import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import ANRejReasonForm from "../components_admin/ANRejReasonForm";

const AddNewRejectingReason = () => {
  return (
    <div className="bodybox">
      <Container>
        <Row>
          <div className="page-title">
            <h1>Add New Rejecting Reason</h1>
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
            <ANRejReasonForm />
          </div>
        </Row>
      </Container>
      <Outlet />
    </div>
  );
};

export default AddNewRejectingReason;
