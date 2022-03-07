# Handtalk Accessibility Toolkit

Toolkit desenvolvido com React e Typescript

## Setup

- [Node.js](https://nodejs.org/pt-br/)
- [Npm](https://nodejs.org/pt-br/)

## Instalação

No diretorio da aplicação use:

### `npm install`

E para iniciar a aplicação:

### `npm start`

## Interface do toolkit:

![Exemplo - Toolkit](https://firebasestorage.googleapis.com/v0/b/handtalk-toolkit.appspot.com/o/Captura%20de%20tela%202022-03-07%20021808.png?alt=media&token=3b2a6cc6-b967-4f4e-bcc8-9e6fccc05db6)

O toolkit apresenta 3 funcionalidades:

1. Aumentar o tamanho da fonte em 20% de todos os textos da página em HTML
2. Aumentar o espaçamento entre palavras
3. Fazer a leitura do conteúdo por voz

Todas as funcionalidades podem ser ativadas e desativadas com um clique sobre o nome ou o icon apresentado.

##### Fazer a leitura do conteúdo por voz

Para realizar a leitura de algum conteúdo por voz, o usuário primeiro deve apertar no botão Leitura por voz, e após isso selecionar o texto a ser lido. Para desativar a funcionalidade basta clicar novamente sobre o botão.

#### Veja o [vídeo](https://firebasestorage.googleapis.com/v0/b/handtalk-toolkit.appspot.com/o/essedaqio.mp4?alt=media&token=3abb770b-5294-40ab-b76c-2612313f1f72) para saber como funciona!

## Uso via CDN

Para usar a aplicação via CDN em alguma aplicação própria basta inserir o script abaixo dentro do body da sua aplicação.

```
<body>
  <h1>Toolkit de acessibilidade</h1>
  <div id="toolkit"></div>
  <script
      defer="defer"
      src="https://firebasestorage.googleapis.com/v0/b/handtalk-toolkit.appspot.com/o/toolkit.js?alt=media&token=b5427c59-9d4c-4648-a402-9246bd8f481c">
  </script>
</body>
```