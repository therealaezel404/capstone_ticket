import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Ust from "../assets_client/ust.jpg";
import EdTech from "../assets_client/edtech.png";
import TopLogo from "../assets_admin/toplogo.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AccountRecovery = () => {
  return (
    <div>
      <style type="text/css">
        {`
            .btn-primary {
            background-color: rgb(255, 153, 0);
            color: white;
            } `}{" "}
      </style>

      <div className="login-bg"></div>
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
            <h5>ACCOUNT RECOVERY</h5>
          </Row>
        </Container>
        <Container className="login-form">
          <Row>
            <Form>
              <Form.Group className="mb-3" controlid="formBasicPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter New Password"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlid="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm New Password"
                />
              </Form.Group>

              <center>
                <Button variant="primary" type="submit">
                  RESET PASSWORD
                </Button>
              </center>
            </Form>
          </Row>
          <br></br>
        </Container>
      </div>
    </div>
  );
};

export default AccountRecovery;
