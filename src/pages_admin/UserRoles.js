import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";
import DeletePopup from "../components_admin/DeletePopup";

const UserRoles = () => {
  const data = {
    columns: [
      {
        label: "Role",
        field: "role",
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
        role: "Admin",
        description: "Manages ticketing system activity",
        dateCreated: "2011/12/06",
        action: (
          <div>
            <Link to="../pages_admin/userroles/view-edit-user-role">
              <i className="bi bi-pencil-square" title="EDIT"></i>
            </Link>
            <span>
              <DeletePopup />
            </span>
          </div>
        ),
      },
      {
        role: "Help Desk",
        description: "Receive requests from clients and assigns to IT Support",
        dateCreated: "2013/12/08",
        action: (
          <div>
            <Link to="../pages_admin/userroles/view-edit-user-role">
              <i className="bi bi-pencil-square" title="EDIT"></i>
            </Link>
            <span>
              <DeletePopup />
            </span>
          </div>
        ),
      },
      {
        role: "IT Support",
        description: "Provides solutions to client requests",
        dateCreated: "2011/12/03",
        action: (
          <div>
            <Link to="../pages_admin/userroles/view-edit-user-role">
              <i className="bi bi-pencil-square" title="EDIT"></i>
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
            <h1>User Roles</h1>
          </div>
        </Row>

        <Row>
          <div className="page-content">
            <MDBDataTable striped bordered small data={data} />

            <Link to="../pages_admin/userroles/create-user-role">
              <div className="new-category-btn">Create New User Role</div>
            </Link>
          </div>
        </Row>
      </Container>
      <Outlet />
    </div>
  );
};

export default UserRoles;
