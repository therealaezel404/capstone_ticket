import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";

const Feedback = () => {
  const data = {
    columns: [
      {
        label: "TRC",
        field: "trc",
        sort: "asc",
        width: 150,
      },
      {
        label: "Technical Support",
        field: "technicalSupport",
        sort: "asc",
        width: 200,
      },
      {
        label: "Support Satisfaction",
        field: "supportSatisfaction",
        sort: "asc",
        width: 100,
      },
      {
        label: "Resolution Satisfaction",
        field: "resolutionSatisfaction",
        sort: "asc",
        width: 100,
      },
      {
        label: "Comments",
        field: "comments",
        sort: "asc",
        width: 200,
      },
      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [
      {
        trc: 13165,
        technicalSupport: "Michaels, Steve",
        supportSatisfaction: 3,
        resolutionSatisfaction: 5,
        comments: "aklsjdhajsdhksj aksjdhkad very good",
        action: <Link to="../pages_admin/feedback/view-feedback">View</Link>,
      },
      {
        trc: 31376,
        technicalSupport: "Brown, Millie",
        supportSatisfaction: 5,
        resolutionSatisfaction: 4,
        comments: "ew nasty",
        action: <Link to="../pages_admin/feedback/view-feedback">View</Link>,
      },
      {
        trc: 13165,
        technicalSupport: "Carson, John",
        supportSatisfaction: 3,
        resolutionSatisfaction: 5,
        comments: "aklsjdhajsdhksj aksjdhkad very good",
        action: <Link to="../pages_admin/feedback/view-feedback">View</Link>,
      },
      {
        trc: 31376,
        technicalSupport: "Yellow, Anditwasall",
        supportSatisfaction: 1,
        resolutionSatisfaction: 4,
        comments: "coldplay",
        action: <Link to="../pages_admin/feedback/view-feedback">View</Link>,
      },
      {
        trc: 31376,
        technicalSupport: "Brown, Millie",
        supportSatisfaction: 5,
        resolutionSatisfaction: 4,
        comments: "ew nasty",
        action: <Link to="../pages_admin/feedback/view-feedback">View</Link>,
      },
      {
        trc: 13165,
        technicalSupport: "Carson, John",
        supportSatisfaction: 3,
        resolutionSatisfaction: 5,
        comments: "aklsjdhajsdhksj aksjdhkad very good",
        action: <Link to="../pages_admin/feedback/view-feedback">View</Link>,
      },
    ],
  };

  return (
    <div className="bodybox">
      <Container>
        <Row>
          <div className="page-title">
            <h1>Feedback</h1>
          </div>
        </Row>

        <Row>
          <div className="page-content">
            <MDBDataTable striped bordered small data={data} />
          </div>
        </Row>
      </Container>
      <Outlet />
    </div>
  );
};

export default Feedback;
