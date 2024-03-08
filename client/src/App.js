import "./App.scss";
import Ui from "./components/Ui/Ui";
import Scene from "./components/Scene/Scene";
import { useState } from "react";

function App() {
  const [userChoice, setUserChoice] = useState([]);

  return (
    // <>
    //    <Ui userChoice={userChoice} setUserChoice={setUserChoice} />
    //    <Scene userChoice={userChoice} />
    // </>
    //
    <section className="game-container" onClick={() => console.log("Hello")}>
      
      <section className="ui">
        <Ui userChoice={userChoice} setUserChoice={setUserChoice} />
        
      </section>
      <Scene userChoice={userChoice} />
    </section>
  );
}

export default App;
