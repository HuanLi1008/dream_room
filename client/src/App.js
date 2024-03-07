import "./App.css";
import Ui from "./components/Ui/Ui";
import Scene from "./components/Scene/Scene";
function App() {
  return (
    <section className="game-container">
      <section className="ui">
        <div className="ui-default-image"></div>
        <Ui />
      </section>
      <Scene />
    </section>
  );
}

export default App;
