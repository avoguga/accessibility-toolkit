import styled from "styled-components";
import handtalk from "../../assets/handtalk.png";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Button = styled.button`
  background-image: url(${handtalk});
  width: 50px;
  height: 50px;
  background-size: contain;
  border: none;
  background-color: transparent;
`;

export const Animation = styled.div`
  button.move {
    animation: move 1s;
  }
  @keyframes move {
    0% {
      right: 0px;
    }
    25% {
      right: 200px;
    }
    0% {
      right: 0px;
    }
  }
`;
