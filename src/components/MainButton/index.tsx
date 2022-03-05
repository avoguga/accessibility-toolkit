import React from "react";
import styled from "styled-components";
import { Container } from "./styles";

interface Props {
  click(): void;
  className: string;
}

const MainButton: React.FC<Props> = ({ click, className }) => {
  
  return (
    <Animation>
      <Container onClick={click} className={className} />
    </Animation>
  );
};

export const Animation = styled.div`
  div.move {
    animation: move 1s;
  }
  @keyframes move {
    0% {
      right: 0px;
      opacity: 0;
    }
    25% {
      right: 200px;
      opacity: 1;
    }
    0% {
      right: 0px;
      opacity: 0;
    }
  }
`;

export default MainButton;
