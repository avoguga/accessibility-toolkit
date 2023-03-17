import styled from "styled-components";

export const Container = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 18px;
  word-spacing: 0px;
  z-index: 100000;
  position: absolute;
`;

export const Content = styled.div`
  z-index: 100000;
  width: 300px;
  height: 280px;
  background-color: #fff;
  border-radius: 20px;
  border-style: solid;
  border-width: 5px;
  border-color: #003459;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  right: 1px;
  bottom: 30%;

  div:nth-child(1) {
    height: 50px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;

    width: 300px;
    h3 {
      position: relative;
      color: #fff;
      top: 10px;
      left: 20px;
      font-size: 18px;
    }
    background-color: #003459;
    div {
      position: relative;
      left: 235px;
      bottom: 52px;
      width: 20px;
    }
  }
`;
