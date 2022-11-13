import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Outlet } from "react-router";
import { MDBDataTable } from "mdbreact";
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";
import {URL} from '../components_connection/'


export function IssueList(props) {
  const [dataSource, setDataSource] = useState([]);
  const [loadState, setLoadedState] = useState(false);

  useEffect(() => {
    axios.get(URL + "?tag=get_adminissues").then(res=>{
      console.log(res.data);
      let source = [];
      for (var i = 0; i < res.data.length; i++) {
        let cat_id=res.data[i]['category_id'];
        source.push({
          issuename: res.data[i]['issue_name'],
          category: res.data[i]['category_name'],
          description: res.data[i]['issue_description'],
          dateCreated: res.data[i]['dc'],
          action: (
            <div>
              <span>
                <button style={{backgroundColor: 'transparent', border: 0, color: '#0984e3'}}>
                  <i className="bi bi-pencil-square" title="EDIT"></i>
                </button>
              </span>
              <span>
                <button style={{backgroundColor: 'transparent', border: 0, color: '#e74c3c'}}>
                  <i className="bi bi-trash3-fill" title="DELETE"></i>
                </button>
              </span>
            </div>
          ),
        });
      }
      setDataSource(source);
    })
  },[])

  const datax = {
    columns: [
      {
        label: "Issue Name",
        field: "issuename",
        sort: "asc",
        width: 150,
      },
      {
        label: "Category",
        field: "category",
        sort: "asc",
        width: 200,
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
        width: 10,
      },
    ],
    rows: dataSource
  };



  
  return (
    <div className="bodybox">
      <Container>
        <Row>
          <div className="page-title">
            <h1>List of Issues</h1>
          </div>
        </Row>
        <Row>
          <Link to="../pages_admin/categories" className="back-button-text">
            <h5 className="back-button">
              <i className="bi bi-arrow-left-circle"></i> Back{" "}
            </h5>
          </Link>
        </Row>
        <Row>
          <div className="page-content">
            <MDBDataTable striped bordered small data={datax} />

            <Link to="../pages_admin/categories/issue-list/add-new-issue">
              <div className="new-category-btn">Add New Issue</div>
            </Link>
          </div>
        </Row>
      </Container>
      <Outlet />
    </div>
  );
};

export default IssueList;
