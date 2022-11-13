import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Outlet } from "react-router";
import { MDBDataTable } from "mdbreact";
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";
import {URL} from '../components_connection/'



export function NewServiceRequests(props) {
  const [dataSource, setDataSource] = useState([]);


  let navigate = useNavigate(); 

  const routeChange = () =>{ 
    let path = '../pages_admin/servicerequests/new-service-requests/view-new-service-request'; 
    navigate(path);
  }

  const _viewTicket = (data) => {
    localStorage.setItem('selected_ticketnumber', data);
    routeChange();
  }

  useEffect(() => {
    axios.get(URL + "?tag=get_servicerequests").then(res=>{
      let source = [];
      for (var i = 0; i < res.data.length; i++) {
        let ticket_no=res.data[i]['ticket_number'];
        source.push({
          requestNo: res.data[i]['ticket_number'],
          issue: res.data[i]['issue_name'],
          category: res.data[i]['category_name'],
          requestby: res.data[i]['name'],
          date: res.data[i]['date_added'],
          action: (
            <button onClick={()=>_viewTicket(ticket_no)} style={{backgroundColor: 'transparent', color: 'blue', border: 0}}>
               View
            </button>
          ),
        });
      }
      setDataSource(source);
    })
  })

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
    rows: dataSource
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
          <Link
            to="../pages_admin/servicerequests"
            className="back-button-text"
          >
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

export default NewServiceRequests;
