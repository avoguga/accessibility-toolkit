import React, { useState, useRef, useCallback, useEffect } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

import increaseImg from "../../assets/aumentar-o-volume.png";
import highlightLinkImg from "../../assets/aumentar-o-volume.png";
import sound from "../../assets/caixas-de-som.png";


import MainButton from "../MainButton";
import Button from "../ActionButton";

import { Container, Content } from "./styles";

const Toolkit: React.FC = () => {
  const [move, setMove] = useState(false);
  const animate = () => {
    // Component begins to move
    setMove(true);
    // Compoent stops to move after 2 seconds
    setTimeout(() => setMove(false), 2000);
  };

  const increaseFontSize = (element: HTMLElement) => {
    // Increase font size in 20%
    element.style.fontSize !== `${120}%`
      ? (element.style.fontSize = `${120}%`)
      : (element.style.fontSize = `${100}%`);
  };

  const increaseLetterSpacing = (element: HTMLElement) => {
    // Increase font size in 20%
    element.style.letterSpacing !== `${2}px`
      ? (element.style.letterSpacing = `${2}px`)
      : (element.style.letterSpacing = ``);
  };

  // Get previus value of background color

  const highlightLinks = (element: any) => {
    // Highlight links    

    const highlight = () => {
      element.style.backgroundColor !== "#fdf2a3"
        ? (element.style.backgroundColor = "#fdf2a3")
        : (element.style.backgroundColor = "");
    };
    

  };

  const { speak } = useSpeechSynthesis();
  

  return (
    <Container>
      <Content>
        <Button
          click={() => increaseFontSize(document.body)}
          image={increaseImg}
          text="Aumentar texto"
        />
        <Button
          click={() => highlightLinks(document.querySelector("a"))}
          image={highlightLinkImg}
          text="Highlight Links"
        />
        <Button
          click={() => increaseLetterSpacing(document.body)}
          text="Letter spacing"
        />

        <Button 
          click={() => speak({ text: 'Hello React Js' })}
          image={sound}
          text="Leaasdasdtra"
        />
      </Content>
      <MainButton click={animate} className={move ? `move` : ``} />
    </Container>
  );
};

export default Toolkit;
