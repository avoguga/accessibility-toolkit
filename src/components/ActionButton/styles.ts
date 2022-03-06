import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  p{
    margin-left: 5px;
    font-size: 20px;
  }
`;

export const MyIcon = styled.img`
  width: 30px;
  height: 30px;
  background-size: contain;

  margin-left: 30px;
`;
