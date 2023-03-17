export type OnTextCollectorClickCallback = (
    /** Texto extraido do elemento clicado */
    text: string,
    /** Array com o elemento e sua hierarquia (subindo em direção ao body)  */
    elemHierarchy: HTMLElement[],
    /** Evento do click */
    event: MouseEvent | TouchEvent,
    /** Objeto da posição do mouse ao clicar no elemento */
    mousePosition: { x: number; y: number }
  ) => void;
  
  let onClickCallback: OnTextCollectorClickCallback;
  
  const getChildrenElem = (elem: HTMLElement, arr: HTMLElement[] = []) => {
    arr.push(elem);
  
    for (let i = 0; i < elem.children.length; ++i) {
      getChildrenElem(elem.children[i] as HTMLElement, arr);
    }
  
    return arr;
  };
  
  export const getElemPath = (elem: HTMLElement) => {
    // Criamos um array por padrão
    const result: HTMLElement[] = [];
    const childrenElements = getChildrenElem(elem);
    for (let i = 0; i < childrenElements.length; ++i) {
      result.push(childrenElements[i]);
    }
    // Varre os o parent de cada elemento e adiciona em um array
    for (let p = elem && elem.parentElement; p; p = p.parentElement) {
      result.push(p);
    }
    return result;
  };
  
  export const getImageAltText = (elem: HTMLElement) => {
    // Pegamos data-ht-alt ou alt ou nada "" (priorizando o data-ht-alt)
    const text: string =
      elem.getAttribute("data-ht-alt") || elem.getAttribute("alt") || "";
    return text;
  };
  
  export const normalize = (text: string) => {
    if (!text) {
      return "";
    }
  
    const normalized: string = text
      .replace(/ +/g, " ")
      .replace(/[\t]+/gm, "")
      .replace(/[ ]+$/gm, "")
      .replace(/^[ ]+/gm, "")
      .replace(/\n+/g, "\n")
      .replace(/\n+$/, "")
      .replace(/^\n+/, "")
      .trim();
  
    return normalized;
  };
  
  export const getPlainText = (target: HTMLElement | EventTarget) => {
    // HTMLElement e EventTarget possuem as mesmas propriedades, mas por alguma razão
    // typescript não as reconhece, fazemos esse cast para resolver esse problema
    const element: HTMLElement = target as HTMLElement;
  
    return normalize(element.innerText || element.textContent || "");
  };
  
  const extractEventData = (
    event: MouseEvent | TouchEvent,
    iframeWindow: HTMLIFrameElement | null
  ) => {
    // Elemento que foi clicado casteado para HTMLElement
    const element: HTMLElement = event.target as HTMLElement;
  
    if (element) {
      const path: HTMLElement[] = getElemPath(element);
      const isImage: boolean = element.tagName.toLowerCase() === "img";
  
      // Pegamos o texto da imagem ou do elemento
      const text: string = isImage
        ? getImageAltText(element)
        : getPlainText(element);
  
      const isUserUsingFirefox = /Firefox/.test(navigator.userAgent);
  
      /** offSetTop usado para ser adicionado em eventos ou de clique ou touch */
      const offSetLeftFirefox = () => {
        return iframeWindow && isUserUsingFirefox
          ? iframeWindow?.getBoundingClientRect().left
          : 0;
      };
      /** offSetTop usado para ser adicionado em eventos ou de clique ou touch */
      const offSetTopFirefox = () => {
        return iframeWindow && isUserUsingFirefox
          ? iframeWindow?.getBoundingClientRect().top
          : 0;
      };
  
      /** offSetTop usado para ser adicionado em eventos ou de clique ou touch */
      const offSetLeft = () => {
        return iframeWindow ? iframeWindow?.getBoundingClientRect().left : 0;
      };
      /** offSetTop usado para ser adicionado em eventos ou de clique ou touch */
      const offSetTop = () => {
        return iframeWindow ? iframeWindow?.getBoundingClientRect().top : 0;
      };
  
      const mouseEvent = event as MouseEvent;
      const touchEvent = event as TouchEvent;
  
      /** Posição de click do mouse */
      const mousePosition =
        event instanceof MouseEvent
          ? {
              x: mouseEvent.clientX + offSetLeftFirefox(),
              y: mouseEvent.clientY + offSetTopFirefox(),
            }
          : {
              x:
                touchEvent.changedTouches && touchEvent.changedTouches.length
                  ? touchEvent.changedTouches[0].clientX + offSetLeft()
                  : mouseEvent.clientX + offSetLeft(),
              y:
                event.changedTouches && event.changedTouches.length
                  ? event.changedTouches[0].clientY + offSetTop()
                  : mouseEvent.clientY + offSetTop(),
            };
  
      return { text, path, mousePosition };
    }
  };
  
  const handleMouseClick = (event: MouseEvent | TouchEvent) => {
    const data = extractEventData(event, null);
    if (data && onClickCallback) {
      onClickCallback(data.text, data.path, event, data.mousePosition);
    }
  };
  
  export const addClickListenerToWindow = (targetWindow: Window) => {
    targetWindow.addEventListener("click", handleMouseClick);
    targetWindow.addEventListener("touchstart", handleMouseClick);
  }