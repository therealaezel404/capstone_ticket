import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const Templates = () => {
  return (
    <div className="bodybox">
      <Container>
        <Row>
          <div className="page-title">
            <h1>Templates</h1>
          </div>
        </Row>
        <Row>
          <div className="page-content">
            <Link to="../pages_admin/templates/rejecting-requests-reasons">
              <div className="orange-box">
                <div className="orange-box-title">
                  REJECTING REQUESTS REASONS
                </div>
              </div>
            </Link>

            <Link to="../pages_admin/templates/resolving-tickets-solutions">
              <div className="orange-box">
                <div className="orange-box-title">
                  RESOLVING TICKETS SOLUTIONS
                </div>
              </div>
            </Link>

            <Link to="../pages_admin/templates/voiding-ticket-reasons">
              <div className="orange-box">
                <div className="orange-box-title">VOIDING TICKETS REASONS</div>
              </div>
            </Link>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Templates;
