import React, { useState, useEffect } from "react";
import GlobalStyles from "../../styles/global";
import increaseImg from "../../assets/aumentar-o-volume.png";
import highlightLinkImg from "../../assets/aumentar-o-volume.png";

import MainButton from "../MainButton";
import IncreaseButton from "../ActionButton";
import HighlightButton from "../ActionButton";
import AnotherButton from "../ActionButton";

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
    // Increase font size in 20%
    element.style.fontSize !== `${120}%`
      ? (element.style.fontSize = `${120}%`)
      : (element.style.fontSize = `${100}%`);
  }

  function highlightLinks(element: any) {
    // Highlight links
    console.log(document.querySelector('a')?.style.backgroundColor)
    element.style.backgroundColor !== "#fdf2a3"
      ? (element.style.backgroundColor = "#fdf2a3")
      : (element.style.backgroundColor = "#fdf2a3");
  }

  return (
    <Container>
      <Content>
        <IncreaseButton
          click={() => increaseFontSize(document.body)}
          image={increaseImg}
          text="Aumentar texto"
        />
        <HighlightButton
          click={() => highlightLinks(document.querySelector("a"))}
          image={highlightLinkImg}
          text="Highlight Links"
        />
        <AnotherButton
          click={() => increaseFontSize(document.body)}
          text="Fazer outra coisa"
        />
      </Content>
      <MainButton click={animate} className={move ? `move` : ``} />
    </Container>
  );
};

export default Toolkit;
