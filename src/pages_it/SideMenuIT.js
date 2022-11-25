import { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopLogo from "../assets_admin/toplogo.png";
import { Link, NavLink,useNavigate } from "react-router-dom";
import axios from 'axios';
import {URL} from '../components_connection/'

export function SideMenuIT(props) {
  const [popup, setPop] = useState(false);

  const handleClickOpen = () => {
    setPop(!popup);
  };
  const closePopup = () => {
    setPop(false);
  };


  let navigate = useNavigate(); 

  const routeChange = () =>{ 
    let path = 'pages_it/myaccount'; 
    navigate(path);
  }

  const _openMyAccount = () =>{
    let my_id = localStorage.getItem("staff_id");
    localStorage.setItem("selected_user_id", my_id);
    routeChange();
  }

  const _Logout = (data) => {
    localStorage.clear();
    let path = '../login-admin'; 
    navigate(path);
  }


  return (
    <div className="side-menu">
            {popup ? (
          <div className="form-popup">
            <div>
              <center>
                <div className="form-popup-title">LOGOUT</div>
              </center>
               <div className="create">
                  <label>Are you sure you want to logout?</label>
                  <div>
                    <span>
                      <button onClick={_Logout}>Confirm</button>
                    </span>
                    <span>
                        <button onClick={closePopup} className="cancel">
                        Cancel
                      </button>
                    </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      <div className="top-section">
        <Container fluid>
          <Row>
            <Col>
              <div className="logo">
                <img src={TopLogo} alt="cloudcampus" />
              </div>
            </Col>
            <Container fluid>
              <Col>
                <div className="title">
                  <h3>UST CLOUD CAMPUS</h3>
                  <h1>TECHNICAL SUPPORT TICKETING SYSTEM</h1>
                </div>
              </Col>
            </Container>
          </Row>
        </Container>
      </div>
      <hr></hr>

      <div className="main-menu">
        <div className="header">
          <h6>G E N E R A L</h6>
        </div>
        <ul>
          <li>
            <Link to="pages_it/dashboard" className="menu-item">
              <div className="menu-icon">
                <i title="Dashboard" className="bi bi-speedometer2"></i>
              </div>
              <span>Dashboard</span>
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="pages_it/mytickets" className="menu-item">
              <div className="menu-icon">
                <i title="My Tickets" className="bi bi-ticket-perforated"></i>
              </div>
              <span>My Tickets</span>
            </Link>
          </li>
        </ul>
 
      </div>

      <div className="side-menu-footer">
        <div class="contaniner">
          <div class="row">
            <div class="col-xs">
                <button
                  style={{backgroundColor: 'transparent', textDecoration: 'none', border: 0}}
                  onClick={_openMyAccount}
                  // activeclassname="active"
                  className="menu-item-footer"
                >
                  <span>My Account</span>
                </button>
            </div>
            <div class="col-xs">
               <button
                  style={{backgroundColor: 'transparent', textDecoration: 'none', border: 0}}
                  onClick={handleClickOpen}
                  // activeclassname="active"
                  className="menu-item-footer"
                >
                  <span>Log Out</span>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenuIT;
