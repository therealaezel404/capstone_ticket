import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Welc from "../assets_client/welc.jpg";
import TicketForm from "../components_client/TicketForm";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 15%;
  padding-top: 7%;
  @media screen and (max-width: 861px) {
    padding: 6%;
  }
`;

const Header = styled.h1`
  font-size: 0.9rem;
  color: #f27427;
  font-weight: bold;
  text-align: center;
  margin-bottom: 4%;
  margin-top: -3%;
  @media screen and (min-width: 480px) {
    font-size: 2rem;
  }
`;
const CreateNewTicket = () => {
  return (
    <div>
      <Container fluid className="banner">
        <Row>
          <Col className="yellow-stripe"></Col>
        </Row>
        <Row>
          <div
            className="welcome"
            style={{
              backgroundImage: `url(${Welc})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
              height: "100%",
            }}
          >
            <Container>
              <Row>
                <Col className="banner-text-left">CREATE NEW TICKET</Col>
              </Row>
              <Row>
                <Col className="banner-text-right">
                  UST CLOUD CAMPUS<br></br>TECHNICAL SUPPORT TICKETING SYSTEM
                </Col>
              </Row>
            </Container>
          </div>
        </Row>
        <Row>
          <Col className="orange-stripe"></Col>
        </Row>
      </Container>

      <Wrapper>
        <Header>To get started, fill out the form below:</Header>
        <TicketForm />
      </Wrapper>
    </div>
  );
};

export default CreateNewTicket;
