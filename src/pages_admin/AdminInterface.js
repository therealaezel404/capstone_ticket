import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router";
import SideMenu from "./SideMenu.js";
import styled from "styled-components";
import { Link,useNavigate } from "react-router-dom";
const Container = styled.div`
  /* @media screen and (min-width: 1920px) {
    margin-left: -6%;
  } */
  /* @media screen and (min-width: 1820px) {
    margin-left: 1%;
  }
  @media screen and (min-width: 1700px) {
    margin-left: 6%;
  } */
`;

export function AdminInterface(props) {
  let navigate = useNavigate(); 
  const _goLogout = () =>{ 
    let path = '/login-admin';
    localStorage.clear();
    navigate(path);
  }
  useEffect(() => {
    if("staff_id" in localStorage) {
      
    } else {
      _goLogout();
    }
  })
  return (
    <div>
      <SideMenu />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default AdminInterface;
