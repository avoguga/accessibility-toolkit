import React, { useState, useEffect } from "react";
import GlobalStyles from "../../styles/global";
import increaseImg from "../../assets/aumentar-o-volume.png"; 

import MainButton from "../MainButton";
import IncreaseButton from "../ActionButton";


import { Container, Content } from "./styles";

const Toolkit: React.FC = () => {
  const [move, setMove] = useState(false);
  const animate = () => {
    // Component begins to move
    setMove(true);

    // Compoent stops to move after 2 seconds
    setTimeout(() => setMove(false), 2000);
  };

  function increaseFontSize(element: any) {
    element.style.fontSize = `${120}%`;
  }

  const buttonIncrease = () => {
    const teste = document.body;

    increaseFontSize(teste);
  };

  return (
    <Container>
      <Content>
        <IncreaseButton click={buttonIncrease} image={increaseImg}/>
      </Content>
      <MainButton click={animate} className={move ? `move` : ``} />
    </Container>
  );
};

export default Toolkit;
