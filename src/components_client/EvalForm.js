import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import { Formik } from "formik";
import * as yup from "yup";
import EvalModal from "./EvalModal";

const schema = yup.object().shape({
  ticketReferenceCode: yup
    .number()
    .required("Please enter a valid Ticket Reference Code."),
  college: yup
    .string()
    .required("Please provide the complete name of your affiliated college."),
  technicalSupport: yup.string().required("Select technical support"),
  q1: yup.string().required("Please rate your experience"),
  q2: yup.string().required("Please rate your satisfaction"),
  q3: yup.string().required("Please rate your satisfaction"),
  feedback: yup.string(),
});

const Button1 = styled.button`
  font-size: 1rem;
  font-weight: bold;
  background: #1abdd3;
  border: none;
  padding: 0.8rem 3rem;
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
  flex-direction: flex-start;
  justify-content: center;
`;

const EvalForm = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [validationRequired] = useState(false);
  return (
    <Formik
      validationSchema={schema}
      validateOnChange={validationRequired}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm({ values: "" });
      }}
      initialValues={{
        ticketReferenceCode: "",
        college: "",
        technicalSupport: "",
        q1: "",
        q2: "",
        q3: "",
        feedback: "",
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
          <Form.Group className="mb-3" controlid="EvalTRC">
            <Form.Label className="evaltext">Ticket Reference Code</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your Ticket Reference Code"
              name="ticketReferenceCode"
              value={values.ticketReferenceCode}
              onChange={handleChange}
              isInvalid={!!errors.ticketReferenceCode}
            />
            <Form.Control.Feedback type="invalid">
              {errors.ticketReferenceCode}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlid="EvalCollege">
            <Form.Label className="evaltext">College Affiliation</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your College"
              name="college"
              value={values.college}
              onChange={handleChange}
              isInvalid={!!errors.college}
            />
            <Form.Control.Feedback type="invalid">
              {errors.college}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Label className="evaltext">Technical Support</Form.Label>

          <Form.Select
            className="mb-3"
            name="technicalSupport"
            value={values.technicalSupport}
            onChange={handleChange}
            isInvalid={!!errors.technicalSupport}
          >
            <option value="">Select from drop-down list</option>
            <option value="1">Name</option>
            <option value="2">Name</option>
            <option value="3">Name</option>
          </Form.Select>

          <Form.Label className="evaltext">
            How helpful do you think our support in providing information and
            solution to your needs?
          </Form.Label>
          <Form.Select
            className="mb-3"
            name="q1"
            value={values.q1}
            onChange={handleChange}
            isInvalid={!!errors.q1}
          >
            <option value="">Rate your experience</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Average</option>
            <option value="4">4 - Good</option>
            <option value="5">5 - Excellent</option>
          </Form.Select>

          <Form.Label className="evaltext">
            How satisfied were you with our support?
          </Form.Label>
          <Form.Select
            className="mb-3"
            name="q2"
            value={values.q2}
            onChange={handleChange}
            isInvalid={!!errors.q2}
          >
            <option value="">Rate your satisfaction</option>
            <option value="1">1 - Very Unsatisfied</option>
            <option value="2">2 - Unsatisfied</option>
            <option value="3">3 - Neutral</option>
            <option value="4">4 - Satisfied</option>
            <option value="5">5 - Very Satisfied</option>
          </Form.Select>

          <Form.Label className="evaltext">
            How satisfied are you with the resolution of your case?
          </Form.Label>
          <Form.Select
            className="mb-3"
            name="q3"
            value={values.q3}
            onChange={handleChange}
            isInvalid={!!errors.q3}
          >
            <option value="">Rate your satisfaction</option>
            <option value="1">1 - Very Unsatisfied</option>
            <option value="2">2 - Unsatisfied</option>
            <option value="3">3 - Neutral</option>
            <option value="4">4 - Satisfied</option>
            <option value="5">5 - Very Satisfied</option>
          </Form.Select>

          <Form.Group>
            <Form.Label className="evaltext">
              Feedback and Recommendations
            </Form.Label>

            <Form.Control
              as="textarea"
              rows={8}
              type="text"
              className="mb-3"
              controlid="EvalSuggestions"
              name="feedback"
              value={values.feedback}
              onChange={handleChange}
            />
          </Form.Group>
          {/* <Button className="eval-btn" type="submit">
        Submit
      </Button> */}
          <BtnWrapper>
            <Button1
              type="submit"
              value="send"
              onClick={() => setModalShow(true)}
            >
              Submit
            </Button1>
            <EvalModal show={modalShow} onHide={() => setModalShow(false)} />
          </BtnWrapper>
        </Form>
      )}
    </Formik>
  );
};

export default EvalForm;
