import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Outlet } from "react-router";
import { MDBDataTable } from "mdbreact";
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";
import {URL} from '../components_connection/'


export function RejectingRequestsReasons(props) {
  const [dataSource, setDataSource] = useState([]);
  const [reason_id, setReasonID] = useState(null);

  const [deleteReasonPopup, setDeleteReasonPopup] = useState(false);

  const closePopup = () => {
    setDeleteReasonPopup(false);
  };

  let navigate = useNavigate(); 

  const routeChange = () =>{ 
    let path = '../pages_admin/templates/rejecting-requests-reasons/view-rejecting-reason'; 
    navigate(path);
  }

  const _editReason = (data) =>{
    let reason_id = localStorage.setItem('selected_reason_id', data)
    routeChange();
  }

  const _handleClickOpen = (data1) =>{ 
    setReasonID(data1);
    setDeleteReasonPopup(!deleteReasonPopup);
  }

  const _deleteReason = () =>{ 
    axios.get(URL + "?tag=delete_reason&reason_id="+reason_id).then(res=>{
      console.log(res.data);
      setDeleteReasonPopup(false);
      _fetchReasons();
    })
  }

  useEffect(() => {
    _fetchReasons();
  },[])

  const _fetchReasons = () => {
    axios.get(URL + "?tag=get_reasons").then(res=>{
      console.log(res.data);
      let source = []; 
      for (var i = 0; i < res.data.length; i++) {
        let reason_id = res.data[i]['id'];
        source.push({
          reason: res.data[i]['reason'],
          description: res.data[i]['reason_desc'],
          dateCreated: res.data[i]['reason_added'],
          action: (
              <div>
                <span>
                  <button style={{backgroundColor: 'transparent', border: 0, color: '#0984e3'}} onClick={()=>(_editReason(reason_id))}>
                    <i className="bi bi-eye" title="VIEW"></i>
                  </button>
                </span>
                <span>
                  <button style={{backgroundColor: 'transparent', border: 0, color: '#e74c3c'}} onClick={()=>(_handleClickOpen(reason_id))}>
                    <i className="bi bi-trash3-fill" title="DELETE"></i>
                  </button>
                </span>
            </div>
          ),
        });
      }
      setDataSource(source);
    })
  }



  const data = {
    columns: [
      {
        label: "Reason",
        field: "reason",
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
        {deleteReasonPopup ? (
        <div className="delete-popup">
          <div className="form-popup">
            <div>
              <center>
                <div className="form-popup-title">DELETE</div>
              </center>

              <div className="delete-popup-message">
                Are you sure you wish to delete?
              </div>

              <button onClick={_deleteReason} className="confirm-delete">Confirm</button>
              <button onClick={closePopup} className="delete-cancel">
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <Container>
        <Row>
          <div className="page-title">
            <h1>Rejecting Requests Reasons</h1>
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
            <Link to="../pages_admin/templates/rejecting-requests-reasons/add-new-rejecting-reason">
              <div className="new-category-btn">Add New Reason</div>
            </Link>
          </div>
        </Row>
      </Container>
      <Outlet />
    </div>
  );
};

export default RejectingRequestsReasons;
