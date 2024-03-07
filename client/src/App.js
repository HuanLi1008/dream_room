import "./App.scss";
import Ui from "./components/Ui/Ui";
import Scene from "./components/Scene/Scene";
import { useState } from "react";

function App() {
  const [userChoice, setUserChoice] = useState([]);

  return (
    <section className="game-container">
      <Scene userChoice={userChoice} />
      <section className="ui">
        <Ui userChoice={userChoice} setUserChoice={setUserChoice} />
        <div className="ui-default-image"></div>
        <div className="ui-default-image__empty"></div>
      </section>
    </section>
  );
}

export default App;
