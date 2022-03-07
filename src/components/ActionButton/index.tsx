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
    <Container onClick={click}>
      <p>{text}</p>
      <MyIcon src={image} />
    </Container>
  );
};

export default ActionButton;
