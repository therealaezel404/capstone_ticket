import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Outlet } from "react-router";
import { MDBDataTable } from "mdbreact";
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";
import {URL} from '../components_connection/'

export function CategoryList(props) {
  const [dataSource, setDataSource] = useState([]);

  const [popupDelete, setPopDelete] = useState(false);

  const _handleClickOpen = (data) => {
    alert(data);
    localStorage.setItem('category_id', data);
    setPopDelete(!popupDelete);
  };
  const closePopupDelete = () => {
    setPopDelete(false);
  };

  const _DeleteCategory = () => {
    var data = localStorage.getItem('category_id');
    axios.get(URL + "?tag=delete_category&category_id="+data).then(res=>{
      console.log(res.data);
      setPopDelete(false);
    })
  }

  let navigate = useNavigate(); 

  const routeChange = () =>{ 
    let path = '../pages_admin/categories/category-list/view-edit-category'; 
    navigate(path);
  }

  const _gotoEditCategory = (data) => {
    localStorage.setItem('category_id', data);
    routeChange();
  }

  useEffect(() => {
    axios.get(URL + "?tag=get_admincategories").then(res=>{
      let source = [];
      for (var i = 0; i < res.data.length; i++) {
        let cat_id=res.data[i]['category_id'];
        source.push({
          categoryName: res.data[i]['category_name'],
          description: res.data[i]['category_description'],
          dateCreated: res.data[i]['dc'],
          action: (
            <div>
              <span>
                <button style={{backgroundColor: 'transparent', border: 0, color: '#0984e3'}} onClick={()=>_gotoEditCategory(cat_id)}>
                  <i className="bi bi-pencil-square" title="EDIT"></i>
                </button>
              </span>
              <span>
                <button style={{backgroundColor: 'transparent', border: 0, color: '#e74c3c'}} onClick={()=>(_handleClickOpen(cat_id))}>
                  <i className="bi bi-trash3-fill" title="DELETE"></i>
                </button>
              </span>
            </div>
          ),
        });
      }
      setDataSource(source);
    })
  })

  const data = {
    columns: [
      {
        label: "Category Name",
        field: "categoryName",
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
        width: 10,
      },
    ],
    rows: dataSource
  };

  return (
    <div className="bodybox">
      {popupDelete ? (
        <div className="delete-popup">
          <div className="form-popup">
            <div>
              <center>
                <div className="form-popup-title">DELETE</div>
              </center>

              <div className="delete-popup-message">
                Are you sure you wish to delete?
              </div>

              <button className="confirm-delete" onClick={_DeleteCategory}>Confirm</button>
              <button onClick={closePopupDelete} className="delete-cancel">
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
            <h1>List of Categories</h1>
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
            <MDBDataTable striped bordered small data={data} />
            <Link to="../pages_admin/categories/category-list/add-new-category">
              <div className="new-category-btn">Add New Category</div>
            </Link>
          </div>
        </Row>
      </Container>
      <Outlet />
    </div>
  );
};

export default CategoryList;