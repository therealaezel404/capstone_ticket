import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";

const NewServiceRequestsHelp = () => {
  const data = {
    columns: [
      {
        label: "Request No.",
        field: "requestNo",
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
        requestNo: 12345,
        issue: "Google password",
        category: "Google",
        requestby: "Cruz, Juan",
        date: "2011/12/06",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
            View
          </Link>
        ),
      },
      {
        requestNo: 236827,
        issue: "wrong name",
        category: "Blackboard",
        requestby: "Cross, John",
        date: "2018/01/08",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
            View
          </Link>
        ),
      },
      {
        requestNo: 28340,
        issue: "issueissue",
        category: "Zoom",
        requestby: "Smith, Samantha",
        date: "2022/8/17",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
            View
          </Link>
        ),
      },
      {
        requestNo: 43479,
        issue: "Email",
        category: "Course Site",
        requestby: "Montana, Hannah",
        date: "2022/12/09",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
            View
          </Link>
        ),
      },
      {
        requestNo: 28340,
        issue: "issueissue",
        category: "Zoom",
        requestby: "Smith, Samantha",
        date: "2022/8/17",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
            View
          </Link>
        ),
      },
      {
        requestNo: 43479,
        issue: "Email",
        category: "Course Site",
        requestby: "Montana, Hannah",
        date: "2022/12/09",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
            View
          </Link>
        ),
      },
      {
        requestNo: 12345,
        issue: "Google password",
        category: "Google",
        requestby: "Cruz, Juan",
        date: "2011/12/06",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
            View
          </Link>
        ),
      },
      {
        requestNo: 236827,
        issue: "wrong name",
        category: "Blackboard",
        requestby: "Cross, John",
        date: "2018/01/08",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
            View
          </Link>
        ),
      },
      {
        requestNo: 28340,
        issue: "issueissue",
        category: "Zoom",
        requestby: "Smith, Samantha",
        date: "2022/8/17",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
            View
          </Link>
        ),
      },
      {
        requestNo: 12345,
        issue: "Google password",
        category: "Google",
        requestby: "Cruz, Juan",
        date: "2011/12/06",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
            View
          </Link>
        ),
      },
      {
        requestNo: 236827,
        issue: "wrong name",
        category: "Blackboard",
        requestby: "Cross, John",
        date: "2018/01/08",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
            View
          </Link>
        ),
      },
      {
        requestNo: 28340,
        issue: "issueissue",
        category: "Zoom",
        requestby: "Smith, Samantha",
        date: "2022/8/17",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
            View
          </Link>
        ),
      },
      {
        requestNo: 43479,
        issue: "Email",
        category: "Course Site",
        requestby: "Montana, Hannah",
        date: "2022/12/09",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
            View
          </Link>
        ),
      },
      {
        requestNo: 28340,
        issue: "issueissue",
        category: "Zoom",
        requestby: "Smith, Samantha",
        date: "2022/8/17",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
            View
          </Link>
        ),
      },
      {
        requestNo: 43479,
        issue: "Email",
        category: "Course Site",
        requestby: "Montana, Hannah",
        date: "2022/12/09",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
            View
          </Link>
        ),
      },
      {
        requestNo: 12345,
        issue: "Google password",
        category: "Google",
        requestby: "Cruz, Juan",
        date: "2011/12/06",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
            View
          </Link>
        ),
      },
      {
        requestNo: 236827,
        issue: "wrong name",
        category: "Blackboard",
        requestby: "Cross, John",
        date: "2018/01/08",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
            View
          </Link>
        ),
      },
      {
        requestNo: 28340,
        issue: "issueissue",
        category: "Zoom",
        requestby: "Smith, Samantha",
        date: "2022/8/17",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
            View
          </Link>
        ),
      },
      {
        requestNo: 12345,
        issue: "Google password",
        category: "Google",
        requestby: "Cruz, Juan",
        date: "2011/12/06",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
            View
          </Link>
        ),
      },
      {
        requestNo: 236827,
        issue: "wrong name",
        category: "Blackboard",
        requestby: "Cross, John",
        date: "2018/01/08",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
            View
          </Link>
        ),
      },
      {
        requestNo: 28340,
        issue: "issueissue",
        category: "Zoom",
        requestby: "Smith, Samantha",
        date: "2022/8/17",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
            View
          </Link>
        ),
      },
      {
        requestNo: 43479,
        issue: "Email",
        category: "Course Site",
        requestby: "Montana, Hannah",
        date: "2022/12/09",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
            View
          </Link>
        ),
      },
      {
        requestNo: 28340,
        issue: "issueissue",
        category: "Zoom",
        requestby: "Smith, Samantha",
        date: "2022/8/17",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
            View
          </Link>
        ),
      },
      {
        requestNo: 43479,
        issue: "Email",
        category: "Course Site",
        requestby: "Montana, Hannah",
        date: "2022/12/09",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
            View
          </Link>
        ),
      },
      {
        requestNo: 12345,
        issue: "Google password",
        category: "Google",
        requestby: "Cruz, Juan",
        date: "2011/12/06",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
            View
          </Link>
        ),
      },
      {
        requestNo: 236827,
        issue: "wrong name",
        category: "Blackboard",
        requestby: "Cross, John",
        date: "2018/01/08",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
            View
          </Link>
        ),
      },
      {
        requestNo: 28340,
        issue: "issueissue",
        category: "Zoom",
        requestby: "Smith, Samantha",
        date: "2022/8/17",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
            View
          </Link>
        ),
      },
      {
        requestNo: 12345,
        issue: "Google password",
        category: "Google",
        requestby: "Cruz, Juan",
        date: "2011/12/06",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
            View
          </Link>
        ),
      },
      {
        requestNo: 236827,
        issue: "wrong name",
        category: "Blackboard",
        requestby: "Cross, John",
        date: "2018/01/08",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
            View
          </Link>
        ),
      },
      {
        requestNo: 28340,
        issue: "issueissue",
        category: "Zoom",
        requestby: "Smith, Samantha",
        date: "2022/8/17",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
            View
          </Link>
        ),
      },
      {
        requestNo: 43479,
        issue: "Email",
        category: "Course Site",
        requestby: "Montana, Hannah",
        date: "2022/12/09",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
            View
          </Link>
        ),
      },
      {
        requestNo: 28340,
        issue: "issueissue",
        category: "Zoom",
        requestby: "Smith, Samantha",
        date: "2022/8/17",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
            View
          </Link>
        ),
      },
      {
        requestNo: 43479,
        issue: "Email",
        category: "Course Site",
        requestby: "Montana, Hannah",
        date: "2022/12/09",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
            View
          </Link>
        ),
      },
      {
        requestNo: 12345,
        issue: "Google password",
        category: "Google",
        requestby: "Cruz, Juan",
        date: "2011/12/06",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
            View
          </Link>
        ),
      },
      {
        requestNo: 236827,
        issue: "wrong name",
        category: "Blackboard",
        requestby: "Cross, John",
        date: "2018/01/08",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
            View
          </Link>
        ),
      },
      {
        requestNo: 28340,
        issue: "issueissue",
        category: "Zoom",
        requestby: "Smith, Samantha",
        date: "2022/8/17",
        action: (
          <Link to="../pages_desk/servicerequests/new-service-requests/view-new-service-request">
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
            <h1>New Service Requests</h1>
          </div>
        </Row>
        <Row>
          <Link to="../pages_desk/servicerequests" className="back-button-text">
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

export default NewServiceRequestsHelp;
