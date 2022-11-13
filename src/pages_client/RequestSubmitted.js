import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Welc from "../assets_client/welc.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
const CardWrapper = styled.div`
  justify-content: center;
  max-width: 900px;
  align-items: center;
  margin: 5% auto;
  padding: 0 50px;
  @media screen and (max-width: 480px) {
    padding: 15px;
  }
`;

const Card = styled.div`
  background: rgb(253, 227, 123);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  border-radius: 5px;
  max-height: 10000px;

  padding: 60px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
  }
  @media screen and (max-width: 480px) {
    padding: 30px;
  }
`;
const Headtext = styled.h1`
  font-size: 2rem;
  color: #f27427;
  font-weight: bold;
  @media screen and (min-width: 480px) {
    font-size: 2rem;
  }
`;

const Text1 = styled.p`
  font-size: 1rem;
  color: #f27427;
  text-align: justify;
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Text2 = styled.p`
  font-size: 1.5rem;
  color: #f27427;
  font-weight: bold;
  text-align: justify;
  margin-top: 10px;
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Text3 = styled.p`
  font-size: 1rem;
  color: #f27427;
  text-align: justify;
  font-style: italic;
  margin-top: 10px;
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Button1 = styled(Link)`
  font-size: 1rem;
  font-weight: bold;
  background: #1abdd3;
  border: none;
  padding: 0.8rem 1.5rem;
  color: #fff;
  transition: all 0.2s ease-out;
  text-decoration: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  &:hover {
    background: #7db542;
    transition: all 0.2s ease-out;
    cursor: pointer;
    color: #fff;
  }
`;

const BtnWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

const RequestSubmitted = () => {
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
                <Col className="banner-text-left">REQUEST SUBMITTED</Col>
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
      <CardWrapper>
        <Card>
          <Headtext> REQUEST SUBMITTED! </Headtext>
          <Text1>
            You have successfully submitted a request to reopen a ticket, which
            our technicians will attend to soon.
          </Text1>
          <Text2>
            Wait for your request to get approved. You will receive an email
            once our technician accepts your request. You can also use your
            Ticket Reference Code (TRC) to check the status of your ticket.
            Please do not send a request twice.
          </Text2>
          <Text3>
            Note: We respond from Monday to Friday 8:00 AM to 5:00 PM. Your
            request beyond this schedule will be addressed the next working day.
            Thank you.
          </Text3>
          <BtnWrapper>
            <Button1 to="/">RETURN TO HOME</Button1>
          </BtnWrapper>
        </Card>
      </CardWrapper>
    </div>
  );
};

export default RequestSubmitted;
