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
    <Container onClick={click} onMouseOver={onMouseOver}>
      <p>{text}</p>
      <MyIcon src={image}/>
    </Container>
  );
};

export default ActionButton;
