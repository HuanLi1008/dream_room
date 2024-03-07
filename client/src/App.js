import "./App.css";

function App() {
  return (
    <section className="game-container">
      <section className="ui">
        <div className="ui-default-image"></div>
        <section className="ui-menu">
          <ul className="ui-menu__categories">
            <li className="ui-menu__categories-wall"></li>
            <li className="ui-menu__categories-floor"></li>
            <li className="ui-menu__categories-window"></li>
            <li className="ui-menu__categories-bed"></li>
            <li className="ui-menu__categories-rug"></li>
            <li className="ui-menu__categories-more"></li>
          </ul>
          <section className="ui-menu__options">
            <div className="ui-menu__options-start"></div>
            <div className="ui-menu__options-end"></div>
            <div className="ui-menu__options-reset"></div>
            <div className="ui-menu__options-download"></div>
          </section>
        </section>
        <section className="scene">
          <img className="scene__bed" src="" alt=""></img>
          <img className="scene__wall" src="" alt=""></img>
          <img className="scene__floor" src="" alt=""></img>
          <img className="scene__rug" src="" alt=""></img>
          <img className="scene__window" src="" alt=""></img>
          <img className="scene__more" src="" alt=""></img>
        </section>
      </section>
    </section>
  );
}

export default App;
