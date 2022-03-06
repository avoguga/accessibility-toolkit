import React, { useState, useEffect } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

import increaseImg from "../../assets/texto.png";
import wordSpacing from "../../assets/duas-flechas.png";

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
              image={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAB9klEQVR4nO2cS24CMRBES1mEnDzMebJAuVBCbgGL0BIiw4SPu101rid5w+r5CQwDQwPGGGOMMcYYY4wxZo4NgAnA/rSm02MqSPi/AvgAcLhYnwDeOnrdioT/NUlK2Rkk/P+TpJKdQcL/VkkK2Rkk/O+VZIst4b8BsHtAMtYOfd/NZfynJyR7x342cqxthey+gWiPY+TR42Ju/VQItwpdGbtl5AOArwJnbBsKVxwjrY6L8/We6JsqnhVbyXWW1i/FjGNEwfEmmDfC7PYQjBtidGoC08aYXFJg2CCDQwk9NzpM5KDHhoeLHFRufNjIQUWA4SMHmSEc+YKsS2Dpy+osMp59fiZfgTX2qiIHbLFXGTlgib3qyEHv2ENEDnrFHipyUB17yMhBVeyhIwfZsR35jKzYNJFfeguYOnx0FOA3wwL88a4AX7AU4EvwAnpHHiI2S+RVx2aLvMrYrJFXFds/zhbg2w0K8A00BfiWsAJ8k2MBvm23AIaNMjikwrRBJpemMG6M0ekpmDfE7HYXChtRcFxE6W+/Sq5/aDGvo1I8I7bUvI7Kl2LrY0RqXofyYBSZeR3qo34k5nX0/u5Xyl9inNkCUv4SA/oWkPKXGDm5gJS/xBDVBaT8JcYCLyDlv8HvR7/v09pC65dldX9jjDHGGGOMMcaYMo5GWlFN6GAqrAAAAABJRU5ErkJggg=="}
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
              image={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAACgElEQVR4nO2au2sVQRSHv6j3BsWbWMSAjyo2FiKK2AkBQxptBNHOwkaxEBUF/wP/EbG28QUxkMLGQkGJWAgXUQQJCCqIUYRY7C4s69k9+5hxNjPzwbLcy5wz5/yYnTdEIpFIJBKJ/F/mgI3C44QtjupddFRvb3hGT1qAC47wb/ImBZgF7gEHDfo0ymPsCXAOWEv9LRnyaZQzyMl3FWA/8EDweaqjX6PsAT5jVoAJ4DLwrcTnW2DQKWpDjICXlCffRoA54KnicwO40TH2zgyAJ+iB1mUrcBP4UcPnK+C0iSTasgO4jx5oXQEOAc9r+Fol6RBdzXMAmEEe79sIMABuA+uKjzFwiaSVOOUE8J76yVcJcBx4rdi+Ay7Qg8SHwB3gD82SLxPgvOJrDFwEtlnJpiELwBuaJ14lwCzwVSj7AbgGTNpJpRnz1BuO2n4Ct3JlPgJXSFqaVc4KAWZPUfWuiWsCDIEV4KpQtxUmSMbPskB3F8rbFsAq0jh5FDhcYTNlKRYnSAKcVGymbQTiCkmAY4qN9y3ggGLjlQDSBGKvYuNSgCHJynI6jWME7Ezfu9K39F/2eyq1HZGOKJIAWoIuBfhl2qH0CWxXbLz6BNosF70X4Kdi45UAUh/wnaSTKMPlPGASc50gIAvwCdhXEUSVOLb5DXxJHyNIn8BYsfF+JvhCsfGqD5AEWFZsvBJAQlsOrxXKb+rlcBlVGyLrhbLebYg0xcstsTYskBxImBRgU2yK5gl6WzxPsAcjeYI+GssI+nA0I+jj8QyXFySud4zdGEFfkckI+pJUxiPMC5CRvyb30JBP4wR/URJ6dFXW1Th511G9vaE31+UjkUgkEomEy18IjhrfYWjSrAAAAABJRU5ErkJggg=="
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
