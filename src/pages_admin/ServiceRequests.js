import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";
import {URL} from '../components_connection/'

export function ServiceRequests(props) {
  const [hasLoaded, setLoaded] = useState(false);
  const [newsr, setNew] = useState(null);
  const [reopened, setReopened] = useState(null);
  const [rejected, setRejected] = useState(null);


  useEffect(() => {
    if(hasLoaded == false) {
      axios.get(URL + "?tag=get_srcount").then(res=>{
        console.log(res.data);
        setNew(res.data[0]['new_requests']);
        setReopened(res.data[0]['reopened']);
        setRejected(res.data[0]['rejected']);
        setLoaded(true);
      })
    }

  },[])
  return (
    <div className="bodybox">
      <Container>
        <Row>
          <div className="page-title">
            <h1>Service Requests</h1>
          </div>
        </Row>
        <Row>
          <div className="page-content">
            <Link to="../pages_admin/servicerequests/new-service-requests">
              <div className="orange-box">
                <div className="orange-box-number">{newsr}</div>
                <div className="orange-box-title">NEW SERVICE REQUESTS</div>
              </div>
            </Link>

            <Link to="../pages_admin/servicerequests/reopen-ticket-requests">
              <div className="orange-box">
                <div className="orange-box-number">{reopened}</div>
                <div className="orange-box-title">REOPEN TICKET REQUESTS</div>
              </div>
            </Link>

            <Link to="../pages_admin/servicerequests/rejected-service-requests">
              <div className="orange-box">
                <div className="orange-box-number">{rejected}</div>
                <div className="orange-box-title">
                  REJECTED SERVICE REQUESTS
                </div>
              </div>
            </Link>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceRequests;
