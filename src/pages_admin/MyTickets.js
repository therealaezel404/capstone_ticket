import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Outlet } from "react-router";
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";
import {URL} from '../components_connection/'


export function MyTickets(props) {
  const [hasLoaded, setLoaded] = useState(false);
  const [assigned, setAssigned] = useState(null);
  const [reopened, setReopened] = useState(null);
  const [overdue, setOverdue] = useState(null);
  const [resolved, setResolved] = useState(null);


  useEffect(() => {
    if(hasLoaded == false) {
      let user_id = localStorage.getItem('staff_id');
      axios.get(URL + "?tag=get_mytickets&user_id="+user_id).then(res=>{
        setAssigned(res.data[0]['ongoing']);
        setReopened("0");
        setResolved(res.data[0]['resolved']);
        setOverdue("0");
        console.log(res.data);
      })
    }

  },[])



  return (
    <div className="bodybox">
      <Container>
        <Row>
          <div className="page-title">
            <h1>My Tickets</h1>
          </div>
        </Row>

        <Row>
          <div className="page-content">
            <Link to="../pages_admin/mytickets/assignedtickets">
              <div className="orange-box">
                <div className="orange-box-number">{assigned}</div>
                <div className="orange-box-title">ASSIGNED TICKETS</div>
              </div>
            </Link>

            <Link to="../pages_admin/mytickets/reopenedtickets">
              <div className="orange-box">
                <div className="orange-box-number">{reopened}</div>
                <div className="orange-box-title">REOPENED TICKETS</div>
              </div>
            </Link>

            <Link to="../pages_admin/mytickets/overduetickets">
              <div className="orange-box">
                <div className="orange-box-number">{overdue}</div>
                <div className="orange-box-title">OVERDUE TICKETS</div>
              </div>
            </Link>

            <Link to="../pages_admin/mytickets/resolvedtickets">
              <div className="orange-box">
                <div className="orange-box-number">{resolved}</div>
                <div className="orange-box-title">RESOLVED TICKETS</div>
              </div>
            </Link>
          </div>
        </Row>
      </Container>

      <Outlet />
    </div>
  );
};

export default MyTickets;
