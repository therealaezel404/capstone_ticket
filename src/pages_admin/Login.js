import React, { useState, useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Ust from "../assets_client/ust.jpg";
import EdTech from "../assets_client/edtech.png";
import TopLogo from "../assets_admin/toplogo.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Person from "../assets_admin/person.png";
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import {URL} from '../components_connection/'

export function Login(props) {
  //INITIAL VALUES
  const [email, setEmail] = useState(""); //email
  const [password, setPassword] = useState(""); //password

  let navigate = useNavigate();

  const _gotoAdmin = () =>{ 
    let path = '/admin'; 
    navigate(path);
  }

  const _gotoITSupport = () =>{ 
    let path = '/it-support'; 
    navigate(path);
  }

  const _gotoHelpDesk = () =>{ 
    let path = '/help-desk'; 
    navigate(path);
  }

  const _Login = () => {
    axios.get(URL + "?tag=admin_login"+"&email="+email+"&password="+password).then(res=>{
      var output = JSON.parse(res.data);
      console.log(res.data);
      switch(output['status']) {
        case 'ok': //success
          localStorage.setItem("staff_id", output['id']);
          localStorage.setItem("staff_fullname", output['fullname']);
          localStorage.setItem("email", output['email']);
          localStorage.setItem("user_role", output['user_role']);
          switch (output['user_role']) {
            case 1: // admin
              _gotoAdmin();
            break;
            case 2: // it supp
              _gotoITSupport();
            break;
            case 3: // help-desk
              _gotoHelpDesk();
            break;
          }
        break;
        case 'error': //failed
          alert("Login failed. (email or password is incorrect)");
        break;
      }
    })
  }



  return (
    <div>
      <style type="text/css">
        {`
            .btn-primary {
            background-color: rgb(255, 153, 0);
            color: white;
            } `}{" "}
      </style>

      <div
        // style={{ backgroundImage: `url(${Back})` }}
        className="login-bg"
      ></div>

      <div className="login-box">
        <Container>
          <Row>
            <Col className="login-ust">
              <div>
                <img src={Ust} alt="ust logo" />
              </div>
            </Col>
            <Col className="login-edtech">
              <div>
                <img src={EdTech} alt="edtech logo" />
              </div>
            </Col>
            <Col className="login-cc">
              <div>
                <img src={TopLogo} alt="TopLogo" />
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="login-header">
          <Row>
            <h4>SERVICE REQUEST MANAGEMENT</h4>
          </Row>
          <Row>
            <h6>TECHNICAL SUPPORT TICKETING SYSTEM</h6>
          </Row>
          <Row>
            <div>
              <img className="person" src={Person} alt="person icon" />
            </div>
          </Row>
          <br></br>
          <Row>
            <h5>ADMIN LOGIN</h5>
          </Row>
        </Container>
        <Container className="login-form">
          <Row>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" onChange={(text) => {
                  setEmail(text.target.value)
                }} placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onChange={(text) => {
                  setPassword(text.target.value)
                }} placeholder="Password" />
              </Form.Group>
                <center>
                  <Button
                    className="login-submit"
                    onClick={_Login}
                    variant="primary"
                    type="button"
                  >
                    SIGN IN
                  </Button>
                </center>
            </Form>
          </Row>
          <Row>
            <Link to="pages_admin/forgot-password">
              {" "}
              <p>Forgot Password?</p>
            </Link>
          </Row>
        </Container>
        <Container className="login-footer">
          <Row>
            <p>
              University of Santo Tomas. Educational Technology Center. All
              right reserved.
            </p>
          </Row>
        </Container>
      </div>
      <Outlet />
    </div>
  );
};

export default Login;
