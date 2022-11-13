import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { Link } from "react-router-dom";

const ServiceRequestsHelp = () => {
  return (
    <div className="bodybox">
      <Container>
        <Row>
          <div className="page-title">
            <h1>Service Requests</h1>
          </div>
        </Row>
        <Row>
          <div className="page-content">
            <Link to="../pages_desk/servicerequests/new-service-requests">
              <div className="orange-box">
                <div className="orange-box-number">10</div>
                <div className="orange-box-title">NEW SERVICE REQUESTS</div>
              </div>
            </Link>

            <Link to="../pages_desk/servicerequests/reopen-ticket-requests">
              <div className="orange-box">
                <div className="orange-box-number">2</div>
                <div className="orange-box-title">REOPEN TICKET REQUESTS</div>
              </div>
            </Link>

            <Link to="../pages_desk/servicerequests/rejected-service-requests">
              <div className="orange-box">
                <div className="orange-box-number">3</div>
                <div className="orange-box-title">
                  REJECTED SERVICE REQUESTS
                </div>
              </div>
            </Link>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceRequestsHelp;
