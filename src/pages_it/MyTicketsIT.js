import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { Outlet } from "react-router";

const MyTicketsIT = () => {
  return (
    <div className="bodybox">
      <Container>
        <Row>
          <div className="page-title">
            <h1>My Tickets</h1>
          </div>
        </Row>

        <Row>
          <div className="page-content">
            <Link to="../pages_it/mytickets/assignedtickets">
              <div className="orange-box">
                <div className="orange-box-number">10</div>
                <div className="orange-box-title">ASSIGNED TICKETS</div>
              </div>
            </Link>

            <Link to="../pages_it/mytickets/reopenedtickets">
              <div className="orange-box">
                <div className="orange-box-number">2</div>
                <div className="orange-box-title">REOPENED TICKETS</div>
              </div>
            </Link>

            <Link to="../pages_it/mytickets/overduetickets">
              <div className="orange-box">
                <div className="orange-box-number">3</div>
                <div className="orange-box-title">OVERDUE TICKETS</div>
              </div>
            </Link>

            <Link to="../pages_it/mytickets/resolvedtickets">
              <div className="orange-box">
                <div className="orange-box-number">5</div>
                <div className="orange-box-title">RESOLVED TICKETS</div>
              </div>
            </Link>
          </div>
        </Row>
      </Container>

      <Outlet />
    </div>
  );
};

export default MyTicketsIT;
