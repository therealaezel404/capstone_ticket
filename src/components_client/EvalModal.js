import React from "react";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
import Confetti from "../assets_client/confetti.gif";
import { Link } from "react-router-dom";
const ModalHeader = styled.div`
  border-bottom: 0 none;
  padding: 0%;
`;
const ModalWrapper = styled.div`
  padding: 5%;
`;
const ModalTitle = styled.p`
  font-size: 2rem;
  color: #f27427;
  font-weight: bold;
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;
const ModalBody = styled.div`
  font-size: 2rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: bold;
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
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
const ModalFooter = styled.div`
  display: flex;
  flex-direction: flex-start;
  justify-content: center;
  margin-top: 5%;
`;

const EvalModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
    >
      {/* <Modal.Dialog> */}
      <ModalWrapper>
        <ModalHeader closeButton>
          <ModalTitle id="contained-modal-title-vcenter">
            WE RECIEVED YOUR FEEDBACK!
          </ModalTitle>
        </ModalHeader>
        <ModalBody>
          <img src={Confetti} alt="confetti" className="confetti" />
          Your feedback will help us improve. Thank you!
        </ModalBody>
        <ModalFooter>
          <Button1 to="/">Close</Button1>
        </ModalFooter>
        {/* </Modal.Dialog> */}
      </ModalWrapper>
    </Modal>
  );
};

export default EvalModal;
