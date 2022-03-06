import React, { useState, useRef, useCallback, useEffect } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

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

  const increaseFontSize = (element: any) => {
    // Increase font size in 20%
    element.style.fontSize !== `${120}%`
      ? (element.style.fontSize = `${120}%`)
      : (element.style.fontSize = `${100}%`);
  };

  const increaseLetterSpacing = (element: any) => {
    // Increase font size in 20%
    element.style.letterSpacing !== `${2}px`
      ? (element.style.letterSpacing = `${2}px`)
      : (element.style.letterSpacing = ``);
  };

  // Get previus value of background color
  const [highlightButton, setHighlightButton] = useState<any>();

  const highlightLinks = (element: any) => {
    // Highlight links    
    setHighlightButton(document.querySelector('a'))

    const highlight = () => {
      element.style.backgroundColor !== "#fdf2a3"
        ? (element.style.backgroundColor = "#fdf2a3")
        : (element.style.backgroundColor = "");
    };
    

  };

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
          click={() => increaseLetterSpacing(document.body)}
          text="Letra"
        />
      </Content>
      <MainButton click={animate} className={move ? `move` : ``} />
    </Container>
  );
};

export default Toolkit;
