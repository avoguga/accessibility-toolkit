import React from "react";
import { Container, MyIcon } from "./styles";

interface Props {
  click?(): void;
  onMouseOver?(): void;
  image?: string;
  text?: string;
}

const ActionButton: React.FC<Props> = ({ click, image, text, onMouseOver }) => {
  return (
    <Container >
      <p>{text}</p>
      <MyIcon src={image} onClick={click} onMouseOver={onMouseOver}/>
    </Container>
  );
};

export default ActionButton;
