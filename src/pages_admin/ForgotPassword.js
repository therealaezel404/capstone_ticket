import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Ust from "../assets_client/ust.jpg";
import EdTech from "../assets_client/edtech.png";
import TopLogo from "../assets_admin/toplogo.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Outlet } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div>
      <style type="text/css">
        {`
    .btn-primary {
      background-color: rgb(255, 153, 0);
      color: white;
    } `}
      </style>

      <div
        //style={{ backgroundImage: `url(${Back})`,
        //backgroundRepeat: 'no-repeat',
        //backgroundSize: 'cover'}}
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
          <br></br>
          <Row>
            <h5>FORGOT YOUR PASSWORD?</h5>
          </Row>
        </Container>
        <Container className="login-form">
          <Row>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <center>
                <Button variant="primary" type="submit">
                  SEND RESET LINK
                </Button>
              </center>
            </Form>
          </Row>
          <br></br>
        </Container>
      </div>
      <Outlet />
    </div>
  );
};

export default ForgotPassword;
