import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { Link } from "react-router-dom";

const AllTicketsHelp = () => {
  return (
    <div className="bodybox">
      <Container>
        <Row>
          <div className="page-title">
            <h1>All Tickets</h1>
          </div>
        </Row>
        <Row>
          <div className="page-content">
            <Link to="../pages_desk/alltickets/all-open-tickets">
              <div className="orange-box">
                <div className="orange-box-number">10</div>
                <div className="orange-box-title">ALL OPEN TICKETS</div>
              </div>
            </Link>

            <Link to="../pages_desk/alltickets/all-reopened-tickets">
              <div className="orange-box">
                <div className="orange-box-number">2</div>
                <div className="orange-box-title">ALL REOPENED TICKETS</div>
              </div>
            </Link>

            <Link to="../pages_desk/alltickets/all-resolved-tickets">
              <div className="orange-box">
                <div className="orange-box-number">5</div>
                <div className="orange-box-title">ALL RESOLVED TICKETS</div>
              </div>
            </Link>

            <Link to="../pages_desk/alltickets/all-overdue-tickets">
              <div className="orange-box">
                <div className="orange-box-number">3</div>
                <div className="orange-box-title">ALL OVERDUE TICKETS</div>
              </div>
            </Link>

            <Link to="../pages_desk/alltickets/all-voided-tickets">
              <div className="orange-box">
                <div className="orange-box-number">5</div>
                <div className="orange-box-title">ALL VOIDED TICKETS</div>
              </div>
            </Link>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default AllTicketsHelp;
