import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Outlet } from "react-router";
import { MDBDataTable } from "mdbreact";
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";
import {URL} from '../components_connection/'
import DeletePopup from "../components_admin/DeletePopup";

export function ResolvingTicketsSolutions(props) {
  const [dataSource, setDataSource] = useState([]);
  const [solution_id, setSolutionID] = useState(null);

  const [deleteSolutionPopup, setDeleteSolutionPopup] = useState(false);

  useEffect(() => {
    _fetchSolutions();
  },[])

  let navigate = useNavigate(); 

  const routeChange = () =>{ 
    let path = '../pages_admin/templates/resolving-tickets-solutions/view-resolving-solution'; 
    navigate(path);
  }

  const closePopup = () => {
    setDeleteSolutionPopup(false);
  };


  const _handleClickOpen = (data1) => { 
    setSolutionID(data1);
    setDeleteSolutionPopup(!deleteSolutionPopup);
  }

  const _editSolution = (data) =>{
    let reason_id = localStorage.setItem('selected_solution_id', data)
    routeChange();
  }

  const _fetchSolutions = () => {
    axios.get(URL + "?tag=get_solutions").then(res=>{
      console.log(res.data);
      let source = []; 
      for (var i = 0; i < res.data.length; i++) {
        let solution_id = res.data[i]['id'];
        source.push({
          solution: res.data[i]['solution'],
          description: res.data[i]['solution_description'],
          dateCreated: res.data[i]['date_created'],
          action: (
              <div>
                <span>
                  <button style={{backgroundColor: 'transparent', border: 0, color: '#0984e3'}} onClick={()=>(_editSolution(solution_id))}>
                    <i className="bi bi-eye" title="VIEW"></i>
                  </button>
                </span>
                <span>
                  <button style={{backgroundColor: 'transparent', border: 0, color: '#e74c3c'}} onClick={()=>(_handleClickOpen(solution_id))}>
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
        label: "Solution",
        field: "solution",
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

  const _deleteSolution = () =>{ 
    axios.get(URL + "?tag=delete_solution&solution_id="+solution_id).then(res=>{
      console.log(res.data);
      setDeleteSolutionPopup(false);
      _fetchSolutions();
    })
  }

  return (
    <div className="bodybox">
      {deleteSolutionPopup ? (
        <div className="delete-popup">
          <div className="form-popup">
            <div>
              <center>
                <div className="form-popup-title">DELETE</div>
              </center>

              <div className="delete-popup-message">
                Are you sure you wish to delete?
              </div>

              <button className="confirm-delete" onClick={_deleteSolution}>Confirm</button>
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
            <h1>Resolving Tickets Solutions</h1>
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
            <Link to="../pages_admin/templates/resolving-tickets-solutions/add-new-solution">
              <div className="new-category-btn">Add New Solution</div>
            </Link>
          </div>
        </Row>
      </Container>
      <Outlet />
    </div>
  );
};

export default ResolvingTicketsSolutions;
