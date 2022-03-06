import Toolkit from "./components/Toolkit";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <div>
        <h1>HI I'M AN APP TEXT</h1>
        <h1>Eu sou um texto de teste</h1>
        <a href="www.google.com">EUSOUUMLINK</a>
      </div>
      <Toolkit />
    </div>
  );
}

export default App;
