import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";
import DeletePopup from "../components_admin/DeletePopup";

const RejectingRequestsReasons = () => {
  const data = {
    columns: [
      {
        label: "Reason",
        field: "reason",
        sort: "asc",
        width: 150,
      },
      {
        label: "Description",
        field: "description",
        sort: "asc",
        width: 200,
      },
      {
        label: "Date Created",
        field: "dateCreated",
        sort: "asc",
        width: 100,
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
        reason: "asjdhaksjdhdhkadhkja",
        description: "descripkasjdhkation here blah blah",
        dateCreated: "2011/12/06",
        action: (
          <div>
            <Link to="../pages_admin/templates/rejecting-requests-reasons/view-rejecting-reason">
              <i className="bi bi-eye" title="VIEW"></i>
            </Link>
            <span>
              <DeletePopup />
            </span>
          </div>
        ),
      },
      {
        reason: "reasons (aouejshlsjf)",
        description: "reasons description here blah blah",
        dateCreated: "2013/12/08",
        action: (
          <div>
            <Link to="../pages_admin/templates/rejecting-requests-reasons/view-rejecting-reason">
              <i className="bi bi-eye" title="VIEW"></i>
            </Link>
            <span>
              <DeletePopup />
            </span>
          </div>
        ),
      },
      {
        reason: "asjdhaksjdhdhkadhkja",
        description: "descriptaskjdhion here blah blah",
        dateCreated: "2011/12/03",
        action: (
          <div>
            <Link to="../pages_admin/templates/rejecting-requests-reasons/view-rejecting-reason">
              <i className="bi bi-eye" title="VIEW"></i>
            </Link>
            <span>
              <DeletePopup />
            </span>
          </div>
        ),
      },
      {
        reason: "reasons (aouejshlsjf)",
        description: "reasons description here blah blah",
        dateCreated: "2018/05/08",
        action: (
          <div>
            <Link to="../pages_admin/templates/rejecting-requests-reasons/view-rejecting-reason">
              <i className="bi bi-eye" title="VIEW"></i>
            </Link>
            <span>
              <DeletePopup />
            </span>
          </div>
        ),
      },

      {
        reason: "reasons (aouejshlsjf)",
        description: "reasons description here blah blah",
        dateCreated: "2019/11/06",
        action: (
          <div>
            <Link to="../pages_admin/templates/rejecting-requests-reasons/view-rejecting-reason">
              <i className="bi bi-eye" title="VIEW"></i>
            </Link>
            <span>
              <DeletePopup />
            </span>
          </div>
        ),
      },
      {
        reason: "asjdhaksjdhdhkadhkja",
        description: "descripkasjdhkation here blah blah",
        dateCreated: "2011/12/06",
        action: (
          <div>
            <Link to="../pages_admin/templates/rejecting-requests-reasons/view-rejecting-reason">
              <i className="bi bi-eye" title="VIEW"></i>
            </Link>
            <span>
              <DeletePopup />
            </span>
          </div>
        ),
      },
      {
        reason: "asjdhaksjdhdhkadhkja",
        description: "descripkasjdhkation here blah blah",
        dateCreated: "2011/12/06",
        action: (
          <div>
            <Link to="../pages_admin/templates/rejecting-requests-reasons/view-rejecting-reason">
              <i className="bi bi-eye" title="VIEW"></i>
            </Link>
            <span>
              <DeletePopup />
            </span>
          </div>
        ),
      },
      {
        reason: "reasons (aouejshlsjf)",
        description: "reasons description here blah blah",
        dateCreated: "2013/12/08",
        action: (
          <div>
            <Link to="../pages_admin/templates/rejecting-requests-reasons/view-rejecting-reason">
              <i className="bi bi-eye" title="VIEW"></i>
            </Link>
            <span>
              <DeletePopup />
            </span>
          </div>
        ),
      },
      {
        reason: "reasons (aouejshlsjf)",
        description: "reasons description here blah blah",
        dateCreated: "2018/05/08",
        action: (
          <div>
            <Link to="../pages_admin/templates/rejecting-requests-reasons/view-rejecting-reason">
              <i className="bi bi-eye" title="VIEW"></i>
            </Link>
            <span>
              <DeletePopup />
            </span>
          </div>
        ),
      },
    ],
  };

  return (
    <div className="bodybox">
      <Container>
        <Row>
          <div className="page-title">
            <h1>Rejecting Requests Reasons</h1>
          </div>
        </Row>
        <Row>
          <Link to="../pages_admin/templates" className="back-button-text">
            <h5 className="back-button">
              <i className="bi bi-arrow-left-circle"></i> Back{" "}
            </h5>
          </Link>
        </Row>
        <Row>
          <div className="page-content">
            <MDBDataTable striped bordered small data={data} />
            <Link to="../pages_admin/templates/rejecting-requests-reasons/add-new-rejecting-reason">
              <div className="new-category-btn">Add New Reason</div>
            </Link>
          </div>
        </Row>
      </Container>
      <Outlet />
    </div>
  );
};

export default RejectingRequestsReasons;
