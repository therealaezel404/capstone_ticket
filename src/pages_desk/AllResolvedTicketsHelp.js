import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";

const AllResolvedTicketsHelp = () => {
  const data = {
    columns: [
      {
        label: "TRC",
        field: "trc",
        sort: "asc",
        width: 150,
      },
      {
        label: "Issue",
        field: "issue",
        sort: "asc",
        width: 270,
      },
      {
        label: "Category",
        field: "category",
        sort: "asc",
        width: 200,
      },
      {
        label: "Request by",
        field: "requestby",
        sort: "asc",
        width: 100,
      },
      {
        label: "Priority",
        field: "priority",
        sort: "asc",
        width: 100,
      },
      {
        label: "Date",
        field: "date",
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
        trc: 12345,
        issue: "Google password",
        category: "Google",
        requestby: "Cruz, Juan",
        priority: 4,
        date: "2011/12/06",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
      {
        trc: 236827,
        issue: "wrong name",
        category: "Blackboard",
        requestby: "Cross, John",
        priority: 1,
        date: "2018/01/08",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
      {
        trc: 28340,
        issue: "issueissue",
        category: "Zoom",
        requestby: "Smith, Samantha",
        priority: 2,
        date: "2022/8/17",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
      {
        trc: 43479,
        issue: "Email",
        category: "Course Site",
        requestby: "Montana, Hannah",
        priority: 2,
        date: "2022/12/09",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
      {
        trc: 28340,
        issue: "issueissue",
        category: "Zoom",
        requestby: "Smith, Samantha",
        priority: 2,
        date: "2022/8/17",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
      {
        trc: 43479,
        issue: "Email",
        category: "Course Site",
        requestby: "Montana, Hannah",
        priority: 2,
        date: "2022/12/09",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
      {
        trc: 12345,
        issue: "Google password",
        category: "Google",
        requestby: "Cruz, Juan",
        priority: 4,
        date: "2011/12/06",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
      {
        trc: 236827,
        issue: "wrong name",
        category: "Blackboard",
        requestby: "Cross, John",
        priority: 1,
        date: "2018/01/08",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
      {
        trc: 28340,
        issue: "issueissue",
        category: "Zoom",
        requestby: "Smith, Samantha",
        priority: 2,
        date: "2022/8/17",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
      {
        trc: 12345,
        issue: "Google password",
        category: "Google",
        requestby: "Cruz, Juan",
        priority: 4,
        date: "2011/12/06",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
      {
        trc: 236827,
        issue: "wrong name",
        category: "Blackboard",
        requestby: "Cross, John",
        priority: 1,
        date: "2018/01/08",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
      {
        trc: 28340,
        issue: "issueissue",
        category: "Zoom",
        requestby: "Smith, Samantha",
        priority: 2,
        date: "2022/8/17",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
      {
        trc: 43479,
        issue: "Email",
        category: "Course Site",
        requestby: "Montana, Hannah",
        priority: 2,
        date: "2022/12/09",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
      {
        trc: 28340,
        issue: "issueissue",
        category: "Zoom",
        requestby: "Smith, Samantha",
        priority: 2,
        date: "2022/8/17",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
      {
        trc: 43479,
        issue: "Email",
        category: "Course Site",
        requestby: "Montana, Hannah",
        priority: 2,
        date: "2022/12/09",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
      {
        trc: 12345,
        issue: "Google password",
        category: "Google",
        requestby: "Cruz, Juan",
        priority: 4,
        date: "2011/12/06",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
      {
        trc: 236827,
        issue: "wrong name",
        category: "Blackboard",
        requestby: "Cross, John",
        priority: 1,
        date: "2018/01/08",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
      {
        trc: 28340,
        issue: "issueissue",
        category: "Zoom",
        requestby: "Smith, Samantha",
        priority: 2,
        date: "2022/8/17",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
      {
        trc: 12345,
        issue: "Google password",
        category: "Google",
        requestby: "Cruz, Juan",
        priority: 4,
        date: "2011/12/06",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
      {
        trc: 236827,
        issue: "wrong name",
        category: "Blackboard",
        requestby: "Cross, John",
        priority: 1,
        date: "2018/01/08",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
      {
        trc: 28340,
        issue: "issueissue",
        category: "Zoom",
        requestby: "Smith, Samantha",
        priority: 2,
        date: "2022/8/17",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
      {
        trc: 43479,
        issue: "Email",
        category: "Course Site",
        requestby: "Montana, Hannah",
        priority: 2,
        date: "2022/12/09",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
      {
        trc: 28340,
        issue: "issueissue",
        category: "Zoom",
        requestby: "Smith, Samantha",
        priority: 2,
        date: "2022/8/17",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
      {
        trc: 43479,
        issue: "Email",
        category: "Course Site",
        requestby: "Montana, Hannah",
        priority: 2,
        date: "2022/12/09",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
      {
        trc: 12345,
        issue: "Google password",
        category: "Google",
        requestby: "Cruz, Juan",
        priority: 4,
        date: "2011/12/06",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
      {
        trc: 236827,
        issue: "wrong name",
        category: "Blackboard",
        requestby: "Cross, John",
        priority: 1,
        date: "2018/01/08",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
      {
        trc: 28340,
        issue: "issueissue",
        category: "Zoom",
        requestby: "Smith, Samantha",
        priority: 2,
        date: "2022/8/17",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
      {
        trc: 12345,
        issue: "Google password",
        category: "Google",
        requestby: "Cruz, Juan",
        priority: 4,
        date: "2011/12/06",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
      {
        trc: 236827,
        issue: "wrong name",
        category: "Blackboard",
        requestby: "Cross, John",
        priority: 1,
        date: "2018/01/08",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
      {
        trc: 28340,
        issue: "issueissue",
        category: "Zoom",
        requestby: "Smith, Samantha",
        priority: 2,
        date: "2022/8/17",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
      {
        trc: 43479,
        issue: "Email",
        category: "Course Site",
        requestby: "Montana, Hannah",
        priority: 2,
        date: "2022/12/09",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
      {
        trc: 28340,
        issue: "issueissue",
        category: "Zoom",
        requestby: "Smith, Samantha",
        priority: 2,
        date: "2022/8/17",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
      {
        trc: 43479,
        issue: "Email",
        category: "Course Site",
        requestby: "Montana, Hannah",
        priority: 2,
        date: "2022/12/09",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
      {
        trc: 12345,
        issue: "Google password",
        category: "Google",
        requestby: "Cruz, Juan",
        priority: 4,
        date: "2011/12/06",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
      {
        trc: 236827,
        issue: "wrong name",
        category: "Blackboard",
        requestby: "Cross, John",
        priority: 1,
        date: "2018/01/08",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
      {
        trc: 28340,
        issue: "issueissue",
        category: "Zoom",
        requestby: "Smith, Samantha",
        priority: 2,
        date: "2022/8/17",
        action: (
          <Link to="../pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket">
            View
          </Link>
        ),
      },
    ],
  };

  return (
    <div className="bodybox">
      <Container>
        <Row>
          <div className="page-title">
            <h1>All Resolved Tickets</h1>
          </div>
        </Row>
        <Row>
          <Link to="../pages_desk/alltickets" className="back-button-text">
            <h5 className="back-button">
              <i className="bi bi-arrow-left-circle"></i> Back{" "}
            </h5>
          </Link>
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

export default AllResolvedTicketsHelp;
