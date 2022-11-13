import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import DeleteFeedbackPopup from "../components_admin/DeleteFeedbackPopup";

const ViewFeedback = () => {
  return (
    <div className="bodybox">
      <Container>
        <Row>
          <div className="page-title">
            <h1>View Feedback</h1>
            <hr></hr>
          </div>
        </Row>
        <Row>
          <Link to="../pages_admin/feedback" className="back-button-text">
            <h5 className="back-button">
              <i className="bi bi-arrow-left-circle"></i> Back{" "}
            </h5>
          </Link>
        </Row>
        <Row>
          <div className="page-content">
            <div className="information-card">
              <div className="information-card-subheading">
                Ticket Reference Code:
              </div>
              <div className="feedback-info">
                <h3>
                  <b>123456789</b>
                </h3>
              </div>
              <div className="information-card-subheading">
                Technical Support
              </div>
              <div className="feedback-info">
                <h3>
                  <b>Pedro Penduko</b>
                </h3>
              </div>
              <div className="information-card-subheading">
                How helpful do you think our support was in providing a solution
                to your needs?
              </div>
              <div className="feedback-info">4</div>
              <div className="information-card-subheading">
                How satisfied were you with our support?
              </div>
              <div className="feedback-info">5</div>
              <div className="information-card-subheading">
                How satisfied are you with the resolution of your case?
              </div>
              <div className="feedback-info">3</div>
              <div className="information-card-subheading">
                Feedback and recommendations:
              </div>
              <div className="feedback-comments">
                Thank you so much!<br></br>
                <br></br>
              </div>
              <p className="info-card-footnote">
                Date submitted: 2022-05-11 22:34:25
              </p>
            </div>
          </div>
          <div className="feedback-delete">
            <DeleteFeedbackPopup />
          </div>
        </Row>
      </Container>
      <Outlet />
    </div>
  );
};

export default ViewFeedback;
