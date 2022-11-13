import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Welc from "../assets_client/welc.jpg";
import styled from "styled-components";
import { Formik } from "formik";
import * as yup from "yup";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  padding: 15%;
  padding-top: 7%;
  @media screen and (max-width: 480px) {
    padding: 10%;
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
const Button1 = styled(Link)`
  font-size: 1rem;
  font-weight: bold;
  background: red;
  border: none;
  padding: 0.8rem 1.5rem;
  color: #fff;
  transition: all 0.2s ease-out;
  text-decoration: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  &:hover {
    background: #f27427;
    transition: all 0.2s ease-out;
    cursor: pointer;
    color: #fff;
  }
`;
const Button0 = styled(Link)`
  font-size: 1rem;
  font-weight: bold;
  background: #1abdd3;
  border: none;
  margin-left: 0.5rem;
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
  margin-top: 2rem;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;
const schema = yup.object().shape({
  description: yup.string().required("Please describe the situation."),
  uploadFile: yup.mixed().required("Please provide a screenshots."),
});
const RequestReopen = () => {
  const [validationRequired] = useState(false);
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
                <Col className="banner-text-left">REQUEST TO REOPEN TICKET</Col>
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
        <Header>To request to reopen a ticket fill out the form below:</Header>
        <Formik
          validationSchema={schema}
          validateOnChange={validationRequired}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm({ values: "" });
          }}
          initialValues={{
            email: "",
            trc: "",
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label className="evaltext">Description</Form.Label>

                <Form.Control
                  as="textarea"
                  rows={8}
                  type="text"
                  className="mb-3"
                  controlid="description"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  isInvalid={!!errors.description}
                  placeholder="Kindly describe the situation. This would help us resolve the issue faster. You can add a link in here as well."
                />
                <Form.Control.Feedback type="invalid">
                  {errors.description}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlid="formFileMultiple" className="mb-3">
                <Form.Label className="evaltext">Upload File</Form.Label>
                <p style={{ color: "#f27427", fontStyle: "italic" }}>
                  Screenshots or PDF only
                </p>
                <Form.Control
                  type="file"
                  multiple
                  required
                  size="lg"
                  name="uploadFile"
                  onChange={handleChange}
                  isInvalid={!!errors.uploadFile}
                  onClick={(e) => (e.target.value = null)}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.uploadFile}
                </Form.Control.Feedback>
              </Form.Group>
              <BtnWrapper>
                <Button0 type="submit" value="send" to="/requestsubmitted">
                  SUBMIT REQUEST
                </Button0>
                <Button1 to="/">CANCEL</Button1>
              </BtnWrapper>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </div>
  );
};

export default RequestReopen;
