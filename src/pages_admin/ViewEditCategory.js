import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import VECategory from "../components_admin/VECategory";

const ViewEditCategory = () => {
  return (
    <div className="bodybox">
      <Container>
        <Row>
          <div className="page-title">
            <h1>View and Edit Category</h1>
          </div>
        </Row>

        <Row>
          <Link
            to="../pages_admin/categories/category-list"
            className="back-button-text"
          >
            <h5 className="back-button">
              <i className="bi bi-arrow-left-circle"></i> Back{" "}
            </h5>
          </Link>
        </Row>
        <Row>
          <div className="page-content">
            <VECategory />
          </div>
        </Row>
      </Container>
      <Outlet />
    </div>
  );
};

export default ViewEditCategory;
