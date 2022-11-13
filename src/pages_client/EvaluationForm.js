import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Welc from "../assets_client/welc.jpg";
import styled from "styled-components";
import EvalForm from "../components_client/EvalForm";

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
  background: #fdedb8;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  border-radius: 2%;
  padding: 20px;
  max-height: 10000px;
  @media screen and (min-width: 480px) {
    border-radius: 8%;
    padding: 50px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }
`;
const Headtext = styled.h1`
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

const EvaluationForm = () => {
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
                <Col className="banner-text-left">EVALUATION FORM</Col>
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
        <Headtext>
          We would like to hear your feedback to improve our services!
        </Headtext>
        <Card>
          <EvalForm />
          {/* <BtnWrapper>
            <Button type="submit">Submit</Button>
          </BtnWrapper> */}
        </Card>
      </CardWrapper>
    </div>
  );
};

export default EvaluationForm;
