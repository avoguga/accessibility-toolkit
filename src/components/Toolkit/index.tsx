import React, { useState, useEffect } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

import increaseImg from "../../assets/texto.png";
import wordSpacing from "../../assets/duas-flechas.png";
import sound from "../../assets/caixas-de-som.png";
import close from "../../assets/cross.png";

import MainButton from "../MainButton";
import Button from "../ActionButton";
import { Animation } from "../MainButton";

import { Container, Content } from "./styles";

const Toolkit: React.FC = () => {
  const { speak } = useSpeechSynthesis();
  const [move, setMove] = useState(false);
  const [textToBeSpeeched, setTextToBeSpeeched] = useState(false);
  const [isContainerVisible, setIsContainerVisible] = useState(false);

  const animateMainButton = () => {
    // Component begins to move
    setMove(true);
    // Compoent stops to move after 2 seconds
    setTimeout(() => setMove(false), 2000);

    // A wild content appears!
    setTimeout(() => setIsContainerVisible(true), 200);
  };

  const increaseFontSize = (element: HTMLElement) => {
    // Increase font size in 20%
    element.style.fontSize !== `${120}%`
      ? (element.style.fontSize = `${120}%`)
      : (element.style.fontSize = `${100}%`);
  };

  const increaseWordSpacing = (element: HTMLElement) => {
    // Increase font size in 20%
    element.style.wordSpacing !== `${5}px`
      ? (element.style.wordSpacing = `${5}px`)
      : (element.style.wordSpacing = ``);
  };

  // Speech

  const selectedText = window.getSelection();

  const [textSelected, setTextSelected] = useState<any>(selectedText);

  // Getting mouse actions to verify that text has been selected
  document.addEventListener("selectionchange", () => {
    setTimeout(() => {
      setTextSelected(selectedText?.toString());
    }, 1000);
  });

  useEffect(() => {
    if (textToBeSpeeched) {
      if (textSelected) {
        textToSpeech();
      } else console.log("Button inactive");
    }
  }, [textSelected]);

  const textToSpeech = () => {
    // Get selecioned text
    const selRange = selectedText?.toString();
    speak({ text: selRange });
  };

  return (
    <Container>
      {isContainerVisible ? (
        <Animation>
          <Content className={move ? `move` : ``}>
            <Button
              image={close}
              click={() => setIsContainerVisible(false)}
              text="Handtalk toolkit"
            ></Button>

            <Button
              click={() => increaseFontSize(document.body)}
              image={increaseImg}
              text="Aumentar texto"
            />
            <Button
              click={() => increaseWordSpacing(document.body)}
              image={wordSpacing}
              text="Espaçamento entre palavras"
            />
            <Button
              click={() => setTextToBeSpeeched(!textToBeSpeeched)}
              image={sound}
              text="Leitura por voz"
            />
          </Content>
        </Animation>
      ) : <MainButton click={animateMainButton} className={move ? `move` : ``} />}
    </Container>
  );
};

export default Toolkit;
