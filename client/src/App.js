import "./App.scss";
import Ui from "./components/Ui/Ui";
import Scene from "./components/Scene/Scene";
import { useState } from "react";

function App() {
  const [userChoice, setUserChoice] = useState([{
    "name": "window_blue",
    "image": "http://localhost:8080/images/window/window_blue.png",
    "id": 7,
    "category": "window"
  },]);

  return (
    <section className="game-container">
      <Scene userChoice={userChoice} />
      <section className="ui">
        <Ui userChoice={userChoice} setUserChoice={setUserChoice} />
        
      </section>
    </section>
  );
}

export default App;
