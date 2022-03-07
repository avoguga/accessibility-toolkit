import styled from "styled-components";

export const Container = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 18px;
  word-spacing: 0px;
  z-index: 100000;
`;

export const Content = styled.div`
  z-index: 100000;
  width: 280px;
  height: 280px;
  background-color: #fff;
  border-radius: 20px;
  border-style: solid;
  border-width: 5px;
  border-color: #f36e20;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  right: 1px;
  bottom: 30%;

  div:nth-child(1) {
    height: 50px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;

    width: 280px;
    h3 {
      position: relative;
      color: #fff;
      top: 10px;
      left: 20px;
    }
    background-color: #f36e20;
    div {
      position: relative;
      left: 205px;
      bottom: 52px;
      width: 20px;
    }
  }
`;
