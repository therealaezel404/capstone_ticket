import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Ust from "../assets_client/ust.jpg";
import EdTech from "../assets_client/edtech.png";
import Motto from "../assets_client/motto.png";
const Header = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col className="blue"></Col>
          <Col className="yellow"></Col>
          <Col className="green"></Col>
        </Row>
      </Container>
      <Container className="headerContainer">
        <Row className="header-img">
          <Col className="ust">
            <div>
              <img src={Ust} alt="ust logo" />
            </div>
          </Col>
          <Col className="edtech">
            <div>
              <a href="/" rel="noreferrer">
                <img src={EdTech} alt="edtech logo" to="/" />
              </a>
            </div>
          </Col>
          <Col className="motto">
            <div>
              <img src={Motto} alt="motto" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
