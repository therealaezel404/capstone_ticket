import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Outlet } from "react-router";
import { MDBDataTable } from "mdbreact";
import DeletePopup from "../components_admin/DeletePopup";
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";
import {URL} from '../components_connection/'


export function UserRoles(props) {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    axios.get(URL + "?tag=get_user_roles").then(res=>{
      console.log(res.data);
      let source = [];
      for (var i = 0; i < res.data.length; i++) {
        source.push({
          role: res.data[i]['user_rolename'],
          description: res.data[i]['user_roledesc'],
          dateCreated: res.data[i]['date_added'],
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
        });
      }
      setDataSource(source);
    })
  },[])


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
    rows: dataSource
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
