import Toolkit from "./components/Toolkit";
import GlobalStyles from "./styles/global";
import increaseImg from "../src/assets/guax.png";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <img src={increaseImg} alt="" />
      <Toolkit />
    </div>
  );
}

export default App;
