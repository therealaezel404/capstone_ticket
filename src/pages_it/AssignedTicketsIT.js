import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Outlet } from "react-router";
import { MDBDataTable } from "mdbreact";
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";
import {URL} from '../components_connection/'

export function AssignedTicketsIT(props) {
  const [hasLoaded, setHasLoaded] = useState(false);

  const [dataSource, setDataSource] = useState([]);



  let navigate = useNavigate(); 

  const routeChange = () =>{ 
    let path = '../pages_it/mytickets/view-assigned-ticket'; 
    navigate(path);
  }

  const _viewTicket = (data1) =>{ 
    localStorage.setItem('selected_ticketnumber', data1);
    routeChange();
  }

  useEffect(() => {
    let user_id=localStorage.getItem('staff_id');
    if(hasLoaded == false) {
      axios.get(URL + "?tag=get_openedtickets&user_id="+user_id).then(res=>{
        console.log(res.data);
        let source = [];
        for (var i = 0; i < res.data.length; i++) {
          let trc=res.data[i]['ticket_number'];
          source.push({
            trc: res.data[i]['ticket_number'],
            issue: res.data[i]['issue_name'],
            category: res.data[i]['category_name'],
            requestby: res.data[i]['name'],
            priority: res.data[i]['priority_level'],
            date: res.data[i]['date_added'],
            action: (
              <button onClick={()=>_viewTicket(trc)} style={{backgroundColor: 'transparent', color: 'blue', border: 0}}>
               View
              </button>
            ),
          });
        }
        setDataSource(source);
      })
    }
  },[])

  const data = {
    columns: [
      {
        label: "TRC",
        field: "trc",
        sort: "asc",
        width: 15,
      },
      {
        label: "Issue",
        field: "issue",
        sort: "asc",
        width: 27,
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
    rows: dataSource
  };

  return (
    <div className="bodybox">
      <Container>
        <Row>
          <div className="page-title">
            <h1>Assigned Tickets</h1>
          </div>
        </Row>
        <Row>
          <Link to="../pages_admin/mytickets" className="back-button-text">
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

export default AssignedTicketsIT;
