import React, { useState, useRef, useEffect } from "react";
import Welc from "../assets_client/welc.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from 'axios';
import {URL} from '../components_connection/'

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

  @media screen and (max-width: 480px) {
    padding: 30px;
  }
`;
const CardWhite = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  height: 200px;
  max-height: 1000px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 480px) {
    padding: 20px;
  }
`;
const Headtext = styled.h1`
  font-size: 2rem;
  color: #f27427;
  font-weight: bold;
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Text1 = styled.p`
  font-size: 1.4rem;
  color: #f27427;
  text-align: justify;
  font-weight: bold;
  margin-top: -20px;
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Text3 = styled.p`
  font-size: 1.4rem;
  color: #f27427;
  text-align: justify;
  font-weight: bold;
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
const Information = styled.div`
  margin-top: 5%;
`;

const Button0 = styled(Link)`
  font-size: 1rem;
  font-weight: bold;
  background: #7db542;
  border: none;
  padding: 0.8rem 1.5rem;
  color: #fff;
  transition: all 0.2s ease-out;
  text-decoration: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  &:hover {
    background: #1abdd3;
    transition: all 0.2s ease-out;
    cursor: pointer;
    color: #fff;
  }
  @media screen and (max-width: 480px) {
    padding: 10px 15px;
  }
`;

const Button2 = styled(Link)`
  font-size: 1rem;
  font-weight: bold;
  background: #f27427;
  border: none;
  padding: 0.8rem 1.5rem;
  color: #fff;
  transition: all 0.2s ease-out;
  text-decoration: none;
  margin-right: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  &:hover {
    background: rgb(239, 69, 57);
    transition: all 0.2s ease-out;
    cursor: pointer;
    color: #fff;
  }
  @media screen and (max-width: 480px) {
    padding: 10px 15px;
  }
`;
const BtnWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

export function CheckTicketStatus(props) {
  const [modalShow, setModalShow] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);



  const [trc, setTrc] = useState(false); // trc
  const [name, setName] = useState(false); // name
  const [status, setStatus] = useState(false); // status
  const [category, setCategory] = useState(false); // category
  const [issue, setIssue] = useState(false); // issue

  const [staff, setStaffName] = useState(false); // staff
  const [email, setEmail] = useState(false); // email
  const [resolution, setResolution] = useState(false); // reso
  const [remarks, setRemarks] = useState(false); // remarks

    useEffect(()=>{
    if(hasLoaded == false) {
      var trc = localStorage.getItem('trc');
      axios.get(URL + "?tag=get_ticketdetails&trc="+trc).then(res=>{
        console.log(res.data);
        setTrc(trc);
        setName(res.data[0]['name']);
        setCategory(res.data[0]['category_name'])
        setIssue(res.data[0]['issue_name'])
        setStaffName(res.data[0]['staff_fname'] + " " + res.data[0]['staff_lname'])
        setEmail(res.data[0]['staff_email'])
        setResolution(res.data[0]['resolution'])
        setRemarks(res.data[0]['remarks'])
        //get status
        switch(res.data[0]['status']) {
          case 1: //in progress
            setStatus("In Progress");
          break;
          case 2: //resolved
            setStatus("Resolved");
          break;
          case 3: //canceled
            setStatus("Canceled");
          break;
        }
        setHasLoaded(true);
      })
    }
  })



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
                <Col className="banner-text-left">CHECK TICKET STATUS</Col>
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
          <Headtext> HERE'S WHAT WE FOUND: </Headtext>
          <Information>
            <Text1>TRC: <span style={{color: "black"}}>{trc}</span></Text1>
            <Text1>Name: <span style={{color: "black"}}>{name}</span></Text1>
            <Text1>Status: <span style={{color: "black"}}>{status}</span></Text1>
            <Text1>Category: <span style={{color: "black"}}>{category}</span></Text1>
            <Text1>Issue: <span style={{color: "black"}}>{issue}</span></Text1>
            <br></br>
            <Text1>Technical Support Staff(TSS): <span style={{color: "black"}}>{staff}</span></Text1>
            <Text1>Email: <span style={{color: "black"}}>{email}</span></Text1>
          </Information>
          <Text3>
            Once the TTS has reviewed your ticket, further instructions will
            appear below:
          </Text3>
          <Text3>
            Resolution/Reason:
          </Text3>
          <CardWhite style={{marginBottom: 20}}>
            {resolution}
          </CardWhite>
           <Text3>
            Remarks:
          </Text3>
          <CardWhite>
            {remarks}
          </CardWhite>
          <BtnWrapper>
            <Button0 to="/evaluationform">RATE RESOLUTION</Button0>
            <Button2 to="/requesttoreopen">REOPEN TICKET</Button2>
            {/* MODAL */}
            {/* <Button2 variant="primary" onClick={() => setModalShow(true)}>
              REOPEN TICKET
            </Button2> */}
            {/* <ReopenModal show={modalShow} onHide={() => setModalShow(false)} /> */}
          </BtnWrapper>
        </Card>
      </CardWrapper>
    </div>
  );
};

export default CheckTicketStatus;
