import React, { useState } from "react";
import { Container, Animation, Button } from "./styles";

const MainButton: React.FC = () => {
    const [move, setMove] = useState(false);

    const animate = () => {
      // Component begins to move
      setMove(true);
  
      // Compoent stops to move after 2 seconds
      setTimeout(() => setMove(false), 2000);
    };

  return (
    <Container>
        <Animation>
            <Button onClick={animate} className={move ? `move` : ``} />
        </Animation>
    </Container>
  );
};

export default MainButton;
