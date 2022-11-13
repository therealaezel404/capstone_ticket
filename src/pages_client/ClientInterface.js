import React from "react";
import Header from "../components_client/Header.js";
import Footer from "../components_client/Footer.js";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
const CardBox = styled.div`
  background: #fff;
  margin-left: 19%;
  width: 62%;
  max-height: 100%;
  padding: 0px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 1400px) {
    margin: auto;
    width: 100%;
  }
  @media screen and (max-width: 820px) {
    margin: auto;
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    margin-right: auto;
    width: 100%;
  }
  /* @media screen and (min-width: 600px) {
    margin: auto;
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    margin: auto;
    width: 100%;
  }
  @media screen and (min-width: 480px) {
    margin-right: auto;
    width: 100%;
  } */
`;
const Outer = styled.div`
  background: rgb(237, 237, 237);
`;
const ClientInterface = () => {
  return (
    <Outer>
      <CardBox className="cardBox">
        <Header />
        <Outlet />
        <Footer />
      </CardBox>
    </Outer>
  );
};

export default ClientInterface;
