import React from "react";
import { Container, MyIcon } from "./styles";

interface Props {
  click(): void;
  image?: string;
}

const ActionButton: React.FC<Props> = ({ click, image }) => {
  return (
    <Container onClick={click}>
      <MyIcon src={image}/>
    </Container>
  );
};

export default ActionButton;
