import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="bodybox">
      <Container>
        <Row>
          <div className="page-title">
            <h1>Categories</h1>
          </div>
        </Row>
        <Row>
          <div className="page-content">
            <Link to="../pages_admin/categories/category-list">
              <div className="orange-box">
                <div className="orange-box-title">LIST OF CATEGORIES</div>
              </div>
            </Link>

            <Link to="../pages_admin/categories/issue-list">
              <div className="orange-box">
                <div className="orange-box-title">LIST OF ISSUES</div>
              </div>
            </Link>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Categories;
