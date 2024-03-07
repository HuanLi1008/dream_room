import "./App.scss";
import Ui from "./components/Ui/Ui";
import Scene from "./components/Scene/Scene";

function App() {
  return (
    <section className="game-container">
      <section className="ui">
        <Ui />
        <div className="ui-default-image"></div>
      </section>
      <Scene />
    </section>
  );
}

export default App;
