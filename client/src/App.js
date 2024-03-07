import "./App.scss";
import Ui from "./components/Ui/Ui";
import Scene from "./components/Scene/Scene";

function App() {
  return (
    <section className="game-container">
       <Scene />
      <section className="ui">
        <Ui />
        
        <div className="ui-default-image"></div>
       
      </section>
      
    </section>
  );
}

export default App;
