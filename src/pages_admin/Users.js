import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Outlet } from "react-router";
import { MDBDataTable } from "mdbreact";
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";
import {URL} from '../components_connection/'

export function Users(props) {

  const [dataSource, setDataSource] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);


  let navigate = useNavigate(); 

  const routeChange = () =>{ 
    let path = '../pages_admin/users/view-edit-user'; 
    navigate(path);
  }

   const _ViewUser = (data1) =>{ 
    localStorage.setItem('selected_user_id',data1);
    routeChange();
  }



  useEffect(() => {
    axios.get(URL + "?tag=get_users").then(res=>{
      console.log(res.data);
      let source = [];
      for (var i = 0; i < res.data.length; i++) {
        let user_id = res.data[i]['id'];
        source.push({
          name: res.data[i]['last_name'] + ", " + res.data[i]['first_name'],
          email: res.data[i]['email'],
          userRole: res.data[i]['user_rolename'],
          activityStatus: "Online",
          action: (
            <button onClick={()=>(_ViewUser(user_id))}>Edit</button>
          ),
        });
      }
      setDataSource(source);
    })
  },[])



  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "User Role",
        field: "userRole",
        sort: "asc",
        width: 200,
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 100,
      },
      {
        label: "Activity Status",
        field: "activityStatus",
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
            <h1>EDTECH Users</h1>
          </div>
        </Row>

        <Row>
          <div className="page-content">
            <MDBDataTable striped bordered small data={data} />

            <Link to="../pages_admin/users/add-new-user">
              <div className="new-category-btn">Add New User</div>
            </Link>
          </div>
        </Row>
      </Container>
      <Outlet />
    </div>
  );
};

export default Users;
