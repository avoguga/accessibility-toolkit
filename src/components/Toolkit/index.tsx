import React, { useState, useRef, useEffect } from "react";
import GlobalStyles from "../../styles/global";

import MainButton from "../MainButton";

import { Container, Content } from "./styles";

const Toolkit: React.FC = () => {
  const [move, setMove] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    console.log(ref.current); // <div>Hi, I am MyConponent</div>
    console.log(typeof ref.current); // "object"
  }, []);

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
      <GlobalStyles />
      <Content>
      </Content>
      <MainButton click={animate} className={move ? `move` : ``} />
    </Container>
  );
};

export default Toolkit;
