import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  height: 80px;
  display: flex;
  margin-top: 10px;
  align-items: center;
  justify-content: space-between;
  p{
    margin-left: 5px;
    font-weight: bold;
  }
  color: white;
`;

export const MyIcon = styled.img`
  width: 30px;
  height: 30px;
  background-size: contain;
  cursor: pointer;
`;
