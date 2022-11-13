import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import ANCatForm from "../components_admin/ANCatForm";

const AddNewCategory = () => {
  
  return (
    <div className="bodybox">
      <Container>
        <Row>
          <div className="page-title">
            <h1>Add New Category</h1>
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
            <ANCatForm />
          </div>
        </Row>
      </Container>
      <Outlet />
    </div>
  );
};

export default AddNewCategory;
