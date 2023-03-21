# Accessibility Toolkit

Toolkit desenvolvido com React e Typescript

## Setup

- [Node.js](https://nodejs.org/pt-br/)
- [Npm](https://nodejs.org/pt-br/)

## Instalação

No diretorio da aplicação use:

#### `npm install`

E para iniciar a aplicação:

#### `npm start`

## Interface do toolkit:

![Exemplo - Toolkit](https://firebasestorage.googleapis.com/v0/b/handtalk-toolkit.appspot.com/o/Captura%20de%20tela%202023-03-21%20172541.png?alt=media&token=b3085d3b-c991-4d22-9814-2ede03a6da8a)

O toolkit apresenta 3 funcionalidades:

1. Aumentar o tamanho da fonte em 20% de todos os textos da página em HTML
2. Aumentar o espaçamento entre palavras
3. Fazer a leitura do conteúdo por voz

Todas as funcionalidades podem ser ativadas e desativadas com um clique sobre o nome ou o icon apresentado.

### Fazer a leitura do conteúdo por voz :loud_sound:

Para realizar a leitura de algum conteúdo por voz, o usuário primeiro deve apertar no botão Leitura por voz, e após isso selecionar o texto a ser lido. Para desativar a funcionalidade basta clicar novamente sobre o botão.

#### Veja o [vídeo](https://firebasestorage.googleapis.com/v0/b/handtalk-toolkit.appspot.com/o/essedaqio.mp4?alt=media&token=3abb770b-5294-40ab-b76c-2612313f1f72) para saber como funciona!

## Uso via CDN

Para usar a aplicação via CDN em alguma aplicação própria basta inserir o script abaixo dentro do index.html da sua aplicação.

```
 <script
      defer="defer"
      src="https://firebasestorage.googleapis.com/v0/b/handtalk-toolkit.appspot.com/o/toolkit.js?alt=media&token=5e4978c7-d648-4e5c-87fe-97133a5295bc">
 </script>
```
E após isso você deve invocar o script da forma descrita abaixo dentro do body da sua aplicação:

`<div id="toolkit"></div>`
