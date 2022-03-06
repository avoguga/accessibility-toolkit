import React from "react";
import { Container, MyIcon } from "./styles";

interface IProps {
  click?(): void;
  onMouseOver?(): void;
  image?: string;
  text?: string;
}

const ActionButton: React.FC<IProps> = ({ click, image, text, onMouseOver }) => {
  return (
    <Container >
      <p>{text}</p>
      <MyIcon src={image} onClick={click} onMouseOver={onMouseOver}/>
    </Container>
  );
};

export default ActionButton;
