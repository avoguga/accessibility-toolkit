import React, { useState, useEffect } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

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

  // Increase font size in 20%
  const increaseFontSize = (element: HTMLElement) => {
    element.style.fontSize !== `${120}%`
      ? (element.style.fontSize = `${120}%`)
      : (element.style.fontSize = `${100}%`);
  };

    // Increase word spacing in 5px
  const increaseWordSpacing = (element: HTMLElement) => {
    element.style.wordSpacing !== `${5}px`
      ? (element.style.wordSpacing = `${5}px`)
      : (element.style.wordSpacing = ``);
  };

  // Speech
  const selectedText = window.getSelection();
  const [textSelected, setTextSelected] = useState<any>(selectedText);


  useEffect(() => {
  // Getting mouse actions to verify that text has been selected

    document.addEventListener("selectionchange", () => {
      setTimeout(() => {
        setTextSelected(selectedText?.toString());
      }, 1000);
    });
    if (textToBeSpeeched && textSelected) textToSpeech();
  }, [textSelected]);

  const textToSpeech = () => {
    // Get selecioned text
    const selRange = selectedText?.toString();
    speak({ text: selRange });
  };

  // Finish Speech function

  return (
    <Container>
      {isContainerVisible ? (
        <Animation>
          <Content className={move ? `move` : ``}>
            <div>
              <h3>Gugas Accessibility Toolkit</h3>
              <Button
                image={"https://img.icons8.com/ios-filled/50/ffffff/cancel.png"}
                click={() => setIsContainerVisible(false)}
              ></Button>
            </div>
            <Button
              click={() => increaseFontSize(document.body)}
              image={
                "https://img.icons8.com/ios-filled/50/000000/increase-font.png"
              }
              text="Aumentar texto"
            />
            <Button
              click={() => increaseWordSpacing(document.body)}
              image={
                "https://img.icons8.com/external-bartama-glyph-64-bartama-graphic/64/000000/external-arrow-arrows-glyph-bartama-glyph-64-bartama-graphic-15.png"
              }
              text="Espaçamento entre palavras"
            />
            <Button
              click={() => setTextToBeSpeeched(!textToBeSpeeched)}
              image={
                "https://img.icons8.com/glyph-neue/64/000000/room-sound.png"
              }
              text="Leitura por voz"
            />
          </Content>
        </Animation>
      ) : (
        <MainButton click={animateMainButton} className={move ? `move` : ``} />
      )}
    </Container>
  );
};

export default Toolkit;
