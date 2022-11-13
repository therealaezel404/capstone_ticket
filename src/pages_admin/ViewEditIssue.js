import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import VEIssue from "../components_admin/VEIssue";

const ViewEditIssue = () => {
  return (
    <div className="bodybox">
      <Container>
        <Row>
          <div className="page-title">
            <h1>View and Edit Issue</h1>
          </div>
        </Row>

        <Row>
          <Link
            to="../pages_admin/categories/issue-list"
            className="back-button-text"
          >
            <h5 className="back-button">
              <i className="bi bi-arrow-left-circle"></i> Back{" "}
            </h5>
          </Link>
        </Row>
        <Row>
          <div className="page-content">
            <VEIssue />
          </div>
        </Row>
      </Container>
      <Outlet />
    </div>
  );
};

export default ViewEditIssue;
