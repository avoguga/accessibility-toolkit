import React from "react";
import styled from "styled-components";
import { Container } from "./styles";

interface IProps {
  click(): void;
  className: string;
}

const MainButton: React.FC<IProps> = ({ click, className }) => {
  
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
      opacity: 0;
    }
  }
`;

export default MainButton;
