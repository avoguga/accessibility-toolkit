import React from "react";
import { Container } from "./styles";

interface Props {
  click(): void;
}

const ActionButton: React.FC<Props> = ({ click }) => {
  
  return (
      <Container onClick={click} />
  );
};

export default ActionButton;
