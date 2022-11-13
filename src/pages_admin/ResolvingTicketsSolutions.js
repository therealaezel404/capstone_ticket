import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";
import DeletePopup from "../components_admin/DeletePopup";

const ResolvingTicketsSolutions = () => {
  const data = {
    columns: [
      {
        label: "Solution",
        field: "solution",
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
        solution: "slfdhadhg;woiehgwifd",
        description: "descripkasjdhkation here blah blah",
        dateCreated: "2011/12/06",
        action: (
          <div>
            <Link to="../pages_admin/templates/resolving-tickets-solutions/view-resolving-solution">
              <i className="bi bi-eye" title="VIEW"></i>
            </Link>
            <span>
              <DeletePopup />
            </span>
          </div>
        ),
      },
      {
        solution: "Errors (Please attach a screenshot)",
        description: "reasons description here blah blah",
        dateCreated: "2013/12/08",
        action: (
          <div>
            <Link to="../pages_admin/templates/resolving-tickets-solutions/view-resolving-solution">
              <i className="bi bi-eye" title="VIEW"></i>
            </Link>
            <span>
              <DeletePopup />
            </span>
          </div>
        ),
      },
      {
        solution: "slfdhadhg;woiehgwifd",
        description: "descriptaskjdhion here blah blah",
        dateCreated: "2011/12/03",
        action: (
          <div>
            <Link to="../pages_admin/templates/resolving-tickets-solutions/view-resolving-solution">
              <i className="bi bi-eye" title="VIEW"></i>
            </Link>
            <span>
              <DeletePopup />
            </span>
          </div>
        ),
      },
      {
        solution: "Errors (Please attach a screenshot)",
        description: "reasons description here blah blah",
        dateCreated: "2018/05/08",
        action: (
          <div>
            <Link to="../pages_admin/templates/resolving-tickets-solutions/view-resolving-solution">
              <i className="bi bi-eye" title="VIEW"></i>
            </Link>
            <span>
              <DeletePopup />
            </span>
          </div>
        ),
      },

      {
        solution: "Errors (Please attach a screenshot)",
        description: "reasons description here blah blah",
        dateCreated: "2019/11/06",
        action: (
          <div>
            <Link to="../pages_admin/templates/resolving-tickets-solutions/view-resolving-solution">
              <i className="bi bi-eye" title="VIEW"></i>
            </Link>
            <span>
              <DeletePopup />
            </span>
          </div>
        ),
      },
      {
        solution: "slfdhadhg;woiehgwifd",
        description: "descripkasjdhkation here blah blah",
        dateCreated: "2011/12/06",
        action: (
          <div>
            <Link to="../pages_admin/templates/resolving-tickets-solutions/view-resolving-solution">
              <i className="bi bi-eye" title="VIEW"></i>
            </Link>
            <span>
              <DeletePopup />
            </span>
          </div>
        ),
      },
      {
        solution: "slfdhadhg;woiehgwifd",
        description: "descripkasjdhkation here blah blah",
        dateCreated: "2011/12/06",
        action: (
          <div>
            <Link to="../pages_admin/templates/resolving-tickets-solutions/view-resolving-solution">
              <i className="bi bi-eye" title="VIEW"></i>
            </Link>
            <span>
              <DeletePopup />
            </span>
          </div>
        ),
      },
      {
        solution: "Errors (Please attach a screenshot)",
        description: "reasons description here blah blah",
        dateCreated: "2013/12/08",
        action: (
          <div>
            <Link to="../pages_admin/templates/resolving-tickets-solutions/view-resolving-solution">
              <i className="bi bi-eye" title="VIEW"></i>
            </Link>
            <span>
              <DeletePopup />
            </span>
          </div>
        ),
      },
      {
        solution: "Errors (Please attach a screenshot)",
        description: "reasons description here blah blah",
        dateCreated: "2018/05/08",
        action: (
          <div>
            <Link to="../pages_admin/templates/resolving-tickets-solutions/view-resolving-solution">
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
            <h1>Resolving Tickets Solutions</h1>
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
            <Link to="../pages_admin/templates/resolving-tickets-solutions/add-new-solution">
              <div className="new-category-btn">Add New Solution</div>
            </Link>
          </div>
        </Row>
      </Container>
      <Outlet />
    </div>
  );
};

export default ResolvingTicketsSolutions;
