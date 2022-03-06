import React, { useState, useEffect } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

import increaseImg from "../../assets/aumentar-o-volume.png";
import highlightLinkImg from "../../assets/aumentar-o-volume.png";
import sound from "../../assets/caixas-de-som.png";

import MainButton from "../MainButton";
import Button from "../ActionButton";

import { Container, Content } from "./styles";

const Toolkit: React.FC = () => {
  const { speak } = useSpeechSynthesis();
  const [move, setMove] = useState(false);
  const [textToBeSpeeched, setTextToBeSpeeched] = useState<any>(false);

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

  // Speech

  const selectedText = window.getSelection();
  useEffect(() => {
    if (textToBeSpeeched) {
      if (selectedText) {
        document.addEventListener(
          "mousedown" && "selectionchange" && "mouseup",
          () => {
            setTimeout(() => {
              textToSpeech();
              console.log(selectedText?.toString());
            }, 1000);
          }
        );
      } else console.log("Error");
    }
  }, [selectedText, textToBeSpeeched]);

  const textToSpeech = () => {
    // Get selecioned text
    const selRange = selectedText?.toString();
    speak({ text: selRange });
  };

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
          text="Espaçamento"
        />

        <Button
          click={() => setTextToBeSpeeched(!textToBeSpeeched)}
          image={sound}
          text="Leitura por voz"
        />
      </Content>
      <MainButton click={animate} className={move ? `move` : ``} />
    </Container>
  );
};

export default Toolkit;
