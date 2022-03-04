import React, { useState } from "react";
import { Container } from "./styles";

const MainContainer: React.FC = () => {
  const [move, setMove] = useState(false);

  const animate = () => {
    // Component begins to move
    setMove(true);

    // Compoent stops to move after 2 seconds
    setTimeout(() => setMove(false), 2000);
  };

  return (
    <Container>
      Hello Mommy!
    </Container>
  );
};

export default MainContainer;
